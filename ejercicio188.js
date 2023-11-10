const numeros = [1000,5,55,105,1,9,33,44,101,150,130,12,9,-10,8,81,195,19]

const lista = document.getElementById(`lista`);

const numeros_filtrados = numeros.filter(numero => numero > 10 && numero < 1000 && numero % 5 === 0)

numeros_filtrados.forEach(numero => {
    lista.insertAdjacentHTML(`beforeend`, `<li>${numero}</li>`)
})