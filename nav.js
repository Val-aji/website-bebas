// deklarasi navigasi
let pembungkusNav = document.querySelector(".pembungkusNav");

let spanJudul = pembungkusNav.children[0];
let tombolToggle = document.querySelector(".tombolToggle");
let judulToggle = "⟨⟨";

let ul = pembungkusNav.lastElementChild;
let linkNav = document.querySelectorAll(".nav-link");

for(let iNav of linkNav) {
        iNav.className = "nav-link text-white btn btn btn-link btn-primary";
    }
    

// LAYAR HP
if(window.innerWidth < 768 ) {
    pembungkusNav.className = "pembungkusNav container-fluid d-flex bg-secondary px-3 pt-1";
    spanJudul.className = "f-roboto ls-2 text-info fs-1 w-50";
    ul.className = "nav d-flex flex-column bg-dark position-absolute end-0 top-0 d-none rounded-bottom"
    tombolToggle.className = "tombolToggle text-white fw-bold text-decoration-none fs-4 w-50 py-2  text-end";
    
    tombolToggle.onclick = () => {
        if(tombolToggle.innerHTML === "⟨⟨") 
        {
        tombolToggle.innerHTML = "⟩⟩"
        } else {
            tombolToggle.innerHTML = "⟨⟨";
        }
        
        tombolToggle.classList.toggle("text-end");
        tombolToggle.classList.toggle("w-50");
        tombolToggle.classList.toggle("px-5")
        ul.classList.toggle("d-none");
        
    }
    
}

// LAYAR TABLET DAN LAPTOP
else{
    spanJudul.className = "f-roboto ls-2 text-info fs-1";
    // Navigasi
    pembungkusNav.className = "container-fluid px-4 py-3 d-flex justify-content-between bg-secondary text-white fs-4 pembungkusNav";
    
    
    tombolToggle.remove();
    ul.className = "nav";
    
    // end navigasi 
    
    
    
    
}


