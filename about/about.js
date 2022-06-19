let pembungkusGambar = document.querySelector(".pembungkusGambar");

pembungkusGambar.className = "pembungkusGambar container-fluid bg-info text-white py-5";

let namaLengkap = document.querySelector(".namaLengkap");

let tentang = document.querySelector(".tentang");
tentang.className = "tentang container-fluid bg-dark p-4 text-white ";
let deskripsi = document.querySelector(".deskripsi");



// kemampuan
let pembungkusKemampuan = document.querySelector(".pembungkusKemampuan");
pembungkusKemampuan.className = "bg-secondary container-fluid p-4";

if(window.innerWidth < 768) {
    
    namaLengkap.className= "namaLengkap h1 text-center display-5 mt-4 fw-bold ls-2 ";
    
    deskripsi.className = "deskripsi lead fw-light w-75 fs-4 px-3 ls-2";
    
} else {
    namaLengkap.className = "namaLengkap h1 text-center display-4 mt-4 fw-bold ls-2 "
    deskripsi.className = "deskripsi lead fw-light w-50 fs-4 px-3";
    
    
}


