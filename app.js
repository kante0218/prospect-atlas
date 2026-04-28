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

const categoryMap = new Map(categoryConfig.map((category) => [category.key, category]));

const sampleCompanies = [
  { name: "炭火ダイニング 炎座", category: "heavy-food", address: "東京都新宿区西新宿1-9-1", lat: 35.6907, lng: 139.6998, phone: "03-4000-1101", website: "https://example.com/enza", notes: "居酒屋チェーン。宴会予約訴求が強い。" },
  { name: "焼肉 匠グリル", category: "heavy-food", address: "東京都渋谷区道玄坂2-11-1", lat: 35.6587, lng: 139.6986, phone: "03-4000-1102", website: "", notes: "夜集客が中心。MEO改善の余地あり。" },
  { name: "Cafe Alto", category: "light-food", address: "東京都目黒区上目黒1-5-10", lat: 35.6445, lng: 139.6989, phone: "03-4000-1201", website: "https://example.com/cafe-alto", notes: "テイクアウト比率高め。" },
  { name: "ベーカリー ノア", category: "light-food", address: "東京都世田谷区北沢2-18-5", lat: 35.6619, lng: 139.6687, phone: "03-4000-1202", website: "", notes: "朝の来店がピーク。" },
  { name: "青山リアルティ", category: "real-estate", address: "東京都港区北青山2-7-20", lat: 35.6718, lng: 139.7173, phone: "03-4000-1301", website: "https://example.com/aoyama-realty", notes: "賃貸仲介。法人契約に強い。" },
  { name: "住まいナビ池袋", category: "real-estate", address: "東京都豊島区南池袋1-21-4", lat: 35.7295, lng: 139.7111, phone: "03-4000-1302", website: "", notes: "学生向け物件の取り扱い多数。" },
  { name: "Luxe Hair Ginza", category: "beauty", address: "東京都中央区銀座3-4-6", lat: 35.6717, lng: 139.7657, phone: "03-4000-1401", website: "https://example.com/luxe-hair", notes: "Instagram集客が中心。" },
  { name: "Nail Studio Moca", category: "beauty", address: "東京都渋谷区神宮前4-28-18", lat: 35.6684, lng: 139.7057, phone: "03-4000-1402", website: "", notes: "予約導線の改善余地あり。" },
  { name: "さくら歯科クリニック", category: "clinic", address: "東京都文京区本郷3-32-7", lat: 35.7076, lng: 139.7601, phone: "03-4000-1501", website: "", notes: "新患獲得を強化したい。" },
  { name: "恵比寿内科センター", category: "clinic", address: "東京都渋谷区恵比寿1-8-18", lat: 35.6467, lng: 139.7102, phone: "03-4000-1502", website: "https://example.com/ebisu-clinic", notes: "採用目的の相談もあり。" },
  { name: "未来ゼミナール", category: "education", address: "東京都千代田区神田三崎町2-10-5", lat: 35.7022, lng: 139.7536, phone: "03-4000-1601", website: "", notes: "春講習前にLP改善ニーズ。" },
  { name: "Kids Lab Academy", category: "education", address: "東京都江東区豊洲4-1-5", lat: 35.6547, lng: 139.7966, phone: "03-4000-1602", website: "https://example.com/kidslab", notes: "保護者向け説明会導線を強化したい。" },
  { name: "Daily Goods Ueno", category: "retail", address: "東京都台東区上野6-12-11", lat: 35.7118, lng: 139.7776, phone: "03-4000-1701", website: "", notes: "店舗販促とEC連携が課題。" },
  { name: "蔵前クラフトストア", category: "retail", address: "東京都台東区蔵前2-4-5", lat: 35.7035, lng: 139.7908, phone: "03-4000-1702", website: "https://example.com/kuramae-store", notes: "インバウンド客向け訴求あり。" },
  { name: "東都精密工業", category: "manufacturing", address: "東京都大田区矢口1-22-8", lat: 35.5637, lng: 139.6956, phone: "03-4000-1801", website: "", notes: "BtoBサイトのリード獲得が課題。" },
  { name: "城南パーツ製作所", category: "manufacturing", address: "東京都品川区南大井3-28-15", lat: 35.5895, lng: 139.7392, phone: "03-4000-1802", website: "", notes: "採用ブランディングも検討中。" },
  { name: "湾岸ロジリンク", category: "logistics", address: "東京都江東区辰巳3-7-10", lat: 35.6463, lng: 139.8111, phone: "03-4000-1901", website: "https://example.com/logilink", notes: "配送拠点が複数あり。" },
  { name: "東京クイック便", category: "logistics", address: "東京都足立区入谷8-12-3", lat: 35.8092, lng: 139.7695, phone: "03-4000-1902", website: "", notes: "地域密着。問い合わせ対応を効率化したい。" },
  { name: "Harbor Tech", category: "it", address: "東京都品川区東品川2-2-20", lat: 35.6196, lng: 139.7484, phone: "03-4000-2001", website: "https://example.com/harbor-tech", notes: "SaaS営業向け支援が刺さりそう。" },
  { name: "Kanda Cloud Works", category: "it", address: "東京都千代田区神田須田町1-20", lat: 35.6956, lng: 139.7692, phone: "03-4000-2002", website: "", notes: "展示会後フォローの自動化に関心。" },
  { name: "日本橋ファイナンス", category: "finance", address: "東京都中央区日本橋2-10-3", lat: 35.6814, lng: 139.7731, phone: "03-4000-2101", website: "", notes: "法人向け新規開拓を拡大中。" },
  { name: "城南保険オフィス", category: "finance", address: "東京都大田区蒲田5-18-6", lat: 35.5611, lng: 139.7169, phone: "03-4000-2102", website: "https://example.com/jonan-insurance", notes: "来店予約と資料請求を増やしたい。" },
  { name: "大志建設", category: "construction", address: "東京都墨田区錦糸2-9-7", lat: 35.6978, lng: 139.8133, phone: "03-4000-2201", website: "", notes: "採用ページの刷新も候補。" },
  { name: "港湾リノベーション", category: "construction", address: "東京都港区芝浦3-14-5", lat: 35.6421, lng: 139.7489, phone: "03-4000-2202", website: "", notes: "施工実績の見せ方を改善したい。" },
  { name: "Hotel Soluna", category: "hotel", address: "東京都台東区浅草1-12-9", lat: 35.7135, lng: 139.7948, phone: "03-4000-2301", website: "https://example.com/soluna", notes: "海外旅行客向けの導線強化。" },
  { name: "品川ベイステイ", category: "hotel", address: "東京都港区高輪3-13-3", lat: 35.6283, lng: 139.7393, phone: "03-4000-2302", website: "", notes: "法人出張需要が多い。" },
  { name: "東和モーターズ", category: "auto", address: "東京都練馬区谷原1-20-12", lat: 35.7531, lng: 139.6154, phone: "03-4000-2401", website: "", notes: "中古車販売。商談予約導線あり。" },
  { name: "City Car Service", category: "auto", address: "東京都江戸川区西葛西5-3-1", lat: 35.6647, lng: 139.8595, phone: "03-4000-2402", website: "https://example.com/citycar", notes: "整備入庫予約の最適化が課題。" },
  { name: "やさしえケア中野", category: "wellness", address: "東京都中野区中央4-8-7", lat: 35.6974, lng: 139.6692, phone: "03-4000-2501", website: "", notes: "採用強化と認知拡大が目的。" },
  { name: "デイサービス晴々", category: "wellness", address: "東京都板橋区大山町10-10", lat: 35.7473, lng: 139.7021, phone: "03-4000-2502", website: "", notes: "地域住民への周知強化が必要。" },
];

const csvTemplate = `name,category,address,lat,lng,phone,website,notes
南青山不動産,real-estate,東京都港区南青山5-4-20,35.6648,139.7116,03-1111-2222,https://example.com/minamiaoyama,港区の高単価賃貸に強い
渋谷カフェラボ,light-food,東京都渋谷区渋谷1-9-8,35.6592,139.7051,03-3333-4444,,テイクアウト訴求を強化したい`;

let companies = [];
let selectedCompanyId = null;
let markers = [];
let categoryState = new Set(categoryConfig.map((category) => category.key));

const map = L.map("map", {
  zoomControl: false,
}).setView([35.6812, 139.7671], 12);

L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);

const elements = {
  companyCount: document.getElementById("company-count"),
  activeCategoryCount: document.getElementById("active-category-count"),
  visibleCompanyCount: document.getElementById("visible-company-count"),
  categoryFilters: document.getElementById("category-filters"),
  companyList: document.getElementById("company-list"),
  companyDetail: document.getElementById("company-detail"),
  searchInput: document.getElementById("search-input"),
  csvInput: document.getElementById("csv-input"),
  importStatus: document.getElementById("import-status"),
  legend: document.getElementById("legend"),
};

function withIds(dataset) {
  return dataset.map((company, index) => ({
    id: `${company.category}-${index + 1}-${company.name}`,
    ...company,
  }));
}

function createLegend() {
  elements.legend.innerHTML = "";
  categoryConfig.forEach((category) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
      <span class="category-dot" style="background:${category.color}"></span>
      <span>${category.label}</span>
    `;
    elements.legend.appendChild(item);
  });
}

function buildCategoryFilters() {
  const categoryCounts = countCategories(companies);
  elements.categoryFilters.innerHTML = "";

  categoryConfig.forEach((category) => {
    const wrapper = document.createElement("label");
    wrapper.className = "category-chip";
    wrapper.innerHTML = `
      <input type="checkbox" value="${category.key}" ${categoryState.has(category.key) ? "checked" : ""} />
      <span class="category-dot" style="background:${category.color}"></span>
      <span>
        <span class="category-name">${category.label}</span>
        <span class="category-count">${categoryCounts.get(category.key) ?? 0}件</span>
      </span>
    `;

    const checkbox = wrapper.querySelector("input");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        categoryState.add(category.key);
      } else {
        categoryState.delete(category.key);
      }
      render();
    });

    elements.categoryFilters.appendChild(wrapper);
  });
}

function countCategories(dataset) {
  const counts = new Map();
  dataset.forEach((company) => {
    counts.set(company.category, (counts.get(company.category) ?? 0) + 1);
  });
  return counts;
}

function normalizeText(value) {
  return (value || "").toString().trim().toLowerCase();
}

function getFilteredCompanies() {
  const query = normalizeText(elements.searchInput.value);

  return companies.filter((company) => {
    const matchesCategory = categoryState.has(company.category);
    if (!matchesCategory) {
      return false;
    }

    if (!query) {
      return true;
    }

    const categoryLabel = categoryMap.get(company.category)?.label || "";
    const haystack = [company.name, company.address, company.notes, categoryLabel]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

function createMarker(company) {
  const color = categoryMap.get(company.category)?.color || "#444";
  const marker = L.circleMarker([company.lat, company.lng], {
    radius: 9,
    fillColor: color,
    color: "#fff8f0",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.95,
  });

  marker.bindPopup(`
    <div>
      <h3 class="popup-title">${escapeHtml(company.name)}</h3>
      <p class="popup-line">${escapeHtml(categoryMap.get(company.category)?.label || "")}</p>
      <p class="popup-line">${escapeHtml(company.address)}</p>
    </div>
  `);

  marker.on("click", () => {
    selectedCompanyId = company.id;
    renderDetail(company);
    renderCompanyList();
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

function renderCompanyList() {
  const filteredCompanies = getFilteredCompanies();

  elements.companyList.innerHTML = "";

  if (!filteredCompanies.length) {
    elements.companyList.innerHTML = `<div class="helper-text">条件に一致する会社がありません。</div>`;
    return;
  }

  filteredCompanies.forEach((company) => {
    const category = categoryMap.get(company.category);
    const button = document.createElement("button");
    button.className = `company-card${selectedCompanyId === company.id ? " active" : ""}`;
    button.innerHTML = `
      <div class="company-card-header">
        <h3>${escapeHtml(company.name)}</h3>
        <span class="category-badge">
          <span class="category-dot" style="background:${category?.color || "#555"}"></span>
          <span>${escapeHtml(category?.label || company.category)}</span>
        </span>
      </div>
      <p class="company-address">${escapeHtml(company.address)}</p>
      <p class="company-notes">${escapeHtml(company.notes || "メモなし")}</p>
    `;

    button.addEventListener("click", () => {
      focusCompany(company.id);
    });

    elements.companyList.appendChild(button);
  });
}

function renderDetail(company) {
  if (!company) {
    elements.companyDetail.className = "company-detail empty-detail";
    elements.companyDetail.textContent = "地図のピンか会社リストを選ぶと詳細が表示されます。";
    return;
  }

  const category = categoryMap.get(company.category);
  const websiteMarkup = company.website
    ? `<a class="detail-link" href="${company.website}" target="_blank" rel="noreferrer">Webサイト</a>`
    : "";

  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.name + " " + company.address)}`;

  elements.companyDetail.className = "company-detail";
  elements.companyDetail.innerHTML = `
    <div class="detail-header">
      <div>
        <p class="eyebrow">Company Detail</p>
        <h3>${escapeHtml(company.name)}</h3>
      </div>
      <span class="category-badge">
        <span class="category-dot" style="background:${category?.color || "#555"}"></span>
        <span>${escapeHtml(category?.label || company.category)}</span>
      </span>
    </div>
    <p class="company-address">${escapeHtml(company.address)}</p>
    <div class="detail-meta">
      <div class="company-line">電話: ${escapeHtml(company.phone || "未登録")}</div>
      <div class="company-line">座標: ${company.lat}, ${company.lng}</div>
    </div>
    <p class="company-notes">${escapeHtml(company.notes || "メモなし")}</p>
    <div class="detail-links">
      ${websiteMarkup}
      <a class="detail-link" href="${googleMapUrl}" target="_blank" rel="noreferrer">Googleマップで開く</a>
    </div>
  `;
}

function updateStats(filteredCompanies) {
  elements.companyCount.textContent = companies.length.toString();
  elements.activeCategoryCount.textContent = categoryState.size.toString();
  elements.visibleCompanyCount.textContent = filteredCompanies.length.toString();
}

function fitToCompanies(filteredCompanies) {
  if (!filteredCompanies.length) {
    map.setView([35.6812, 139.7671], 12);
    return;
  }

  const bounds = L.latLngBounds(filteredCompanies.map((company) => [company.lat, company.lng]));
  map.fitBounds(bounds.pad(0.2));
}

function focusCompany(companyId) {
  const company = companies.find((item) => item.id === companyId);
  if (!company) {
    return;
  }

  selectedCompanyId = company.id;
  map.flyTo([company.lat, company.lng], 15, { duration: 0.6 });
  renderDetail(company);
  renderCompanyList();

  const markerEntry = markers.find((entry) => entry.companyId === company.id);
  if (markerEntry) {
    markerEntry.marker.openPopup();
  }
}

function render() {
  const filteredCompanies = getFilteredCompanies();
  renderMarkers(filteredCompanies);
  renderCompanyList();
  updateStats(filteredCompanies);
  buildCategoryFilters();

  const currentSelected = filteredCompanies.find((company) => company.id === selectedCompanyId);
  renderDetail(currentSelected || null);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    throw new Error("CSVの行数が足りません。");
  }

  const headers = lines[0].split(",").map((item) => item.trim());
  const requiredHeaders = ["name", "category", "address", "lat", "lng"];

  requiredHeaders.forEach((header) => {
    if (!headers.includes(header)) {
      throw new Error(`必須列 ${header} がありません。`);
    }
  });

  return lines.slice(1).map((line, index) => {
    const values = splitCsvLine(line);
    const row = Object.fromEntries(headers.map((header, headerIndex) => [header, values[headerIndex] ?? ""]));
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
    };
  });
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    const nextCharacter = line[index + 1];

    if (character === '"' && inQuotes && nextCharacter === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (character === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (character === "," && !inQuotes) {
      cells.push(current.trim());
      current = "";
      continue;
    }

    current += character;
  }

  cells.push(current.trim());
  return cells;
}

function loadCompanies(dataset, statusMessage = "") {
  companies = withIds(dataset);
  selectedCompanyId = companies[0]?.id || null;
  categoryState = new Set(categoryConfig.map((category) => category.key));
  elements.importStatus.textContent = statusMessage;
  render();
  fitToCompanies(companies);

  if (companies[0]) {
    renderDetail(companies[0]);
  }
}

document.getElementById("fit-all-button").addEventListener("click", () => {
  fitToCompanies(getFilteredCompanies());
});

document.getElementById("load-sample-button").addEventListener("click", () => {
  loadCompanies(sampleCompanies, "サンプルデータを読み込みました。");
});

document.getElementById("load-template-button").addEventListener("click", () => {
  elements.csvInput.value = csvTemplate;
  elements.importStatus.textContent = "テンプレートを入力欄に挿入しました。";
});

document.getElementById("toggle-all-categories").addEventListener("click", () => {
  if (categoryState.size === categoryConfig.length) {
    categoryState.clear();
  } else {
    categoryState = new Set(categoryConfig.map((category) => category.key));
  }
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

elements.searchInput.addEventListener("input", () => {
  render();
});

createLegend();
elements.csvInput.value = csvTemplate;
loadCompanies(sampleCompanies, "サンプルデータを読み込みました。");
