const CACHE_VERSION = 'scribe-v1';
const PRECACHE_URLS = [
    './',
    './index.html',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-512-maskable.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then((cache) => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
        )).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) return cached;
            return fetch(request)
                .then((response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const copy = response.clone();
                    caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
                    return response;
                })
                .catch(() => {
                    if (request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                });
        })
    );
});
