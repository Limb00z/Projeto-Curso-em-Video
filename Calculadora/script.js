function calcular() {
    var numero = Number(document.getElementById('numero').value); //se pegar sem a função Number(), vem com string. ---não esqueça do value
    console.log(typeof numero, numero); //teste de tipo e valor.

    var multi = document.getElementById("multiplicados"); // Pegando o objeto textarea para atribuir

    // var c = 0; //não recisa mais, pois criei dentro do for, explicar isso dps

    if (numero < 0) {
        alert("[ERRO] Numero inválido: MINÍMO É 0 ");
    } else {
        multi.setAttribute("id", "borda"); // essa aqui o ai fez sozinho!
        for (var c = 0; c <= 10; c++){
            multi.innerHTML += `${numero} x ${c} = ${numero * c} <br>`;            
        }
    }
}