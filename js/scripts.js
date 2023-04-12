// Atividade 1 -----------------------------------------------------------------------------------------------------

function validarDados() {
    let data = frmRegistro.inData.value;
    let name = frmRegistro.inCli.value;
    let tel = frmRegistro.inFone.value;
    let mail = frmRegistro.inMail.value;
    let product = frmRegistro.inProd.value;
    let quant = frmRegistro.inQtd.value;
    let values = frmRegistro.inVal.value;
    let error = document.getElementById('mensagem-erro');



    if (data.trim() == '') {
        frmRegistro.inData.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'data' não pode estar vazio!");
        return false;
    }

    // ----------------------------

    if (name.trim() == '') {
        frmRegistro.inCli.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Nome do cliente' não pode estar vazio!");
        return false;
    }

    if (name.length < 5) {
        frmRegistro.inCli.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Nome do cliente' não pode possuir menos de 5 caracteres!");
        return false;
    }

    else {
        error.style.display = 'none'
    }

    // ----------------------------

    if (tel.trim() == '') {
        frmRegistro.inFone.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Telefone' não pode estar vazio!");
        return false;
    }

    if (tel.length < 5) {
        frmRegistro.inFone.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Telefone' não pode possuir menos de 5 caracteres!");
        return false;
    }

    else {
        error.style.display = 'none'
    }

    // ----------------------------

    if (mail.trim() == '') {
        frmRegistro.inMail.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Email' não pode estar vazio!");
        return false;
    }

    if (mail.length < 5) {
        frmRegistro.inMail.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Email' não pode possuir menos de 5 caracteres!");
        return false;
    }

    else {
        error.style.display = 'none'
    }

    // ----------------------------

    if (product.trim() == '') {
        frmRegistro.inProd.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Produto' não pode estar vazio!");
        return false;
    }

    if (product.length < 5) {
        frmRegistro.inProd.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Produto' não pode possuir menos de 5 caracteres!");
        return false;
    }

    else {
        error.style.display = 'none'
    }

    // ----------------------------

    if (quant.trim() == '') {
        frmRegistro.inQtd.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Quantidade' não pode estar vazio!");
        return false;
    }

    if (quant <= 0) {
        frmRegistro.inQtd.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Quantidade' não pode assumir números negativos ou nulos!");
        return false;
    }

    else {
        error.style.display = 'none'
    }

    // ----------------------------

    if (values.trim() == '') {
        frmRegistro.inVal.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Valores unitários' não pode estar vazio!");
        return false;
    }

    if (values <= 0) {
        frmRegistro.inVal.focus();
        error.style.display = 'block';
        error.innerHTML = ("O campo 'Valores unitários' não pode assumir números negativos ou nulos!");
        return false;
    }

    else {
        error.style.display = 'none'
    }

    alert("Muito obrigado por nos contatar. Certamente iremos avaliar sua proposta com muito zelo. ❤️ ")

}


// Atividade 2 -----------------------------------------------------------------------------------------------------

function criarImagens() {

    let numImagens = parseInt(document.getElementById("inQtdImg").value);
    let canvas = document.getElementById("canvas");
    canvas.innerHTML = "";

    if (numImagens < 0) {
        alert("Sinto muito, amigo, mas neste Universo ou dimensão não é possível gerar imagens negativas. =)");
    }

    else {

        for (let i = 0; i < numImagens; i++) {

            if (numImagens >= 0) {
                let imagem = document.createElement("img");
                imagem.src = 'img/salsicha.jpg';
                imagem.classList.add("imagens");
                canvas.appendChild(imagem);
            }

        }

    }
}

// Atividade 3 -----------------------------------------------------------------------------------------------------

function alterarFoto() {
    let imagem = document.getElementById("lampada");
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    let botao = document.getElementById('btnEnviar');

    if (arquivo == 'apagada.jpg' || arquivo == '') {
        imagem.src = 'img/acesa.jpg'
        botao.textContent = 'Apagar';
    }
    else {
        imagem.src = 'img/apagada.jpg';
        botao.textContent = 'Acender'
    }

}

// Atividade 4 -----------------------------------------------------------------------------------------------------

function calcularCoisa() {
    let pedido = document.getElementById('inValorPedido').value;
    let porcentagem = document.getElementById('inPercDesc');
    let desconto = document.getElementById('inValDesc');
    let valorLiquido = document.getElementById('inValFinal');


    if (pedido > 0 && pedido < 500) {
        let porcentagem = 0;
        let desconto = pedido * porcentagem / 100;
        console.log("0 - 500");
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    if (pedido >= 500 && pedido < 1000) {
        let porcentagem = 0.5;
        let desconto = pedido * porcentagem / 100;
        console.log("500 - 1000");
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    if (pedido >= 1000 && pedido < 1500) {
        let porcentagem = 0.8;
        let desconto = pedido * porcentagem / 100;
        console.log("1000 - 1500");
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    if (pedido >= 1500 && pedido < 2000) {
        let porcentagem = 1.5;
        let desconto = pedido * porcentagem / 100;
        console.log("1500 - 2000");
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    if (pedido >= 2000) {
        let porcentagem = 1.5;
        let desconto = pedido * porcentagem / 100;
        console.log("2000");
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    else {
        alert("Houve um erro inesperado, Você provavelmente digitou um valor negativo ou zero, Tente Novamente com valores positivos! 😁");
        console.log("ALERTA");
    }

}

//---------------------------------------------- FIM =)----------------------------------------------