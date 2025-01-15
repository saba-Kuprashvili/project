const prevBtn = document.querySelector('.arrow-btn.left');
const nextBtn = document.querySelector('.arrow-btn.right');
const slider = document.querySelector('.product-slider');
let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
        slider.style.transform = `translateX(-${slideIndex * (289 + 20)}px)`;
    }
});

nextBtn.addEventListener('click', () => {
    if (slideIndex < 5) {
        slideIndex++;
        slider.style.transform = `translateX(-${slideIndex * (289 + 20)}px)`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const cartTotalElement = document.querySelector(".cart a");
    const cartIcon = document.querySelector(".cart span");
    const addToCartButtons = document.querySelectorAll(".hover-text");
    let cartTotal = 0;

    const updateCartDisplay = () => {
        cartTotalElement.textContent = `კალათა ${cartTotal.toFixed(2)}ლ`;
    };

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productCard = button.closest(".product-card");
            const priceElement = productCard.querySelector(".product-info span");
            const price = parseFloat(priceElement.textContent.replace("₾", ""));
            cartTotal += price;
            updateCartDisplay();
        });
    });

    cartIcon.addEventListener("click", () => {
        cartTotal = 0;
        updateCartDisplay();
    });

    updateCartDisplay();
});
