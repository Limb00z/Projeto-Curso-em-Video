let num = document.querySelector("input#fnum"); //CAPTURANDO OS INPUTS (STRING)
let lista = document.querySelector("select#flista"); //lOCAL ONDE IREMOS COLOCAR OS INPUTS
let res = document.querySelector("div#res"); // LOCAL ONDE VAMOS FAZER AS RESPOSTAS DE SOMA MEDIA E ETC
let valores = []; // ARRAY ONDE VAI SER ARMAZENADO OS VALORES

function isNumero(n) { //VERIFICAR SE O NUMERO ESTÁ ENTRE 1 E 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    };
};

function inLista(n, l) {  //VERIFICAR SE O NUMERO DIGITADO JÁ EXISTE NO ARRAY OU É INVÁLIDO
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
         return false
    }
};

num.addEventListener('keyup', function(e){ //Ao pressionar botão enter, acionar função adicionar()
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
      // colocas aqui a tua função a rodar //
      adicionar()
    }
  });

function adicionar() { 
    if (isNumero(num.value) && !inLista(num.value, valores)) {  // AQUI ELE VAI VALIDAR OS DOIS VALIDADORES ACIMA.
        valores.push(Number(num.value)); //JOGAR NO ARRAY O VALOR DE NUM, EM FORMA DE NUMERO, PQ VEM EM STRING
        let item = document.createElement("option"); //CRIANDO UM ELEMENTO PARA INSERIR NA TELA, DENTRO DO SELECT 
        item.text = `Valor ${num.value} adicionado` //DANDO UM VALOR AO ITEM CRIADO
        lista.appendChild(item); //JOGANDO O ITEM CRIADO DENTRO DO SELECT
        res.innerHTML = ''; //ZERAR A TELA DE RESPOSTA, DIV#RES , QUANDO ADICIONARMOS UM NOVO VALOR NO ARRAY, PARA ELA PODER RE-CALCULAR TUDO NOVAMENTE
        
    } else {
        alert("Valor inválido ou já digitado!"); //CASO AS VALIDAÇÕES DÊEM ERRADO, RETORNAR O ALERT DE ERRO!
    };

    num.value = ''; // APÓS CLICAR E INSERIR UM VALOR NO ARRAY, A AREA DO INPUT, SERÁ LIMPA!
    num.focus(); // APÓS SER LIMPA, O FOCO VOLTARÁ PRA ELA.
}

function finalizar() { //ESSA FUNÇÃO ESTÁ NO BOTÃO FINALIZAR, QUE VAI GERAR O RELATÓRIO NA (DIV#RES)
    if (valores.length == 0) { // SE NÃO HOUVER VALOR NO ARRAY, RETORNA ERRO
        alert('Adicione valores antes de finalizar');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos] // enquanto conta os array, ele vai somando e gerando um total por acrescimo dos valores.

            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if ( valores[pos] < menor){
                menor = valores[pos];
            }
            
        }

        media = soma / total;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p> A média dos números é ${media.toFixed(2)}</p>`


    }
}