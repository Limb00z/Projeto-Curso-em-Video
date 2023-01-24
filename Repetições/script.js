


function contar() {
    var inicio = Number(document.getElementById("inicio").value);
    var fim = Number(document.getElementById("fim").value);
    var passo = Number(document.getElementById("passo").value);

    console.log(inicio,fim,passo)
    var res = document.getElementById('res');

    if (passo == 0) {
        alert("Você consegue andar parado? Passo não pode ser 0, será reatribuido para 1 :} ")
    } else {
        do {
           res.innerHTML = `${inicio} -  `;
            inicio = inicio + passo; 
        } while (inicio < fim) 
            
        
    }
 
    
}
