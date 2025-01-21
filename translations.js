const translations = {
    "geo": {
        "auth": "ავტორიზაცია",
        "reg": "რეგისტრაცია",
        "search-placeholder": "ძებნა",
        "cart-text": "კალათა",
        "nav-home": "მთავარი",
        "nav-info": "ძირითადი ინფორმაცია",
        "nav-news": "სიახლეები",
        "nav-vacancies": "ვაკანსიები",
        "nav-contact": "კონტაქტი",
        "maintenance": "ავტომობილის მოვლა",
        "lights": "ნათურები",
        "chemistry": "ავტოქიმია",
        "popular": "გაყიდვადი პროდუქტები",
        "add-cart": "კალათაში დამატება",
        "contact-info": "საკონტაქტო ინფორმაცია",
        "pages": "გვერდები",
        "services": "სერვისები",
        "rules": "წესები და პირობები",
        "delivery": "მიწოდების პირობები",
        "privacy": "კონფიდენციალურობის პოლიტიკა",
        "return": "უკან დაბრუნება",
        "schedule": "ორშ-კვირა 10:00-18:30",
        "footer-home": "მთავარი",
        "footer-info": "ძირითადი ინფორმაცია",
        "footer-news": "სიახლეები",
        "footer-vacancies": "ვაკანსიები",
        "footer-contact": "კონტაქტი",
        "address": "საქართველო, თბილისი, ბალანჩინის N18",
        "phone": "0322 233 133",
        "email": "autopia@autopia.ge",
        "work-hours": "ორშ-კვირა 10:00-18:30"
    },
    "eng": {
        "auth": "Authorization",
        "reg": "Registration",
        "search-placeholder": "Search",
        "cart-text": "Cart",
        "nav-home": "Home",
        "nav-info": "Main Information",
        "nav-news": "News",
        "nav-vacancies": "Vacancies",
        "nav-contact": "Contact",
        "maintenance": "Car Maintenance",
        "lights": "Lights",
        "chemistry": "Auto Chemistry",
        "popular": "Popular Products",
        "add-cart": "Add to Cart",
        "contact-info": "Contact Information",
        "pages": "Pages",
        "services": "Services",
        "rules": "Terms and Conditions",
        "delivery": "Delivery Terms",
        "privacy": "Privacy Policy",
        "return": "Return",
        "schedule": "Mon-Sun 10:00-18:30",
        "footer-home": "Home",
        "footer-info": "Main Information",
        "footer-news": "News",
        "footer-vacancies": "Vacancies",
        "footer-contact": "Contact",
        "address": "Georgia, Tbilisi, Balanchini N18",
        "phone": "0322 233 133",
        "email": "autopia@autopia.ge",
        "work-hours": "Mon-Sun 10:00-18:30"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    setupTranslations();
    const geoLink = document.querySelector('.language-switcher a:first-child');
    const engLink = document.querySelector('.language-switcher a:last-child');
    geoLink.addEventListener('click', function(e) {
        e.preventDefault();
        translatePage('geo');
    });
    engLink.addEventListener('click', function(e) {
        e.preventDefault();
        translatePage('eng');
    });
});

function setupTranslations() {
    document.querySelector('.authorization a').setAttribute('data-translate', 'auth');
    document.querySelector('.registration a').setAttribute('data-translate', 'reg');
    
    document.querySelector('.cart a').setAttribute('data-translate', 'cart-text');
    const navLinks = document.querySelectorAll('.header-bottom nav a');
    navLinks[0].setAttribute('data-translate', 'nav-home');
    navLinks[1].setAttribute('data-translate', 'nav-info');
    navLinks[2].setAttribute('data-translate', 'nav-news');
    navLinks[3].setAttribute('data-translate', 'nav-vacancies');
    navLinks[4].setAttribute('data-translate', 'nav-contact');
    const iconTexts = document.querySelectorAll('.icon-item h6');
    iconTexts[0].setAttribute('data-translate', 'maintenance');
    iconTexts[1].setAttribute('data-translate', 'lights');
    iconTexts[2].setAttribute('data-translate', 'chemistry');
    document.querySelector('.product-slider-section h3').setAttribute('data-translate', 'popular');
    const hoverTexts = document.querySelectorAll('.hover-text');
    hoverTexts.forEach(text => text.setAttribute('data-translate', 'add-cart'));
    document.querySelector('.footer-section.contact-info h3').setAttribute('data-translate', 'contact-info');
    const contactInfoTexts = document.querySelectorAll('.footer-section.contact-info p');
    contactInfoTexts[0].setAttribute('data-translate', 'address');
    contactInfoTexts[1].setAttribute('data-translate', 'phone');
    contactInfoTexts[2].setAttribute('data-translate', 'email');
    contactInfoTexts[3].setAttribute('data-translate', 'work-hours');
    document.querySelector('.footer-section.pages h3').setAttribute('data-translate', 'pages');
    const pageLinks = document.querySelectorAll('.footer-section.pages p a');
    pageLinks[0].setAttribute('data-translate', 'footer-home');
    pageLinks[1].setAttribute('data-translate', 'footer-info');
    pageLinks[2].setAttribute('data-translate', 'footer-news');
    pageLinks[3].setAttribute('data-translate', 'footer-vacancies');
    pageLinks[4].setAttribute('data-translate', 'footer-contact');
    document.querySelector('.footer-section.services h3').setAttribute('data-translate', 'services');
    const serviceLinks = document.querySelectorAll('.footer-section.services p a');
    serviceLinks[0].setAttribute('data-translate', 'rules');
    serviceLinks[1].setAttribute('data-translate', 'delivery');
    serviceLinks[2].setAttribute('data-translate', 'privacy');
    serviceLinks[3].setAttribute('data-translate', 'return');
}

function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[language][key];
            } else if (element.tagName === 'A') {
                if (key === 'cart-text') {
                    const priceText = element.textContent.split(' ')[1] || '';
                    element.textContent = translations[language][key] + ' ' + priceText;
                } else {
                    const icon = element.querySelector('.material-symbols-outlined');
                    if (icon) {
                        element.innerHTML = '';
                        element.appendChild(icon);
                        element.appendChild(document.createTextNode(translations[language][key]));
                    } else {
                        element.textContent = translations[language][key];
                    }
                }
            } else if (element.tagName === 'P' && element.querySelector('.material-symbols-outlined')) {
                const icon = element.querySelector('.material-symbols-outlined');
                element.innerHTML = '';
                element.appendChild(icon);
                element.appendChild(document.createTextNode(' ' + translations[language][key]));
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
}