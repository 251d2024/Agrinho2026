const mensagemBtn = document.getElementById("mensagemBtn");
const mensagem = document.getElementById("mensagem");

mensagemBtn.addEventListener("click", () => {

    const frases = [
        "🌱 Pequenas atitudes transformam o planeta!",
        "💧 Economize água hoje para garantir o amanhã!",
        "🌳 Preserve a natureza e cuide do futuro!",
        "♻️ Sustentabilidade é responsabilidade de todos!"
    ];

    const numeroAleatorio = Math.floor(Math.random() * frases.length);

    mensagem.textContent = frases[numeroAleatorio];
});

const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        modoBtn.textContent = "☀️";
    } else{
        modoBtn.textContent = "🌙";
    }
});
