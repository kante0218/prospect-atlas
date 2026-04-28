# Prospect Atlas — 営業先スクリーニングマップ

OpenStreetMap + Leaflet で作った、営業ターゲットを **スコア・ステータス・業界** の3軸でスクリーニングできる静的Webアプリ。

## 主な機能

- 15業界カテゴリ × 5商談ステータスでの多軸フィルタ
- 0〜100の **ホットスコア** によるレンジ絞り込み（ホット / ウォーム / コールド）
- 地図ピンに **スコア表示** ＋ ホットリードはパルスアニメーションで強調
- ターゲット一覧はスコア / 名前 / ステータス順にソート可
- 商談ステータスはワンクリックで更新（localStorageに永続化）
- パイプライン分布をヘッダーで常時可視化
- 会社名 / 住所 / 業界 / メモ / ステータス横断検索
- CSV貼り付け取込（score・status列対応）
- ピン → Googleマップ起動・電話発信・Webサイト遷移

## 起動方法

`index.html` をブラウザで開くだけで動作します。
Vercelでデプロイ済み。

## CSVフォーマット

```csv
name,category,address,lat,lng,phone,website,notes,score,status
```

`score` (0-100) と `status` は省略可。省略時は score=50 / status=untouched。

### category 値（15種）

```
heavy-food, light-food, real-estate, beauty, clinic, education, retail,
manufacturing, logistics, it, finance, construction, hotel, auto, wellness
```

### status 値（5種）

```
untouched     未接触
approaching   アプローチ中
meeting       商談中
won           受注
lost          失注
```

## スコアと優先度

| スコア | 優先度 | 表示 |
| --- | --- | --- |
| 80-100 | ホット | 赤・パルスアニメーション |
| 60-79 | ウォーム | オレンジ・弱パルス |
| 0-59 | コールド | 水色 |

## 技術スタック

- HTML / CSS / Vanilla JS（フレームワーク不使用）
- Leaflet 1.9.4 + OpenStreetMap
- Google Fonts (Inter / Noto Sans JP)
- localStorage によるステータス保存

## 拡張アイデア

- Googleスプレッドシート連携
- ピンクラスタリング（数百件以上での視認性確保）
- 訪問履歴・タイムライン
- リード獲得チャネル別の色分け
- スコア自動算出ロジック（業界×規模×反応履歴）
