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
let ivaInc = iva/100
let vlrTotal = 0
let costoIva = 0;
let costoTotal = 0;

if(costo >=1000000)
{
    vlrTotal= costo -(costo*dcto)
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

//En un almacén se hace un 20% de descuento a los clientes cuya 
// compra sea superior a $100.000. ¿Cuánto deberá pagar cada cliente?

let compra = 100000;
const porc1 = 20;
let dcto1 = porc1/100

if(compra>=100000)
{
    vlrDcto1 = compra-(compra*dcto1);
    console.log("El valor a pagar es: " + vlrDcto1)
}
else
{
    console.log("El valor a pagar es: " + compra)
}

//Calcular el salario de un empleado, teniendo en cuenta que si el salario bruto 
// es superior a $2.000.000, debe hacerse una retención del 10%.

let salario = 2000000;
const porc2 = 10;
let dcto2 = porc2/100;

if(salario>2000000)
{
    salarioTotal = salario-(salario*dcto2);
    console.log("El salario a pagar es: " + salarioTotal);
}
else
{
    console.log("El salario a pagar es: " + salario);
}

//Leer un número e imprimir un mensaje en caso que sea múltiplo de 5.

let num3 = 15;
if(num3 % 5 === 0)
{
    console.log("El número " + num3 + " Es múltiplo de 5")
}
else
{
    console.log("El número " + num3 + " No es múltiplo de 5")
}

//Leer la edad de una persona e imprimir un mensaje en caso que sea mayor de edad.

let edad = 25;
if(edad>=18)
{
    console.log("Mayor de Edad");
}
else
{
    (console.log)("Menor de Edad")
}

//Un proveedor de computadores ofrece descuento del 10%, si cuesta $1.000.000 
// o más. Determinar cuánto pagará, con IVA incluido (19%), un cliente cualquiera por la compra de una computadora.

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

//Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original 
// y su precio con descuento. El descuento lo hace en base a la clave, si la 
// clave es 01 el descuento es del 10% y si la clave es 02 el descuento es del 20% 
// (solo existen dos claves)'''

let articulo = "camisa";
let clave = 1;
let precioOriginal = 150000;
let precioDcto = 0;

if(clave ==1)
{
    precioDcto=precioOriginal*0.9;
    console.log("El artículo "+articulo+" con la clave"+clave+"tiene un valor de: "+precioOriginal+ "y con descuento queda en: "+precioDcto)
}
else if(clave==2)
{
    precioDcto=precioOriginal*0.8;
    console.log("El artículo "+articulo+" con la clave"+clave+"tiene un valor de: "+precioOriginal+ "y con descuento queda en: "+precioDcto)

}
else
{
    console.log("El artículo "+articulo+"tiene un valor de: "+precioOriginal)
}

//Hacer un algoritmo que calcule el total a pagar por la compra de camisas. 
// Si se compran tres camisas o más se aplica un descuento del 20% sobre el 
// total de la compra y si son menos de tres camisas un descuento del 10%

let numCamisas = 3;
let costoTotalCamisas = 1450000 //Suponiendo la suma total de las camisetas
if(numCamisas<3)
{
    console.log("El valor total a pagar es de: "+ costoTotalCamisas*0.90)
}
else
{
    console.log("El valor total a pagar es de: "+ costoTotalCamisas*0.80)
}
