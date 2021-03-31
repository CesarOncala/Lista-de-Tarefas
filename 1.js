( () => {// Evento nativo com JavaScript

  let vet = [];
  updateList()  // Inicializando o carregamento

//#region  Consts

  const getDate = (Origindate)=>{
    return Origindate.format("DD/MM/YYYY");
  }

  const UpdateLocalStorage = ()=>{
    localStorage.setItem("Tarefas", JSON.stringify(vet)) 
  }

    //#endregion

//#region Input Event
document.querySelector("[data-form-button]").addEventListener("click", function(e){
e.preventDefault();
let input = document.querySelector("[data-form-input]")
createElement(input.value ,getDate(moment(document.querySelector("[data-form-date]").value)),vet.length,false)
//sessionStorage.setItem("Tarefas", JSON.stringify(obj)) // Armazenar dados de sessão
UpdateLocalStorage()
input.value = ""
});

  
//#endregion

//#region    functions
 function  updateList (){
   let updatedArray = JSON.parse(localStorage.getItem("Tarefas")) || [];
   if(updatedArray != []) 
    updatedArray.forEach((o)=>{
        createElement(o.value,o.date,o.id,o.complete)
          if(o.complete)
              document.getElementById(o.id).parentElement.classList.toggle("done")
      })
}

function createElement  (value,date,id,complete) {
  let lista = document.querySelector("[data-list]")
  const obj = {
    date:date,
    value:value,
    complete: complete,
    id: id
  }
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  tarefa.innerHTML = `<br/><p class="content" >${obj.date} | ${obj.value}</p>`;
  lista.appendChild(tarefa)
  tarefa.append(button(obj.id))
  tarefa.append(buttonRemove(obj.id))
  vet.push(obj)
}


function button (id) {
  let Button = document.createElement("button");
  Button.addEventListener("click", (e)=>{
    e.target.parentElement.classList.toggle("done")
   if(vet[id].complete)
        vet[id].complete = false
  else
      vet[id].complete = true
    UpdateLocalStorage()
  });

  Button.classList.add("check-button");
  Button.setAttribute("id",id);
  Button.innerText = "Finalizar Tarefa"
  return Button;
  }

  function buttonRemove (id) {
    let button = document.createElement("button");
    
    button.addEventListener("click",(e)=>{
    e.target.parentElement.remove();
    vet.splice(id,1);
    UpdateLocalStorage()
    });
    
    button.classList.add("delete");
    button.style.backgroundColor = "red";
    button.style.color = "black";
    button.setAttribute("id",id)
    
    button.innerText = "Remover";
    return button;
    
    }

//#endregion



}) () 



// IIFE - para bloquear acessos pelo chrome

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