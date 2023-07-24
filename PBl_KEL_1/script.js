let products = []; // Array untuk menyimpan data produk

function fetchProducts() {
    // Mengirim permintaan ke file PHP untuk mendapatkan data produk
    fetch('get_products.php')
        .then(response => response.json())
        .then(data => {
            products = data; // Menyimpan data produk dalam variabel global 'products'
            displayProducts(products); // Menampilkan data produk
        })
        .catch(error => console.log(error));
}

function displayProducts(products) {
    // Mendapatkan elemen dengan id 'productList'
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Menghapus konten sebelumnya

    // Menampilkan data produk dalam elemen 'productList'
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Harga: ${product.price}</p>
            <p>Deskripsi: ${product.description}</p>
        `;
        productList.appendChild(productItem);
    });
}

function addProduct() {
    const name = prompt('Masukkan nama produk:');
    const price = parseFloat(prompt('Masukkan harga produk:'));
    const description = prompt('Masukkan deskripsi produk:');

    // Membuat objek produk baru
    const newProduct = {
        name: name,
        price: price,
        description: description
    };

    // Menambahkan produk baru ke array produk
    products.push(newProduct);

    // Memperbarui tampilan daftar produk
    displayProducts(products);
}
