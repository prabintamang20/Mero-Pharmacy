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