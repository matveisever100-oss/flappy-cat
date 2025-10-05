
const CACHE_NAME = "flappycat_mobile_v2";
const FILES = ["./","./index.html","./manifest.json","./service-worker.js","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=> k!==CACHE_NAME ? caches.delete(k):null)))); self.clients.claim(); });
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
