//pegando a hora local
var hora = new Date().getHours();
//pegando minuto local
var minutos = new Date().getMinutes();

//pegando a div pelo id, para melhor entendimento. 
var horaPagina = document.getElementById("hora");

//atribuindo escrita de horario atual na página
horaPagina.innerHTML = `<p>Horário atual: ${hora}:${minutos} </p>`;