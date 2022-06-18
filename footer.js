let footer = document.querySelector(".footer"); 

//LAYAR TABLET DAN LAPTOP
if(window.innerWidth < 768) {
    footer.className = "footer bg-dark  text-white f-roboto ls-1 d-flex flex-column justify-content-center align-items-center border-top py-2";
    
}
// Layar HP
else {
    footer.lastElementChild.remove();
    footer.firstElementChild.innerHTML += "Creative Indonesia by Nouval";
   
    footer.className="container-fluid bg-dark text-white fw-bold d-flex justify-content-center align-items-center f-roboto lead ls-2 border-top footer py-4";
    
    
}



