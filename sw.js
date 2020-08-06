var cacheName = "autobot";
var contentToCache = [
  "./",
  "./Home.html",
  "./assets/vid/ink-yellow/video.mp4",
  "./assets/vid/ink-yellow/poster.png",
  "./assets/css/slides.css",
  "./assets/js/slides.js",
  "./About.html",
  "./Work.html",
  "./Services.html",
  "./Contact.html",
];

if ("serviceWorker" in navigator) {
  console.log("Service Worker supported");
}

/*
if ("PushManager" in window) {
  console.log("Push is supported");
}
*/

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Install");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(contentToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((r) => {
      console.log("[Service Worker] Fetching resource: " + event.request.url);
      return (
        r ||
        fetch(event.request).then((response) => {
          return caches.open(cacheName).then((cache) => {
            console.log(
              "[Service Worker] Caching new resource: " + event.request.url
            );
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
