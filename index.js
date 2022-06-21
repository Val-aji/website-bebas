let bgWeb = document.querySelector(".bgWeb");
let bgOpacityWeb = document.querySelector(".bgOpacityWeb");

bgWeb.className = "bgWeb contaienr-fluid";
bgOpacityWeb.className = "bgOpacityWeb d-flex flex-column justify-content-evenly";


let judul = document.querySelector(".judul");
 judul.className = "judul d-flex flex-column align-items-center justify-content-center";
 
let tentangWeb = document.querySelector(".tentangWeb");

if(window.innerWidth < 768) {
   
    
    judul.children[0].className = "display-4 f-roboto ls-2 text-white ";
    judul.children[1].remove();
    bgOpacityWeb.children[1].className = "d-flex justify-content-center p-3";
   
    bgOpacityWeb.children[1].children[0].className = "p-3 btn btn-info text-dark  f-roboto ls-2 rounded-5";
    bgOpacityWeb.children[1].children[1].remove();
    tentangWeb.className = "tentangWeb container-fluid p-4";
    for(let z of tentangWeb.children) {
        z.className = "text-center";
    }
    
    
} else {
    
    
    
    
    judul.children[0].className = "display-6 f-roboto ls-20 text-white ";
    judul.children[1].className = "lead text-white d-block fs-4";
    bgOpacityWeb.children[1].className = "d-flex justify-content-between p-3";
    for(let x of bgOpacityWeb.children[1].children) {
       x.className = "p-3 m-5 btn btn-info text-dark fw-bold f-average ls-2 rounded-5";
    }
    tentangWeb.className = "tentangWeb container-fluid px-3 py-5 d-flex justify-content-between";
    tentangWeb.children[0].className = "text-end";
    for(let y of tentangWeb.childeren) {
        y.style.width = 45%;
    }
    
}


    
