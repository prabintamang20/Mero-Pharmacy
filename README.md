# Mero Pharmacy – Online Pharmacy Website

![Mero Pharmacy Preview](https://via.placeholder.com/800x400?text=Mero+Pharmacy+Screenshot)

**Mero Pharmacy** is a modern, responsive front-end website for a local pharmacy. It allows users to browse medicines and wellness products, search for items, and manage a shopping cart. The site features a clean interface inspired by Nepali pharmacy stores and provides separate pages for Home, Medicines, Wellness, About, and Contact – all without page reloads.

## ✨ Features

- **Multi‑page navigation** – Switch between Home, Medicines, Wellness, About, and Contact seamlessly (single‑page application style).
- **Product catalog** – Display medicines, supplements, devices, and personal care items with icons, categories, and prices.
- **Search functionality** – Filter products in real time by name or category.
- **Shopping cart** – Add/remove items, adjust quantities, view total, and clear cart. Cart state is preserved during navigation.
- **Responsive design** – Works on desktops, tablets, and mobile devices.
- **Contact form** – Simple form with validation and success alert (demo purpose).
- **About page** – Information about the pharmacy’s mission and values.

## 🛠️ Technologies Used

- **HTML5** – Semantic structure.
- **CSS3** – Custom styling with Flexbox, Grid, and responsive media queries.
- **JavaScript (ES6)** – Dynamic content rendering, cart logic, event handling.
- **Font Awesome** – Icons for products and UI elements.
- **Google Fonts (Poppins)** – Modern typography.

mero-pharmacy/
│
├── index.html          # Main HTML file – contains the page skeleton, 
│                       # external font/icon links, and includes the CSS and JS files.
│
├── style.css           # All custom styles – layout, colors, typography, 
│                       # responsive design, and animations.
│
├── script.js           # JavaScript logic – product data, cart functionality,
│                       # dynamic page rendering (Home, Medicines, etc.),
│                       # search filtering, and event listeners.
│
└── README.md           # Project documentation (optional, for GitHub).

## 📁 Folder Structure

HTML CODE 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mero Pharmacy | स्वास्थ्य सेवा तपाईंको नजिक</title>
  <!-- Google Fonts & Font Awesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <!-- External CSS -->
  <link rel="stylesheet" href="pharmacy.css">
</head>
<body>
  <header>
    <div class="header-container">
      <div class="logo">
        <i class="fas fa-clinic-medical"></i>
        <span>Mero Pharmacy</span>
      </div>
      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Medicine</a>
        <a href="#">Wellness</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div class="header-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" id="searchInput" placeholder="Search medicine...">
        </div>
        <div class="cart-icon" id="cartIcon">
          <i class="fas fa-shopping-cart"></i>
          <span class="cart-count" id="cartCount">0</span>
        </div>
      </div>
    </div>
    <!-- Cart dropdown -->
    <div class="cart-dropdown" id="cartDropdown">
      <h4>
        Your Cart <i class="fas fa-times" id="closeCart"></i>
      </h4>
      <ul class="cart-items" id="cartItemsList">
        <!-- dynamic content -->
        <li style="text-align: center; color: #95a5a6;">Cart is empty</li>
      </ul>
      <div class="cart-total">
        <span>Total:</span>
        <span id="cartTotalAmount">रू0</span>
      </div>
      <button class="clear-cart" id="clearCartBtn"><i class="far fa-trash-alt"></i> Clear cart</button>
    </div>
  </header>

  <main>
    <!-- Hero section -->
    <section class="hero">
      <div class="hero-text">
        <h1>तपाईंको स्वास्थ्य, हाम्रो प्राथमिकता</h1>
        <p>Genuine medicine & healthcare products</p>
        <div class="hero-search">
          <input type="text" placeholder="Search by name or category" id="heroSearch">
          <button id="heroSearchBtn"><i class="fas fa-arrow-right"></i> Search</button>
        </div>
      </div>
      <div>
        <i class="fas fa-prescription-bottle" style="font-size: 7rem; color: #2c6e49; opacity: 0.7;"></i>
      </div>
    </section>

    <!-- Categories -->
    <div class="categories">
      <span class="category-pill"><i class="fas fa-capsules"></i> Medicine</span>
      <span class="category-pill"><i class="fas fa-leaf"></i> Supplement</span>
      <span class="category-pill"><i class="fas fa-hand-holding-heart"></i> Personal Care</span>
      <span class="category-pill"><i class="fas fa-kit-medical"></i> First Aid</span>
      <span class="category-pill"><i class="fas fa-heart-pulse"></i> Device</span>
    </div>

    <!-- Product grid title -->
    <div class="section-title">
      <i class="fas fa-tablets" style="color: #2ecc71;"></i> Popular Products
    </div>
    <div class="products-grid" id="productsGrid">
      <!-- JS will populate here -->
    </div>
  </main>

  <footer>
    <div class="footer-content">
      <div class="footer-col">
        <h4>Mero Pharmacy</h4>
        <p><i class="fas fa-map-marker-alt"></i> Putalisadak, Kathmandu</p>
        <p><i class="fas fa-phone-alt"></i> +977 1 4234567</p>
        <p><i class="fas fa-envelope"></i> care@meropharmacy.com</p>
      </div>
      <div class="footer-col">
        <h4>Quick links</h4>
        <p>About us</p>
        <p>Privacy policy</p>
        <p>Terms & conditions</p>
      </div>
      <div class="footer-col">
        <h4>We're available</h4>
        <p>Sun - Fri: 7am - 9pm</p>
        <p>Saturday: 8am - 6pm</p>
      </div>
    </div>
    <div class="copyright">
      © 2026 Mero Pharmacy — स्वास्थ्य सेवा तपाईंको निम्ति
    </div>
  </footer>

  <!-- External JavaScript -->
  <script src="pharmacy.js" defer></script>
</body>
</html>

CSS Code

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #f8f9fc;
  color: #1e2b3c;
  line-height: 1.5;
}

/* Header styles */
header {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0.8rem 2rem;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e7e34;
}

.logo i {
  font-size: 2.2rem;
  color: #2ecc71;
}

.logo span {
  background: linear-gradient(145deg, #1e7e34, #27ae60);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
  font-weight: 500;
}

.nav-links a {
  text-decoration: none;
  color: #2c3e50;
  transition: 0.2s;
  font-size: 1rem;
}

.nav-links a:hover {
  color: #27ae60;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.search-box {
  background: #f0f3f7;
  border-radius: 40px;
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  border: 1px solid #e0e7ef;
}

.search-box i {
  color: #7f8c8d;
  font-size: 1rem;
}

.search-box input {
  border: none;
  background: transparent;
  padding: 0.4rem 0.8rem;
  outline: none;
  width: 200px;
  font-size: 0.95rem;
}

.cart-icon {
  position: relative;
  cursor: pointer;
  font-size: 1.6rem;
  color: #2c3e50;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -10px;
  background: #e74c3c;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  min-width: 20px;
  text-align: center;
}

/* Cart dropdown */
.cart-dropdown {
  position: absolute;
  top: 70px;
  right: 2rem;
  width: 360px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
  padding: 1.2rem;
  display: none;
  z-index: 200;
  max-height: 500px;
  overflow-y: auto;
}

.cart-dropdown.show {
  display: block;
}

.cart-dropdown h4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #1e2b3c;
  border-bottom: 1px solid #ecf0f1;
  padding-bottom: 0.7rem;
}

.cart-dropdown h4 i {
  color: #95a5a6;
  cursor: pointer;
  font-size: 1.2rem;
}

.cart-items {
  list-style: none;
  margin-bottom: 1rem;
}

.cart-item {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f3f7;
}

.cart-item-img {
  width: 45px;
  height: 45px;
  background: #e8f5e9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #27ae60;
  font-size: 1.4rem;
}

.cart-item-details {
  flex: 1;
}

.cart-item-title {
  font-weight: 500;
  font-size: 0.9rem;
}

.cart-item-price {
  font-size: 0.85rem;
  color: #2ecc71;
  font-weight: 600;
}

.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cart-item-actions button {
  background: none;
  border: 1px solid #d0dae8;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  cursor: pointer;
  color: #4a5a6e;
  transition: 0.2s;
}

.cart-item-actions button:hover {
  background: #27ae60;
  color: white;
  border-color: #27ae60;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  padding: 1rem 0 0.5rem;
  border-top: 2px solid #ecf0f1;
}

.clear-cart {
  background: #f1f5f9;
  border: none;
  padding: 0.5rem;
  border-radius: 30px;
  width: 100%;
  font-weight: 500;
  color: #4b5e71;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: 0.2s;
}

.clear-cart:hover {
  background: #e74c3c;
  color: white;
}

/* Main container */
main {
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 2rem;
}

/* Hero banner */
.hero {
  background: linear-gradient(105deg, #d4efe2 0%, #b8e0cc 100%);
  border-radius: 28px;
  padding: 2.5rem 3rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hero-text h1 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #1e5631;
}

.hero-text p {
  font-size: 1.2rem;
  color: #2c6e49;
  margin-top: 0.3rem;
}

.hero-search {
  background: white;
  border-radius: 60px;
  padding: 0.4rem 0.4rem 0.4rem 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 18px rgba(0, 60, 30, 0.1);
  margin-top: 1.5rem;
  width: fit-content;
}

.hero-search input {
  border: none;
  outline: none;
  padding: 0.7rem 0.5rem;
  width: 260px;
  font-size: 1rem;
}

.hero-search button {
  background: #1e7e34;
  border: none;
  color: white;
  padding: 0.7rem 2rem;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.hero-search button:hover {
  background: #27ae60;
}

/* Categories */
.categories {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.category-pill {
  background: white;
  padding: 0.5rem 1.5rem;
  border-radius: 40px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  border: 1px solid #e2eaf1;
  cursor: default;
  transition: 0.1s;
  color: #2c3e50;
}

.category-pill i {
  margin-right: 8px;
  color: #27ae60;
}

/* Product grid */
.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 2rem 0 1.5rem;
  color: #1e3a2f;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 24px;
  padding: 1.5rem 1rem 1.2rem;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.04);
  transition: all 0.25s;
  text-align: center;
  border: 1px solid #ecf3fa;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 30px rgba(46, 204, 113, 0.1);
  border-color: #b3e0c9;
}

.product-icon {
  width: 90px;
  height: 90px;
  background: #e4f3e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #1e7e34;
  font-size: 2.5rem;
}

.product-name {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}

.product-category {
  color: #7f8c8d;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-price {
  font-weight: 700;
  font-size: 1.4rem;
  color: #1e7e34;
  margin: 0.7rem 0;
}

.add-to-cart {
  background: #1e7e34;
  color: white;
  border: none;
  padding: 0.7rem 0;
  border-radius: 40px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

.add-to-cart:hover {
  background: #27ae60;
}

/* Footer */
footer {
  background: #14221c;
  color: #ddd;
  padding: 2.5rem 2rem 1rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer-col p {
  margin: 0.5rem 0;
  color: #b0c4bc;
}

.footer-col i {
  margin-right: 10px;
  color: #27ae60;
}

.copyright {
  text-align: center;
  padding-top: 2rem;
  font-size: 0.9rem;
  color: #8a9e95;
}

/* Responsive */
@media (max-width: 700px) {
  .header-container {
    flex-direction: column;
    gap: 1rem;
  }
  .cart-dropdown {
    width: 300px;
    right: 5%;
  }
  .hero {
    flex-direction: column;
    text-align: center;
  }
  .hero-search {
    width: 100%;
  }
  .hero-search input {
    width: 100%;
  }
}

JavaScript Code

document.addEventListener('DOMContentLoaded', function() {
  // ---------- PRODUCT DATA ----------
  const products = [
    { id: 1, name: "Paracetamol 500mg", price: 50, category: "Medicine", icon: "fa-capsules" },
    { id: 2, name: "Vitamin C 1000mg", price: 120, category: "Supplement", icon: "fa-pills" },
    { id: 3, name: "Hand Sanitizer 500ml", price: 200, category: "Personal Care", icon: "fa-hand-holding-heart" },
    { id: 4, name: "Face Mask (50 pcs)", price: 300, category: "Personal Care", icon: "fa-head-side-mask" },
    { id: 5, name: "First Aid Kit", price: 500, category: "Medical Supplies", icon: "fa-kit-medical" },
    { id: 6, name: "Blood Pressure Monitor", price: 2500, category: "Device", icon: "fa-heart-pulse" },
    { id: 7, name: "Omeprazole 20mg", price: 80, category: "Medicine", icon: "fa-capsules" },
    { id: 8, name: "Digital Thermometer", price: 400, category: "Device", icon: "fa-temperature-high" }
  ];

  // ---------- CART STATE ----------
  let cart = []; // each item: { id, name, price, quantity, icon }

  // ---------- DOM ELEMENTS ----------
  const productsGrid = document.getElementById('productsGrid');
  const cartIcon = document.getElementById('cartIcon');
  const cartDropdown = document.getElementById('cartDropdown');
  const closeCart = document.getElementById('closeCart');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotalAmount = document.getElementById('cartTotalAmount');
  const cartCountSpan = document.getElementById('cartCount');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const searchInput = document.getElementById('searchInput');
  const heroSearch = document.getElementById('heroSearch');
  const heroSearchBtn = document.getElementById('heroSearchBtn');

  // ---------- HELPER FUNCTIONS ----------
  function updateCartCount() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCountSpan.textContent = totalItems;
  }

  function updateCartDisplay() {
    if (cart.length === 0) {
      cartItemsList.innerHTML = '<li style="text-align: center; color: #95a5a6; padding: 1rem;">Cart is empty</li>';
      cartTotalAmount.textContent = 'रू0';
      return;
    }

    let html = '';
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
      html += `
        <li class="cart-item" data-id="${item.id}">
          <div class="cart-item-img"><i class="fas ${item.icon}"></i></div>
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">रू${item.price} x ${item.quantity}</div>
          </div>
          <div class="cart-item-actions">
            <button class="cart-item-remove" data-id="${item.id}"><i class="fas fa-minus"></i></button>
            <span>${item.quantity}</span>
            <button class="cart-item-add" data-id="${item.id}"><i class="fas fa-plus"></i></button>
          </div>
        </li>
      `;
    });
    cartItemsList.innerHTML = html;
    cartTotalAmount.textContent = `रू${total}`;
  }

  function renderProducts(filterText = '') {
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(filterText.toLowerCase()) ||
      p.category.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
      productsGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:3rem;">No products match your search.</div>';
      return;
    }

    let gridHtml = '';
    filtered.forEach(prod => {
      gridHtml += `
        <div class="product-card" data-id="${prod.id}">
          <div class="product-icon"><i class="fas ${prod.icon}"></i></div>
          <div class="product-name">${prod.name}</div>
          <div class="product-category">${prod.category}</div>
          <div class="product-price">रू${prod.price}</div>
          <button class="add-to-cart" data-id="${prod.id}"><i class="fas fa-cart-plus"></i> Add</button>
        </div>
      `;
    });
    productsGrid.innerHTML = gridHtml;
  }

  // ---------- CART OPERATIONS ----------
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        icon: product.icon
      });
    }
    updateCartCount();
    updateCartDisplay();
  }

  function removeOneFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
    }
    updateCartCount();
    updateCartDisplay();
  }

  function clearCart() {
    cart = [];
    updateCartCount();
    updateCartDisplay();
  }

  // ---------- EVENT LISTENERS ----------

  // Product grid add-to-cart delegation
  productsGrid.addEventListener('click', (e) => {
    const addButton = e.target.closest('.add-to-cart');
    if (addButton) {
      const productId = parseInt(addButton.getAttribute('data-id'));
      addToCart(productId);
    }
  });

  // Cart dropdown actions delegation (remove/add)
  cartItemsList.addEventListener('click', (e) => {
    if (e.target.closest('.cart-item-remove')) {
      const btn = e.target.closest('.cart-item-remove');
      const id = parseInt(btn.getAttribute('data-id'));
      removeOneFromCart(id);
    }
    if (e.target.closest('.cart-item-add')) {
      const btn = e.target.closest('.cart-item-add');
      const id = parseInt(btn.getAttribute('data-id'));
      addToCart(id);
    }
  });

  // Toggle cart dropdown
  cartIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    cartDropdown.classList.toggle('show');
  });

  closeCart.addEventListener('click', () => {
    cartDropdown.classList.remove('show');
  });

  // Click outside to close
  document.addEventListener('click', (e) => {
    if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
      cartDropdown.classList.remove('show');
    }
  });

  // Clear cart button
  clearCartBtn.addEventListener('click', () => {
    clearCart();
  });

  // Search functionality
  function performSearch() {
    const query = searchInput.value.trim();
    renderProducts(query);
  }

  searchInput.addEventListener('input', performSearch);
  heroSearchBtn.addEventListener('click', () => {
    const query = heroSearch.value.trim();
    searchInput.value = query;   // sync both search boxes
    renderProducts(query);
  });
  heroSearch.addEventListener('input', (e) => {
    searchInput.value = e.target.value;
    renderProducts(e.target.value);
  });

  // Initialize
  renderProducts();
  updateCartCount();
  updateCartDisplay();
});

