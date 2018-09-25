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

    textArea.innerHTML += `<p class="list-area__text">${input.value}</p>
                        <a href="#" id="check"><i class="far fa-check-circle"></i></a>
                        <a href="#" id="del"><i class="far fa-times-circle"></i></a>`

    textBox.appendChild(textArea);
    textBox.style.display = "block";
    input.value = null;

    const check = document.getElementById("check");

    check.addEventListener("click", function(event){
        event.preventDefault();
        
});
});