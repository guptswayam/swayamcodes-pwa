const STATIC_CACHE_NAME="static-v3";
const DYNAMIC_CACHE_NAME="dynamic-v1";


self.addEventListener("install",function(event){
    console.log("[Service Worker] installing");
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then(function(cache){
                cache.addAll(["/dist/build.js","/index.html","/","/src/assets/swayamcodes.PNG","https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"]);
            })
    )
})

self.addEventListener("activate",function(event){
    console.log("[Service Worker] activating");
    event.waitUntil(
        caches.keys()
            .then(function(keylist){
                return Promise.all(keylist.map(key=>{
                    if(key!==STATIC_CACHE_NAME && key!==DYNAMIC_CACHE_NAME){
                        console.log("[Service Worker] old cache deleted...");
                        return caches.delete(key);
                    }
                }))
            })
    )
})

self.addEventListener("fetch",function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
                if(response)
                    return response;
                else
                    return fetch(event.request).then(res=>{
                        caches.open(DYNAMIC_CACHE_NAME)
                            .then(function(cache){
                                cache.put(event.request.url,res.clone());
                                return res;
                            })
                    }).catch(err=>{})
            })
    );

})