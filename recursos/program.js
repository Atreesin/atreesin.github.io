
import informacion from './informacion.json' assert {type: 'json'};


const info = informacion

console.log(info.persona[3].habilidades);



/* codigo para seleccionar y actualizar datos de curriculum con un selector */
const selectorPerfiles = document.querySelector('.perfiles');

selectorPerfiles.addEventListener('change', (event) => {
    if (event.target.value != (null | "")) {
        const perfil = event.target.value - 1;
        actualizarDatos(info, perfil);
    }
    else {
        console.log(0);
    }


})





/*codigo encargado de actualizar los datos del perfil*/

function actualizarDatos(perfilList, nPerfil) {

    const p = perfilList;
    const n = nPerfil;

    actualizarFotoLarge(p, n);
    actualizarFotoMedium(p, n);
    actualizarFotoSmall(p, n);

    document.getElementById("nombre_apellido").innerHTML = p.persona[n].nombre_apellido.nombre + " " + p.persona[n].nombre_apellido.apellido
    document.getElementById("ocupacion").innerHTML = p.persona[n].ocupacion
    document.getElementById("direccion").innerHTML = p.persona[n].direccion.calle.nombre + " " + p.persona[n].direccion.calle.numero
    document.getElementById("cp_localidad").innerHTML = p.persona[n].direccion.codigo_postal + ", " + p.persona[n].direccion.localidad
    document.getElementById("telefono").innerHTML = p.persona[n].telefono
    document.getElementById("email").innerHTML = p.persona[n].email
    document.getElementById("fecha_nac").innerHTML = p.persona[n].fecha_nacimiento
    document.getElementById("nacionalidad").innerHTML = p.persona[n].nacionalidad


    actualizarHabilidades(p, n);


}

/*codigos auxiliares*/

function actualizarFotoLarge(perfilList, nPerfil) {
    const perfiles = perfilList;
    const n = nPerfil;

    var temp = perfiles.persona[n].foto_perfil.large;

    document.getElementById("foto_perfilLarge").setAttribute('src', './recursos/' + temp);

}
function actualizarFotoMedium(perfilList, nPerfil) {
    const perfiles = perfilList;
    const n = nPerfil;

    var temp = perfiles.persona[n].foto_perfil.medium;

    document.getElementById("foto_perfilMedium").setAttribute('src', './recursos/' + temp);

}
function actualizarFotoSmall(perfilList, nPerfil) {
    const perfiles = perfilList;
    const n = nPerfil;

    var temp = perfiles.persona[n].foto_perfil.small;

    document.getElementById("foto_perfilSmall").setAttribute('src', './recursos/' + temp);

}

console.log(info.persona[0].habilidades.length + "apa");
function actualizarHabilidades(perfil, n) {

    const hijos = document.getElementById("habilidades").childNodes.length;
    const padre = document.getElementById("habilidades");
    const hijo = document.querySelector("#habilidad");

    console.log(padre)
    console.log(hijos + " no se");
    console.log(hijos + "hijos")


    for (let i = 1; i < hijos; i++) {
        if (hijos.length != 0) {
            console.log(hijos + "swegf");
            const temp = padre.firstChild
            document.getElementById("habilidades").removeChild(temp)
            
            

        }
    }




    if (perfil.persona[n].habilidades.length != 0) {


        for (let i = 0; i < perfil.persona[n].habilidades.length; i++) {
            var habilidad = perfil.persona[n].habilidades[i].habilidad
            var nivel = perfil.persona[n].habilidades[i].nivel
            add_li(habilidad, nivel, i);
        }




    } else {
        console.log("apa")
    }

}


/**
 * 
 * 
 * test
 * 
 * 
 */

console.log(info.persona[3].habilidades[1].habilidad);

function add_li(h, v, n) {
    var nuevoLi = h;

    if (nuevoLi.length > 0) {
        if (find_li(nuevoLi)) {
            var li = document.createElement('li');
            li.id = "habilidad";
            li.innerHTML = '<p id= "habilidad">' + h + '</p> <p id="valor">' + v + "<p>";
            document.getElementById("habilidades").appendChild(li);
        }
    }
    return false;
}

/**
 * Funcion que busca si existe ya el <li> dentrol del <ul>
 * Devuelve true si no existe.
 */
function find_li(contenido) {
    var el = document.getElementById("habilidades").getElementsByTagName("li");
    for (var i = 0; i < el.length; i++) {
        if (el[i].innerHTML == contenido)
            return false;
    }
    return true;
}

/**
 * Funcion para eliminar los elementos
 * Tiene que recibir el elemento pulsado
 */
function eliminar(elemento) {
    var id = elemento.parentNode.getAttribute("id");
    node = document.getElementById(id);
    node.parentNode.removeChild(node);
}