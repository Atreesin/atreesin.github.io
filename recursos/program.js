
import informacion from './informacion.json' with { type: "json" };


const info = informacion

console.log(info.persona[0].idiomas.length)

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


actualizarDatos(info, 0)


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

    document.getElementById("perfil").innerHTML = p.persona[n].perfil_laboral

    actualizarExperiencia(p, n);
    actualizarEducacion(p, n);

    actualizarCertificados(p, n);


    if (p.persona[n].objetivos_personales != false) {
        document.getElementById("objetivos").innerHTML = p.persona[n].objetivos_personales

        document.getElementById("seccion_objetivos").style.display = "block"

    }
    else {
        document.getElementById("seccion_objetivos").style.display = "none"

    }


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



/** 
 * 
 * 
 * funcion para eliminar los elementos
 * de determinada lista desordenada
 * y luego para agregar items
 * 
 *  
 * 
 * 
*/


function actualizarHabilidades(perfil, n) {


    eliminar_li("habilidades");

    if (perfil.persona[n].habilidades.length != 0) {

        document.getElementById("seccion_habilidades").style.display = "block"

        for (let i = 0; i < perfil.persona[n].habilidades.length; i++) {
            console.log(i + "hab");
            var habilidad = perfil.persona[n].habilidades[i].habilidad
            var nivel = perfil.persona[n].habilidades[i].nivel
            add_li(habilidad, nivel, "habilidades");
        }




    } else {
        document.getElementById("seccion_habilidades").style.display = "none"
    }

}


function actualizarSoftware(perfil, n) {


    eliminar_li("software");

    if (perfil.persona[n].software.length != 0) {

        document.getElementById("seccion_software").style.display = "block"

        for (let i = 0; i < perfil.persona[n].software.length; i++) {
            console.log(i + "soft");
            var software = perfil.persona[n].software[i].software
            var nivel = perfil.persona[n].software[i].nivel
            add_li(software, nivel, "software");

        }
    } else {
        document.getElementById("seccion_software").style.display = "none"
    }

}

function actualizarIdiomas(perfil, n) {


    eliminar_li("idiomas");

    if (perfil.persona[n].idiomas.length != 0) {

        document.getElementById("seccion_idiomas").style.display = "block"

        for (let i = 0; i < perfil.persona[n].idiomas.length; i++) {
            console.log(info.persona[n].idiomas.length + "papu")
            console.log(i + "idioma" + n);
            var idiomas = perfil.persona[n].idiomas[i].idioma
            var nivel = perfil.persona[n].idiomas[i].nivel
            add_li(idiomas, nivel, "idiomas");

        }




    } else {
        document.getElementById("seccion_idiomas").style.display = "none"
    }

}

/**
 * 
 * funciones para
 * Actualizar seccion de experiencia laboral
 * 
 * 
 */

function actualizarExperiencia(perfil, n) {

    eliminar_li("experiencia_laboral");

    info.persona[0].experiencia[1].descripcion
    if (perfil.persona[n].experiencia.length != 0) {

        document.getElementById("seccion_experiencia").style.display = "block"

        for (let i = 0; i < perfil.persona[n].experiencia.length; i++) {


            var fecha_inicial = perfil.persona[n].experiencia[i].fecha_inicio
            var fecha_final = perfil.persona[n].experiencia[i].fecha_fin
            var puesto = perfil.persona[n].experiencia[i].puesto
            var empresa = perfil.persona[n].experiencia[i].empresa
            var descripcion = perfil.persona[n].experiencia[i].descripcion
            add_exp(fecha_inicial, fecha_final, puesto, empresa, descripcion, "experiencia_laboral");

        }




    } else {
        document.getElementById("seccion_experiencia").style.display = "none"
    }



}



function actualizarEducacion(perfil, n) {

    eliminar_li("educacion");


    if (perfil.persona[n].educacion.length != 0) {

        document.getElementById("seccion_educacion").style.display = "block"

        for (let i = 0; i < perfil.persona[n].educacion.length; i++) {



            var fecha_inicial = perfil.persona[n].educacion[i].fecha_inicio
            var fecha_final = perfil.persona[n].educacion[i].fecha_fin
            var titulo = perfil.persona[n].educacion[i].titulo
            var institucion = perfil.persona[n].educacion[i].instituto
            var ciudad = perfil.persona[n].educacion[i].ciudad
            add_educ(fecha_inicial, fecha_final, titulo, institucion, ciudad, "educacion");

        }




    } else {
        document.getElementById("seccion_educacion").style.display = "none"
    }


}



function actualizarCertificados(perfil, n) {
    eliminar_cert("certificados")
    if (perfil.persona[n].certificaciones.length > 0 & perfil.persona[n].certificaciones[0].especialidad != false) {

        document.getElementById("seccion_certificaciones").style.display = "block"

        for (let i = 0; i < perfil.persona[n].certificaciones.length; i++) {

            var especialidad = perfil.persona[n].certificaciones[i].especialidad
            var institucion = perfil.persona[n].certificaciones[i].institucion
            console.log(i + "index")
            add_cert(especialidad, institucion, "certificados");

        }




    } else {
        document.getElementById("seccion_certificaciones").style.display = "none"
    }



}









/**
 * 
 * 
 * funcion para agregar items a una lista desordenada
 * 
 * 
 */



function add_li(h, v, id) {
    var nuevoLi = h;

    if (nuevoLi.length > 0) {
        if (find_li(nuevoLi, id)) {
            var li = document.createElement('li');
            li.id = id;
            li.innerHTML = '<p id= "' + id + '">' + h + '</p><div class="habilidades_valor habilidades_valor--'+ v +'">'+ v + "</div>";
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
 * hijos de un nodo
 * recibe un id del nodo padre
 */
function eliminar_li(id) {

    const hijos = document.getElementById(id).childNodes.length;
    const padre = document.getElementById(id);

    for (let i = 0; i < hijos; i++) {


        const temp = padre.firstChild
        document.getElementById(id).removeChild(temp)

    }

}

function eliminar_cert(id) {

    const cert = document.getElementById(id).querySelector("tbody").childElementCount



    for (let i = 0; i < cert; i++) {

        document.getElementById(id).querySelector("tbody").deleteRow(0)

    }

}


/**
 * 
 * funciones para agregar
 * items a experiencia laboral
 * 
 */

function add_exp(fini, ffin, pues, emp, desc, id) {
    var nuevoLi = emp;
    let fechaini = fini;
    let fechafin = ffin;




    if (nuevoLi.length > 0) {
        if (find_li(nuevoLi, id)) {
            var li = document.createElement('li');
            li.id = id;
            if (fechaini != false & fechafin != false) {
                li.innerHTML = '<article class="esperiencia_laboral_item"><p id="fecha">' + fechaini + " " + fechafin + '</p><h3 id="puesto">' + pues + '</h3><p><span id="empresa">' + emp + "</span> <br> " + desc + "</p>";
            } else {
                if (fechaini != false) {
                    li.innerHTML = '<article class="esperiencia_laboral_item"><p id="fecha">Desde: ' + fechaini + '</p><h3 id="puesto">' + pues + '</h3><p><span id="empresa">' + emp + "</span> <br> " + desc + "</p>";
                } else {
                    if (fechafin != false) {
                        li.innerHTML = '<article class="esperiencia_laboral_item"><p id="fecha">Hasta: ' + fechafin + '</p><h3 id="puesto">' + pues + '</h3><p><span id="empresa">' + emp + "</span> <br> " + desc + "</p>";

                    } else {
                        li.innerHTML = '<article class="esperiencia_laboral_item"><p id="fecha"></p><h3 id="puesto">' + pues + '</h3><p><span id="empresa">' + emp + "</span> <br> " + desc + "</p>";

                    }
                }

            }
            document.getElementById(id).appendChild(li);
        }
    }
    return false;
}


function add_educ(fini, ffin, tit, inst, ciu, id) {
    var nuevoLi = tit;
    let fechaini = fini;
    let fechafin = ffin;

    if (nuevoLi.length > 0) {
        if (find_li(nuevoLi, id)) {
            var li = document.createElement('li');
            li.id = id;
            if (ciu != false) {
                if (fechaini != false & fechafin != false) {
                    li.innerHTML = '<article class="educacion_item"><h3 id="titulo">' + tit + '</h3><p id="fecha">' + fechaini + " " + fechafin + '</p><span id="instituto">' + inst + ", " + ciu;
                } else {
                    if (fechaini != false) {
                        li.innerHTML = '<article class="educacion_item"><h3 id="titulo">' + tit + '</h3><p id="fecha">Desde: '+ fechaini + '</p><span id="instituto">' + inst + ", " + ciu;
                    } else {
                        if (fechafin != false) {
                            li.innerHTML = '<article class="educacion_item"><h3 id="titulo">' + tit + '</h3><p id="fecha">Hasta: '+ fechafin + '</p><span id="instituto">' + inst + ", " + ciu;
                        } else {
                            li.innerHTML = '<article class="educacion_item"><h3 id="titulo">' + tit + '</h3><p id="fecha"> </p><span id="instituto">' + inst + ", " + ciu;
                        }}
                }
                
            }
            else {
                if (fechaini != false & fechafin != false) {
                    li.innerHTML = '<article class="educacion_item"><h3 id="titulo">' + tit + '</h3><p id="fecha">' + fechaini + " " + fechafin + '</p><span id="instituto">' + inst + ".";
                } else {
                    if (fechaini != false) {
                        li.innerHTML = '<article class="educacion_item"><h3 id="titulo">' + tit + '</h3><p id="fecha">Desde: '+ fechaini + '</p><span id="instituto">' + inst + ".";
                    } else {
                        if (fechafin != false) {
                            li.innerHTML = '<article class="educacion_item"><h3 id="titulo">' + tit + '</h3><p id="fecha">Hasta: '+ fechafin + '</p><span id="instituto">' + inst + ".";
                        } else {
                            li.innerHTML = '<article class="educacion_item"><h3 id="titulo">' + tit + '</h3><p id="fecha"> </p><span id="instituto">' + inst + ".";
                        }}
                }
            }
            document.getElementById(id).appendChild(li);
        }
    }
    return false;

}

function add_cert(esp, inst, id) {
    let nuevoLi = esp;
    let fechaini = inst;
  
    var table = document.getElementById(id).querySelector("tbody");

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = esp;
    cell2.innerHTML = inst;

}


