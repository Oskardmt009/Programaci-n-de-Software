/*Suponga que un individuo desea invertir su capital en un banco y desea 
saber cuánto dinero ganará después de un mes si el banco paga a razón de 2% mensual.*/

let capital = 10000000;
let interes = 2;

let interesGanado = capital*interes/100;

let totalGanancia = 0;

if(interes==2)
{
    totalGanancia = capital+interesGanado;
    console.log("Su interés es de: " +totalGanancia)
}

//Leer un número e imprimir un mensaje en caso que sea par.

let num = 16;
if(num % 2 == 0)
{
    console.log("El número "+num+ " es par")
}
else
{
    console.log("El número "+num+ " no es par")
}

//Elabore un algoritmo que lea un número y si este es mayor o igual a 10 devuelva el triple de este.

let x = 15;

if(x>=10)
{
    console.log("El triple de " + x + " es: "+ 3*x)
}
else
{
    console.log(x)
}

/*Un proveedor de computadores ofrece descuento del 10%, si cuesta $1.000.000 o más. 
Determinar cuánto pagará, con IVA incluido (19%), un cliente si la compra cumple con 
esta condición. */

const porc = 10;
let costo = 2000000;
let dcto = porc/100;
const iva = 19
ivaInc = iva/100
let vlrTotal = 0
let costoIva = 0;
let costoTotal = 0;

if(costo >=1000000)
{
    vlrTotal= (costo*dcto)+costo;
    costoIva = vlrTotal*ivaInc;
    vlrPagar = vlrTotal+costoIva;

    console.log("El valor a pagar del producto es: "+vlrPagar)
}
else
{
    vlrPagar=(costo*ivaInc)+costo
    console.log("El valor a pagar del producto es: "+vlrPagar)
}

//Realizar un algoritmo que lea dos números e imprima la suma de los 2, 
// en caso que el primero sea mayor al segundo

let num1=5, num2=7;

if(num1>num2)
{
    suma = num1+num2;
    console.log("La suma es: " + suma)
}
else
{
    console.log("No hay suma")
}