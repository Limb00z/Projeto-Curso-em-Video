//pegando a hora local
var hora = new Date().getHours();
//pegando minuto local
var minutos = new Date().getMinutes();

//pegando a div pelo id, para melhor entendimento. 
var horaPagina = document.getElementById("hora");

//atribuindo escrita de horario atual na página
horaPagina.innerHTML = `<p class="txtHora">Horário atual: <strong>${hora}:${minutos}</strong> </p>`;

//pegando a div da imagem pelo id
var imgPagina = document.getElementById("imagem");

//adcionando imagem
imgPagina.innerHTML = ` <img src="./img/tarde.jpg" class="imgAdd" alt="sol com folhas">`;

function trocaFoto() {
    switch (hora) {
        case 0:
            imgPagina.innerHTML = ` <img src="./img/madrugada.jpg" class="imgAdd" alt="Noite de Lua">`;
            break;
        case 5:
            imgPagina.innerHTML = ` <img src="./img/manha.jpg" class="imgAdd" alt="sol amanhecendo">`;
            break;
        case 12:
            imgPagina.innerHTML = ` <img src="./img/tarde.jpg" class="imgAdd" alt="sol amanhecendo">`;
            break;
        case 16:
            imgPagina.innerHTML = ` <img src="./img/fimDeTarde.jpg" class="imgAdd" alt="sol com folhas">`;
            break;
        case 18:
            imgPagina.innerHTML = ` <img src="./img/noite.jpg" class="imgAdd" alt="sol com folhas">`;
            break;
        default:
            break;
                
    }
}