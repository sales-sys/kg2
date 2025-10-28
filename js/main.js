// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('kg-cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('kg-cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show notification
    alert('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('kg-cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('kg-cart', JSON.stringify(cart));
        }
    }
    updateCartCount();
}

function getCart() {
    return cart;
}

function clearCart() {
    cart = [];
    localStorage.setItem('kg-cart', JSON.stringify(cart));
    updateCartCount();
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

// Expose functions globally
window.KG = {
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCart,
    clearCart,
    getCartTotal,
    updateCartCount
};
