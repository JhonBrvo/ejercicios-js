const leer=requiire("prompt-sync")()
const escribir= console

class ejercicios{
	principal1(){

	}
    ejercicio1(){
	//calcular la cantidad de segundos que estan incluidos en el 
	//numero de horas, minutos, segundos ingresados por el usuario
	//Entrada: Que el usuario ingrese las horas, segundos y minutos
	//Proceso :se suman todos los numero equivvalentes y se da un resultado de las (horas segundops y minutos)
	//salida: mostrar total de seg
	let horas,minutos,seg 
	 horas_seg, minutos_seg, total_seg 
	 horas=0;minutos=0;seg=0;
	
	horas = parseInt(leer('digite las horas: '));
	munutos = parseInt(leer('digite los minutos: '));
	seg = parseInt(leer ('digite los segundos: '));
	Leer ('seg')
	//calcular el equivalente en segundos
	
	horas_seg = horas * 3600;
	minutos_seg = minutos * 60;
	
	total_seg = horas_seg + minutos_seg + seg;
	
    Escribir.log ('los segundos equivalentes son: ',total_seg);
FinAlgoritmo
 }
	ejercicio2(){
	// hacer un programa para ingresar el radio de un circulo
// y se reporte su area y la longitud de la circunferencia
//entrada: predir el valor del radio a calcular 
//proceso: se calcula el radio el area y despues se calcula la longitud  
//salida:  Mostrar la longitud
console.log ( ejercicio2)

let radio, area, lon 

radio = parseInt(leer('digite el valor del radio:'))

area = pi * radio^2
lon	= 2 * pi * radio
Escribir.log ('el area de la circunferencia es : ',area)
Escribir.log( 'la longitud es :',lon)
FinFuncion



	}
	ejercicio3(){
		// un maestro desea saber que porcentaje de hombres y que 
		// porcentaje de mujeres hay en un grupo de docentes
		//entrada: ingresar la cantidad de estrudiantes hombre y mujeres que hay
		//proceso: calcular el porcentaje de estudiantes que hay en total se suman despues se lo divide y se los multiplica por 100
		//salida: mostrar el porcentaje de hombes y mujeres
		console.log  (ejercicio3)
			let num_hombres, num_mujeres 
			let total_estudiantes 
			let porcentajeH, porcentajeM

			num_hombres = parseInt(leer ('Digite el numeros de hombres:'))
			num_mujeres = parseInt(leer( 'Digite el numero de mujeres :'))

			total_estudiantes = num_hombres + num_mujeres
			porcentajeH = num_hombres / total_estudiantes * 100
			porcentajeM = num_mujeres / total_estudiantes * 100

			Escribir.log( 'El porcentaje  de hombres es: ',porcentajeH,'%')
			Escribir.log( 'El porcentaje de muejeres es: ', porcentajeM,'%')
		FinFuncion
		
		
		}
ejrcicio4(){
	//un profesor prepara 3 cuestionarios para una evaluacion final :
//A,B y C. Se sabe que se tarda 5 minutos en revisar el cuestionario A,
//8 en revisar el cuestionario B y 6 en el C. la cantida de examenes de cada
//tipo se entran por teclado.¿cuantas horas minutos se tardara en 
//revisar toda las evaluaciones 
//entrada: preguntar la cantidad de cuestionarios a, b, c 
//proceso: optorgarle la cantidad de cada uno de los cuestionarios(5, 8, 6)sumar eltiempo,
// dividir el tiempo en general para 60 
//salida: resultado de las horas y de los minutos

console.log  (ejercicios)
let A,B,C
let  tiempoA, tiempoB, tiempoC 
let tiempo_total 
let horas, minutos 

tiempo_total=0;horas=0

A = parseInt(leer('Digite la cantidad de cuestionarios A: '))

t = parseInt(leer('Digite la cantidad de cuestionarios B: '))

C = parseInt(leer('Digite la cantidad de cuestionarios C: '))


//calcular los minutos que se tardara por cada cuestionario
tiempoA = A * 5;
tiempoB = B * 8;
tiempoC = C * 6;

//calculamos el tiempo total que le toma revisar todos los cuestionarios
tiempo_total = tiempoA + tiempoB + tiempoC;

//calculamos las horas y minutos
horas = trunc(tiempo_total / 60);
minutos = tiempo_total % 60;

Escribir.log ('se tardara ',horas ,'horas y',minutos,'minutos' )
FinFuncion




}
ejercico5(){
// una tienda ofrece un descuento del 15 MOD  sobre el total
// de la compra y un cliente desea saber cuanto debera pagar 
// finalmente por su compra
// entrada: entrar el precio a pagar 
//proceso: luego de que ingresa el precio se lo multiplica por (15) y despues ese precio que ingreso el usuario se le resta (15)
//salida : se da el precio a pagar
console.log  (ejercicio5)
let precio, descuento, precio_final 
presio = parseInt (leer('digite el precio a pagar:'))

descuento = precio * 0.15
precio_final = precio - descuento
Escribir.log( 'el precio a pagar es de:',precio_final)
FinFuncion



}
ejercicio6(){
	// un alumno desea saber cual sera su calificaciom final en la materia de algoritmo.
// dicha calificacion se conmpone de los siguientes porcentajes
// 55%  del promedio de sus tres calificaciones parciales.
// 30%  de la calificacion del examen final.
// 15% de la calificacion de un trabajo final.
//entrada: ingresar la nota de cada uno de los parciales 
//proceso : la nota del parcial  ingresadas dividirla para 3  ahora ese promedio multiplicarlo para (0.55)
//luego la nota de el examen final multiplicarla  para(0.3)
//por ultimo la nota del trabajo multiplicarla para (0.15) 
//final: mostrar nota final 
console.log( ejercicio6)
let parcial1, parcial2, parcial3, promedioP 
let notasParcial,examen_final 
let notaExamen
let notaTrabajo, notaFinalTrabajo,notaFinal 

parcial1=0; parcial2=0; parcial3=0; promedioP=0; notasParcial=0;examen_final=0;notaExamen=0
;notaTrabajo=0;notaTrabajo=0;notaFinal=0

parcial1 = parseInt(leer('digite la calificacion de su primer parcial'))
parcial2 = parseInt(leer('digite la calificacion de su segundo parcial'))
parcial3 = parseInt(leer('digite la calificacion de su tercer parcial'))

promedioP = (parcial1+parcial2+parcial3)/3;
notasParcial = promedioP*0.55
examen_final =parseInt(leer( 'digite la nota del examen final: '))

notaExamen = examen_final*0.3
notaTrabajo = parseInt(leer('digite la nota del trabajo final: '))
 
notaFinalTrabajo = notaTrabajo * 0.15
notaFinal = notasParcial + notaExamen + notaFinalTrabajo

escribir.log("la nuta final es: ", notaFinal)

}
ejercicio7(){
	//ingrese un numero entero y reportar si es par o inpar.
//entrada: ingrese un numero 
//proceso: si el numero es dividido para dos y se resultado de cero es par y si no es divisible es impar 
//salida: mostrar si es par o impar 

console.log (ejercicio1)
	let num 

	num = parseInt(leer( 'digite un numero: ' ))


	if (num % 2 == 0) {
	Escribir.log( 'el numero ',num,' es par')
		}else{
		Escribir.log( 'el numero ',num,' es impar') 
	}

}
ejercicio8(){
	// Determina si un alumno aprueba o reprueba un curso sabiendo que 
// aprobara si su promedio de tres clasificaciones es mayoro igual que 
// a 70; reprueba caso contrario. (diagrama de flujo)
//entrada: ingresar tres calificaciones 
//proceso: las tres calificacione e suman y se dividen entre tres , se revisa si la calificacion es mayor o igual ala establesida
//salida: mostrar la clificacion 
console.log (ejercicio2)
let nota1,nota2,nota3 
let promedio 

nota1=0;nota2=0,nota3=0;promedio=0 

nota1 = parseInt(leer( 'digitesu nota numero 1 '))
 nota2 = parseInt(leer( 'digitesu nota numero 2 '))
  nota3 = parseInt(leer( 'digitesu nota numero 3 '))

promedio = ((nota1 + nota2 + nota3)*10)/3


	Escribir.log ('el promedio final es: ',promedio)
}


ejercicio9(){
// en un almacen se hace un 20 MOD  de descuento a lo clientes cuya compra supere los 
// $100. ¿cual sera la cantidad que pagara un ppersona por su compra ?(DiagramaN-S)
//entrada: ingresar el precio que hay que cancelar
//Proceso: si la compra es mayor que 100 (tendra un descuendo del 0.2)y si no cumple tendra el precio normal
//salida: mostrar precio a pagar 

console.log (ejercicios3)
let compra, descuento, precio_final 

descuento=0;precio_final=0

compra = parseInt(leer( 'digite el precio la cantidad a pagar: '))

if (compra > 100){

	descuento = compra * 0.2
	escribir.log("precio por descuento es: ",descuento)
} else{
	descuento = 0
}

	precio_final = compra - descuento
	escribir.log ('precio a pagar es ; ',precio_final);	
}

ejercicio10(){
	//leer 2 numeros ; si son iguales que los multiplique, si el 
//primero es mayor que el segun do que los reste y si no que los sume.
//entrada: inttroducir dos  numeros 
//Proceso: si los dos numeros son iguales se multiplican  si uno es mayor que otro se resta osino se suma 
//salida; mostrar el resultado 

console.log ; (ejercicio4)
let num1, num2 

num1 = parseInt(leer('digite un numero: '))
 num2 = parseInt(leer('digite un numero: '))

if (num1 = num2) {
	//si son iguales multiplicamos
	resultado = num1 * num2;
	}else{
	if (num1>num2){
		//si el primer numero es mayor los restamos
		resultado = num1 - num2;
	}else{
		//y si no es lo sumamos
		resultado = num1 + num2;
	}
}
Escribir.log ('el resultado es: ',resultado)


}
ejercicio11(){
	// leer tres numeros diferentes e imprimir el numero 
// mayor de los tres(diagrama de flujo)
//entrada: pedirle al usuario tres numeros diferentes 
//Proceso:verificar cual de los valores es el mayor segun el numero
//salida: mostrar cual de ellos es el mayor
console.log  (ejercicio5)
let num1,num2,num3

num1=0;num2=0;num3=0

num1 = parseInt(leer( 'Digite un numero:'))
 num2 = parseInt(leer("Digite un numero:"))
if ((num1>num2)(num1>num3) ){
	escribir.log( 'el mayor es: ',num1)
} else {
	if ((num2>num1 )(num2>num3)) {
		escribir.log ('el mayor es: ',num2)
	}else{
		escribir.log ('el mayor es: ',num3)
	}
}

}
ejercicio12(){
	//un fruteria ofrece las manzanas con descueto segun la sig tabla 
//	numero de kilos comprados 				descuentos%
//			0-2									0%
//			2.01								10%
//		  5.01-10								15%
//		10.01 en adelante 						20%
//entrada: pedir al ususario que ingrese el valor de kilos  de manzana y cuantos kilos ha comprado
//proceso: un rpograma que me indique el desuento de los kilos que llevo
//salida: dar el resultado final de tdo los ejercicios 
console.log (ejercicio6)
let precioK, kilos, precioI 
let descuento, precio_final
preciok = parseInt(leer( 'cuanto cuesta el kilo de manzanas: '))

kilos = parseInt(leer( 'cuantos kilos de manzana a comprado? '))

precioI = precioK * kilos
if( (kilos>=0 )( kilos<=2)){ 
	descuento = 0
}else{
	if(( kilos>=2.1 )(kilos<=5)){ 
		descuento = precioI * 0.1
	}else{
		if( (kilos>=5.01 )( kilos <=10)){ 
			desuento = precioI * 0.15
		
			descuento  = precio * 0.2
		}
	}
}
precio_final = precioI - descuento
Escribir.log( 'el precio a pagar es: $',precio_final)

}
ejercicio13(){
//elaborar un programa que me muestre los dias de las semanas
//cuando ingrese los siete primeros numeros.
//entrada: pedir al usuario que ponga un dia de la semana (i-7)
//Proceso: hacer un programa que me diga los dias de la semana enumerados 
//salida: mostrar el numero digitado y el dia 

console.log ( ejercicio7)
	let num

num=0

	num = parseInt(leer('digite un numero del dia de la semana(1-7): '))
	//Leer num;
	

	num =Number(num)
	switch  (num){
		case 1: console.log( 'lunes');
		break;
		case 2:console.log('martes');
		break;
		case 3: console.log ('miercoles');
		break;
		case 4: console.log('juever');
		break;
		case 5: console.log ('viernes');
		break;
		case 6: console.log ('sabado');
		break;
		case 7: console.log ('domigo');
		break;
		default:
			console.log( 'Error, no existe dia para ese numero');
	

	}
}
ejercicio14(){

	// elaborar un programa que me muestre el significado de aniversario de cada decada de los 60. 
//Boda de hoja lata, boda de porcelana, bodas de perlas, bodas de rubi, bodas de oro, bodas de diamantes
//entrada: pedirle un numero  al usuario sobre las bodas 
//proceso:  hacer un programa que me eliga las bodas segun las decadas
//salida: mostrar el año y el nombre de la boda
console.log (ejercicio9)
let decada

decada=0

decada = parseInt(leer( 'digite una decada'))

decada = Number(decada)
switch (decada){
	case 10:console.log ('boda de hoja lata');
		break
	case 20: console.log ('bodas de porcelana');
	break
	case 30:console.log('bodas de perlas');
	break
	case 40:console.log ('bodas de rubi');
	break
	case 50:console.log( 'bodas de oro');
	break
	case 60:console.log( 'bodas de diamantes');
	break
	default:
			console.log ('ERROR, DECADA NO EXISTENTE')
			break;
}

}
ejercicio15(){
	// hacer un programa que tenga un menu con las siguientes opciones
// opcion1: elevar un numero a una potencia x
// opcion2 :sacar la raiz cuadrada de un numero
// opcion3 : salir
//entrada: elegir una de tres opciones (ptencia, sacar raiz cuadrada o salir)
//proceso: 1) convertir a potencia 
//			2)sacar raiz cuadrada 
//			3)o solo salir del programa 
//salida: se muestra el rasultado segun al numero que uste eligio 
console.log  (ejercicio9)
let opcion 

num=0;opcion=0;potencia=0

console.log ('MENU')
console.log( '1. elevar un numero a una potencia x')
console.log ('2. sacar la raiz mcuadrada de un numero')

opcion = parseInt(leer('3salir'))

opcion = number(opcion)
switch(opcion){
	case 1: console.log("elevar un numero a una potencia ");
		
		num = parseInt(leer('digite un numero: '))
		
		pot = parseInt(leer( 'digite la potencia'))
		
		resultado = num^pot
		Escribir.log('el resultado es: ',resultado)
		break;
	case 2: console.log("sacar raiz cuadrada a un numero");
		 
		num = parseInt (leer('digite un numero: '))
		
		resultado = rc(num)
		Escribir.log ('el resultado es: ',resultado)
	default:
		console.log ('se equivoco de opcion de menu')
		break;
}
}
Ejericio16(){
        
	let SumaPar, SumaImpar, i 
	
	SumaImpar = 0;
	SumaPar = 0;
	
	for (i = 2; i < 49; i++){
	if (i % 2 == 0) {
	SumaPar = SumaPar + i;
	} else {
	SumaImpar = SumaImpar + i;
	}
	}
	
	console.log("Suma Par: ", SumaPar);
	console.log("Suma Impar: ", SumaImpar);
	
	}
 
Ejercicio17(){
		
		let num, i 
		let cPositivos, cnegativos, cneutros
		
		cPositivos = 0;
		cnegativos = 0;
		cneutros = 0;
		num = 0;
		
		for (i = 1; i <= 10; i++){
		num = leer("Digite un numero: ");
		if (num == 0) {
		cneutros++;
		} else {
		if(num > 0) {
		cPositivos++;
		} else {
		cnegativos++;
		}
		}
		}
		
		console.log("La cantidad de positivos es: ", cPositivos);
		console.log("La cantidad de Negativos es: ", cnegativos);
		console.log("La cantidad de Neutros es: ", cneutros);
		
}
		
Ejercicio18(){
		
		let Calificaciones;
		let PromedioCali = 0;
		let Suma = 0;
		let calibaja = Infinity;
		
		for (let i = 1; i <= 10; i++) {
		Calificaciones = leer(+ i + ". Escribir las calificaciones: ");
		Calificaciones = Number(Calificaciones);
		Suma += Calificaciones;
		
		if (Calificaciones < calibaja) {
		calibaja = Calificaciones;
		}
		}
		
		PromedioCali = Suma / 10;
		
		console.log("La calificacion promedio es de: ", PromedioCali);
		console.log("La calificacion más baja del grupo es de: ", calibaja);
}
		
Ejercicio19(){
		
		let num;
		let i, factorial;
		
		i = 1;
		factorial = 1;
		num = leer("Digite un número: ");
		num = Number(num)
		
		if (num >= 0) {
		while (i <= num) {
		factorial *= i;
		i++;
		}
		
		console.log("El factorial es: ", factorial);
		} else {
		console.log("El número debe ser mayor o igual a cero.");
		}
}
		
		
		
Ejercicio20(){
		
		let n 
		let i, factorial, suma
	
			suma = 0;
			i = 1;
			
			n = leer("Digite la cantidad de elementos a sumarse: ")
			n = Number(n)
			
			
			while (i <= n) {
			suma = suma + i**2;
			i++;
			}
			
			console.log("La suma es: ", suma);
			
}
			
Ejercicio21(){
			
			let N, num
			let i 
			let npar, conteopar 
			let nimpar, conteoimpar 
			let promedioimpar 
			
			N = leer("Digite la cantidad de Elementos a ingresar: ")
			N = Number(N)
			
			i = 1;
			npar = 0;
			conteopar = 0;
			nimpar = 0;
			conteoimpar = 0;
			promedioimpar = 0;
			
			while (i <= N) {
			num = leer("Escribir un numero: ")
			num = Number(num)
			
			i++;
			
			if (num % 2 === 0){
			npar = npar + num;
			conteopar++;
			} else {
			nimpar = nimpar + num;
			conteoimpar++;
			}
			}
			
			if (conteopar === 0) {
			console.log("No se han digitado numeros pares");
			} else {
			console.log("La suma de los numeros pares es: ", npar);
			console.log("El conteo de lo pares es: ", conteopar);
			}
			
			if (conteoimpar == 0) {
			console.log("No se han digitados numeros impares");
			} else {
			promedioimpar = nimpar / conteoimpar;
			promedioimpar = Number(promedioimpar)
			console.log("El promedio de impares es de: ", promedioimpar);
			}
			}
Ejercicio22(){
			
			let HorasT, TF, salario 
			let sumaSalarios 
			let i 
			
			
			i = 1;
			sumaSalarios = 0;
			salario = 0;
			
			while (i <= 5) {
			HorasT = leer("Ingrese las horas trabajadas de las persona. "+ i +": ")
			HorasT = Number(HorasT)
			TF = leer("Ingrese la tarifa de pago por hora: ")
			
			salario = HorasT * TF;
			salario = Number(salario)
			sumaSalarios = sumaSalarios + salario;
			sumaSalarios = Number(sumaSalarios);
			
			console.log("El salario de la persona "+ i + ". es: ", salario);
			i++;
			}
			
			console.log("La sumatoria de todos los salarios es de: $", sumaSalarios);
			
}
ejercicio23(){
			//entrada: pedirle al usuarioque ingrese dos numeros 
//Proceso: se suman los don numeros
//salida: mostrar el resultado

Fconsole.log ( principal)
let resultado 
let num1 
let num2 

num1 = parseInt (leer('digite un numero: '))

num2 =parseInt (leer('digite otro numero: '))


resultado <- num1 + num2

 Escribir.log ('El resultado es: ',resultado)

FinFuncion

			}
ejercicio24(){
//operadores relacionales 
// entrada: el resultado va ha ser verdadero
//proceso: sumar (a+b)y diferenciar si (resultado >= c)
//salida: mostrar el resultado 
console.log   (principal)
	let  resultado 
	let a 
	let b 
	let c 
	
	a <- 10
	b <- 20
	c <- 30
	
	resultado <- a+b >= c;
	
	Escribir.log ('el resultado es : ',resultado)

}
ejercicio25(){
//entrada: 
//proceso: dale valores a (a, b, c) vomo saber que es verdadero 
//salida: mostrar resultado 
console.log  (principal)
	let a, b, c
	let resultado 
	
	a <- 10 
	b <- 15
	c <- 20
	
	resultado = no ((a>b) (b>c));
	
	Escribir.log (resultado)
	
FinFuncion
}
ejercicio26(){
//determinar la solucion logica de la sigiente Opcion 
//entrada: ingresa el valor de (a,b)
//proceso: ((3+5*8)<3 y ((-6/3*4)+2<2)) o (a>b);
//salida: mostrar resultado

console.log (ejercicio2)
	let a,b 
	let resultado 
	a = parseInt(leer( 'digite el valor de a: '))
	
	b = parseInt(leer( 'digite el valor de b: '))
	
	resultado <- ((3+5*8)<3  ((-6/3*4)+2<2))  (a>b);
	
	escribir.log( 'el resultado es : ',resultado)
	
FinFuncion

}

}
let ejercicios = new ejercicios()
ejercicios.ejercicio32()



