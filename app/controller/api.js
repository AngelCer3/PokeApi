const contenido = document.getElementById('contenido');
const prev = document.querySelector("#previo");
const next = document.querySelector("#siguiente");
const contador = document.getElementById('numeros');

let limit = 10;
let offset = 0;


const obtener_datos = (offset) => {
    contenido. innerHTML = "";
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
        method: "GET"
    })
    .then((response) => response.json())
    .then(({results})=> {
        results.map(({url})=> {
            mostrar_pokemones(url);
        })
    })
}

const mostrar_pokemones = (url) =>{
    fetch(`${url}`)
    .then((response) => response.json())
    .then(({name, abilities, height, sprites, moves})=> {
        const pokemones = document.createElement("div");
        pokemones.classList.add("col-md-4");
        pokemones.innerHTML = `
        <div class="card text-center mt-3" style="width: 18rem;">
            <div class="card" style="width: 18rem;">
                <img src="${sprites.front_default}">
            </div>
            <div class="card-body text-center">
                <h5>${name.toUpperCase()}</h5>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p>Habilidad 1: <br>${abilities[0].ability.name}</p>
                    <p>Habilidad 2: <br>${abilities[1].ability.name}</p>
                </div>
                <div class="col-sm-6">
                    <p>Altura: <br>${height}</p>
                    <p>Movimiento: <br>${moves[0].move.name}</p>
                </div>
            </div>
        </div>
        `;
        contenido.append(pokemones);
    })
}

prev.addEventListener("click", () => {
    if(offset !=1){
        offset -=9;
        contenido.innerHTML = "";
        obtener_datos(offset,limit);
    }
})

next.addEventListener("click", () => {
    offset +=9;
    contenido.innerHTML ="";
    obtener_datos(offset,limit);
})

const paginacion = (offset) => {
    for(let i = offset; i < 100; i+=9){
        contador.innerHTML += `
        <button class="btn btn-secondary" onclick="obtener_datos(${i})">${i+1}</button>`
    }
}

obtener_datos(offset);
paginacion(offset);