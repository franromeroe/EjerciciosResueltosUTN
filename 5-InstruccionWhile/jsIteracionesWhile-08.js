/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let num = 0; // el num es la variable que guarda los numeros del usuario
	let preguntar; // para activar el bucle
	let sumapositivos = 0; //aca pongo 0 como inicializacion porque se suman 
	let multnegativos = 1; // puse 1 como inicializacion porque si pondria 0, al multiplicarse con cualquier num daria 0 siempre

	do {

		num = parseInt(prompt("Ingrese un número: ")); // le pido que ingrese numero al usuario

			if (num >= 0) {  // utilizo if si es mayor o igual a 0 , que se acumule sumandose 	
				sumapositivos = sumapositivos + num;
			} else {
				multnegativos = multnegativos * num; // de ser negativo entonces que se multiplique
			}

		preguntar = prompt("Quieres escribir otro numero?"); // ahora le pregunto al usuario si quiere que agrege otro numero


	}while (preguntar == 's'); // de poner 's' que representa el si, entonces que continue el bucle 


		 // muestro en pantalla los resultados 
	document.getElementById("txtIdSuma").value = sumapositivos ;
	document.getElementById("txtIdProducto").value = multnegativos ;

}





/*
Programa sin codigos (su estructura) : 

//	declaracion de las variables

//	debemos armar un bucle del tipo mientras el usuario quiera (do while)

// pedir los numeros ---> dentro del bucle

// analizar el signo de cada numero (si es positivo o negativo) ---> dentro del bucle

//	acumulamos el numero en el acumulador correspondiente  ---> dentro del bucle

//	mostrar los resultados ---> fuera del bucle


*/

/*
otra forma de resolverlo:

let num;
let positivos = 0;
let negativos = 1; 
let seguir;

do {
if (num >= 0){
	positivos = positivos + num;
} else {
	negativos = negativos * num;
}

seguir = prompt("quieres escribir otro numero: ");

} while (seguir == 's');

	document.getElementById("txtIdSuma").value = positivos ;
	document.getElementById("txtIdProducto").value = negativos ;



*/

/*
ESTRUCTURA

1 - variable numeros 
2 - variable contador 
3 - variable acumulador

while (i < numVueltas) {

	num = parseInt(prompt("ingresa un numero: "));

	acumulador = acumulador + num; (acumulo)

	contador = contador + 1  (cuento)
}

*/