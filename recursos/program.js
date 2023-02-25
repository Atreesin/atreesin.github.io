
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
    actualizarSoftware(p, n);
    actualizarIdiomas(p, n);

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





function actualizarHabilidades(perfil, n) {


    eliminar_li("habilidades");

    if (perfil.persona[n].habilidades.length != 0) {


        for (let i = 0; i < perfil.persona[n].habilidades.length; i++) {
            var habilidad = perfil.persona[n].habilidades[i].habilidad
            var nivel = perfil.persona[n].habilidades[i].nivel
            add_li(habilidad, nivel, "habilidades");
        }




    } else {
        console.log("no añadio habilidades")
    }

}

function actualizarSoftware(perfil, n) {


    eliminar_li("software");

    if (perfil.persona[n].software.length != 0) {


        for (let i = 0; i < perfil.persona[n].software.length; i++) {
            var software = perfil.persona[n].software[i].software
            var nivel = perfil.persona[n].software[i].nivel
            add_li(software, nivel, "software");
        }




    } else {
        console.log("no añadio habilidades")
    }

}

function actualizarIdiomas(perfil, n) {


    eliminar_li("idiomas");

    if (perfil.persona[n].software.length != 0) {


        for (let i = 0; i < perfil.persona[n].idiomas.length; i++) {
            var idiomas = perfil.persona[n].idiomas[i].idioma
            var nivel = perfil.persona[n].idiomas[i].nivel
            add_li(idiomas, nivel, "idiomas");
        }




    } else {
        console.log("no añadio habilidades")
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

function add_li(h, v, id) {
    var nuevoLi = h;

    if (nuevoLi.length > 0) {
        if (find_li(nuevoLi, id)) {
            var li = document.createElement('li');
            li.id = id;
            li.innerHTML = '<p id= "'+id+'">' + h + '</p> <p id="valor">' + v + "<p>";
            document.getElementById(id).appendChild(li);
        }
    }
    return false;
}

/**
 * Funcion que busca si existe ya el <li> dentrol del <ul>
 * Devuelve true si no existe.
 */
function find_li(contenido, id) {
    var el = document.getElementById(id).getElementsByTagName("li");
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
function eliminar_li(id) {
    
    const hijos = document.getElementById(id).childNodes.length;
    const padre = document.getElementById(id);

    for (let i = 0; i < hijos; i++) {

        console.log(hijos + "swegf");
        const temp = padre.firstChild
        document.getElementById(id).removeChild(temp)

    }

}