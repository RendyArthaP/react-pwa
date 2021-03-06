const CACHE_NAME = 'version-1'
const urlsToCache = [ 'index.html', 'offline.html' ]

const self = this;

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})
// Listen for request
self.addEventListener('fetch', (event) => {
  
})
// Activate the Service Worker
self.addEventListener('activate', (event) => {
  
})