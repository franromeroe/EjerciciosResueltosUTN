/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	// var banderaDelPrimero;
	// var numeroIngresado;
	// var numeroMaximo;
	// var numeroMinimo;
	// var respuesta;
	// //iniciar variables
	// banderaDelPrimero="es el primero";
	// respuesta='si';
	// while(respuesta=="si")
	// {
		
	// 	respuesta=prompt("desea continuar?");
	// }
	// txtIdMaximo.value=numeroMaximo;
	// txtIdMinimmo.value=numeroMinimo;

	// let preguntar;
	// let num;
	// let maximo = 0;
	// let minimo = 0;

	// do {
	// 	num = prompt("Ingrese un numero: ");
		
	// 	if (num > maximo){
	// 		document.getElementById("txtIdMaximo").value = num;
			
	// 	} else {
	// 		document.getElementById("txtIdMinimo").value = num;
	// 	}

	// 	preguntar = prompt("Quieres escribir otro numero?"); 

	// }while(preguntar == 's');



// NO hay que inicializar a max y min por 0, porque en el if siempre dara verdadero en maximo y en minimo nunca ejecutará
	let num;
	let max; // NO se inicializa con 0
	let min; // Tampoco inicializar con 0 porque cuando utilizemos el if siempre dara verdadero en la primera instruccion 
	let preguntar;
	let flag = 0;

	do {
		num = parseInt(prompt("Escribe un numero: "));

		if (flag == 0){
			//igualamos el numero que puso el usuario, lo colocamos en max y min
			max = num; 
			min = num;
			flag = 1; // para que no vuelva a pasar por aca SOLO UNA VEZ 
		}

		if(num > max){
			max = num;
		}
		else if (num < min){
			min = num;
		}

		preguntar = prompt("Quiere escribir otro numero?");

	}while(preguntar == 's');

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
}

/*

// Declaramos las variables 

let num;
let max = 0;
let min = 0;


//Decido que tipo de bucle va a ser si es do while o while

//dentro del bucle-------------

	//debe reconocer si estoy pidiendo por primera vez
	//si es asi inicializo max y min
	//caso contrario me fijo si tengo un nuevo maximo o un nuevo minimo
	//y los actualizo de ser necesario 

//despues del bucle--------------


*/