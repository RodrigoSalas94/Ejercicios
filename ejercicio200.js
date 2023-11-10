const divrespuesta= document.getElementById("respuesta")
const divmensaje= document.getElementById("mensaje")

function guardarLibros(){
    const titulo = document.getElementById(`title`).value;
    const autor = document.getElementById(`author`).value;
    const year = document.getElementById(`year`).value;
    if(titulo.length >0 && autor.length > 0 && year.length >0){
        document.getElementById(`formulario`).reset();
        const libroNuevo ={
            "titulo": titulo,
            "autor": autor,
            "year": year
        }
    // Verificamos si hay datos guardados en localStorage. Si están guardados los obtenemos y los convertimos a un array de JSON. De lo contrario creamos un Array vacío.

const datos = localStorage.getItem("libros")?JSON.parse(localStorage.getItem("libros")) : [];

datos.push(libroNuevo)

localStorage.setItem("libros",JSON.stringify(datos))
divmensaje.innerHTML = "<p><strong class=`exito`>Libro agregado</strong></p>"
cargarLibros()
}else{
    divmensaje.innerHTML = "<p><strong class=`error`>Completa todos los campos</strong></p>"
}
}

function cargarLibros(){
    if(localStorage.getItem("libros")){
        divrespuesta.innerHTML= "<ul></ul>"
        const libros = JSON.parse(localStorage.getItem("libros"));
        libros.forEach(libro => {
            document.querySelector("#respuesta ul").insertAdjacentHTML("beforeend",`
            <li>${libro.titulo}(${libro.year}) -Escrito por: ${libro.autor}`)
        })
    } else{
        divrespuesta.innerHTML = "<p><strong>No hay libros guardados aún</strong></p>"
    }
}
function borrarLibros(){
    localStorage.removeItem("libros");
    cargarLibros();
}

