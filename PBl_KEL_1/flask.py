# // Daftar produk
#     const products = [
#       {
#         name: "Laptop IF V220",
#         description: "Rp. 1.220.000",
#         image: "Laptop.jpg"
#       },
#       {
#         name: "IF Television",
#         description: "Rp. 899.000",
#         image: "Television.jpg"
#       },
#       {
#         name: "IF Phone",
#         description: "Rp.1.350.000.",
#         image: "Hp.jpg"
#       },
#       {
#         name: "Headset Gaming",
#         description: "Rp. 500.000.",
#         image: "Headseat.jpg"
#       },
#       {
#         name: "Camera",
#         description: "Rp. 2.500.000.",
#         image: "Camera.png"
#       }
#     ];

#     // Tambahkan produk ke dalam daftar produk di halaman
#     function renderProducts() {
#       const productList = document.getElementById("product-list");

#       products.forEach((product) => {
#         const card = document.createElement("div");
#         card.classList.add("col-md-4");

#         const productCard = document.createElement("div");
#         productCard.classList.add("card", "product-card");
#         productCard.style.width = "18rem";

#         const img = document.createElement("img");
#         img.src = product.image;
#         img.classList.add("card-img-top");
#         img.alt = product.name;

#         const cardBody = document.createElement("div");
#         cardBody.classList.add("card-body");

#         const title = document.createElement("h5");
#         title.classList.add("card-title");
#         title.textContent = product.name;

#         const description = document.createElement("p");
#         description.classList.add("card-text");
#         description.textContent = product.description;

#         const viewDetailsBtn = document.createElement("button");
#         viewDetailsBtn.classList.add("btn", "btn-primary");
#         viewDetailsBtn.textContent = "View Details";
#         viewDetailsBtn.addEventListener("click", () => openProductModal(product));

#         cardBody.appendChild(title);
#         cardBody.appendChild(description);
#         cardBody.appendChild(viewDetailsBtn);

#         productCard.appendChild(img);
#         productCard.appendChild(cardBody);

#         card.appendChild(productCard);
#         productList.appendChild(card);
#       });
#     }

#     // Buka modal dengan detail produk
#     function openProductModal(product) {
#       const modalTitle = document.getElementById("productModalLabel");
#       const modalDetails = document.getElementById("productModalDetails");

#       modalTitle.textContent = product.name;
#       modalDetails.innerHTML = `
#         <p>${product.description}</p>
#         <!-- Tambahkan informasi lainnya sesuai kebutuhan -->
#       `;

#       $("#productModal").modal("show");
#     }

#     // Panggil fungsi untuk menampilkan produk saat halaman dimuat
#     document.addEventListener("DOMContentLoaded", () => {
#       renderProducts();
#     });

products = [
    {
        "name": "Laptop IF V220",
        "description": "Rp. 1.220.000",
        "image": "Laptop.jpg"
    },
    {
        "name": "IF Television",
        "description": "Rp. 899.000",
        "image": "Television.jpg"
    },
    {
        "name": "IF Phone",
        "description": "Rp.1.350.000.",
        "image": "Hp.jpg"
    },
    {
        "name": "Headset Gaming",
        "description": "Rp. 500.000.",
        "image": "Headset.jpg"
    },
    {
        "name": "Camera",
        "description": "Rp. 2.500.000.",
        "image": "Camera.png"
    }
]

def render_products():
    for product in products:
        print(f"Name: {product['name']}")
        print(f"Description: {product['description']}")
        print(f"Image: {product['image']}")
        print()

def add_product(name, description, image):
    product = {
        "name": name,
        "description": description,
        "image": image
    }
    products.append(product)

# Panggil fungsi untuk menampilkan produk saat halaman dimuat
render_products()

# Tambahkan produk baru
add_product("New Product", "Rp. 999.000", "new_product.jpg")

# Cetak daftar produk setelah menambahkan produk baru
print("Daftar Produk Setelah Penambahan:")
render_products()
