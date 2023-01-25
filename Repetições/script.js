


function contar() {
    var inicio = Number(document.getElementById("inicio").value);
    var fim = Number(document.getElementById("fim").value);
    var passo = Number(document.getElementById("passo").value);

    console.log(inicio, fim, passo)
    var res = document.getElementById('res');

    if (passo <= 0 || fim == 0 || inicio == 0) {
        alert("Você consegue andar parado? não pode ser 0, será reatribuido para 1 :} ");
        res.innerHTML = 'Impossível contar...'
        passo = 1
    } else { //lembra de testar
        // res.innerHTML = 'Contando';

        // for (var c = inicio; c <= fim; c += passo){ //fazer esse primeiro para exemplo
        //     res.innerHTML += ` ${c}`  // Aqui ele atualiza o que já tem e concatena.
        // }
        // res.innerHTML += `\u{1F3C1}` // bandeirinha


        if (inicio < fim) { // esse é o segundo exemplo para correção do inicio ser menor que o fim.
            for (var c = inicio; c <= fim; c += passo){ //fazer esse primeiro para exemplo
                res.innerHTML += ` ${c}`  // Aqui ele atualiza o que já tem e concatena.
            }
            //res.innerHTML += `\u{1F3C1}` // bandeirinha  -> ela seria duplicada dentro do if e else, para isso, basta colocar do lado de fora 
        } else { // contagem decrescente
            for (var c = inicio; c >= fim; c -= passo){
                res.innerHTML += ` ${c}`  // Aqui ele atualiza o que já tem e concatena.
            }
        }
        res.innerHTML += `\u{1F3C1}` // bandeirinha



        // while (inicio < fim) {
        //     
        //     inicio = passo + inicio;
            
        // }
    }
} 