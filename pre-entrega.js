


function calcularInteres(monto , cuotas){

    if(cuotas==1){
        let interes = monto * 0.05;
        return interes
    }

    else if(cuotas==3){
        let interes = monto * 0.20;
        return interes
    }

    else if(cuotas==6){
        let interes = monto * 0.40;
        return interes
    }

    else if(cuotas==12){
        let interes = monto * 0.90;
        return interes 
    }
}

alert("bienvenidos al simulador de prestamos, empecemos!");

let monto = prompt("Ingrese el monto que desea solicitar por favor");

monto = parseInt(monto);



let cuotas = prompt("Ingrese la cantidad de cuotas en que deseas devolver el prestamo. Opciones: 1-3-6-12");

if (cuotas == 1 || cuotas == 3 || cuotas == 6 || cuotas == 12){

let total = monto + calcularInteres(monto , cuotas);

alert("Felicitaciones, tu prestamo fue aprobado!");

alert("Solicitaste el monto de : "+ monto);

alert("Vas a devolver el dinero solicitado en las siguientes cuotas: "+ cuotas);

alert("El monto total a devolver con intereses seria el siguiente: "+ total );

alert("Por cuota vas a bonar el siguiente monto: "+total/cuotas);

alert("Muchas gracias por elegirnos!");


console.log("Solicitaste el monto de : ", monto);

console.log("Vas a devolver el dinero solicitado en las siguientes cuotas: ", cuotas);

console.log("Por cuota vas a bonar el siguiente monto: ",total/cuotas);

console.log("El monto total a devolver con intereses seria el siguiente: ", total);
}

else alert("dato incorrecto");

let usuario = prompt("si quiere continuar ponga (si), de lo contrario escriba (no)")


