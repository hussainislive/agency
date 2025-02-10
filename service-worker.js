const CACHE_NAME = "webtechlo-cache-v1";

// List of files to cache
const FILES_TO_CACHE = [
    "/", 
    "/index.html",
    "/index-ar.html",
    "/about.html",
    "/about-ar.html",
    "/contact.html",
    "/contact-ar.html",
    "/services.html",  
    "/services-ar.html",
    "/seo.html",  
    "/seo-ar.html",
  
    // CSS Files
    "/assets/css/style.css",
    "/assets/css/responsive.css",
    "/assets/css/animate.css",
    "/assets/stylesheets/style.css",
    "/assets/stylesheets/responsive.css",
    "/assets/stylesheets/responsive-desktop.css",
    "/assets/stylesheets/responsive-lg.css",
    "/assets/stylesheets/btn.css",
    "/assets/stylesheets/res-ar.css",
  
    // JS Files
    "/assets/js/script.js",
    "/assets/js/wow.js",
    "/assets/js/wow.min.js",
    "/assets/js/locomotive-scroll.js",
    "/assets/js/bootstrap.min.js",
  
    // Image Files (Based on Screenshot)
    "/assets/images/about-benefits.jpg",
    "/assets/images/about-block2.png",
    "/assets/images/about-shp.jpg",
    "/assets/images/aboutus-btn.png",
    "/assets/images/ads.png",
    "/assets/images/app-development-icon.png",
    "/assets/images/arrow-up-fill.png",
    "/assets/images/digital-marketing.png",
    "/assets/images/ecommerce.png",
    "/assets/images/favicon.png",
    "/assets/images/feature-bg.jpg",
    "/assets/images/featureimg.png",
    "/assets/images/hero-bg.jpg",
    "/assets/images/hero-shap3.png",
    "/assets/images/hero-shp1.png",
    "/assets/images/hero-shp2.png",
    "/assets/images/hero-shp4.png",
    "/assets/images/hero-shp5.png",
    "/assets/images/loader4.gif",
    "/assets/images/Logo.png",
    "/assets/images/on-time.png",
    "/assets/images/people.png",
    "/assets/images/seo.png",
    "/assets/images/seo-about.jpg",
    "/assets/images/seo-about3.png",
    "/assets/images/seo-bg.jpg",
    "/assets/images/seo-campaign.png",
    "/assets/images/seo-feature1.png",
    "/assets/images/seo-feature2.png",
    "/assets/images/seo-feature3.png",
    "/assets/images/seo-feature4.png",
    "/assets/images/seo-feature5.png",
    "/assets/images/seo-feature6.png",
    "/assets/images/seo-hero-1.png",
    "/assets/images/seo-hero-circle-2.png",
    "/assets/images/seo-service-icon-1.png",
    "/assets/images/seo-service-icon-2.png",
    "/assets/images/seo-service-icon-3.png",
    "/assets/images/seo-service-thumb.png",
    "/assets/images/seo-testimonial-bg.jpg",
    "/assets/images/services-btn.png",
    "/assets/images/services.png",
    "/assets/images/shap4.png",
    "/assets/images/team1.png",
    "/assets/images/team2.png",
    "/assets/images/team3.png",
    "/assets/images/team-bg.jpg",
    "/assets/images/techsupport.png",
    "/assets/images/uiUx.png",
    "/assets/images/webdevelopment.png"
  ];
  

// Install Service Worker and cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching essential files...");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activate Service Worker and clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch resources from cache first, then network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
