
//definindo o input e botão de add
const input = document.getElementById("listComposerInput");
const addButton = document.querySelector(".list-composer__button");

    addButton.addEventListener("click", function(event){
    event.preventDefault();
    
//validando para não aceitar input vazio ou nulo
    if(input.value === undefined || input.value === null || input.value === "" || input.value === " "){
        return false;
    }

//criando o local onde as tarefas serão inseridas
    const textBox = document.querySelector(".list-area__box");
    
//tag span criada para colocar as tarefas    
    const textArea = document.createElement("span");

//criando através do inner html o conteúdo das tarefas dentro do text area
    textArea.innerHTML += `<span id="span-content"><p class="list-area__text">${input.value}</p>
                        <a href="#" onclick="check(this)"><i class="far fa-check-circle"></i></a>
                        <a href="#" onclick="dell(this)"><i class="far fa-times-circle"></i></a>
                        </span>`

//colocando as tarefas do text box dentro do local span text area
    textBox.appendChild(textArea);

//alterando o display do span para block    
    textBox.style.display = "block";

//resetando o texto do input após o click    
    input.value = null;

//função para deletar individualmente a lista de tarefas
    const buttonDel = document.querySelector(".list-area__button-del");
        buttonDel.addEventListener("click", function(event){
        event.preventDefault();
        const contentArea = document.getElementById("span-content");
        contentArea.remove();

    });

});

//função para deletar a lista d etarefas completamente

function dell(ex){
    let d = ex.parentNode;
    d.remove();
}

//função para check/uncheckind ividual
function check(checker){
    let checklist = checker.parentNode;

    if(checklist.style.color == "black"){
        checklist.style.textDecoration = "line-through";
        checklist.style.color = "#a8a8a8";
    }
    else{
        checklist.style.textDecoration = "none"
        checklist.style.color = "black"
    }
}




