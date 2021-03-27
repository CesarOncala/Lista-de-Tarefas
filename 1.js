( () => {// Evento nativo com JavaScript
document.querySelector("[data-form-button]").
addEventListener("click", function(e){
    
e.preventDefault();
let lista = document.querySelector("[data-list]")
let input = document.querySelector("[data-form-input]")
let valor = input.value 

const tarefa = document.createElement("li");
tarefa.classList.add("task");
tarefa.innerHTML = `<p class="content" >${valor}</p>`;
lista.appendChild(tarefa)
tarefa.append(button())
tarefa.append(buttonRemove())
input.value = " "

});


const button = ()=> {
let Button = document.createElement("button");
Button.addEventListener("click", (e)=>{
  e.target.parentElement.classList.toggle("done")
});
Button.classList.add("check-button");
Button.innerText = "Finalizar Tarefa"
return Button;
}

const buttonRemove = () =>{
let button = document.createElement("button");

button.addEventListener("click",(e)=>{
e.target.parentElement.remove();
});

button.classList.add("check-button");
button.style.backgroundColor = "red";
button.style.color = "black";

button.innerText = "Remover";
return button;

}

}) () // IIFE - para bloquear acessos pelo chrome

// Evento com Jquery e data name []
// $("[data-form-button]").on('click', ()=> {
//     console.log("oi");

// });



// Existem outros métodos que podemos utilizar para manipular nós:

// insertBefore(pai, filho): Coloca um nó antes do outro.
// replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
// removeChild(elemento): Remove um nó da árvore.

// document.getElementById(‘id’) seleciona o elemento pelo id passado.
// document.getElementsByClassName(‘classe’) retorna um array dos elementos pelo nome da classe passada.
// document.getElementsByTagName(‘tag’) retorna um array dos elementos pelo nome da tag passada
// document.querySelectorAll(seletor) devolve todos os seletores com o mesmo nome