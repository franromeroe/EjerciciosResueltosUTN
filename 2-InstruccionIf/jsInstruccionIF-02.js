function mostrar()
{
	//pido espacio de memoria
	let edad;

	//asigno al input
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//condicional 
	if (edad >= 18){
		alert("Sos mayor de edad");
	} 
	
	// else {
	// 	alert("Sos menor de edad");
	// }

}

/*
Acordate que parseInt no existen los . o comas, si para parseFloat que son flotantes 



*/