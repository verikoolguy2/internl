importScripts('/internl/uv/uv.bundle.js');
importScripts('/internl/uv/uv.config.js');

const uv = new UVServiceWorker();

self.addEventListener('fetch', event => {
    event.respondWith(
        uv.fetch(event)
    );
});

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});
