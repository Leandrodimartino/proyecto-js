alert("Bienvenidos al simulador de préstamos, ¡empecemos!");

let monto = prompt("Ingresa el monto que deseas solicitar.");
monto = parseFloat(monto);

let cuotas = prompt("Ingrese la cantidad de cuotas en las que desea devolver el préstamo. Ya sea 1, 3, 6 o 12");
cuotas = parseInt(cuotas);

if (cuotas === 1 || cuotas === 3 || cuotas === 6 || cuotas === 12) {
    let interes = calcInteres(cuotas, monto);
    let montoTotal = monto + interes;
    let cuotaMensual = montoTotal / cuotas;

    alert('Solicitaste el monto de: $' + monto.toFixed(2));
    alert('Vas a devolver el dinero solicitado en ' + cuotas + ' cuotas.');
    alert('El monto total con intereses sería: $' + montoTotal.toFixed(2));
    alert('Por cuota vas a abonar: $' + cuotaMensual.toFixed(2));
} else {
    alert('Dato incorrecto');
}

// Función para calcular el interés
function calcInteres(cuotas, monto) {
    let interes = 0;

    if (cuotas === 1) {
        interes = monto * 0.05;
    } else if (cuotas === 3) {
        interes = monto * 0.20;
    } else if (cuotas === 6) {
        interes = monto * 0.40;
    } else if (cuotas === 12) {
        interes = monto * 0.90;
    }

    return interes;
}

let salida = "";

while (salida !== "FIN") {
    salida = prompt("(escribe FIN para terminar)");
}