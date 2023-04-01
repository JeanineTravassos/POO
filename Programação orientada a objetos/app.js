import modificador from "./modificador.js";
import ingredientes from "./ingredientes.js";

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCaptalizados = modificador.capitalizar(ingredientes, 'nome');
let containerIngredientes = document.getElementById('container-ingredientes');

for(let ingrediente of ingredientesCaptalizados) {
    let textoHTML = `
        <div class="ingrediente">
        <img src="img/${ingrediente.img}" alt="Foto do ${ingrediente.nome}" />
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>
    `;

    containerIngredientes.innerHTML += textoHTML;
}







