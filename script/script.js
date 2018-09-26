const input = document.getElementById("listComposerInput");
const addButton = document.querySelector(".list-composer__button");

    addButton.addEventListener("click", function(event){
    event.preventDefault();
    
    //validando para não aceitar input vazio ou nulo
    if(input.value === undefined || input.value === null || input.value === "" || input.value === " "){
        return false;
    }

    const textBox = document.querySelector(".list-area__box");
    const textArea = document.createElement("span");

    textArea.innerHTML += `<span id="span-content"><p class="list-area__text">${input.value}</p>
                        <a href="#" onclick="check(this)"><i class="far fa-check-circle"></i></a>
                        <a href="#" onclick="dell(this)"><i class="far fa-times-circle"></i></a>
                        </span>`

    textBox.appendChild(textArea);
    textBox.style.display = "block";
    input.value = null;

    const buttonDel = document.querySelector(".list-area__button-del");
        buttonDel.addEventListener("click", function(event){
        event.preventDefault();
        const contentArea = document.getElementById("span-content");
        contentArea.remove();
    });


});

function dell(ex){
    let d = ex.parentNode;
    d.remove();
}

function check(ch){
    let c = ch.parentNode;
    c.style.textDecoration = "line-through";
    c.style.color = "#a8a8a8";
}

const buttonCheck = document.querySelector(".list-area__button-check");



buttonCheck.addEventListener("click", function(event){
    event.preventDefault();
    
});

