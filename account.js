
function formLogin() {
    // REMOVE TOMBOL LOGIN
    let tombolLogin = document.querySelector(".tombolLogin");
    let parentTombolLogin = tombolLogin.parentElement;
    let tombolDaftar = tombolLogin.nextElementSibling;
    tombolLogin.remove();

    // FITUR FORM LOGIN
    let login = document.createElement("div");
    login.className = "container p-5 bg-secondary rounded-2";
    parentTombolLogin.insertBefore(login, tombolDaftar);

    
    function tambahElement(tag, classValue, innerValue) {
        let element = document.createElement(tag);
        element.className = classValue;
        element.innerHTML = innerValue;
        return element;
    };
    
    // Show Desain Login
    let judul = tambahElement("b", "text-center d-block fs-2 text-info f-roboto", "LOGIN");
    login.appendChild(judul);
    
    let form = document.createElement("form");
    login.appendChild(form);
    
    // input username
    let divUsername = document.createElement("div");
    divUsername.className = "form-floating my-3"; 
    let inputUsername = tambahElement("input", "form-control");
    inputUsername.type = "text";
    inputUsername.id = "Username";
    inputUsername.placeholder = " ";

    
    let labelUsername = tambahElement("label", "", "Username / Email");
    labelUsername.for = "Username";
    
    
    divUsername.appendChild(inputUsername);
    divUsername.appendChild(labelUsername);
    form.appendChild(divUsername);
    
    
    // input password
    let divPassword = document.createElement("div");
    divPassword.className = "form-floating my-3";
    
    let inputPassword = tambahElement("input", "form-control");
    inputPassword.type = "password";
    inputPassword.id = "Password";
    inputPassword.placeholder = " ";
    
    let labelPassword = tambahElement("label", "", "Password");
    labelPassword.for = "Password";
    
    divPassword.appendChild(inputPassword);
    divPassword.appendChild(labelPassword);
    form.appendChild(divPassword);
    
    // tombol submit
    let inputSubmit = tambahElement("input","btn btn-info form-control lead p-2 rounded-5 text-white fw-bold");
    inputSubmit.type = "submit";
    inputSubmit.value = "Login"
    
    form.appendChild(inputSubmit);
}

// END FITUR LOGIN
    


// Responsive

let wrapper = document.querySelector(".Wrapper");
wrapper.className = "Wrapper container-fluid d-flex flex-column justify-content-center align-items-center";



let tombolLogin = document.querySelector(".tombolLogin");
tombolLogin.className = "tombolLogin btn f-average text-white fw-bold rounded-5 p-3 fs-4 ls-2 my-2 bg-info";

let tombolDaftar = document.querySelector(".tombolDaftar");
tombolDaftar.className = "tombolDaftar btn f-average text-white fw-bold rounded-5 p-3 fs-4 ls-2 my-2 bg-dark";


// Layar HP

if(window.innerWidth < 768) {
    console.info("layar HP")
}else {
    
    
    
}
