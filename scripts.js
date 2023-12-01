let inputTarea = document.querySelector("input");
let botonAgregar = document.querySelector(".boton-agregar");

botonAgregar.addEventListener("click", function(){
    chequearInput();
    inputTarea.value = "";
})
inputTarea.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        chequearInput();
        inputTarea.value = '';
    }
});

class Item {
    constructor(texto) {
        this.texto = texto
        this.crearDiv()
    }
    //metodo:
    crearDiv(inputValue) {
        let divItem = document.createElement("div");
        divItem.classList.add("item");

        let inputItem = document.createElement("input");
        inputItem.setAttribute("type", "text");
        inputItem.classList.add("item-input");
        inputItem.setAttribute("disable", "");
        inputItem.value = this.texto;

        let botonEditar = document.createElement("button");
        botonEditar.classList.add("boton-editar");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        let editando = false;
        botonEditar.addEventListener("click", () => {
            if (!editando) {
                inputItem.removeAttribute("disabled");
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
                editando = true;
            } else {
                inputItem.setAttribute("disabled", "");
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
                editando = false;
            }
        })

        let botonRemover = document.createElement("button");
        botonRemover.classList.add("boton-remover");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.addEventListener("click", () => {
            divItem.remove();
        })

        divItem.appendChild(inputItem);
        divItem.appendChild(botonEditar);
        divItem.appendChild(botonRemover);

        document.querySelector(".container").appendChild(divItem);
    }
}




function chequearInput() {
    
    const textoTarea = document.querySelector('.input').value.trim();

    if (textoTarea !== '') {
        const nuevaTarea = new Item(textoTarea);
    } else {
        alert('Por favor, ingresa una tarea válida.');
        inputTarea.value = "";
    }
}


