function validarSenhaForca(){
    var senha = document.getElementById('senhaForca').value;
    var forca = 0;
    document.getElementById("impSenha").innerHTML = "Senha" + senha;

    if((senha.length >= 6) && (senha.length <= 6)){
        forca += 10;
    }else{
        forca += 25;
    }

    if((senha.length >= 5 ) && (senha.match(/[a-z]+/))){
        forca += 10;
    }
    mostraForca(forca);
}

    function mostraForca(forca){
        document.getElementById("impForcaSenha").innerHTML = "Força:  " + forca;

        if(forca < 30){
            document.getElementById("erroForcaSenha").innerHTML = "<span style='color: red'>Fraca</span>";

        }else if((forca >= 30) && (forca < 50)){
            document.getElementById("erroForcaSenha").innerHTML = "<span style='color: yellow'>Média</span>";

        }else if((forca >= 50) && (forca < 70)){
            document.getElementById("erroForcaSenha").innerHTML = "<span style='color: green'>Média</span>";

        }
    }