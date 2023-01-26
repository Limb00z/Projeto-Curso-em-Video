// Essa é uma função com parametro. Podemos ter quantos aprametros quisermos, depende da função e o que ela faz...

function ParImp(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

// podemos atribuir a uma variável, exibir no console ou manipular o resultado como quisermos em qualquer outro lugar, por ex, no DOM.

let res = ParImp(5); 
console.log(res);

// ou

console.log(ParImp(50));


//função com mais de um parametro de ex.
function soma(n1, n2) {
    return n1 + n2
};

let somar = soma(5, 10);
console.log(somar);

//ou

console.log(soma(10, 10));

// uma coisa que podemos fazer também é pré-definir um um valor para o parametro. olha o exemplo abaixo.

function soma1(n1=0, n2=0) {
    return n1 + n2
};

console.log(soma1(2)); // Com isso, você deix aum valor pre-definido, assim evitando um erro maior no programa. se não fizer isso e esquecer de usar algum parametro, o parametro faltoso será atribuido como Undefined(indefinido), e retornará um erro no programa inteiro.

//Podemos fazer também uma função que retorna uma váriavel. Olha o ex.

function fatorial(n) {
    let fat = 1;
    for (let c = n; c > 1; c--){ // contador receber n(param); enquanto contador for maior que 1; diminua 1
        fat *= c; // fat = fat * c  ---- variavel fat é igual a ela mesma, vezes contador
    }
    return fat
}

console.log(fatorial(5)); //120

//Fora isso, existe  a RECURSIVIDADE. usando a função dento dela mesmo. olha o ex.
function fatorial001(n) {
    if (n == 1) {
        return 1  //fatorial de 1 é 1 mesmo.
    } else {
        return n * fatorial001(n - 1); //todo fatorial pode ser usado o fatorial de seu numero antecessor. exemplo de 5... !5 = x5 x!4
    };
};

console.log(fatorial001(5)); // 120