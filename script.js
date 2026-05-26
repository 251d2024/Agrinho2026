// FRASES

const fraseBtn = document.getElementById("fraseBtn");
const frase = document.getElementById("frase");

const frases = [

    "🌱 Sustentabilidade começa com pequenas atitudes.",

    "💧 Economizar água hoje é proteger o amanhã.",

    "🌳 Preservar a natureza é investir no futuro.",

    "♻️ O planeta depende das nossas escolhas."
];

fraseBtn.addEventListener("click", () => {

    let aleatorio = Math.floor(Math.random() * frases.length);

    frase.textContent = frases[aleatorio];
});

// DARK MODE

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkModeBtn.textContent = "☀️";
    } else{
        darkModeBtn.textContent = "🌙";
    }
});

// CONTADORES

function animarContador(id, valorFinal){

    let elemento = document.getElementById(id);

    let contador = 0;

    let intervalo = setInterval(() => {

        contador += Math.ceil(valorFinal / 100);

        if(contador >= valorFinal){

            contador = valorFinal;

            clearInterval(intervalo);
        }

        elemento.textContent = contador;

    }, 20);
}

animarContador("arvores", 5000);
animarContador("agua", 12000);
animarContador("energia", 8000);

// QUIZ

const quizBtns = document.querySelectorAll(".quizBtn");

const quizResultado = document.getElementById("quizResultado");

quizBtns.forEach(botao => {

    botao.addEventListener("click", () => {

        if(botao.dataset.correct){

            quizResultado.textContent =
                "✅ Correto! O reflorestamento ajuda o meio ambiente.";

        } else{

            quizResultado.textContent =
                "❌ Essa prática prejudica o meio ambiente.";
        }
    });
});

// MAPA

const map = L.map('map').setView([-15.7801, -47.9292], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; OpenStreetMap'

}).addTo(map);

// MARCADORES

L.marker([-23.5505, -46.6333])
.addTo(map)
.bindPopup("🌾 São Paulo - Grande produção agrícola");

L.marker([-25.4284, -49.2733])
.addTo(map)
.bindPopup("🌱 Paraná - Agricultura sustentável");

L.marker([-16.6799, -49.2550])
.addTo(map)
.bindPopup("🚜 Goiás - Produção de grãos");

L.marker([-12.9714, -38.5014])
.addTo(map)
.bindPopup("🌳 Bahia - Preservação ambiental");
// LOADING

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading")
        .style.display = "none";

    }, 2000);
});

// SCROLL REVEAL

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const altura =
        window.innerHeight;

        const topo =
        reveal.getBoundingClientRect().top;

        if(topo < altura - 100){

            reveal.classList.add("active");
        }
    });
});

// BOTÃO TOPO

const topoBtn =
document.getElementById("topoBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topoBtn.style.display = "block";

    } else{

        topoBtn.style.display = "none";
    }
});

topoBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"
    });
});

// MENU HAMBURGUER

const hamburguer =
document.querySelector(".hamburguer");

const menu =
document.querySelector(".menu");

hamburguer.addEventListener("click", () => {

    menu.classList.toggle("active");
});

// CHATBOT

const chatBtn =
document.getElementById("chatBtn");

const chatBox =
document.getElementById("chatBox");

chatBtn.addEventListener("click", () => {

    if(chatBox.style.display === "block"){

        chatBox.style.display = "none";

    } else{

        chatBox.style.display = "block";
    }
});

// SIMULADOR

const calcularBtn =
document.getElementById("calcularBtn");

const banho =
document.getElementById("banho");

const resultadoAgua =
document.getElementById("resultadoAgua");

calcularBtn.addEventListener("click", () => {

    let minutos = banho.value;

    let litros = minutos * 9;

    resultadoAgua.textContent =

    `🚿 Você gastou aproximadamente ${litros} litros de água.`;
});
