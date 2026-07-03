const CACHE_NAME = "seul-police-cache-v506";
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./firebase.js", "./manifest.json", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", event => { event.respondWith(fetch(event.request).catch(() => caches.match(event.request))); });
