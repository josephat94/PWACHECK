//SERVICE WORKER

if('serviceWorker' in navigator){
    console.log("Si existe Service worker en tu navegador");

navigator.serviceWorker.register('./sw.js')
                                    .then(res=>console.log("service worker cargado correctamente", res))
                                    .catch(err=>console.log("ERROR->Service worker no registrado", err))

}

///SCROLL SUAVE
$(document).ready(function(){

$("#menu a").click(function(e){
e.preventDefault();

$("html, body").animate({scrollTop: $($(this).attr('href')).offset().top

})
return false;
})
    console.log("Hola mundo");
})