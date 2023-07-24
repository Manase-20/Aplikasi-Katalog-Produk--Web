// Simulasi data produk dari array
const products = [
    {
      name: "Produk 1",
      category: "elektronik",
      description: "Deskripsi produk 1."
    },
    {
      name: "Produk 2",
      category: "pakaian",
      description: "Deskripsi produk 2."
    },
    {
      name: "Produk 3",
      category: "alatrumahtangga",
      description: "Deskripsi produk 3."
    }
  ];
  
  // Fungsi untuk memfilter produk berdasarkan kategori
  function filterProducts(category) {
    const productList = document.getElementById("productList");
    
    // Menghapus produk yang sudah ditampilkan sebelumnya
    productList.innerHTML = "";
    
    // Menampilkan produk sesuai dengan kategori yang dipilih
    if (category === "") {
      // Jika kategori kosong, tampilkan semua produk
      products.forEach((product) => {
        createProductCard(product);
      });
    } else {
      // Jika kategori dipilih, tampilkan produk sesuai kategori
      const filteredProducts = products.filter((product) => {
        return product.category === category;
      });
      
      filteredProducts.forEach((product) => {
        createProductCard(product);
      });
    }
  }
  
  // Fungsi untuk membuat card produk
  function createProductCard(product) {
    const productList = document.getElementById("productList");
    
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-4 " + product.category;
    
    const card = document.createElement("div");
    card.className = "card";
    
    const img = document.createElement("img");
    img.src = "gambar-produk-1.jpg";
    img.className = "card-img-top";
    img.alt = product.name;
    
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = product.name;
    
    const description = document.createElement("p");
    description.className = "card-text";
    description.textContent = product.description;
    
    const buyBtn = document.createElement("a");
    buyBtn.href = "#";
    buyBtn.className = "btn btn-primary";
    buyBtn.textContent = "Beli";
    
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(buyBtn);
    
    card.appendChild(img);
    card.appendChild(cardBody);
    
    cardDiv.appendChild(card);
    
    productList.appendChild(cardDiv);
  }
  
  // Event listener untuk pencarian produk
  document.getElementById("searchBtn").addEventListener("click", function(event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    
    // Menghapus input pencarian setelah tombol Search ditekan
    searchInput.value = "";
    
    // Memfilter produk berdasarkan pencarian
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
    });
    
    // Menampilkan produk yang sesuai dengan pencarian
    filterProducts("");
    
    // Menampilkan pesan jika tidak ada hasil pencarian
    if (filteredProducts.length === 0) {
      const productList = document.getElementById("productList");
      const noResultText = document.createElement("p");
      noResultText.textContent = "Tidak ada hasil yang cocok dengan pencarian.";
      productList.appendChild(noResultText);
    }
  });
  
  // Event listener untuk pemilihan kategori
  document.getElementById("kategori").addEventListener("change", function(event) {
    const category = event.target.value;
    filterProducts(category);
  });
  