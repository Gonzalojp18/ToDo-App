let input = document.querySelector(".input");
let btnAdd= document.querySelector(".boton-agregar");
let container = document.querySelector(".container");


class item {
    constructor(newTask) {
        this.crearDiv(newTask);
    }
    crearDiv(newTask) {
        const box = document.createElement("div");
        box.classList.add("item");

        const boxInput = document.createElement("input");
        boxInput.setAttribute("type", "text");
        boxInput.disabled = true;
        boxInput.value = newTask;
        boxInput.classList.add("item-input");

        const btnEdit = document.createElement("button");
        btnEdit.classList.add("boton-editar");
        btnEdit.innerHTML = "<i class='fas fa-lock'></i>";

        const btnRemove = document.createElement("button");
        btnRemove.classList.add("boton-remover");
        btnRemove.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        box.appendChild(boxInput);
        box.appendChild(btnEdit);
        box.appendChild(btnRemove);
        container.appendChild(box);

        btnEdit.addEventListener("click", function () {
            if (boxInput.disabled == true) {
                btnEdit.innerHTML = "<i class='fas fa-lock-open'></i>";
                boxInput.disabled = false;
                boxInput.classList.add("bgBtnEdit");
            } else {
                btnEdit.innerHTML = "<i class='fas fa-lock'></i>";
                boxInput.disabled = true;
                boxInput.classList.remove("bgBtnEdit");
            }
        });
        btnRemove.addEventListener('click', function () {
            container.removeChild(box);
        });
    }
}

btnAdd.addEventListener("click", function () {
    input.focus();
    if (input.value.length > 0) {
        new item(input.value).crearDiv;
        input.value = ''
    } else alert('ingrese una tarea por favor')
});



