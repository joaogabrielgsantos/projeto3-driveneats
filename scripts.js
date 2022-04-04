function selecionarPrato (nomePrato){
    const botaoSelecionado = document.querySelector(".selecionado-prato");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionado-prato");  
    } 
    nomePrato.classList.add ("selecionado-prato");
}

function selecionarBebida (nomeBebida){
    const botaoSelecionado = document.querySelector(".selecionado-bebida");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionado-bebida");  
    } 
    nomeBebida.classList.add ("selecionado-bebida");
}

function selecionarSobremesa (nomeSobremesa){
    const botaoSelecionado = document.querySelector(".selecionado-sobremesa");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionado-sobremesa");  
    } 
    nomeSobremesa.classList.add ("selecionado-sobremesa");
}


