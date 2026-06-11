function mostrarMensagem(){
    alert("O agronegócio sustentável une tecnologia, produtividade e preservação ambiental para garantir um futuro melhor!");
}

const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const atualizar = () => {

        const alvo = +contador.getAttribute("data-target");
        const valor = +contador.innerText;

        const incremento = alvo / 100;

        if(valor < alvo){
            contador.innerText = Math.ceil(valor + incremento);
            setTimeout(atualizar, 20);
        } else {
            contador.innerText = alvo;
        }
    };

    atualizar();
});
