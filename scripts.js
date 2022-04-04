function selecionarPrato (nomePrato){
    const botaoSelecionado = document.querySelector(".selecionado-prato");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionado-prato");  
    } 
    nomePrato.classList.add ("selecionado-prato");
    botaoFechar();
}

function selecionarBebida (nomeBebida){
    const botaoSelecionado = document.querySelector(".selecionado-bebida");
    if (botaoSelecionado !== null) {        
        botaoSelecionado.classList.remove("selecionado-bebida");  
    } 
    nomeBebida.classList.add ("selecionado-bebida");
    botaoFechar();
}

function selecionarSobremesa (nomeSobremesa){
    const botaoSelecionado = document.querySelector(".selecionado-sobremesa");
    if (botaoSelecionado !== null) {        
        botaoSelecionado.classList.remove("selecionado-sobremesa");  
    } 
    nomeSobremesa.classList.add ("selecionado-sobremesa");
    botaoFechar();
}

function botaoFechar(){
    const prato = document.querySelector(".selecionado-prato");
    const bebida = document.querySelector(".selecionado-bebida");
    const sobremesa = document.querySelector(".selecionado-sobremesa");
    const fecharPedido = document.querySelector(".fechar-pedido");
    const msgSelecionar = document.querySelector(".msg-selecionar");

    if (prato !== null && bebida !== null && sobremesa !== null) {
        fecharPedido.classList.remove("escondido");
        msgSelecionar.classList.add("escondido");        
    }
}




    



