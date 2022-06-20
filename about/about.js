// Profile

let pembungkusGambar = document.querySelector(".pembungkusGambar");
pembungkusGambar.className = "pembungkusGambar container-fluid bg-info text-white py-5";

let gambar = document.querySelector(".gambar");
gambar.style.width = "250px";
gambar.style.height = "250px";
gambar.className = "gambar bg-success rounded-circle mx-auto overflow-hidden"

let namaLengkap = document.querySelector(".namaLengkap");

let bio = document.querySelector(".bio")
bio.className = "bio  text-light text-center fs-2";

let tentang = document.querySelector(".tentang");
tentang.className = "tentang container-fluid bg-dark p-4 text-white ";

let deskripsi = document.querySelector(".deskripsi");



// kemampuan
let pembungkusKemampuan = document.querySelector(".pembungkusKemampuan");
pembungkusKemampuan.className = "bg-secondary container-fluid p-4";

let pembungkusBahasa = document.getElementsByClassName("pembungkusBahasa");

// kontak saya
let kontak = document.querySelector(".kontak");

    


if(window.innerWidth < 768) {
    
    namaLengkap.className= "namaLengkap h1 text-center display-5 mt-4 fw-bold ls-2 ";
    
    deskripsi.className = "deskripsi lead fw-light w-75 fs-4 px-2 ls-2";
    
    
    for(let bahasa of pembungkusBahasa) {
        bahasa.className = "pembungkusBahasa mb-4";
        bahasa.children[0].className = "fs-1 w-100 d-block text-white text-light";
        bahasa.children[1].className = "d-block bg-dark rounded-3 w-100 h-30";
        bahasa.children[1].children[0].className = "bg-info text-center py-1 rounded-end rounded-3 h-30";
    }
    
    kontak.className = "kontak px-1"
    for(let x of kontak.children) {
        x.className = "w-100 my-3";
        x.children[0].width = "40";
        
        x.children[1].className = "text-info  px-2 h2 f-roboto ";
    }
    
    
} else {
    
    namaLengkap.className = "namaLengkap h1 text-center display-4 mt-4 fw-bold ls-2 "
    
    deskripsi.className = "deskripsi lead fw-light w-50 fs-4 px-3";
    
    
    
    // kemampuan
     for(let bahasa of pembungkusBahasa) {
        
        bahasa.children[0].className = "fs-1 w-25 d-inline-block text-white text-light";
        bahasa.children[1].className = "d-inline-block bg-dark rounded-3 w-50 h-30";
        bahasa.children[1].children[0].className = "bg-info text-center rounded-end py-1 rounded-3 h-30";
    }
    // kontak
    kontak.className = "kontak px-1"
    for(let x of kontak.children) {
        x.className = "w-50 p-3 d-flex align-items-center";
        x.children[0].width = "60";
        
        x.children[1].className = "text-info display-6 px-3 f-roboto";
    }
    
    
    
}


