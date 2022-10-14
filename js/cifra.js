
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
// Final do javascrip para escolher Cifra de Cesar e aparecer o campo.



// javascrip para mudar o nome do botao quando selecionado
let botao = document.querySelectorAll('input[name="codification"]');
botao.forEach((radio) => {
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
// final do js que muda o botão quando selecionado.



//Base de variaveis que seleciona a formação de cada input, botão e caixa de entra de msg.
let formularioMae = document.querySelector("#formularioId");

formularioMae.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let writing = document.querySelector("#text-codi-entrada").value;
    
    let choiceCifraBase = document.querySelector("#escolherCod").value;
   
    // Coloquei dessa forma diferente para selecionar o name das duas IDs, pq eu selecionando
    // as IDs me causa alguns erros. ("codification" são os nomes lá no html.)
    let radiosCodeDecod = formularioMae.codification.value;

    let houses = document.querySelector("#numberCesar").value;
    
    let finalMessage = "";

    if (choiceCifraBase == "radio-cesar"){
        finalMessage = cesar (writing, houses, radiosCodeDecod);
    } else {
        finalMessage = base64 (writing, radiosCodeDecod);
    }

    let finalResul = document.querySelector("#text-codi-saida");
    finalResul.innerHTML= `${finalMessage}`
});


// Função do Cifra de Cesar.
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
//Final da Função Cifra de Cesar.



//Base64 do https://www.w3schools.com/
function base64 (writing, radiosCodeDecod) {
    if (radiosCodeDecod == "codificar") {
        return btoa(writing);
    } else {
        return atob(writing);
    }
};
// Final da Base64 do https://www.w3schools.com/






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