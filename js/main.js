// ===== DỮ LIỆU SẢN PHẨM =====
const products = [
  {"id": 1, "name": "Rau muống sạch", "category": "rau", "categoryName": "Rau", "price": 15000, "oldPrice": 20000, "discount": 25, "unit": "bó", "image": "images/p1.svg", "description": "Rau muống trồng thủy canh, giòn ngọt, không thuốc trừ sâu.", "sold": 210, "isHot": true, "isNew": false},
  {"id": 2, "name": "Cải xanh hữu cơ", "category": "rau", "categoryName": "Rau", "price": 22000, "oldPrice": 28000, "discount": 21, "unit": "500g", "image": "images/p2.svg", "description": "Cải xanh hữu cơ Đà Lạt, lá non, ít xơ.", "sold": 150, "isHot": true, "isNew": true},
  {"id": 3, "name": "Xà lách búp", "category": "rau", "categoryName": "Rau", "price": 25000, "oldPrice": 30000, "discount": 17, "unit": "500g", "image": "images/p3.svg", "description": "Xà lách búp tươi, thích hợp ăn sống và làm salad.", "sold": 95, "isHot": false, "isNew": true},
  {"id": 4, "name": "Cải ngồng", "category": "rau", "categoryName": "Rau", "price": 18000, "oldPrice": 24000, "discount": 25, "unit": "bó", "image": "images/p4.svg", "description": "Cải ngồng xào tỏi thơm ngon, giàu vitamin.", "sold": 70, "isHot": false, "isNew": false},
  {"id": 5, "name": "Cà rốt Đà Lạt", "category": "cu", "categoryName": "Củ", "price": 28000, "oldPrice": 35000, "discount": 20, "unit": "kg", "image": "images/p5.svg", "description": "Cà rốt ngọt giòn, giàu beta-carotene.", "sold": 180, "isHot": true, "isNew": false},
  {"id": 6, "name": "Khoai tây vàng", "category": "cu", "categoryName": "Củ", "price": 32000, "oldPrice": 40000, "discount": 20, "unit": "kg", "image": "images/p6.svg", "description": "Khoai tây vàng bở, thích hợp chiên, nấu canh.", "sold": 130, "isHot": false, "isNew": true},
  {"id": 7, "name": "Củ cải trắng", "category": "cu", "categoryName": "Củ", "price": 18000, "oldPrice": 22000, "discount": 18, "unit": "kg", "image": "images/p7.svg", "description": "Củ cải trắng ngọt nước, nấu canh xương rất ngon.", "sold": 60, "isHot": false, "isNew": false},
  {"id": 8, "name": "Hành tím", "category": "cu", "categoryName": "Củ", "price": 45000, "oldPrice": 55000, "discount": 18, "unit": "kg", "image": "images/p8.svg", "description": "Hành tím Sóc Trăng thơm nồng, củ chắc.", "sold": 90, "isHot": false, "isNew": true},
  {"id": 9, "name": "Táo Fuji nhập khẩu", "category": "qua", "categoryName": "Quả", "price": 89000, "oldPrice": 110000, "discount": 19, "unit": "kg", "image": "images/p9.svg", "description": "Táo Fuji giòn ngọt, vỏ đỏ bóng.", "sold": 250, "isHot": true, "isNew": false},
  {"id": 10, "name": "Cam sành", "category": "qua", "categoryName": "Quả", "price": 35000, "oldPrice": 45000, "discount": 22, "unit": "kg", "image": "images/p10.svg", "description": "Cam sành mọng nước, vị ngọt thanh.", "sold": 200, "isHot": true, "isNew": true},
  {"id": 11, "name": "Chuối tiêu", "category": "qua", "categoryName": "Quả", "price": 25000, "oldPrice": 30000, "discount": 17, "unit": "kg", "image": "images/p11.svg", "description": "Chuối tiêu chín cây, thơm và ngọt tự nhiên.", "sold": 170, "isHot": false, "isNew": false},
  {"id": 12, "name": "Dưa hấu không hạt", "category": "qua", "categoryName": "Quả", "price": 30000, "oldPrice": 40000, "discount": 25, "unit": "kg", "image": "images/p12.svg", "description": "Dưa hấu ruột đỏ, mát lạnh, không hạt.", "sold": 140, "isHot": true, "isNew": true}
];

// Trang trong thư mục admin/ hoặc khachhang/ cần lùi 1 cấp để lấy ảnh
const pre = document.body.classList.contains('panel') ? '../' : '';

// ===== Tạo thẻ sản phẩm dùng chung =====
function taoThe(p) {
  return `
  <div class="product-card">
    <a href="chitiet.html" class="img-wrap">
      <span class="badge-sale">-${p.discount}%</span>
      ${p.isHot ? '<span class="badge-hot">HOT</span>' : ''}
      <img src="${pre}${p.image}" alt="${p.name}" loading="lazy">
    </a>
    <div class="product-info">
      <span class="category-tag">${p.categoryName}</span>
      <h3 class="product-name"><a href="chitiet.html">${p.name}</a></h3>
      <p class="product-desc">${p.description}</p>
      <div class="price-box">
        <span class="current-price">${p.price.toLocaleString()}đ/${p.unit}</span>
        <span class="old-price">${p.oldPrice.toLocaleString()}đ</span>
      </div>
      <div class="sold-count">Đã bán: ${p.sold}</div>
      <a class="btn" href="chitiet.html">Xem chi tiết</a>
    </div>
  </div>`;
}

function hienThi(selector, list) {  // sử dụng 
  const box = document.querySelector(selector);
  if (!box) return;
  box.innerHTML = list.length 
  ? list.map(taoThe).join("") : 
  '<p class="empty">Không có sản phẩm phù hợp.</p>';
}



// ===== TRANG CHỦ: hiển thị sản phẩm =====
function loadbanchay() {
  hienThi("#loadbanchay", [...products].sort((a, b) => b.sold - a.sold).slice(0, 8));
}
function loadnew() {
  hienThi("#loadnew", products.filter((p) => p.isNew).slice(0, 4));
}






// ===== TRANG DANH MỤC: lọc + sắp xếp =====
let loaiHienTai = "all";
let kieuSapXep = "macdinh";

function loadall() {
  let list = loaiHienTai === "all" 
  ? [...products] 
  : products.filter(p => p.category === loaiHienTai);

  if (kieuSapXep === "giatang") list.sort((a, b) => a.price - b.price);
  else if (kieuSapXep === "giagiam") list.sort((a, b) => b.price - a.price);
  else if (kieuSapXep === "banchay") list.sort((a, b) => b.sold - a.sold);
  else if (kieuSapXep === "ten") list.sort((a, b) => a.name.localeCompare(b.name, "vi"));

  hienThi("#loadall", list);
  const dem = document.querySelector("#dem");
  if (dem) dem.textContent = list.length + " sản phẩm";
}

// 3 nút lọc: Rau - Củ - Quả (+ Tất cả)
function locSanPham(loai, nut) {
  loaiHienTai = loai;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (nut) nut.classList.add("active");
  loadall();
}

function sapXep(kieu) {
  kieuSapXep = kieu;
  loadall();
}

window.onload = function () {
  loadbanchay();
  loadnew();
  loadall();
};










