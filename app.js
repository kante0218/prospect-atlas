const categoryConfig = [
  { key: "heavy-food", label: "重飲食", color: "#d1495b" },
  { key: "light-food", label: "軽飲食", color: "#edae49" },
  { key: "real-estate", label: "不動産", color: "#00798c" },
  { key: "beauty", label: "美容", color: "#9c89b8" },
  { key: "clinic", label: "クリニック", color: "#4d908e" },
  { key: "education", label: "教育", color: "#577590" },
  { key: "retail", label: "小売", color: "#f3722c" },
  { key: "manufacturing", label: "製造", color: "#6d597a" },
  { key: "logistics", label: "物流", color: "#277da1" },
  { key: "it", label: "IT", color: "#355070" },
  { key: "finance", label: "金融", color: "#bc6c25" },
  { key: "construction", label: "建設", color: "#7f5539" },
  { key: "hotel", label: "ホテル", color: "#5a189a" },
  { key: "auto", label: "自動車", color: "#4361ee" },
  { key: "wellness", label: "介護・福祉", color: "#2a9d8f" },
];

const statusConfig = [
  { key: "untouched", label: "未接触", color: "#94a3b8" },
  { key: "approaching", label: "アプローチ中", color: "#38bdf8" },
  { key: "meeting", label: "商談中", color: "#6d28d9" },
  { key: "won", label: "受注", color: "#10b981" },
  { key: "lost", label: "失注", color: "#94706b" },
];

const categoryMap = new Map(categoryConfig.map((c) => [c.key, c]));
const statusMap = new Map(statusConfig.map((s) => [s.key, s]));

const sampleCompanies = [
  { name: "炭火ダイニング 炎座", category: "heavy-food", address: "東京都新宿区西新宿1-9-1", lat: 35.6907, lng: 139.6998, phone: "03-4000-1101", website: "https://example.com/enza", notes: "居酒屋チェーン。宴会予約訴求が強い。複数店舗展開で意思決定スピード速い。", score: 88, status: "approaching" },
  { name: "焼肉 匠グリル", category: "heavy-food", address: "東京都渋谷区道玄坂2-11-1", lat: 35.6587, lng: 139.6986, phone: "03-4000-1102", website: "", notes: "夜集客が中心。MEO改善の余地あり。", score: 62, status: "untouched" },
  { name: "Cafe Alto", category: "light-food", address: "東京都目黒区上目黒1-5-10", lat: 35.6445, lng: 139.6989, phone: "03-4000-1201", website: "https://example.com/cafe-alto", notes: "テイクアウト比率高め。SNS運用に課題感あり。", score: 74, status: "approaching" },
  { name: "ベーカリー ノア", category: "light-food", address: "東京都世田谷区北沢2-18-5", lat: 35.6619, lng: 139.6687, phone: "03-4000-1202", website: "", notes: "朝の来店がピーク。EC展開を検討中。", score: 58, status: "untouched" },
  { name: "青山リアルティ", category: "real-estate", address: "東京都港区北青山2-7-20", lat: 35.6718, lng: 139.7173, phone: "03-4000-1301", website: "https://example.com/aoyama-realty", notes: "賃貸仲介。法人契約に強い。広告予算潤沢。", score: 92, status: "meeting" },
  { name: "住まいナビ池袋", category: "real-estate", address: "東京都豊島区南池袋1-21-4", lat: 35.7295, lng: 139.7111, phone: "03-4000-1302", website: "", notes: "学生向け物件の取り扱い多数。サイト古い。", score: 67, status: "approaching" },
  { name: "Luxe Hair Ginza", category: "beauty", address: "東京都中央区銀座3-4-6", lat: 35.6717, lng: 139.7657, phone: "03-4000-1401", website: "https://example.com/luxe-hair", notes: "Instagram集客が中心。LP最適化に関心。", score: 81, status: "meeting" },
  { name: "Nail Studio Moca", category: "beauty", address: "東京都渋谷区神宮前4-28-18", lat: 35.6684, lng: 139.7057, phone: "03-4000-1402", website: "", notes: "予約導線の改善余地あり。", score: 54, status: "untouched" },
  { name: "さくら歯科クリニック", category: "clinic", address: "東京都文京区本郷3-32-7", lat: 35.7076, lng: 139.7601, phone: "03-4000-1501", website: "", notes: "新患獲得を強化したい。MEO対策未着手。", score: 79, status: "approaching" },
  { name: "恵比寿内科センター", category: "clinic", address: "東京都渋谷区恵比寿1-8-18", lat: 35.6467, lng: 139.7102, phone: "03-4000-1502", website: "https://example.com/ebisu-clinic", notes: "採用目的の相談もあり。決裁者と接点あり。", score: 86, status: "meeting" },
  { name: "未来ゼミナール", category: "education", address: "東京都千代田区神田三崎町2-10-5", lat: 35.7022, lng: 139.7536, phone: "03-4000-1601", website: "", notes: "春講習前にLP改善ニーズ。", score: 71, status: "approaching" },
  { name: "Kids Lab Academy", category: "education", address: "東京都江東区豊洲4-1-5", lat: 35.6547, lng: 139.7966, phone: "03-4000-1602", website: "https://example.com/kidslab", notes: "保護者向け説明会導線を強化したい。", score: 64, status: "untouched" },
  { name: "Daily Goods Ueno", category: "retail", address: "東京都台東区上野6-12-11", lat: 35.7118, lng: 139.7776, phone: "03-4000-1701", website: "", notes: "店舗販促とEC連携が課題。", score: 49, status: "untouched" },
  { name: "蔵前クラフトストア", category: "retail", address: "東京都台東区蔵前2-4-5", lat: 35.7035, lng: 139.7908, phone: "03-4000-1702", website: "https://example.com/kuramae-store", notes: "インバウンド客向け訴求あり。多言語対応未済。", score: 76, status: "approaching" },
  { name: "東都精密工業", category: "manufacturing", address: "東京都大田区矢口1-22-8", lat: 35.5637, lng: 139.6956, phone: "03-4000-1801", website: "", notes: "BtoBサイトのリード獲得が課題。展示会後フォローを検討中。", score: 83, status: "meeting" },
  { name: "城南パーツ製作所", category: "manufacturing", address: "東京都品川区南大井3-28-15", lat: 35.5895, lng: 139.7392, phone: "03-4000-1802", website: "", notes: "採用ブランディングも検討中。", score: 55, status: "untouched" },
  { name: "湾岸ロジリンク", category: "logistics", address: "東京都江東区辰巳3-7-10", lat: 35.6463, lng: 139.8111, phone: "03-4000-1901", website: "https://example.com/logilink", notes: "配送拠点が複数あり。EC物流ニーズ拡大中。", score: 78, status: "approaching" },
  { name: "東京クイック便", category: "logistics", address: "東京都足立区入谷8-12-3", lat: 35.8092, lng: 139.7695, phone: "03-4000-1902", website: "", notes: "地域密着。問い合わせ対応を効率化したい。", score: 44, status: "untouched" },
  { name: "Harbor Tech", category: "it", address: "東京都品川区東品川2-2-20", lat: 35.6196, lng: 139.7484, phone: "03-4000-2001", website: "https://example.com/harbor-tech", notes: "SaaS営業向け支援が刺さりそう。CTOと接点あり。", score: 94, status: "meeting" },
  { name: "Kanda Cloud Works", category: "it", address: "東京都千代田区神田須田町1-20", lat: 35.6956, lng: 139.7692, phone: "03-4000-2002", website: "", notes: "展示会後フォローの自動化に関心。MA導入検討中。", score: 85, status: "approaching" },
  { name: "日本橋ファイナンス", category: "finance", address: "東京都中央区日本橋2-10-3", lat: 35.6814, lng: 139.7731, phone: "03-4000-2101", website: "", notes: "法人向け新規開拓を拡大中。広告投資意欲高い。", score: 89, status: "meeting" },
  { name: "城南保険オフィス", category: "finance", address: "東京都大田区蒲田5-18-6", lat: 35.5611, lng: 139.7169, phone: "03-4000-2102", website: "https://example.com/jonan-insurance", notes: "来店予約と資料請求を増やしたい。", score: 68, status: "approaching" },
  { name: "大志建設", category: "construction", address: "東京都墨田区錦糸2-9-7", lat: 35.6978, lng: 139.8133, phone: "03-4000-2201", website: "", notes: "採用ページの刷新も候補。", score: 51, status: "untouched" },
  { name: "港湾リノベーション", category: "construction", address: "東京都港区芝浦3-14-5", lat: 35.6421, lng: 139.7489, phone: "03-4000-2202", website: "", notes: "施工実績の見せ方を改善したい。", score: 60, status: "untouched" },
  { name: "Hotel Soluna", category: "hotel", address: "東京都台東区浅草1-12-9", lat: 35.7135, lng: 139.7948, phone: "03-4000-2301", website: "https://example.com/soluna", notes: "海外旅行客向けの導線強化。多言語SEO関心高い。", score: 87, status: "meeting" },
  { name: "品川ベイステイ", category: "hotel", address: "東京都港区高輪3-13-3", lat: 35.6283, lng: 139.7393, phone: "03-4000-2302", website: "", notes: "法人出張需要が多い。", score: 72, status: "approaching" },
  { name: "東和モーターズ", category: "auto", address: "東京都練馬区谷原1-20-12", lat: 35.7531, lng: 139.6154, phone: "03-4000-2401", website: "", notes: "中古車販売。商談予約導線あり。", score: 47, status: "untouched" },
  { name: "City Car Service", category: "auto", address: "東京都江戸川区西葛西5-3-1", lat: 35.6647, lng: 139.8595, phone: "03-4000-2402", website: "https://example.com/citycar", notes: "整備入庫予約の最適化が課題。", score: 65, status: "approaching" },
  { name: "やさしえケア中野", category: "wellness", address: "東京都中野区中央4-8-7", lat: 35.6974, lng: 139.6692, phone: "03-4000-2501", website: "", notes: "採用強化と認知拡大が目的。", score: 56, status: "untouched" },
  { name: "デイサービス晴々", category: "wellness", address: "東京都板橋区大山町10-10", lat: 35.7473, lng: 139.7021, phone: "03-4000-2502", website: "", notes: "地域住民への周知強化が必要。", score: 41, status: "untouched" },
];

const csvTemplate = `name,category,address,lat,lng,phone,website,notes,score,status
南青山不動産,real-estate,東京都港区南青山5-4-20,35.6648,139.7116,03-1111-2222,https://example.com/minamiaoyama,港区の高単価賃貸に強い,82,approaching
渋谷カフェラボ,light-food,東京都渋谷区渋谷1-9-8,35.6592,139.7051,03-3333-4444,,テイクアウト訴求を強化したい,65,untouched`;

const STORAGE_KEY = "prospect-atlas-statuses-v1";

let companies = [];
let selectedCompanyId = null;
let markers = [];
let categoryState = new Set(categoryConfig.map((c) => c.key));
let statusState = new Set(statusConfig.map((s) => s.key));
let scoreRange = { min: 0, max: 100 };
let sortMode = "score-desc";

const map = L.map("map", { zoomControl: false }).setView([35.6812, 139.7671], 12);
L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);

const elements = {
  pipelineStats: document.getElementById("pipeline-stats"),
  categoryFilters: document.getElementById("category-filters"),
  statusFilters: document.getElementById("status-filters"),
  companyList: document.getElementById("company-list"),
  companyDetail: document.getElementById("company-detail"),
  searchInput: document.getElementById("search-input"),
  csvInput: document.getElementById("csv-input"),
  importStatus: document.getElementById("import-status"),
  legend: document.getElementById("legend"),
  scoreMin: document.getElementById("score-min"),
  scoreMax: document.getElementById("score-max"),
  scoreMinOut: document.getElementById("score-min-out"),
  scoreMaxOut: document.getElementById("score-max-out"),
  scoreFill: document.getElementById("score-fill"),
  sortSelect: document.getElementById("sort-select"),
  listCount: document.getElementById("list-count"),
};

function loadStatusOverrides() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveStatusOverride(companyId, status) {
  const data = loadStatusOverrides();
  data[companyId] = status;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore quota
  }
}

function withIds(dataset) {
  const overrides = loadStatusOverrides();
  return dataset.map((company, index) => {
    const id = `${company.category}-${index + 1}-${company.name}`;
    const score = clampScore(Number(company.score));
    const status = overrides[id] || (statusMap.has(company.status) ? company.status : "untouched");
    return { ...company, id, score, status };
  });
}

function clampScore(value) {
  if (Number.isNaN(value)) return 50;
  return Math.max(0, Math.min(100, Math.round(value)));
}

function priorityOf(score) {
  if (score >= 80) return "hot";
  if (score >= 60) return "warm";
  return "cold";
}

function priorityColor(score) {
  const p = priorityOf(score);
  if (p === "hot") return "#ff3358";
  if (p === "warm") return "#ff9f1c";
  return "#4cc9f0";
}

function priorityLabel(score) {
  const p = priorityOf(score);
  if (p === "hot") return "ホット";
  if (p === "warm") return "ウォーム";
  return "コールド";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeText(value) {
  return (value || "").toString().trim().toLowerCase();
}

/* ---------- Filters & sorting ---------- */
function getFilteredCompanies() {
  const query = normalizeText(elements.searchInput.value);
  return companies.filter((company) => {
    if (!categoryState.has(company.category)) return false;
    if (!statusState.has(company.status)) return false;
    if (company.score < scoreRange.min || company.score > scoreRange.max) return false;
    if (!query) return true;
    const categoryLabel = categoryMap.get(company.category)?.label || "";
    const statusLabel = statusMap.get(company.status)?.label || "";
    const haystack = [company.name, company.address, company.notes, categoryLabel, statusLabel]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

function sortCompanies(list) {
  const sorted = [...list];
  switch (sortMode) {
    case "score-asc":
      sorted.sort((a, b) => a.score - b.score);
      break;
    case "name-asc":
      sorted.sort((a, b) => a.name.localeCompare(b.name, "ja"));
      break;
    case "status-asc": {
      const order = new Map(statusConfig.map((s, i) => [s.key, i]));
      sorted.sort((a, b) => (order.get(a.status) ?? 99) - (order.get(b.status) ?? 99) || b.score - a.score);
      break;
    }
    case "score-desc":
    default:
      sorted.sort((a, b) => b.score - a.score);
  }
  return sorted;
}

/* ---------- Builders ---------- */
function buildLegend() {
  elements.legend.innerHTML = "";
  categoryConfig.forEach((category) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `<span class="category-dot" style="background:${category.color}"></span><span>${escapeHtml(category.label)}</span>`;
    elements.legend.appendChild(item);
  });
}

function buildStatusFilters() {
  elements.statusFilters.innerHTML = "";
  statusConfig.forEach((status) => {
    const counts = companies.filter((c) => c.status === status.key).length;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `status-chip${statusState.has(status.key) ? " active" : ""}`;
    chip.style.setProperty("--chip-color", status.color);
    chip.innerHTML = `<span class="chip-dot"></span><span>${escapeHtml(status.label)}</span><span class="chip-count">${counts}</span>`;
    chip.addEventListener("click", () => {
      if (statusState.has(status.key)) {
        if (statusState.size > 1) statusState.delete(status.key);
      } else {
        statusState.add(status.key);
      }
      render();
    });
    elements.statusFilters.appendChild(chip);
  });
}

function buildCategoryFilters() {
  const counts = new Map();
  companies.forEach((c) => counts.set(c.category, (counts.get(c.category) ?? 0) + 1));
  elements.categoryFilters.innerHTML = "";
  categoryConfig.forEach((category) => {
    const wrapper = document.createElement("label");
    wrapper.className = "category-chip";
    wrapper.innerHTML = `
      <input type="checkbox" value="${category.key}" ${categoryState.has(category.key) ? "checked" : ""} />
      <span class="category-dot" style="background:${category.color}"></span>
      <span class="category-name">${escapeHtml(category.label)}</span>
      <span class="category-count">${counts.get(category.key) ?? 0}</span>
    `;
    const checkbox = wrapper.querySelector("input");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) categoryState.add(category.key);
      else categoryState.delete(category.key);
      render();
    });
    elements.categoryFilters.appendChild(wrapper);
  });
}

function buildPipelineStats(filtered) {
  elements.pipelineStats.innerHTML = "";
  const total = document.createElement("div");
  total.className = "pipeline-stage";
  total.style.setProperty("--stage-color", "#181429");
  total.innerHTML = `<span class="stage-label">表示中</span><span class="stage-count">${filtered.length}</span>`;
  elements.pipelineStats.appendChild(total);

  statusConfig.forEach((status) => {
    const count = filtered.filter((c) => c.status === status.key).length;
    const stage = document.createElement("div");
    stage.className = "pipeline-stage";
    stage.style.setProperty("--stage-color", status.color);
    stage.innerHTML = `<span class="stage-label">${escapeHtml(status.label)}</span><span class="stage-count">${count}</span>`;
    elements.pipelineStats.appendChild(stage);
  });
}

/* ---------- Markers ---------- */
function createMarker(company) {
  const color = priorityColor(company.score);
  const isSelected = selectedCompanyId === company.id;
  const priority = priorityOf(company.score);
  const icon = L.divIcon({
    className: "",
    html: `<div class="prospect-marker priority-${priority}${isSelected ? " is-selected" : ""}" style="--marker-color:${color}">
      <div class="marker-pulse"></div>
      <div class="marker-bubble">${company.score}</div>
    </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -16],
  });

  const marker = L.marker([company.lat, company.lng], { icon, riseOnHover: true });
  const categoryLabel = categoryMap.get(company.category)?.label || "";
  const statusLabel = statusMap.get(company.status)?.label || "";

  marker.bindPopup(`
    <div>
      <h3 class="popup-title">${escapeHtml(company.name)}</h3>
      <p class="popup-line">${escapeHtml(categoryLabel)} ・ ${escapeHtml(statusLabel)}</p>
      <p class="popup-line">スコア ${company.score} ・ ${escapeHtml(priorityLabel(company.score))}</p>
      <p class="popup-line">${escapeHtml(company.address)}</p>
    </div>
  `);

  marker.on("click", () => {
    selectedCompanyId = company.id;
    renderDetail(company);
    renderCompanyList();
    refreshMarkers();
  });

  return marker;
}

function renderMarkers(filteredCompanies) {
  markerLayer.clearLayers();
  markers = filteredCompanies.map((company) => {
    const marker = createMarker(company);
    marker.addTo(markerLayer);
    return { companyId: company.id, marker };
  });
}

function refreshMarkers() {
  renderMarkers(getFilteredCompanies());
}

/* ---------- Company list ---------- */
function renderCompanyList() {
  const filtered = sortCompanies(getFilteredCompanies());
  elements.listCount.textContent = filtered.length.toString();
  elements.companyList.innerHTML = "";

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-list";
    empty.textContent = "条件に一致する会社がありません。フィルタを緩めてください。";
    elements.companyList.appendChild(empty);
    return;
  }

  filtered.forEach((company) => {
    const category = categoryMap.get(company.category);
    const status = statusMap.get(company.status);
    const accent = priorityColor(company.score);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `company-card${selectedCompanyId === company.id ? " active" : ""}`;
    button.style.setProperty("--card-accent", accent);
    button.innerHTML = `
      <div class="company-card-top">
        <h3>${escapeHtml(company.name)}</h3>
        <span class="score-pill" style="--card-accent:${accent}">
          ${priorityOf(company.score) === "hot" ? '<span class="score-flame">🔥</span>' : ""}
          ${company.score}
        </span>
      </div>
      <div class="company-card-meta">
        <span class="category-badge"><span class="category-dot" style="background:${category?.color || "#555"}"></span>${escapeHtml(category?.label || company.category)}</span>
        <span class="status-tag" style="--tag-color:${status?.color || "#555"}">${escapeHtml(status?.label || "")}</span>
      </div>
      <p class="company-address">${escapeHtml(company.address)}</p>
    `;
    button.addEventListener("click", () => focusCompany(company.id));
    elements.companyList.appendChild(button);
  });
}

/* ---------- Detail ---------- */
function renderDetail(company) {
  if (!company) {
    elements.companyDetail.className = "company-detail empty-detail";
    elements.companyDetail.innerHTML = `
      <div class="empty-art">⌖</div>
      <p>地図のピンか会社リストを選ぶと詳細が表示されます。</p>
    `;
    return;
  }

  const category = categoryMap.get(company.category);
  const status = statusMap.get(company.status);
  const accent = priorityColor(company.score);
  const websiteMarkup = company.website
    ? `<a class="detail-link" href="${escapeHtml(company.website)}" target="_blank" rel="noreferrer">Webサイト ↗</a>`
    : "";
  const phoneMarkup = company.phone
    ? `<a class="detail-link" href="tel:${escapeHtml(company.phone.replace(/[^\d+]/g, ""))}">電話 ${escapeHtml(company.phone)}</a>`
    : "";
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.name + " " + company.address)}`;

  elements.companyDetail.className = "company-detail";
  elements.companyDetail.innerHTML = `
    <div class="detail-hero">
      <div class="detail-hero-top">
        <div>
          <p class="eyebrow" style="color:${accent}">${escapeHtml(priorityLabel(company.score))}リード</p>
          <h3>${escapeHtml(company.name)}</h3>
        </div>
        <div class="detail-score-card" style="--card-accent:${accent}; background:${accent}">
          <span class="score-num">${company.score}</span>
          <span class="score-label">SCORE</span>
        </div>
      </div>
      <div class="detail-tags">
        <span class="category-badge"><span class="category-dot" style="background:${category?.color || "#555"}"></span>${escapeHtml(category?.label || company.category)}</span>
        <span class="status-tag" style="--tag-color:${status?.color || "#555"}">${escapeHtml(status?.label || "")}</span>
      </div>
    </div>

    <div class="detail-section">
      <p class="detail-section-title">ステータス更新</p>
      <div class="status-picker" id="status-picker"></div>
    </div>

    <div class="detail-section">
      <p class="detail-section-title">基本情報</p>
      <div class="detail-row"><span class="row-label">住所</span><span class="row-value">${escapeHtml(company.address)}</span></div>
      <div class="detail-row"><span class="row-label">電話</span><span class="row-value">${escapeHtml(company.phone || "未登録")}</span></div>
      <div class="detail-row"><span class="row-label">座標</span><span class="row-value">${company.lat.toFixed(4)}, ${company.lng.toFixed(4)}</span></div>
    </div>

    <div class="detail-section">
      <p class="detail-section-title">メモ</p>
      <p class="detail-notes">${escapeHtml(company.notes || "メモなし")}</p>
    </div>

    <div class="detail-actions">
      ${websiteMarkup}
      ${phoneMarkup}
      <a class="detail-link primary" href="${googleMapUrl}" target="_blank" rel="noreferrer">Googleマップで開く</a>
    </div>
  `;

  // status picker
  const picker = elements.companyDetail.querySelector("#status-picker");
  statusConfig.forEach((s) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `status-chip${company.status === s.key ? " active" : ""}`;
    chip.style.setProperty("--chip-color", s.color);
    chip.innerHTML = `<span class="chip-dot"></span><span>${escapeHtml(s.label)}</span>`;
    chip.addEventListener("click", () => {
      company.status = s.key;
      saveStatusOverride(company.id, s.key);
      render();
    });
    picker.appendChild(chip);
  });
}

/* ---------- View utilities ---------- */
function fitToCompanies(filtered) {
  if (!filtered.length) {
    map.setView([35.6812, 139.7671], 12);
    return;
  }
  const bounds = L.latLngBounds(filtered.map((c) => [c.lat, c.lng]));
  map.fitBounds(bounds.pad(0.2), { animate: true });
}

function focusCompany(companyId) {
  const company = companies.find((c) => c.id === companyId);
  if (!company) return;
  selectedCompanyId = company.id;
  map.flyTo([company.lat, company.lng], 15, { duration: 0.6 });
  renderDetail(company);
  renderCompanyList();
  refreshMarkers();
  const entry = markers.find((m) => m.companyId === company.id);
  if (entry) entry.marker.openPopup();
}

/* ---------- Score slider ---------- */
function updateScoreFill() {
  const min = Number(elements.scoreMin.value);
  const max = Number(elements.scoreMax.value);
  elements.scoreMinOut.textContent = min;
  elements.scoreMaxOut.textContent = max;
  const left = min;
  const right = 100 - max;
  elements.scoreFill.style.left = `${left}%`;
  elements.scoreFill.style.right = `${right}%`;
}

function handleScoreChange() {
  let min = Number(elements.scoreMin.value);
  let max = Number(elements.scoreMax.value);
  if (min > max) {
    if (this === elements.scoreMin) {
      max = min;
      elements.scoreMax.value = max;
    } else {
      min = max;
      elements.scoreMin.value = min;
    }
  }
  scoreRange = { min, max };
  updateScoreFill();
  render();
}

/* ---------- Render orchestrator ---------- */
function render() {
  const filtered = getFilteredCompanies();
  buildPipelineStats(filtered);
  buildCategoryFilters();
  buildStatusFilters();
  renderMarkers(filtered);
  renderCompanyList();
  const currentSelected = filtered.find((c) => c.id === selectedCompanyId);
  renderDetail(currentSelected || null);
}

/* ---------- CSV ---------- */
function parseCsv(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) throw new Error("CSVの行数が足りません。");

  const headers = lines[0].split(",").map((h) => h.trim());
  const required = ["name", "category", "address", "lat", "lng"];
  required.forEach((h) => {
    if (!headers.includes(h)) throw new Error(`必須列 ${h} がありません。`);
  });

  return lines.slice(1).map((line, index) => {
    const values = splitCsvLine(line);
    const row = Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ""]));
    const lat = Number(row.lat);
    const lng = Number(row.lng);

    if (!categoryMap.has(row.category)) {
      throw new Error(`${index + 2}行目の category が未定義です: ${row.category}`);
    }
    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      throw new Error(`${index + 2}行目の lat/lng が不正です。`);
    }

    return {
      name: row.name,
      category: row.category,
      address: row.address,
      lat,
      lng,
      phone: row.phone || "",
      website: row.website || "",
      notes: row.notes || "",
      score: row.score ? clampScore(Number(row.score)) : 50,
      status: statusMap.has(row.status) ? row.status : "untouched",
    };
  });
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    const next = line[i + 1];
    if (ch === '"' && inQuotes && next === '"') { current += '"'; i += 1; continue; }
    if (ch === '"') { inQuotes = !inQuotes; continue; }
    if (ch === "," && !inQuotes) { cells.push(current.trim()); current = ""; continue; }
    current += ch;
  }
  cells.push(current.trim());
  return cells;
}

function loadCompanies(dataset, statusMessage = "") {
  companies = withIds(dataset);
  selectedCompanyId = companies[0]?.id || null;
  categoryState = new Set(categoryConfig.map((c) => c.key));
  statusState = new Set(statusConfig.map((s) => s.key));
  scoreRange = { min: 0, max: 100 };
  elements.scoreMin.value = 0;
  elements.scoreMax.value = 100;
  updateScoreFill();
  if (statusMessage) elements.importStatus.textContent = statusMessage;
  render();
  fitToCompanies(companies);
  if (companies[0]) renderDetail(companies[0]);
}

/* ---------- Event wiring ---------- */
document.getElementById("fit-all-button").addEventListener("click", () => {
  fitToCompanies(getFilteredCompanies());
});

document.getElementById("load-sample-button").addEventListener("click", () => {
  loadCompanies(sampleCompanies, "サンプルデータを再読込しました。");
});

document.getElementById("load-template-button").addEventListener("click", () => {
  elements.csvInput.value = csvTemplate;
  elements.importStatus.textContent = "テンプレートを入力欄に挿入しました。";
});

document.getElementById("toggle-all-categories").addEventListener("click", () => {
  if (categoryState.size === categoryConfig.length) {
    categoryState.clear();
  } else {
    categoryState = new Set(categoryConfig.map((c) => c.key));
  }
  render();
});

document.getElementById("reset-filters").addEventListener("click", () => {
  elements.searchInput.value = "";
  categoryState = new Set(categoryConfig.map((c) => c.key));
  statusState = new Set(statusConfig.map((s) => s.key));
  scoreRange = { min: 0, max: 100 };
  elements.scoreMin.value = 0;
  elements.scoreMax.value = 100;
  updateScoreFill();
  render();
});

document.getElementById("import-csv-button").addEventListener("click", () => {
  try {
    const dataset = parseCsv(elements.csvInput.value);
    loadCompanies(dataset, `${dataset.length}件の会社データを読み込みました。`);
  } catch (error) {
    elements.importStatus.textContent = error.message;
  }
});

elements.searchInput.addEventListener("input", () => render());
elements.sortSelect.addEventListener("change", (e) => {
  sortMode = e.target.value;
  renderCompanyList();
});
elements.scoreMin.addEventListener("input", handleScoreChange);
elements.scoreMax.addEventListener("input", handleScoreChange);

/* ---------- Remote data loader ---------- */
function enrichRemoteCompany(c) {
  const matched = Array.isArray(c.matched_keywords) ? c.matched_keywords : [];
  const baseScore = typeof c.score === "number" ? c.score : 50;
  // 複数キーワードヒットは確度が高い (焼肉×ホルモン など)
  const score = matched.length > 1 ? Math.min(100, baseScore + (matched.length - 1) * 12) : baseScore;
  return { ...c, score };
}

async function loadRemoteData() {
  try {
    const res = await fetch("./data/companies.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const payload = await res.json();
    const list = Array.isArray(payload?.companies) ? payload.companies.map(enrichRemoteCompany) : [];
    if (!list.length) throw new Error("companies が空");
    const generated = payload.generated_at ? `（${payload.generated_at} 取得）` : "";
    loadCompanies(list, `gBizINFOから${list.length}件読み込みました${generated}`);
    return true;
  } catch (e) {
    console.warn("[prospect-atlas] remote data load failed:", e);
    return false;
  }
}

/* ---------- Boot ---------- */
buildLegend();
elements.csvInput.value = csvTemplate;
updateScoreFill();
loadRemoteData().then((ok) => {
  if (!ok) loadCompanies(sampleCompanies, "サンプルデータを読み込みました（リアルデータ取得失敗）。");
});
