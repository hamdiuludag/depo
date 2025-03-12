const CACHE_NAME = "1ad-blog-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "https://www.1ad.com.tr/css/style.css",
  "https://www.1ad.com.tr/js/script.js",
  "https://www.1ad.com.tr/images/logo.png"
];

// Servis çalışanı kurulum ve önbelleğe alma
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ağdan veri alma ve önbellekten yükleme
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Eski önbellekleri temizleme
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
