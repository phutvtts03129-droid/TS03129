// ==============================
// 1. DỮ LIỆU SẢN PHẨM
// ==============================

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
    }
];


function hienThiSanPham(list) {
    let html = list.map(function (sp) {
        return `
            <div class="product">

                <h3>${sp.name}</h3>

                <p>
                    Loại: ${sp.category}
                </p>

                <p class="price">
                    ${sp.price.toLocaleString()} VNĐ
                </p>

                ${
                    sp.stock === 0
                    ?
                    `<p class="het-hang">
                        Hết hàng
                    </p>`
                    :
                    `<p class="con-hang">
                        Còn ${sp.stock} sản phẩm
                    </p>`
                }

            </div>
        `;

    }).join("");
    document.getElementById("danhSachSP").innerHTML = html;
}


function thongKe() {
    let tong = products.length;
    let con = 0;
    let het = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock === 0){
            het++;
        } else {
            con++;
        }
    }
    document.getElementById("tongSP").innerText = tong;

    document.getElementById("conHang").innerText = con;

    document.getElementById("hetHang").innerText = het;
}


//loc
function loc(kieu) {
    let list = products.filter(function (p) {
        if (kieu === "conhang") {
            return p.stock > 0;
        }
        return true;
    });
    
    if (kieu === "giatang") {
        list.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    else if (kieu === "giamgia") {
        list = list.map(function (p) {
            return {
                ...p,
                price: p.price * 0.9
            };
        });
    }
    hienThiSanPham(list);
}




function hienThiTop3() {
    let list = [...products];
    list.sort(function (a, b) {
        return a.price - b.price;
    });
    list = list.slice(0, 3);
    let content = "";
    for (let i = 0; i < list.length; i++) {
        content += `
            <div class="product">

                <h3>🏆 Top ${i + 1}</h3>

                <h3>${list[i].name}</h3>

                <p>
                    Loại: ${list[i].category}
                </p>

                <p class="price">
                    ${list[i].price.toLocaleString()} VNĐ
                </p>

                <p>
                    Số lượng: ${list[i].stock}
                </p>

            </div>
        `;
    }
    document.getElementById("top3").innerHTML = content;
}


thongKe();

loc("all");

hienThiTop3();