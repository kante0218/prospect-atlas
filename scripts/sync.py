#!/usr/bin/env python3
"""
gBizINFO から都内の重飲食関連法人を取得し、国土地理院でジオコーディング。
出力: data/companies.json
"""
import json
import os
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_PATH = ROOT / "data" / "companies.json"
ENV_PATH = ROOT / ".env"

# load .env
if ENV_PATH.exists():
    for line in ENV_PATH.read_text().splitlines():
        if "=" in line and not line.strip().startswith("#"):
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())

API_KEY = os.environ.get("GBIZ_API_KEY")
if not API_KEY:
    sys.exit("GBIZ_API_KEY が見つかりません。.env を作成してください。")

# 重飲食を確実に拾うキーワード群（油・煙・グリースが出る業態）
KEYWORDS = [
    "居酒屋", "焼肉", "ホルモン",
    "中華料理", "中華食堂", "中華そば",
    "ラーメン", "らーめん",
    "韓国料理", "韓国家庭料理",
    "餃子", "焼鳥", "焼き鳥",
    "とんかつ", "串揚げ", "串焼",
    "鉄板焼", "炉端", "炭火焼",
    "ビヤホール", "大衆酒場", "酒場",
    "天ぷら", "天麩羅",
]

GBIZ_URL = "https://info.gbiz.go.jp/hojin/v1/hojin"
GSI_URL = "https://msearch.gsi.go.jp/address-search/AddressSearch"

PREF_TOKYO = "13"
PER_PAGE = 23  # API実測
PAGE_LIMIT = 9  # 9ページで打ち止め(API側制約)


def fetch_gbiz(keyword: str, page: int) -> list[dict]:
    qs = urllib.parse.urlencode({"name": keyword, "prefecture": PREF_TOKYO, "page": page})
    req = urllib.request.Request(
        f"{GBIZ_URL}?{qs}",
        headers={"X-hojinInfo-api-token": API_KEY, "Accept": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            data = json.loads(r.read())
            return data.get("hojin-infos") or []
    except Exception as e:
        print(f"  ! gBiz error {keyword} page={page}: {e}", file=sys.stderr)
        return []


def geocode(address: str) -> tuple[float, float] | None:
    qs = urllib.parse.urlencode({"q": address})
    try:
        with urllib.request.urlopen(f"{GSI_URL}?{qs}", timeout=15) as r:
            arr = json.loads(r.read())
            if not arr:
                return None
            coords = arr[0]["geometry"]["coordinates"]
            return coords[1], coords[0]  # lat, lng
    except Exception as e:
        print(f"  ! geocode error '{address}': {e}", file=sys.stderr)
        return None


def normalize_address(raw: str) -> str:
    """国土地理院は全角丁目番号を扱えるが、ハイフン形式の方が成功率高い"""
    return raw.translate(str.maketrans("０１２３４５６７８９", "0123456789"))


def main() -> None:
    print(f"[1/3] gBizINFOから重飲食法人を取得中… (キーワード {len(KEYWORDS)} 種)")
    seen: dict[str, dict] = {}
    for kw in KEYWORDS:
        page_count = 0
        added = 0
        for page in range(1, PAGE_LIMIT + 1):
            infos = fetch_gbiz(kw, page)
            if not infos:
                break
            page_count += 1
            for it in infos:
                cn = it.get("corporate_number")
                if not cn:
                    continue
                if cn not in seen:
                    seen[cn] = {
                        **it,
                        "_matched_keywords": [kw],
                    }
                    added += 1
                else:
                    if kw not in seen[cn]["_matched_keywords"]:
                        seen[cn]["_matched_keywords"].append(kw)
            time.sleep(0.15)
        print(f"  {kw}: {page_count}ページ / 新規 {added}件 (累計ユニーク {len(seen)})")

    print(f"\n[2/3] {len(seen)}件をジオコーディング中…")
    companies: list[dict] = []
    success = 0
    for idx, (cn, info) in enumerate(seen.items(), 1):
        addr = normalize_address(info.get("location", "") or "")
        if not addr:
            continue
        coords = geocode(addr)
        time.sleep(0.12)
        if not coords:
            print(f"  [{idx}/{len(seen)}] skip (geocode失敗): {info.get('name')} / {addr}")
            continue
        lat, lng = coords
        # 都内座標範囲チェック (35.5-35.9, 139.3-139.95)
        if not (35.45 <= lat <= 35.95 and 139.3 <= lng <= 139.95):
            print(f"  [{idx}/{len(seen)}] skip (都外): {info.get('name')} {lat},{lng}")
            continue
        success += 1
        companies.append({
            "id": cn,
            "name": info.get("name", ""),
            "category": "heavy-food",
            "address": info.get("location", ""),
            "lat": round(lat, 6),
            "lng": round(lng, 6),
            "phone": "",  # gBizINFOは電話番号を持たない
            "website": "",
            "notes": f"法人番号: {cn} / 該当キーワード: {', '.join(info['_matched_keywords'])}",
            "score": 50,
            "status": "untouched",
            "matched_keywords": info["_matched_keywords"],
            "postal_code": info.get("postal_code", ""),
            "kana": info.get("kana", ""),
            "update_date": info.get("update_date", ""),
        })
        if idx % 25 == 0:
            print(f"  …{idx}/{len(seen)} 件処理 (成功 {success})")

    print(f"\n[3/3] {len(companies)}件を {DATA_PATH.relative_to(ROOT)} に書き出し")
    DATA_PATH.parent.mkdir(parents=True, exist_ok=True)
    DATA_PATH.write_text(
        json.dumps({
            "generated_at": time.strftime("%Y-%m-%dT%H:%M:%S+09:00", time.localtime()),
            "source": "gBizINFO + 国土地理院ジオコーダー",
            "category": "heavy-food (重飲食)",
            "area": "東京都",
            "keyword_set": KEYWORDS,
            "count": len(companies),
            "companies": companies,
        }, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"  ✓ 完了 ({len(companies)}件)")


if __name__ == "__main__":
    main()
