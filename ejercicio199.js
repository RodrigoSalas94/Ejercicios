const resultado = document.getElementById(`resultado`);

async function buscarFotos(){
    const buscar = document.getElementById(`buscar`).value.toLowerCase();

    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const fotos = await response.json();

    resultado.innerHTML = ``;

    const filtrodefotos = fotos.filter(foto => foto.title.toLowerCase().includes(buscar));

    filtrodefotos.forEach(foto => {
        resultado.insertAdjacentHTML(`beforeend`,`<div>
        <img src="${foto.thumbnailUrl}" alt="${foto.title}" width="200" title="${foto.title}" >
        <p>${foto.title}</p>
    </div>`);
    });
}