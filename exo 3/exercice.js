let divs = document.getElementsByClassName("name-tag");

for(let i = 0; i < divs.length; i++) {
    let newP = document.createElement("p");
    divs[i].appendChild(newP);
    newP.innerHTML = "HELLO WORLD";
}









