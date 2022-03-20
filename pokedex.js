const pokeNameInput = document.getElementById("pokeName");
const PokeId = document.getElementById('pokeNumber');
const pokeAltura = document.getElementById('altura');
const pokePeso = document.getElementById('peso');
const pokeTipo = document.getElementById('tipos');
const pokeTipo1 = document.getElementById('type1-screen');
const pokeTipo2 = document.getElementById('type2-screen');
const pokeVida = document.getElementById('hp');
const pokeAtaque = document.getElementById('ataque');
const pokeDefensa = document.getElementById('defensa');
const pokeAtEsp = document.getElementById('ataque-esp');
const pokeDefEsp = document.getElementById('defensa-esp');
const pokeVelocidad = document.getElementById('velocidad');

const fetchPokemon = () => {
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pikachu-sad.jpg")
            alert("El nombre ingresado no coincide con ningún Pokémon, vuelve a intentarlo :)");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);

            limpiar();

            let pokeImg = data.sprites.front_default;
            let pokeImgShiny = data.sprites.front_shiny;
            pokeImage(pokeImg);
            pokeImageShiny(pokeImgShiny)

            let pokeNum = data.id;
            let pokeNombre = data.name.toUpperCase();
            PokeId.innerHTML = `N°${pokeNum} ${pokeNombre}`;

            pokeAltura.innerHTML = `Altura: ${data.height / 10}m`;

            pokePeso.innerHTML = `Peso: ${data.weight / 10}kg`;

            if (data.types.length == 1){
                let type = data.types[0].type.name;
                let tipo = traducirTipo(type);
                pokeTipo.innerHTML = `Tipo: ${tipo}`;
                pokeTipo1.innerHTML = `${tipo}`;
            }
            else{
                let type1 = data.types[0].type.name;
                let type2 = data.types[1].type.name;
                let tipo1 = traducirTipo(type1);
                let tipo2 = traducirTipo(type2);

                pokeTipo.innerHTML = `Tipos: ${tipo1}/${tipo2}`;
                pokeTipo1.innerHTML = `${tipo1}`;
                pokeTipo2.innerHTML = `${tipo2}`;
            }

            pokeVida.innerHTML = `HP: ${data.stats[0].base_stat} - VEL: ${data.stats[5].base_stat}`;
            pokeAtaque.innerHTML = `ATAK: ${data.stats[1].base_stat} - DEF: ${data.stats[2].base_stat}`;
            pokeAtEsp.innerHTML = `AT.ESPECIAL: ${data.stats[3].base_stat}`;
            pokeDefEsp.innerHTML = `DEF.ESPECIAL: ${data.stats[4].base_stat}`;
            
        }
    });
}

const traducirTipo = (type) => {
    if (type == 'bug'){
        type = 'BICHO';
    }
    else if (type == 'dark'){
        type = 'SINIESTRO';
    }
    else if (type == 'dragon'){
        type = 'DRAGON';
    }
    else if (type == 'electric'){
        type = 'ELECTRICO';
    }
    else if (type == 'fairy'){
        type = 'HADA';
    }
    else if (type == 'fighting'){
        type = 'LUCHA';
    }
    else if (type == 'fire'){
        type = 'FUEGO';
    }
    else if (type == 'flying'){
        type = 'VOLADOR';
    }
    else if (type == 'ghost'){
        type = 'FANTASMA';
    }
    else if (type == 'grass'){
        type = 'PLANTA';
    }
    else if (type == 'ground'){
        type = 'TIERRA';
    }
    else if (type == 'ice'){
        type = 'HIELO';
    }
    else if (type == 'normal'){
        type = 'NORMAL';
    }
    else if (type == 'poison'){
        type = 'VENENO';
    }
    else if (type == 'psychic'){
        type = 'PSIQUICO';
    }
    else if (type == 'rock'){
        type = 'ROCA';
    }
    else if (type == 'steel'){
        type = 'ACERO';
    }
    else if (type == 'water'){
        type = 'AGUA';
    }

    return type;
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeImageShiny = (url) => {
    const pokePhoto2 = document.getElementById("pokeImgColor");
    pokePhoto2.src = url;
}

const verStats = (obj) =>{
    document.getElementById('stats-screen').style.visibility = 'visible';
    obj.style.backgroundColor = "#fecb65";
    document.getElementById('info').style.backgroundColor = '#ffffff';
}

const verInfo = (obj) =>{
    document.getElementById('stats-screen').style.visibility = 'hidden';
    obj.style.backgroundColor = "#fecb65";
    document.getElementById('stats').style.backgroundColor = '#ffffff';
}

const verShiny = () => {
    document.getElementById('shiny-sprite').style.backgroundColor = '#ff0000';
    document.getElementById('normal-sprite').style.backgroundColor = '#85bdfe';
    document.getElementById('screen-shiny').style.visibility = 'visible';
}

const verNormal = () => {
    document.getElementById('shiny-sprite').style.backgroundColor = '#85bdfe';
    document.getElementById('normal-sprite').style.backgroundColor = '#ff0000';
    document.getElementById('screen-shiny').style.visibility = 'hidden';
}

const limpiar = () => {
    pokeNameInput.innerHTML = '';
    PokeId.innerHTML = '';
    pokeAltura.innerHTML = '';
    pokePeso.innerHTML = '';
    pokeTipo.innerHTML = '';
    pokeTipo1.innerHTML = '';
    pokeTipo2.innerHTML = '';
    pokeVida.innerHTML = '';
    pokeAtaque.innerHTML = '';
    pokeDefensa.innerHTML = '';
    pokeAtEsp.innerHTML = '';
    pokeDefEsp.innerHTML = '';
    pokeVelocidad.innerHTML = '';
}