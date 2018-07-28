/*MARIA F 15
JOSE M 33
FER F 25 */

function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador;
	var CantMujeres = 2
	var CantVarones = 1
	var CantMenores = 1
	var CantMayores = 2




	contador = 0;
	while(contador<3)
	
	nombre = prompt("Ingrese un nombre");
	sexo = prompt("Ingrese un sexo");
	while(sexo!= "f" || sexo != "m")
		{
			sexo = prompt("Error, ingrese un sexo");
		}
	edad = prompt(="Ingrese la edad");
		    while(isNaN(edad) || edad > 100 || edad < 0)
		    {
		    	edad=prompt("Edad invalida, Ingrese edad")
		    }

 


}	
