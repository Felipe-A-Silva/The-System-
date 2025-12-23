const text = "Bem vindo!"
const h1 = document.getElementById("typing");
let index = 0;

function type() {
    h1.innerText = text.slice(0,index);
    index++;

    if (index <= text.length) {
        setTimeout(type, 80);
    }
}

type();