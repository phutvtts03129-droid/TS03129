
const products = [
    {
        id: 1,
        name: "Laptop Acer",
        price: 15000000,
        category: "Laptop",
        stock: 5
    },
    {
        id: 2,
        name: "Chuột Logitech",
        price: 500000,
        category: "Phụ kiện",
        stock: 0
    },
    {
        id: 3,
        name: "Laptop Asus",
        price: 18000000,
        category: "Laptop",
        stock: 3
    },
    {
        id: 4,
        name: "Bàn phím cơ",
        price: 1200000,
        category: "Phụ kiện",
        stock: 10
    },
    {
        id: 5,
        name: "Màn hình LG",
        price: 4500000,
        category: "Màn hình",
        stock: 2
    },
    {
        id: 6,
        name: "Tai nghe Sony",
        price: 2200000,
        category: "Phụ kiện",
        stock: 0
    },
    {
        id: 7,
        name: "Laptop MSI",
        price: 25000000,
        category: "Laptop",
        stock: 4
    },
    {
        id: 8,
        name: "Màn hình Dell",
        price: 6000000,
        category: "Màn hình",
        stock: 6
    },


    {
        id: 9,
        name: "Laptop Lenovo",
        price: 17000000,
        category: "Laptop",
        stock: 7
    },
    {
        id: 10,
        name: "Laptop HP",
        price: 16000000,
        category: "Laptop",
        stock: 0
    },
    {
        id: 11,
        name: "Laptop Dell",
        price: 21000000,
        category: "Laptop",
        stock: 2
    },
    {
        id: 12,
        name: "Chuột Razer",
        price: 850000,
        category: "Phụ kiện",
        stock: 8
    },
    {
        id: 13,
        name: "Bàn phím Logitech",
        price: 950000,
        category: "Phụ kiện",
        stock: 5
    },
    {
        id: 14,
        name: "Tai nghe JBL",
        price: 1500000,
        category: "Phụ kiện",
        stock: 3
    },
    {
        id: 15,
        name: "Webcam Logitech",
        price: 1800000,
        category: "Phụ kiện",
        stock: 0
    },
    {
        id: 16,
        name: "Màn hình Samsung",
        price: 5500000,
        category: "Màn hình",
        stock: 4
    },
    {
        id: 17,
        name: "Màn hình Asus",
        price: 7200000,
        category: "Màn hình",
        stock: 1
    },
    {
        id: 18,
        name: "Màn hình Acer",
        price: 4800000,
        category: "Màn hình",
        stock: 0
    },
    {
        id: 19,
        name: "Ổ cứng SSD Samsung",
        price: 1900000,
        category: "Linh kiện",
        stock: 6
    },
    {
        id: 20,
        name: "RAM Kingston 16GB",
        price: 1300000,
        category: "Linh kiện",
        stock: 9
    }
];

//Hiện Thị SP

function hienThiSanPham(list) {

    let html = list.map(function (sp) {
        return `
            <div class="product">
                <h3>${sp.name}</h3>
                <p> Mã sản phẩm: ${sp.id} </p>
                <p>Loại: ${sp.category}</p>
                <p class="price"> ${sp.price.toLocaleString()} VNĐ</p>
                ${
                    sp.stock === 0
                    ?
                    `
                    <p class="het-hang">
                        Hết hàng
                    </p>`:`
                    <p class="con-hang">
                        Còn ${sp.stock} sản phẩm
                    </p>
                    `
                }
            </div>
        `;
    }).join("");
    document.getElementById("danhSachSP").innerHTML = html;
}





//Hiện Ra 8 sp Bán Chạy

function hienThiTop8BanChay() {
    let list = [...products];
    list.sort(function(a, b) {
        return b.sold - a.sold;
    });
    list = list.slice(0, 8);
    let html = "";
    for (let i = 0; i < list.length; i++) {
        html += `
            <div class="product">
                <h3>🔥 Top ${i + 1}</h3>
                <h3>${list[i].name}</h3>
                <p>
                    Mã sản phẩm: ${list[i].id}
                </p>
                <p>
                    Loại: ${list[i].category}
                </p>
                <p class="price">
                    ${list[i].price.toLocaleString()} VNĐ
                </p>
                <p>
                    Đã bán: ${list[i].sold} sản phẩm
                </p>
            </div>
        `;
    }
    document.getElementById("top8BanChay").innerHTML = html;
}





//Hàm Thống Kê Tính Tống sp / Hết SP / Còn SP
function thongKe() {
    let tong = products.length;
    let con = 0;
    let het = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock === 0) {
            het++;
        } else {
            con++;
        }
    }
    document.getElementById("tongSP").innerText = tong;
    document.getElementById("conHang").innerText = con;
    document.getElementById("hetHang").innerText = het;
}


//Lọc SP

function loc(kieu) {
    let list = [...products];
    if (kieu === "conhang") {
        list = list.filter(function (p) {
            return p.stock > 0;
        });
    }else if (kieu === "giatang") {
        list.sort(function (a, b) {
            return a.price - b.price;
        });
    }else if (kieu === "giamgia") {
        list = list.map(function (p) {
            return {
                ...p,
                price: p.price * 0.9
            };
        });
    }
    hienThiSanPham(list);
}


// Tóp 3 SP Bán Chậm Nhất

function hienThiTop3() {
    // Sao chép products
    let list = [...products];
    // Sắp xếp giá từ thấp đến cao
    list.sort(function (a, b) {
        return a.price - b.price;
    });
    // Lấy 3 sản phẩm đầu tiên
    list = list.slice(0, 3);
    let content = "";
    // Dùng FOR để hiển thị Top 3
    for (let i = 0; i < list.length; i++) {
        content += `
            <div class="product">
                <h3>
                    🏆 Top ${i + 1}
                </h3>
                <h3>
                    ${list[i].name}
                </h3>
                <p>
                    Mã sản phẩm: ${list[i].id}
                </p>
                <p>
                    Loại: ${list[i].category}
                </p>
                <p class="price">
                    ${list[i].price.toLocaleString()} VNĐ
                </p>
                ${
                    list[i].stock === 0
                    ?
                    `
                    <p class="het-hang">
                        Hết hàng
                    </p>
                    `
                    :
                    `
                    <p class="con-hang">
                        Còn ${list[i].stock} sản phẩm
                    </p>
                    `
                }

            </div>
        `;
    }
    document.getElementById("top3").innerHTML = content;
}



thongKe();
hienThiTop8BanChay();
hienThiSanPham(products);
hienThiTop3();
