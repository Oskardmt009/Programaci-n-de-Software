#Suponga que un individuo desea invertir su capital en un banco y desea 
#saber cuánto dinero ganará después de un mes si el banco paga a razón de 2% mensual.

capital = 2000000
interes = 2

interesGanado = capital*interes/100

totalGanancia = 0

if interes == 2:
    totalGanancia = capital+interesGanado
    print(f"Su interés es de: {totalGanancia}")
    

#Leer un número e imprimir un mensaje en caso que sea par.

num1 = 16
if num1 % 2 == 0:
    print(f"El número es par")

else:
    print(f"El número no es par")

#Elabore un algoritmo que lea un número y si este es mayor o igual a 10 devuelva el triple de este.

num2 = 15
if num2>10:
    print(f"El triple del número es: {num2*3}")
else:
    print(f"El número es: {num2}")
    
    #Un proveedor de computadores ofrece descuento del 10%, si cuesta $1.000.000 o más. 
#Determinar cuánto pagará, con IVA incluido (19%), un cliente si la compra cumple con 
##esta condición.

porc = 10
costo = 2000000
dcto = porc/100
iva = 19
ivaInc = iva/100
vlrTotal = 0
costoIva = 0
costoTotal = 0

if costo >= 1000000:
    vlrTotal = costo - (costo*dcto)
    costoIva = vlrTotal*ivaInc;
    vlrPagar = vlrTotal+costoIva;
    mensaje = f"El valor a pagar del producto es: {vlrPagar}"
else:
    vlrPagar=(costo*ivaInc)+costo
    mensaje = f"El valor a pagar del producto es: {vlrPagar}"
    
print(mensaje)

#Realizar un algoritmo que lea dos números e imprima la suma de los 2, 
#en caso que el primero sea mayor al segundo

num3=13
num4=7
if num3>num4:

    suma = num3+num4;
    mensaje = f"La suma es: {suma}"
else:

    mensaje = "No hay suma"
print(mensaje)

#Calcular el salario de un empleado, teniendo en cuenta que si el salario bruto 
#es superior a $2.000.000, debe hacerse una retención del 10%.

salario = 2000000;
porc2 = 10;
dcto2 = porc2/100;

if salario>2000000:

    salarioTotal = salario-(salario*dcto2);
    mensaje = f"El salario a pagar es: {salarioTotal}"

else:
    mensaje = f"El salario a pagar es: {salario}"

print(mensaje)

#Leer un número e imprimir un mensaje en caso que sea múltiplo de 5.

num5 = 255
if num5 % 5 == 0:
    mensaje = f"El número {num5} es múltiplo de 5"
else:
    mensaje = f"El número {num5} no es múltiplo de 5"

print(mensaje)
    
'''
//Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original 
// y su precio con descuento. El descuento lo hace en base a la clave, si la 
// clave es 01 el descuento es del 10% y si la clave es 02 el descuento es del 20% 
// (solo existen dos claves).}

'''

articulo = "camisa";
clave = 1;
precioOriginal = 150000;
precioDcto = 0;

if clave == 1:

    precioDcto=precioOriginal*0.9;
    mensaje = f"El artículo {articulo} con la clave {clave} tiene un valor de: {precioOriginal} y con descuento queda en: +{precioDcto}"

else: 
    if clave==2:

        precioDcto=precioOriginal*0.8;
        mensaje = f"El artículo {articulo} con la clave {clave} tiene un valor de: {precioOriginal} y con descuento queda en: +{precioDcto}"


    else:

        mensaje = f"El artículo {articulo} con la clave {clave} tiene un valor de: {precioOriginal}"

print(mensaje)

'''//Hacer un algoritmo que calcule el total a pagar por la compra de camisas. 
// Si se compran tres camisas o más se aplica un descuento del 20% sobre el 
// total de la compra y si son menos de tres camisas un descuento del 10%
'''

numCamisas = 3;
costoTotalCamisas = 1450000 #Suponiendo la suma total de las camisetas
if numCamisas<3:

    mensaje = f"El valor total a pagar es de: {costoTotalCamisas*0.90}"

else:

    mensaje = f"El valor total a pagar es de:  {costoTotalCamisas*0.80}"

print(mensaje)