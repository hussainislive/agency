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

  // Image Files
  "/assets/images/Logo.png",
  "/assets/images/favicon.png",
  "/assets/images/hero-bg.jpg",
  "/assets/images/team-bg.jpg"
];

// Install Service Worker and cache resources
self.addEventListener("install", (event) => {
  console.log("Installing Service Worker...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching essential files...");
      return cache.addAll(FILES_TO_CACHE);
    }).catch((error) => console.error("Cache addAll failed:", error))
  );
  self.skipWaiting(); // Immediately activate the new SW
});

// Activate Service Worker and clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Activating Service Worker...");
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
  self.clients.claim(); // Take control of all clients immediately
});

// Fetch resources from cache first, then network with a fallback
self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return caches.match("/index.html"); // Fallback page when offline
      });
    })
  );
});
