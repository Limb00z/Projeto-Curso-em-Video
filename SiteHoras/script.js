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
trocaFoto();

function trocaFoto() {
    switch (hora) {
        case 0:
            imgPagina.innerHTML = ` <img src="./img/madrugada.jpg" class="imgAdd" alt="mão saindo do tumulo">`;
            break;
        case 1:
            imgPagina.innerHTML = ` <img src="./img/madrugada.jpg" class="imgAdd" alt="mão saindo do tumulo">`;
            break;
        case 2:
            imgPagina.innerHTML = ` <img src="./img/madrugada.jpg" class="imgAdd" alt="mão saindo do tumulo">`;
            break;
        case 3:
            imgPagina.innerHTML = ` <img src="./img/madrugada.jpg" class="imgAdd" alt="mão saindo do tumulo">`;
            break;
        case 4:
            imgPagina.innerHTML = ` <img src="./img/madrugada.jpg" class="imgAdd" alt="mão saindo do tumulo">`;
            break;
        case 5:
            imgPagina.innerHTML = ` <img src="./img/manha.jpg" class="imgAdd" alt="homem no campo agradecendo pelo sol">`;
            break;
        case 6:
            imgPagina.innerHTML = ` <img src="./img/manha.jpg" class="imgAdd" alt="homem no campo agradecendo pelo sol">`;
            break;
        case 7:
            imgPagina.innerHTML = ` <img src="./img/manha.jpg" class="imgAdd" alt="homem no campo agradecendo pelo sol">`;
            break;
        case 8:
            imgPagina.innerHTML = ` <img src="./img/manha.jpg" class="imgAdd" alt="homem no campo agradecendo pelo sol">`;
            break;
        case 9:
            imgPagina.innerHTML = ` <img src="./img/manha.jpg" class="imgAdd" alt="homem no campo agradecendo pelo sol">`;
            break;
        case 10:
            imgPagina.innerHTML = ` <img src="./img/manha.jpg" class="imgAdd" alt="homem no campo agradecendo pelo sol">`;
            break;
        case 11:
            imgPagina.innerHTML = ` <img src="./img/manha.jpg" class="imgAdd" alt="homem no campo agradecendo pelo sol">`;
            break;
        case 12:
            imgPagina.innerHTML = ` <img src="./img/tarde.jpg" class="imgAdd" alt="sol forte em um coqueiro">`;
            break;
        case 13:
            imgPagina.innerHTML = ` <img src="./img/tarde.jpg" class="imgAdd" alt="sol forte em um coqueiro">`;
            break;
        case 14:
            imgPagina.innerHTML = ` <img src="./img/tarde.jpg" class="imgAdd" alt="sol forte em um coqueiro">`;
            break;
        case 15:
            imgPagina.innerHTML = ` <img src="./img/tarde.jpg" class="imgAdd" alt="sol forte em um coqueiro">`;
            break;
        case 16:
            imgPagina.innerHTML = ` <img src="./img/fimDeTarde.jpg" class="imgAdd" alt="sol se pondo na praia">`;
            break;
        case 17:
            imgPagina.innerHTML = ` <img src="./img/fimDeTarde.jpg" class="imgAdd" alt="sol se pondo na praia">`;
            break;
        case 18:
            imgPagina.innerHTML = ` <img src="./img/noite.jpg" class="imgAdd" alt="lua cheia e arvores">`;
            break;
        case 19:
            imgPagina.innerHTML = ` <img src="./img/noite.jpg" class="imgAdd" alt="lua cheia e arvores">`;
            break;
        case 20:
            imgPagina.innerHTML = ` <img src="./img/noite.jpg" class="imgAdd" alt="lua cheia e arvores">`;
            break;
        case 21:
            imgPagina.innerHTML = ` <img src="./img/noite.jpg" class="imgAdd" alt="lua cheia e arvores">`;
            break;
        case 22:
            imgPagina.innerHTML = ` <img src="./img/noite.jpg" class="imgAdd" alt="lua cheia e arvores">`;
            break;
        case 23:
            imgPagina.innerHTML = ` <img src="./img/noite.jpg" class="imgAdd" alt="lua cheia e arvores">`;
            break;
        default:
            break;
                
    }
}