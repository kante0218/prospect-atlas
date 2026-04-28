# 営業先マップ

OpenStreetMap + Leaflet で作った、営業ターゲット企業を業界別にまとめて管理する静的Webアプリです。

## できること

- 15カテゴリの会社を地図上に一括表示
- カテゴリのオンオフ切り替え
- 会社名、住所、業界での検索
- ピン選択時の詳細表示
- CSV貼り付けによる会社データ差し替え
- 選択会社を Google マップで開く

## 起動方法

`index.html` をブラウザで開くだけで動きます。

## CSVフォーマット

1行目は次のヘッダーにしてください。

```csv
name,category,address,lat,lng,phone,website,notes
```

カテゴリは次の15種類です。

```text
heavy-food
light-food
real-estate
beauty
clinic
education
retail
manufacturing
logistics
it
finance
construction
hotel
auto
wellness
```

## 次に拡張しやすいポイント

- CSVファイルアップロード対応
- Google スプレッドシート連携
- ピン数が増えたときのクラスタリング
- 商談ステータス管理
- 担当者メモや訪問履歴の保存
