// definir el valor del ticket
const precioBasePasaje = 350000;

// definir descuentos
const descEstudiante = 0.70;
const descJubilado = 0.50;
const descEfectivo = 0.10;

// tomar los elementos del formulario
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

function calcularPago() {
    let total = cantidad.value * precioBasePasaje;

    // Aplicar descuentos
    switch (categoria.value) {
        case "estudiante":
            total *= (1 - descEstudiante); // Restar el descuento del total
            break;
        case "jubilado":
            total *= (1 - descJubilado);
            break;
        case "efectivo":
            total *= (1 - descEfectivo);
            break;
    }

    const montoConDescuento = total.toFixed(2); // Monto con descuento
    totalPagar.textContent = `Total a Pagar: $${montoConDescuento}`;
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();
});
