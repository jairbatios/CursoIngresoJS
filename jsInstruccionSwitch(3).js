function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case"Enero":
	case"Marzo":
	case"Abril":
	case"Mayo":
	case"Junio":
	case"Julio":
    case"Agosto":
    case"Septiembre":
    case"Octubre":
    case"Noviembre":
    case"Diciembre":
    alert("Este mes tiene 30 o mas dias");
    break;
    default:
    alert("Este mes no tiene mas de 29 dias");
    break;
}
	
	


}//FIN DE LA FUNCIÓN