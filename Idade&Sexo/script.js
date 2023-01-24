function verificar() {
    var dataAtual = new Date().getFullYear();
    console.log(dataAtual);
    
    var anoNascimento = Number(document.getElementById("txtano").value);
    console.log(anoNascimento);

    
    if (anoNascimento <= 1900 || anoNascimento > dataAtual) {
        alert("[ERRO]Verifique os dados e tente novamente.");
    
    } else {
        var idade = dataAtual - anoNascimento; //calculando idade atual
        console.log(`idade atual: ${idade}`);

        var img = document.createElement("img"); //criando um elemento(tag) no html, como se fosse diretamente
        img.setAttribute('id', 'foto'); //atribuindo um id para podermos manipular ele dps.

        
        var fsex = document.getElementsByName('radsex'); //pegando a posição no array 
        var genero = "";
        if (fsex[0].checked) {                              //e atribuindo sexo e idade p/ foto
            genero = 'Homem'
            if (idade >= 0 && idade <= 3) {
                //bb
                img.setAttribute('src', './img/bb-m.jpg');
            } else if (idade > 3 && idade < 10  ) {
                //criança
                img.setAttribute('src', './img/crianca-m.jpg');
            } else if (idade >= 10  && idade < 15) {
                //adolescente
                img.setAttribute('src', './img/adolescente-m.jpg');
            } else if (idade >= 15 && idade < 30 ) {
                //jovem
                img.setAttribute('src', './img/jovem-m.jpg');
            } else if (idade >= 30 && idade < 50 ){
                //adulto
                img.setAttribute('src', './img/adulto-m.jpg');
            } else {
                //idoso
                img.setAttribute('src', './img/idoso-m.jpg');
            };

                                                //pq ainda não fopi atribuido? resposta  abaixo
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3) {
                //bb
                img.setAttribute('src', './img/bb-f.jpg');
            } else if (idade > 3 && idade < 10  ) {
                //criança
                img.setAttribute('src', './img/crianca-f.jpg');
            } else if (idade >= 10  && idade < 15) {
                //adolescente
                img.setAttribute('src', './img/adolescente-f.jpg');
            } else if (idade >= 15 && idade < 30 ) {
                //jovem
                img.setAttribute('src', './img/jovem-f.jpg');
            } else if (idade >= 30 && idade < 50 ){
                //adulto
                img.setAttribute('src', './img/adulto-f.jpg');
            } else {
                //idoso
                img.setAttribute('src', './img/idoso-f.jpg');
            };
        };
        console.log(genero);                             //testando genero

        
        var res = document.getElementById("res"); //div com a resposta
        res.innerHTML = ` <p>Sua idade é ${idade} anos e você é ${genero}</p>` //resposta na tela junto da foto
        res.appendChild(img); //add imagem
    }
    
}

