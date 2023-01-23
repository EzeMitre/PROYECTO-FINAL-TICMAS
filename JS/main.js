
document.getElementsByClassName("pdf").ConfirmDemo= Function () 
{
    const mensaje = confirm("MUCHAS GRACIAS ESTAS POR REVISAR MI CV")
    if (mensaje) {
    alert("¡Gracias por confirmar!");
    console.log=("se confirmo acceso");
    }
    else {
    alert("¡Haz denegado el acceso!");
    console.log=("se denego acceso");
    }
}