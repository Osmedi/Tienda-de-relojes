
// Preloader
window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 1500);
});

// Theme Toggle
const themeCheckbox = document.getElementById('theme-checkbox');
const htmlElement = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  htmlElement.setAttribute('data-theme', 'dark');
  themeCheckbox.checked = true;
}

themeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    htmlElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
});

// Mobile Menu Toggle
function toggleMenu() {
    const navContent = document.querySelector('.nav-content');
    navContent.classList.toggle('active');
    event.stopPropagation();
}

document.addEventListener('click', function(e) {
    const navContent = document.querySelector('.nav-content');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (!e.target.closest('.nav-content') && !e.target.closest('.mobile-menu-toggle') && navContent.classList.contains('active')) {
        navContent.classList.remove('active');
    }
});

// Product Data (updated for smartwatches)
const products = [
    {
        id: 1,
        name: "Apple Watch Series 9",
        price: 10999,
        originalPrice: 12999,
        category: "smartwatches",
        images: [
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-45-nc-alum-midnight-sport-band-midnight-s9?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=MlhKWC9ONnZOT3ByN1d2ZXZ3bUZWa0ZJcTJmVnkremtWQnhKNWcvRmM5V1ZpQ0lZaUJoMkFockVLc1FVdGZYWG5TWi9LS0E1SGVGS0xvbFN5RUZuMzdyOHVPU1JYbmpuZ2tHQnprWWtiamdqNisyR1pQVWlRTHlET0NaY0FhYUJOUXFocFYzU3dEdW03ZSt4RnJ3OGV3",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-45-nc-alum-midnight-sport-band-midnight-s9_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=MlhKWC9ONnZOT3ByN1d2ZXZ3bUZWa0ZJcTJmVnkremtWQnhKNWcvRmM5V1ZpQ0lZaUJoMkFockVLc1FVdGZYWFBJdm5GOVR0aHFoaXIrVTNvWXZSZEFrblR2MzBEQmVEYmt3OUsyRTk5T2lRU2tPNUhYL1NFU3o2WHN5Z09RWS93OVpyRDFVdG56OExySzJpVWttQ1ln",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-45-nc-alum-midnight-sport-band-midnight-s9_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=MlhKWC9ONnZOT3ByN1d2ZXZ3bUZWa0ZJcTJmVnkremtWQnhKNWcvRmM5V1ZpQ0lZaUJoMkFockVLc1FVdGZYWHNMQUkrcW5XZVcvcUJLUWl1d1RmMWdrblR2MzBEQmVEYmt3OUsyRTk5T2lRU2tPNUhYL1NFU3o2WHN5Z09RWS8ybUV6N3lZMUFTQTZEenhINWxVT3ZR"
        ],
        specs: {
            pantalla: "Always-On Retina Display (hasta 2000 nits)",
            procesador: "S9 SiP con Neural Engine de 4 núcleos",
            almacenamiento: "64GB",
            bateria: "Hasta 18 horas (36 horas en modo de bajo consumo)",
            sistema: "watchOS 10",
            conectividad: "GPS, Cellular (opcional), Wi-Fi, Bluetooth 5.3",
            resistencia: "Resistencia al agua de 50m"
        },
        features: [
            "Medición de oxígeno en sangre",
            "Electrocardiograma (ECG)",
            "Sensor de temperatura",
            "Detección de accidentes y caídas",
            "Control por gestos con 'Doble Toque'",
            "Siri en el dispositivo",
            "GPS de precisión",
            "Brújula y función 'Retornar'"
        ],
        rating: 5,
        reviews: 12,
        badge: "Nuevo",
        isBestseller: true,
        isOffer: false
    },
    {
        id: 2,
        name: "Samsung Galaxy Watch 6 Classic",
        price: 7999,
        originalPrice: 9500,
        category: "smartwatches",
        images: [
            "https://www.gizerler.com/assets/product-images/141000/samsung-watch6-classicsm-r960nzsatur-47-mm-gumus-akilli-saat_79336.jpg",
            "https://www.gizerler.com/assets/product-images/141000/samsung-watch6-classicsm-r960nzsatur-47-mm-gumus-akilli-saat_79338.jpg",
            "https://www.gizerler.com/assets/product-images/141000/samsung-watch6-classicsm-r960nzsatur-47-mm-gumus-akilli-saat_79340.jpg"
        ],
        specs: {
            pantalla: "Super AMOLED (hasta 2000 nits) con bisel giratorio",
            procesador: "Exynos W930 Dual-Core 1.4GHz",
            memoria: "2GB RAM + 16GB Almacenamiento",
            bateria: "Hasta 30 horas (40 horas con Always-On Display desactivado)",
            sistema: "Wear OS Powered by Samsung (One UI Watch 5)",
            conectividad: "GPS, NFC, Bluetooth 5.3, Wi-Fi",
            resistencia: "Resistencia al agua 5 ATM + IP68"
        },
        features: [
            "Medición de composición corporal (BIA)",
            "Electrocardiograma (ECG)",
            "Sensor de frecuencia cardíaca",
            "Monitoreo avanzado del sueño",
            "Detección de caídas",
            "Pago sin contacto con Samsung Pay / Google Wallet",
            "Compatible con correas estándar de 20mm"
        ],
        rating: 4,
        reviews: 9,
        badge: "Oferta",
        isBestseller: true,
        isOffer: true
    },
    {
        id: 3,
        name: "Garmin Fenix 7 Pro",
        price: 21500,
        originalPrice: 25000,
        category: "smartwatches",
        images: [
            "https://www.garmin.co.id/m/id/g/products/fenix-7-pro-sapphire-carbongray-cf-lg.jpg",
            "https://www.garmin.co.id/m/id/g/products/fenix-7-pro-sapphire-carbongray-pd-01-lg.jpg",
            "https://www.garmin.co.id/m/id/g/products/fenix-7-pro-sapphire-carbongray-pd-03-lg.jpg"
        ],
        specs: {
            pantalla: "Memory-in-Pixel (MIP) transflectiva con carga solar",
            materiales: "Caja de polímero reforzado con fibra, bisel de acero o titanio",
            bateria: "Hasta 18 días (22 días con carga solar) en modo smartwatch",
            gps: "GPS, GLONASS, Galileo multibanda",
            resistencia: "10 ATM",
            sensores: "Frecuencia cardíaca, Pulse Ox, altímetro barométrico, brújula, giroscopio, acelerómetro, termómetro"
        },
        features: [
            "Linterna LED integrada",
            "Puntuación de pendiente y resistencia",
            "Métricas de rendimiento avanzadas (VO2 Max, estado de entrenamiento)",
            "Mapas TopoActive precargados",
            "Garmin Pay (pagos sin contacto)",
            "Aplicaciones deportivas precargadas (carrera, ciclismo, natación, etc.)",
            "Monitor de energía Body Battery",
            "Seguimiento del sueño y estrés"
        ],
        rating: 5,
        reviews: 7,
        badge: "Top Ventas",
        isBestseller: true,
        isOffer: false
    },
    {
        id: 4,
        name: "Fitbit Sense 2",
        price: 5200,
        originalPrice: 6500,
        category: "smartwatches",
        images: [
            "https://www.jbhifi.com.au/cdn/shop/products/601075-Product-0-I-637968695577262409.jpg?v=1661320407",
            "https://www.jbhifi.com.au/cdn/shop/products/601074-Product-7-I-637968693783805471.jpg?v=1661320419",
            "https://www.jbhifi.com.au/cdn/shop/products/601074-Product-8-I-637968693778649193.jpg?v=1661320419"
        ],
        specs: {
            pantalla: "AMOLED con Always-On Display",
            bateria: "Más de 6 días con carga rápida",
            conectividad: "Bluetooth 5.0, Wi-Fi, GPS integrado, NFC",
            resistencia: "Resistencia al agua de 50m",
            sensores: "EDA (actividad electrodérmica) para manejo de estrés, frecuencia cardíaca, temperatura cutánea"
        },
        features: [
            "Monitoreo de estrés durante todo el día con cEDA",
            "Notificaciones de frecuencia cardíaca alta/baja",
            "Seguimiento avanzado del sueño",
            "GPS integrado para seguimiento de ritmo y distancia",
            "Pagos con Fitbit Pay",
            "Alertas y notificaciones inteligentes",
            "Compatible con iOS y Android"
        ],
        rating: 4,
        reviews: 5,
        badge: "Oferta",
        isBestseller: false,
        isOffer: true
    },
    {
        id: 5,
        name: "Huawei Watch GT 4",
        price: 5999,
        originalPrice: 7000,
        category: "smartwatches",
        images: [
            "https://www.vopmart.com/media/wysiwyg/Huawei/Huawei-Watch-GT4-08.jpg",
            "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt4/watch-gt4-g/images/sec5/huawei-watch-gt4-quick-message-reply.webp",
            "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt4/watch-gt4-g/images/sec5/huawei-watch-gt4-calendar-app.webp"
        ],
        specs: {
            pantalla: "AMOLED de 1.43 pulgadas (466 x 466 píxeles)",
            bateria: "Hasta 14 días de duración",
            conectividad: "Bluetooth, GPS, NFC",
            resistencia: "Resistencia al agua de 5 ATM",
            compatibilidad: "Android e iOS"
        },
        features: [
            "Seguimiento de la salud TruSeen™ 5.5+",
            "Gestión del ciclo menstrual 3.0",
            "Monitorización del sueño TruSleep™ 3.0",
            "Más de 100 modos de entrenamiento",
            "Calorías en un vistazo",
            "Respuestas rápidas personalizadas (solo Android)",
            "Llamadas Bluetooth"
        ],
        rating: 4,
        reviews: 6,
        badge: "Promoción",
        isBestseller: false,
        isOffer: true
    }
];

let cart = [];
let currentCarousels = {};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts('all');
    renderOffers();
    renderBestsellers();
    updateCartUI();
});

// Render Products
function renderProducts(category = 'all') {
    const grid = document.getElementById('productsGrid');
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    
    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeCarousels();
}

function renderOffers() {
    const grid = document.getElementById('offersGrid');
    // Filtrar productos en oferta y limitar a 3
    const offers = products.filter(p => p.isOffer).slice(0, 3);
    
    grid.innerHTML = offers.length > 0 
        ? offers.map(product => createProductCard(product)).join('')
        : '<p class="no-products">No hay ofertas disponibles en este momento</p>';
    
    initializeCarousels();
}

function renderBestsellers() {
    const grid = document.getElementById('bestsellersGrid');
    // Filtrar más vendidos y limitar a 3
    const bestsellers = products.filter(p => p.isBestseller).slice(0, 3);
    
    grid.innerHTML = bestsellers.length > 0
        ? bestsellers.map(product => createProductCard(product)).join('')
        : '<p class="no-products">No hay productos más vendidos disponibles</p>';
    
    initializeCarousels();
}
// Create Product Card
function createProductCard(product) {
    const starsHtml = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    const badgeHtml = product.badge ? `<div class="product-badge ${product.isBestseller ? 'bestseller' : ''}">${product.badge}</div>` : '';
    const originalPriceHtml = product.originalPrice ? `<span class="original-price">L.${product.originalPrice}</span>` : '';
    
    return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            ${badgeHtml}
            <div class="product-carousel">
                <div class="carousel-container" id="carousel-${product.id}">
                    ${product.images.map(img => `<img src="${img}" alt="${product.name}" class="carousel-image">`).join('')}
                </div>
                <button class="carousel-nav carousel-prev" onclick="event.stopPropagation(); prevImage(${product.id})">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="carousel-nav carousel-next" onclick="event.stopPropagation(); nextImage(${product.id})">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="stars">${starsHtml} <span class="reviews-count">(${product.reviews})</span></div>
                <div class="product-price">
                    ${originalPriceHtml} L.${product.price}
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Agregar
                </button>
            </div>
        </div>
    `;
}

// Initialize Carousels
function initializeCarousels() {
    products.forEach(product => {
        currentCarousels[product.id] = 0;
    });
}

// Carousel Navigation
function nextImage(productId) {
    const product = products.find(p => p.id === productId);
    const carousel = document.getElementById(`carousel-${productId}`);
    
    currentCarousels[productId] = (currentCarousels[productId] + 1) % product.images.length;
    carousel.style.transform = `translateX(-${currentCarousels[productId] * 100}%)`;
}

function prevImage(productId) {
    const product = products.find(p => p.id === productId);
    const carousel = document.getElementById(`carousel-${productId}`);
    
    currentCarousels[productId] = currentCarousels[productId] === 0 ? product.images.length - 1 : currentCarousels[productId] - 1;
    carousel.style.transform = `translateX(-${currentCarousels[productId] * 100}%)`;
}

// Filter Products
function filterProducts(category) {
    event.stopPropagation();
    
    // 1. Aplicar el filtro de categoría
    const grid = document.getElementById('productsGrid');
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeCarousels();
    
    // 2. Desplazamiento suave a la sección de productos
    const productsSection = document.getElementById('productos');
    const headerHeight = document.querySelector('.glass-header').offsetHeight;
    const offsetPosition = productsSection.offsetTop - headerHeight - 20; // 20px de margen
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}
// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    
    // Success animation
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> ¡Agregado!';
    button.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.backgroundColor = '';
    }, 1500);
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Toggle Cart
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    
    if (modal.style.display === 'block') {
        renderCartItems();
    }
    
    event.stopPropagation();
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    const modals = ['cartModal', 'productModal', 'tradeInModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Render Cart Items
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #777;">Tu carrito está vacío</p>';
        cartTotal.innerHTML = '';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.images[0]}" alt="${item.name}">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">L.${item.price} c/u</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    cartTotal.innerHTML = `Total: L.${total.toFixed(2)}`;
}

// Update Quantity
function updateQuantity(productId, change) {
    event.stopPropagation();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
            renderCartItems();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    event.stopPropagation();
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    renderCartItems();
}

// Checkout Form
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const formData = new FormData(this);
    const customerName = formData.get('customerName');
    const customerPhone = formData.get('customerPhone');
    const customerAddress = formData.get('customerAddress');
    const customerNotes = formData.get('customerNotes');
    const paymentMethod = formData.get('paymentMethod');
    
    const paymentMethods = {
        'bac': 'Tarjeta Bac',
        'ficohsa': 'Tarjeta Ficohsa',
        'amex': 'American Express',
        'transferencia': 'Transferencia Bancaria',
        'efectivo': 'Efectivo'
    };
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const productsList = cart.map(item =>
        `• ${item.name} x${item.quantity} = L.${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
 const message = `🛍️ *RECIBO DE COMPRA - OsmediLopez* 🛍️\n\n` +
        `📅 *Fecha:* ${new Date().toLocaleDateString()}\n` +
        `🆔 *No. Pedido:* ${Math.floor(1000 + Math.random() * 9000)}\n\n` +
        `👤 *Cliente:* ${customerName}\n` +
        `📱 *Teléfono:* ${customerPhone}\n` +
        `📍 *Dirección:* ${customerAddress}\n\n` +
        `💳 *Método de Pago:* ${paymentMethods[paymentMethod]}\n\n` +
        `📝 *Notas:* ${customerNotes || 'Ninguna'}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `🛒 *DETALLE DEL PEDIDO*\n\n` +
        `${cart.map(item => 
            `▫️ ${item.name} x${item.quantity} = L.${(item.price * item.quantity).toLocaleString()}\n` +
            `   (L.${item.price.toLocaleString()} c/u)\n`
        ).join('')}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `💰 *Subtotal:* L.${total.toLocaleString()}\n` +
        `🚚 *Envío:* Por calcular\n` +
        `💵 *Total:* L.${total.toLocaleString()}\n\n` +
        `📦 *Método de Envío:* ${customerAddress ? 'Envío a domicilio' : 'Recoger en tienda'}\n\n` +
        `¡Gracias por tu compra! 🎉\n` +
        `En breve nos comunicaremos para confirmar tu pedido.`;
    
    // Mensaje más breve para el cliente
    const customerMessage = `✅ *¡Gracias por tu compra en OsmediLopez!*\n\n` +
        `Hemos recibido tu pedido #${Math.floor(1000 + Math.random() * 9000)}\n\n` +
        `📦 *Productos:* ${cart.reduce((sum, item) => sum + item.quantity, 0)}\n` +
        `💰 *Total:* L.${total.toLocaleString()}\n\n` +
        `📲 Te contactaremos pronto para confirmar los detalles.\n` +
        `¡Gracias por confiar en nosotros! ❤️`;

    
    const whatsappNumber = '50493756789';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
    
    cart = [];
    updateCartUI();
    toggleCart();
    this.reset();
    
    alert('¡Pedido enviado! Te redirigimos a WhatsApp para confirmar tu orden.');
});

// Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('productModalBody');
    
    modalBody.innerHTML = `
        <div class="product-modal-images">
            <div class="product-modal-main-image">
                <img src="${product.images[0]}" alt="${product.name}" id="productMainImage">
            </div>
            <div class="product-modal-thumbnails">
                ${product.images.map((img, index) => `
                    <div class="product-modal-thumbnail ${index === 0 ? 'active' : ''}" 
                         onclick="changeProductImage('${img}', this)">
                        <img src="${img}" alt="${product.name}">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="product-modal-info">
            <div class="product-modal-details">
                <h2 class="product-modal-title">${product.name}</h2>
                <div class="stars">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)} 
                    <span class="reviews-count">(${product.reviews} reseñas)</span>
                </div>
                <div class="product-modal-price">
                    ${product.originalPrice ? `<span class="original-price">L.${product.originalPrice}</span>` : ''}
                    L.${product.price}
                </div>
                
                <div class="product-modal-specs">
                    <h3>Especificaciones técnicas</h3>
                    <div class="specs-grid">
                        ${Object.entries(product.specs || {}).map(([key, value]) => `
                            <div class="spec-item">
                                <span class="spec-key">${key}:</span>
                                <span class="spec-value">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="product-modal-features">
                    <h3>Características principales</h3>
                    <ul>
                        ${(product.features || []).map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <button class="add-to-cart" onclick="addToCart(${product.id}); closeProductModal()">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
            <div class="product-modal-sidebar">
                <div class="delivery-options">
                    <h3><i class="fas fa-truck"></i> Opciones de entrega</h3>
                    <div class="delivery-option">
                        <i class="fas fa-store"></i> Recogida en tienda: <strong>Gratis</strong>
                    </div>
                    <div class="delivery-option">
                        <i class="fas fa-shipping-fast"></i> Envío estándar: <strong>L100 - 200 (demora 24 Hrs)</strong>
                    </div>
                    <div class="delivery-option">
                        <i class="fas fa-rocket"></i> Envío a Roatan: <strong>L1500 (24 horas)</strong>
                    </div>
                </div>
                
                <div class="warranty-info">
                    <h3><i class="fas fa-shield-alt"></i> Garantía</h3>
                    <p>12 meses de garantía del fabricante</p>
                    <p>30 días para devoluciones</p>

                    <h3 style="margin-top: 1.5rem;">¿Necesitas ayuda?</h3>
                    <p>Contáctanos para más información sobre este producto:</p>
                    <button type="button" class="btn-whatsapp" onclick="window.open('https://wa.me/50496811650?text=Hola,%20tengo%20una%20pregunta%20sobre%20el%20producto%20${encodeURIComponent(product.name)}')">
                        <i class="fab fa-whatsapp"></i> Chatear por WhatsApp
                    </button>
                </div>
                
                <div class="share-buttons">
                    <h3>Compartir producto</h3>
                    <div class="share-icons">
                        <a href="#" class="share-icon whatsapp"><i class="fab fa-whatsapp"></i></a>
                        <a href="#" class="share-icon facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="share-icon twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="share-icon pinterest"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Setup share buttons
    setupShareButtons(product);
    
    modal.style.display = 'block';
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

function changeProductImage(imgSrc, element) {
    document.getElementById('productMainImage').src = imgSrc;
    document.querySelectorAll('.product-modal-thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    element.classList.add('active');
}

function setupShareButtons(product) {
    const productUrl = encodeURIComponent(window.location.href.split('#')[0] + `?product=${product.id}`);
    const productTitle = encodeURIComponent(product.name);
    const productImage = encodeURIComponent(product.images[0]);
    
    document.querySelector('.share-icons .whatsapp')?.setAttribute('href',
        `https://wa.me/?text=Mira%20este%20producto:%20${productTitle}%20${productUrl}`);
    
    document.querySelector('.share-icons .facebook')?.setAttribute('href',
        `https://www.facebook.com/sharer/sharer.php?u=${productUrl}`);
    
    document.querySelector('.share-icons .twitter')?.setAttribute('href',
        `https://twitter.com/intent/tweet?text=Mira%20este%20producto:%20${productTitle}&url=${productUrl}`);
    
    document.querySelector('.share-icons .pinterest')?.setAttribute('href',
        `https://pinterest.com/pin/create/button/?url=${productUrl}&media=${productImage}&description=${productTitle}`);
}

// Trade-In Modal
function toggleTradeInModal() {
    const modal = document.getElementById('tradeInModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation();
}

function closeTradeInModal() {
    document.getElementById('tradeInModal').style.display = 'none';
}

document.getElementById('tradeInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        model: document.getElementById('deviceModel').value,
        year: document.getElementById('deviceYear').value,
        condition: document.getElementById('deviceCondition').value,
        boxPapers: document.getElementById('boxPapers').value,
        notes: document.getElementById('additionalNotes').value
    };
    
    const message = `⌚ *SOLICITUD DE PERMUTA - OsmediLopez Relojería* ⌚\n\n` +
        `*Modelo:* ${formData.model}\n` +
        `*Año:* ${formData.year}\n` +
        `*Estado:* ${formData.condition}\n` +
        `*Caja y papeles:* ${formData.boxPapers}\n` +
        `*Notas:* ${formData.notes || 'Ninguna'}\n\n` +
        `ℹ️ *Por favor envía fotos del reloj en este chat*`;
    
    const whatsappNumber = "50496811650";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    this.reset();
    closeTradeInModal();
});

// Search Functionality
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    const results = searchProducts(searchTerm);
    const grid = document.getElementById('productsGrid');
    
    if (results.length > 0) {
        grid.innerHTML = results.map(product => createProductCard(product)).join('');
        initializeCarousels();
    } else {
        grid.innerHTML = `
            <div class="no-results-message">
                <p>No encontramos resultados para "${searchTerm}"</p>
                <button onclick="filterProducts('all')" class="btn-primary">
                    Ver todos los productos
                </button>
            </div>
        `;
    }
    
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

function searchProducts(term) {
    if (!term.trim()) return [];
    
    const normalizedTerm = term.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    return products.map(product => {
        let score = 0;
        
        if (product.name.toLowerCase().includes(normalizedTerm)) score += 5;
        
        const nameWords = product.name.toLowerCase().split(' ');
        if (nameWords.some(word => word.startsWith(normalizedTerm))) score += 4;
        
        if (product.category.toLowerCase().includes(normalizedTerm)) score += 3;
        
        if (product.name.toLowerCase().includes(normalizedTerm.substring(0, 3))) score += 2;
        
        return { ...product, score };
    })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => {
            const { score, ...product } = item;
            return product;
        });
}

function showSuggestions(term) {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (!term || term.length < 2) {
        suggestionsContainer.style.display = 'none';
        return;
    }
    
    const results = searchProducts(term).slice(0, 5);
    suggestionsContainer.innerHTML = '';
    
    if (results.length > 0) {
        results.forEach(product => {
            const suggestion = document.createElement('div');
            suggestion.className = 'search-suggestion';
            suggestion.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="suggestion-info">
                    <div class="suggestion-name">${product.name}</div>
                    <div class="suggestion-category">${formatCategory(product.category)}</div>
                </div>
            `;
            suggestion.addEventListener('click', () => {
                document.getElementById('searchInput').value = product.name;
                performSearch();
                suggestionsContainer.style.display = 'none';
            });
            suggestionsContainer.appendChild(suggestion);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

function formatCategory(category) {
    const categories = {
        'smartphones': 'Teléfonos',
        'laptops': 'Laptops',
        'accesorios': 'Accesorios',
        'gaming': 'Gaming'
    };
    return categories[category] || category;
}

// Event Listeners
document.getElementById('searchButton').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.getElementById('searchInput').addEventListener('input', function(e) {
    showSuggestions(this.value);
    if (this.value.length === 0) renderProducts('all');
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
        document.getElementById('searchSuggestions').style.display = 'none';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Auto-rotate carousels
setInterval(() => {
    products.forEach(product => {
        if (Math.random() > 0.7) {
            nextImage(product.id);
        }
    });
}, 5000);

// Minimal Filter Functionality
function toggleFilterDropdown() {
    const dropdown = document.getElementById('filterDropdown');
    dropdown.classList.toggle('show');
    event.stopPropagation();
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('filterDropdown');
    if (!e.target.closest('.filter-dropdown') && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});

function applyMinimalFilters() {
    const category = document.getElementById('categoryFilter').value;
    const maxPrice = document.getElementById('priceFilter').value;
    const sortBy = document.getElementById('sortFilter').value;
    
    // Apply filters
    let filteredProducts = [...products];
    
    // Filter by category
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    // Filter by price
    if (maxPrice !== '0') {
        filteredProducts = filteredProducts.filter(p => p.price <= parseInt(maxPrice));
    }
    
    // Sort products
    switch(sortBy) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Default sorting (keep original order)
            break;
    }
    
    // Render filtered products
    renderFilteredProducts(filteredProducts);
    
    // Update active filters display
    updateActiveFilters(category, maxPrice, sortBy);
    
    // Close dropdown
    document.getElementById('filterDropdown').classList.remove('show');
    
    // Scroll to products section
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

function updateActiveFilters(category, maxPrice, sortBy) {
    const activeFiltersContainer = document.getElementById('activeFilters');
    activeFiltersContainer.innerHTML = '';
    
    // Category filter
    if (category !== 'all') {
        const categoryName = {
            'smartphones': 'Smartphones',
            'laptops': 'Laptops',
            'accesorios': 'Accesorios',
            'gaming': 'Gaming'
        }[category];
        
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `
            ${categoryName}
            <span class="remove-filter" onclick="removeFilter('category')">&times;</span>
        `;
        activeFiltersContainer.appendChild(tag);
    }
    
    // Price filter
    if (maxPrice !== '0') {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `
            Hasta L.${parseInt(maxPrice).toLocaleString()}
            <span class="remove-filter" onclick="removeFilter('price')">&times;</span>
        `;
        activeFiltersContainer.appendChild(tag);
    }
    
    // Sort filter
    if (sortBy !== 'default') {
        const sortName = {
            'price-asc': 'Menor precio',
            'price-desc': 'Mayor precio',
            'rating': 'Mejor valorados'
        }[sortBy];
        
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `
            ${sortName}
            <span class="remove-filter" onclick="removeFilter('sort')">&times;</span>
        `;
        activeFiltersContainer.appendChild(tag);
    }
}

function removeFilter(type) {
    switch(type) {
        case 'category':
            document.getElementById('categoryFilter').value = 'all';
            break;
        case 'price':
            document.getElementById('priceFilter').value = '0';
            break;
        case 'sort':
            document.getElementById('sortFilter').value = 'default';
            break;
    }
    
    //filters
    applyMinimalFilters();
    event.stopPropagation();
}

function renderFilteredProducts(filteredProducts) {
    const grid = document.getElementById('productsGrid');
    
    if (filteredProducts.length > 0) {
        grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
        initializeCarousels();
    } else {
        grid.innerHTML = `
            <div class="no-results-message">
                <p>No encontramos productos con los filtros seleccionados</p>
                <button onclick="resetMinimalFilters()" class="btn-primary">
                    Limpiar filtros
                </button>
            </div>
        `;
    }
}

function resetMinimalFilters() {
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('priceFilter').value = '0';
    document.getElementById('sortFilter').value = 'default';
    
    applyMinimalFilters();
}

