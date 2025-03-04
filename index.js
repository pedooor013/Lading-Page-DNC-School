/* Indicando as variaveis */

var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");
var setaDireita = window.document.getElementById("seta-direita");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function rolarParaDireita(){
    Leonardo.style = "display: none";
    Bruna.style = "display: flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex; margin-top:55px";

}
function rolarParaEsquerda(){
    Bruna.style = "display:none";
    Leonardo.style = "display: flex";
    setaEsquerda.style = "display: none";
    setaDireita.style = "display: flex; margin-top:55px";
}
