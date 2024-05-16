let contador = 0; 
let resultado = document.querySelector('section#resultado')
// variáveis globais

function clicar(){
    contador ++; // contador = contador + 1 (++)
    resultado.innerHTML = `<p>Contador está com <mark>${contador}</mark> cliques.</p>`;
}
function apagar(){
    contador = 0
    resultado.innerHTML = `<p>Contador está com <mark>${contador}</mark> cliques.</p>`;
}
