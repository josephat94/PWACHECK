//Asignar nombre y version de la cache
const CACHE_NAME="V1_cache_josephat_PWA";

// Ficheros a cachear en la app
var urlsoCache=[
    "./", "./css/style.css", "./img/favicon.png",
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
    "./img/facebook.png",
    "./img/twitter.png",
    "./img/instagram.png",
    "./img/favicon-16.png",
    "./img/favicon-32.png",
    "./img/favicon-64.png",
    "./img/favicon-96.png",
    "./img/favicon-128.png",
    "./img/favicon-256.png",
    "./img/favicon-384.png",
    "./img/favicon-512.png",
    "./img/favicon-1024.png",
];

//Install Event
//Se encarga de la instalacion del service worker y cachea archivos estaticos
self.addEventListener('install', (e)=>{

e.waitUntil(
    caches.open(CACHE_NAME).then(
        cache=>{
            return cache.addAll(urlsoCache).then(()=>{

                    self.skipWaiting();
            })
        }
    ).catch((error)=>{
        console.log("Error No se ha registrado la caché", error)
    })
)

});


//Activate Envnt

self.addEventListener('activate', e=>{

const cachewhitelist=[CACHE_NAME];
e.waitUntil(
caches.keys().then(cacheNames=>{

    return Promise.all(
        cacheNames.map(cacheName=>{
                if(cachewhitelist.indexOf(cacheName)===-1){
                    //Se borran los elementos que no se necesita
                    return caches.delete(cacheName);    
                }

        })
    );
}).then(()=>{

    self.clients.claim();
})

)

})


//Fetch

self.addEventListener('fetch', e=>{

    e.respondWith(
        caches.match(e.request).then(res=>{

            if(res){
                //devuelvo datps de cache
return res;
            }

            return fetch(e.request);
        })
    );
})