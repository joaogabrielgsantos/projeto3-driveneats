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

function enviarPedido (elemento) {
    const prato = document.querySelector(".selecionado-prato");
    const nomePrato = prato.querySelector(".nome-prato").innerHTML;
    const precoPrato = prato.querySelector(".preco-prato").innerHTML;      
    
    const bebida = document.querySelector(".selecionado-bebida");
    const nomeBebida = bebida.querySelector(".nome-bebida").innerHTML;
    const precoBebida = bebida.querySelector(".preco-bebida").innerHTML;

    const sobremesa = document.querySelector(".selecionado-sobremesa");       
    const nomeSobremesa = sobremesa.querySelector(".nome-sobremesa").innerHTML;
    const precoSobremesa = sobremesa.querySelector(".preco-sobremesa").innerHTML;

    const precoTotal = Number(precoPrato.replace("R$","").replace(",",".")) + Number(precoBebida.replace("R$","").replace(",",".")) + Number(precoSobremesa.replace("R$","").replace(",","."))
    const total = precoTotal.toFixed(2).replace("." , ",")
    
    const nomePessoa = prompt ("Nos informe seu nome")
    const endereco = prompt ("Agora nos diga qual o seu endereço")

    let mensagem;
    mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${total} 
    
    Nome: ${nomePessoa}
    Endereço: ${endereco}`;
    
    let uri = mensagem;
    let encode = encodeURIComponent(uri);

    window.open("https://wa.me/5521965359598?text=" + encode);      
}




    



