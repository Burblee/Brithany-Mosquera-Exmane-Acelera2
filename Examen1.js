let sueldoHora = 265;
let sueldoHoraExtra = 350;
let pago;
let pagoNormal;
let pagoExtra;


function calcularSalario(horasTrabajadas) {
    if (horasTrabajadas<=40){
        pago = horasTrabajadas*sueldoHora;
        console.log("El total a pagar por horas laborales normal (%d hrs") es de: %d, horasTrabajadas,pago);

    }
    else{
        horasExtra = horasTrabajadas - 40;
        pagoNormal = 40 * sueldoHora;
        pagoExtra = horasExtra * sueldoHoraExtra;
        pago = pagoNormal + pagoExtra;
        console.log("El total a pagar por horas extra laborales normal (%d hrs) es de : %d", 40, pagoNormal);
        console.log("El total a pagar por horas extra laborales normal (%d hrs) es de : %d", horasExtra,pagoExtra);
    }
}
console.log(calcularSalario(53));