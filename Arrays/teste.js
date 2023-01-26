// let num = [5,1,8,6,3,7,4,9,2,0];
// num.sort(); // De zero a 10, volta normal em ordem crescente. 
// console.log(num); // mas se tiver algum valor maior que 10, precisará usar um argumento, pq ele lê ,como string , teste com maiores que 9

let num2 = [5, 1, 9, 6, 10, 20, 21, 33, 34, 50, 0];
// num2.sort((a,b) => a - b); //argumento dentro do sort pára trazer organizado corretamente em ordem crescente. Arrow Function
// console.log(num2);

// e se eu queiser trazer em ordem decrescente? basta inverter os argumentos de posição (a-b --> b-a)
// num2.sort((a, b) => b - a);
// console.log(num2)

// para usar laço de repetição em array, foi criado uma nova sintaxe que facilita.
// for (let pos in num2) {
//     console.log(` A posição ${pos} tem o valor ${num2[pos]}`);
// }

//e se eu quiser add um valor no array? duas formas: uma direta e outra mais trabalhada.
console.log(num2.length);//usando o metodo length para saber o tamanho do array. sabendo disto, forçaremos uma entrada na posição depois do resultado. ex: Se foi 11, forçaremos um novo valor na posição 12 olha o exemplo.

num2[11]/*[12]*/ = 200; // eu cometi um erro aqui. nós temos 11 valores, mas na contagem é menos 1, lembra que o vetor começa no zero? rs
console.log(num2);

//podemos forçar uma entrada em algum  outro lugar? vamos testar;...

num2[0] = 1000;
console.log(num2); // Sim, podemos!!!!  obviamente que não está ainda organizado e poderemos fazer isso depois... coma  função sort()

// Mas e se quisermos fazer apenas uma adição sem se preocupar com a posição nem com quantos valores tem? apenas empurrar um valor pra dentro do array. Tem como? Tem sim!!!

num2.push(2000); // usamos a função push e assamos como parametro o valor que queremos add. Ele jogará para o final da posião o item add.
console.log(num2);


//ok ok, e se euq usier saber a posição de um objeto está, posso? apenas com o valor eu consigo descobrir.  olha só.
let posiArray = num2.indexOf(200); // Ele irá retornar a posição desse valor/objeto
console.log(posiArray); // posição 11

//Mas o que acontece se eu procurar em um array e não existir aquele valor? O que será que ele retorna? vamos ver...

// let naoExiste = num2.indexOf(14); // Oq ue será que vai retornar o.o' ???
// console.log(naoExiste); //ELE RETORNA o valor  -1 ... Isso foi criado pros programadores saberem que não existe aquela posição e poderem fazer verificações antes de puxar.  Como podemos fazer isso? if e else.... lembra?

let naoExiste = num2.indexOf(2);
console.log(naoExiste);
if (naoExiste == -1) {
    console.log('O valor não foi encontrado dento do array');
} else {
    console.log(`o valor pesquisado está na posição ${naoExiste}`);
}
