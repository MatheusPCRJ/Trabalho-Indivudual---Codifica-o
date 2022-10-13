
/* javascrip para escolher Cifra de Cesar e aparecer o campo */
let x = document.querySelector("#escolherCod");

x.addEventListener("change", function(evento){
    evento.preventDefault();

    let adicionar = document.querySelector("#addlista");
    
    if(evento.target.value == "radio-cesar"){
        adicionar.style = "display: flex";
    } else {
        adicionar.style = "display: none";
    }
});



/* javascrip para mudar o nome do botao quando selecionado */
let botao = document.querySelectorAll('input[name="codification"]');


botao.forEach(function(radio){
    radio.addEventListener("change", function(evento){
        evento.preventDefault();

        let button = document.querySelector("#codificar-btn");

        if(evento.target.value == "Decodificar"){
            button.innerHTML = "Decodificar Mensagem";
        }
        else{
            button.innerHTML = "Codificar Mensagem";
        }

    })  
});



let formulario = document.forms.formularioName;

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let writing = formulario.textoEntrada.value;

    let choiceCifraBase = formulario.chooseCod.value;

    let radiosCodeDecod = formulario.codification.value;

    let houses = formulario.numberCesar.value;

    let finalMessage = "";

    if (choiceCifraBase == "radio-cesar"){
        finalMessage = cesar (writing, houses, radiosCodeDecod);
    } else {
        finalMessage = base64 (writing, radiosCodeDecod);
    }

    let finalResul = document.querySelector("#text-codi-saida");
    finalResul.innerHTML= `${finalMessage}`
});


/*função do Cifra de Cesar */
function cesar (writing, houses, radiosCodeDecod){
    houses = Number(houses);

    let finalMessage = "";

    for (let i = 0; i < writing.length; i++){
        let letra = writing[i];
        let codigo = letra.charCodeAt();

        if (radiosCodeDecod == "codificar"){
            codigo += houses;
        }
        else{
            codigo -= houses;
        }
        finalMessage += String.fromCharCode(codigo);
    }
    return finalMessage;
}
/* Final da Função Cifra de Cesar */



/* Base64 do w3School */
function base64 (writing, radiosCodeDecod) {
    if (radiosCodeDecod == "codificar") {
        return btoa(writing);
    } else {
        return atob(writing);
    }
}






/* variavel que pega o ID do texto 
let pegaMesagem = document.querySelector("#text-codi");*/



/* variavel que pega as casas adicionais do Cifra de Cesar
let CasaCesar = document.querySelector("number-cesar"); *//* div number-cesar que pega os numeros
let casas = CasaCesar.value; 
let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let PegarLetra = alfabeto[casas];   
console.log(casas);
*/
/*
var input = document.querySelector("#number-cesar");
var texto = input.value;
console.log(texto);*/