function mostrar()
{
	
	//pido espacio de memoria creando una variable
	let edad;

	//asigno esta variable al input donde el usuario escribira el valor
	edad = parseInt(document.getElementById("txtIdEdad").value); //pongo parseint porque las edades son numeros redondos, nada de comas

	//Ahora hago la sentencia, si edad es igual a 15 entonces se escriba niña bonita 
	if(edad == 15) {
		alert("Niña bonita");
	}
	
	else {
		alert("fin");
	}
}

/*
 Asignacion  --->  = 

CONDICIONALES operadores booleanos = operaciones relacionales
if solo una vez luego if else pueden ser infinitas y else es la sobra, si no es ninguno de todos los que escribiste

se compone por 3 bloques if, if else y else

if {}  si 
if else {}  sino es 
else{} sino cumple con ninguno

ejemplo:
la condicion es una declaracion de una variable, por ejemplo b = 4

if(condicion){
    alert("estoy dentro del if")
}
alert("estoy despues del bloque if")



Condicional son operadores booleanos

1) declaro una variable para pedir espacio de memoria
2) setenencia if, y la condicional sea una declaracion con una variable
3) else if o else, en caso de que no se cumpla la primera condicional
*/