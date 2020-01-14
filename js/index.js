const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let img2 = document.getElementById("cta-img");
img2.setAttribute('src', siteContent["cta"]["img-src"]);


let imgMid = document.getElementById("middle-img");
imgMid.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let anchors = document.querySelectorAll("a");
anchors.forEach((item, index) => item.textContent = siteContent['nav'][`nav-item-${index += 1}`])

// let anchors = document.querySelectorAll('header nav a')
// [0];
// anchors.textContent = (siteContent['nav']['nav-item-1'])
// let anchors1 = document.querySelectorAll('header nav a')
// [1];
// anchors1.textContent = (siteContent['nav']['nav-item-2'])



let title = document.querySelector('.cta-text h1')
title.textContent = (siteContent['cta']['h1']);

let titleButton = document.querySelector('button')
titleButton.textContent = (siteContent['cta']['button']);

let featTitle = document.querySelectorAll('.main-content .top-content .text-content h4')[0]
featTitle.textContent = (siteContent['main-content']['features-h4']);
let featP = document.querySelectorAll('.top-content p')[0]
featP.textContent = (siteContent['main-content']['features-content']);

let aboutTitle = document.querySelectorAll('.main-content .top-content .text-content h4')[1]
aboutTitle.textContent = (siteContent['main-content']['about-h4']);
let aboutP = document.querySelectorAll('.main-content .top-content .text-content p')[1]
aboutP.textContent = (siteContent['main-content']['about-content']);

let servicesTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[0]
servicesTitle.textContent = (siteContent['main-content']['services-h4']);
let servicesP = document.querySelectorAll('.bottom-content p')[0]
servicesP.textContent = (siteContent['main-content']['services-content']);

let productTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[1]
productTitle.textContent = (siteContent['main-content']['product-h4']);
let productP = document.querySelectorAll('.main-content .bottom-content .text-content p')[1]
productP.textContent = (siteContent['main-content']['product-content']);

let visionTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[2]
visionTitle.textContent = (siteContent['main-content']['vision-h4']);
let visionP = document.querySelectorAll('.main-content .bottom-content .text-content p')[2]
visionP.textContent = (siteContent['main-content']['vision-content']);

let contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = (siteContent['contact']['contact-h4']);
let address = document.querySelectorAll('.contact p')[0]
address.textContent = (siteContent['contact']['address']);
let phone = document.querySelectorAll('.contact p')[1]
phone.textContent = (siteContent['contact']['phone']);
let email = document.querySelectorAll('.contact p')[2]
email.textContent = (siteContent['contact']['email']);

let footer = document.querySelector('footer')
footer.textContent = (siteContent['footer']['copyright']);


