let cacheData = 'appV1';
this.addEventListener('install', (e) => {
    e.waitUntil(caches.open(cacheData)
    .then((cache) =>{
        cache.addAll([
            '/index.html',
            '/static/js/bundle.js',
            '/static/js/vendors~main.chunk.js',
            '/static/js/main.chunk.js',
            '/manifest.json',
            '/favicon.ico',
            '/logo192.png',
            '/users',
            '/about',
            '/'
        ])
    }))
});

this.addEventListener("fetch", (e) => {
    if(!navigator.onLine){
        e.respondWith(
            caches.match(e.request)
            .then((res) =>{
                if(res){
                    return res;
                }
                let requestUrl = e.request.clone();
                fetch(requestUrl);
            })
        )
    }
    
});