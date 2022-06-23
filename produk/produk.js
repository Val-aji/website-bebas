// deklarasi

let pembungkus = document.querySelectorAll(".pembungkus");
let inputGroup = document.querySelector(".input-group");
let judul = document.querySelectorAll(".judul");

let containerProduk = document.querySelectorAll(".containerProduk");

  
// TOMBOL
let menuProduk = document.getElementById("menuProduk");

menuProduk.className = "container-fluid d-flex justify-content-around flex-wrap";



// PRODUK
let produk = document.getElementById("produk");
produk.className = "d-flex justify-content-center container-fluid flex-wrap ";


if(window.innerWidth < 768) {
    
    inputGroup.className = "input-group container py-2 w-100";
    
    for(let p of pembungkus) {
        p.className = "pembungkus container-fluid border-bottom";
    }
    containerProduk[0].className = "container-produk container-fluid p-2 d-flex flex-column";
    containerProduk[1].className = "container-produk container-fluid p-2 ";

    for(let x of judul) {
    x.className = "judul display-6 f-average ls-2 text-dark fw-bold";
    };
    
    for(let tombol of menuProduk.children) {
          tombol.className = "btn f-roboto btn-info text-white m-2";
          tombol.style.width = "40%";
    }
    
} else {
    inputGroup.className = "input-group container py-2 w-50";
    
    for(let p of pembungkus) {
        p.className = "pembungkus container-fluid border-bottom p-4";
    }
    containerProduk[0].className = "container-produk container-fluid p-4 d-flex flex-column";
    containerProduk[1].className = "container-produk container-fluid p-4 ";

    for(let x of judul) {
    x.className = "judul display-4 f-average ls-2 text-dark fw-bold";
    };
    
    
    for(let tombol of menuProduk.children) {
          tombol.className = "btn f-roboto btn-info text-white m-2";
           tombol.style.width = "20%";
    }
    
    
}

let listProduk = [
    {
      gambar: "laptopKecil.jpg",
      nama: "Laptop Kecil",
      harga: 4279000,
      deskripsi: "Laptop adalah komputer pribadi yang berukuran kecil. laptop biasanya berukuran 10 - 17 inci. Laptop ini memiliki ukuran 12 inci dan sudah memakai sistem oprasi linux. Beli laptop ini gratis mouse dan keyboard seharga Rp750.000"
    },
    {
        gambar: "kadoUlangTahun.jpg",
        nama: "Kado Ulang Tahun",
        harga: 263000,
        deskripsi: "Ulang tahun adalah hari dimana seserorang memperingati tanggal kelahirannya. biasanya temannya akan memberikan kado kepada yang ulang tahun. Kado ini cocok untuk anak anak. beli sekarang sebelum keabisan."
    },
    {
        gambar: "hamburger.jpg",
        nama: "Burger Large",
        harga: 48000,
        deskripsi: "Hamburger adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan di tengahnya diisi dengan patty yang biasanya diambil dari daging, kemudian sayur-sayuran berupa selada, tomat dan bawang bombai. Sebagai sausnya, burger diberi berbagai jenis saus seperti mayones, saus tomat dan sambal serta mustard. Beberapa varian burger juga dilengkapi dengan keju, asinan, burger juga makanan khas Amerika"
    },
    {
        gambar: "sepatuBola.jpg",
        nama: "Sepatu Bola",
        harga: 777000,
        deskripsi: "Sepatu bola adalah salah satu bagian penting dalam permainan sepak bola. Sebagai peranti wajib saat melakoni pertandingan, sepatu turut menunjuang performa seorang pemain dan memberikan kenyamanan ketika mengolah bola. Sepau bola ini memiliki berbagai warna dan ukuran. Ukuran sepatu 39-47 cocok untuk para remaja ataupun atlet untuk bermain bola."
    },
    {
        gambar: "topiWisuda.jpg",
        nama: "Topi Wisuda",
        harga: 1200000,
        deskripsi: "Kata toga berasal dari tego, yg dalam bahasa latin bermakna penutup. biarpun umumnya dikaitkan dengan bangsa romawi, toga sesungguhnya berasal dari sejenis jubah yang dikenakan oleh pribumi italia, yaitu bangsa etruskan yang hidup di italia sejak 1200 sm. kala itu, bentuk toga belum berbentuk jubah, namun sebatas kain sepanjang 6 meter yg cara menggunakannya sebatas dililitkan ke tubuh. walau tak praktis, toga adalah satu-satunya pakaian yg dianggap pantas waktu seseorang berada diluar ruangan untuk menutupi tubuh mereka"
    }
    
];
  

let i = 0;
function card(container, img, namaP, hargaP, deskripsiP, diskon = 1) {
    i++; 
    let cardProduk = document.createElement("div");
    cardProduk.className = `cardProduk d-flex flex-column border-1 rounded border border-dark ${i.toString()}`;
    container.appendChild(cardProduk);
    
    let imgCard = document.createElement("img");
    let srcImg = "imgProduk/"+`${img.toString()}`;
    imgCard.src = srcImg;
    imgCard.className = "rounded-top"
    cardProduk.appendChild(imgCard);
    
    //  end img dan nama produk"
    
    let namaProduk = document.createElement("p");
    namaProduk.className = "namaProduk text-dark fw-bold f-average p-1 ls-1"; 
    namaProduk.innerHTML = namaP.toString();
    cardProduk.appendChild(namaProduk);
    
    // end nama produk dan harga produk
    
    let hargaProduk = document.createElement("p");
    hargaProduk.className = "hargaProduk text-muted w-100 f-roboto py-1 px-2";
    
    // harga diskon
    if(diskon === 1) {
        hargaProduk.innerHTML = "Rp" + Intl.NumberFormat().format(hargaP);
        
    } else {
        
       
       let hargaProdukDiskon = document.createElement("span");
        hargaProdukDiskon.className = "hargaProdukDiskon text-decoration-line-through text-dark fw-light";
        hargaProdukDiskon.innerHTML = "Rp" + Intl.NumberFormat().format(hargaP);
        hargaProduk.appendChild(hargaProdukDiskon);
        let hargaSetelahDiskon = hargaP * (diskon/100);
        hargaProduk.innerHTML += " Rp" + Intl.NumberFormat().format(hargaSetelahDiskon)
        
    }
    // end harga diskon
    cardProduk.appendChild(hargaProduk);
    
    
    // end harga produk dan deskripsi
    
    let deskripsiProduk = document.createElement("p");
    deskripsiProduk.className = "deskripsiProduk fw-light overflow-auto  w-100 px-2";
    deskripsiProduk.innerHTML = deskripsiP.toString();
    cardProduk.appendChild(deskripsiProduk);
    // end deskripsi dan button produk
    
    let buttonProduk = document.createElement("button");
    buttonProduk.className = "btn btn-info w-100 p-1 f-roboto";
    buttonProduk.innerHTML = "Beli Sekarang";
    cardProduk.appendChild(buttonProduk);
    
    // end button produk
}

// end function
listProduk.map(value => {
    card(produk, value.gambar, value.nama, value.harga, value.deskripsi);
});

// end produk 



// produk diskon 50%

let produkDiskon  = document.getElementById("produkDiskon");
produkDiskon.className = "d-flex justify-content-center flex-wrap flex-wrap p-2";

listProduk.map(value => {
    card(produkDiskon, value.gambar, value.nama, value.harga, value.deskripsi, 50);
})



