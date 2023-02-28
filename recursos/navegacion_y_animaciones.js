barras = document.querySelector(".bars");

adicional = document.querySelector(".adicional");



btnhabilidades = document.getElementById("link_habilidades");
btnsoftware = document.getElementById("link_software");
btnidiomas = document.getElementById("link_idiomas");

infoad_oculto = true;
infohab_oculto = true;
infosoft_oculto = true;
infoidi_oculto = true;

infoadicional = document.querySelector(".info_adicional")
infohabilidades = document.querySelector(".info_habilidades")
infosoftware = document.querySelector(".info_software")
infoidiomas = document.querySelector(".info_idiomas")

barras.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    if (infoad_oculto) {
        navBar.classList.toggle("active");
    } else {
        ocultarinfo();
        navBar.classList.toggle("active")
    }

}

 
function ocultarinfo(){
    console.log("seoculto");

    if(!infoad_oculto){
        infoadicional.classList.toggle("active");
        infoad_oculto = true;
        if(!infohab_oculto){
            infohabilidades.classList.toggle("active");
            infohab_oculto = true            
        }
        if(!infosoft_oculto){
            infosoftware.classList.toggle("active");
            infosoft_oculto = true
        }
        if(!infoidi_oculto){
            infoidiomas.classList.toggle("active");
            infoidi_oculto = true
        }
    }

    
    
}



btnhabilidades.onclick = function () {
    

    if(infohab_oculto){
        if(infoad_oculto){
            infoadicional.classList.toggle("active");
            infoad_oculto = false;
            infohabilidades.classList.toggle("active");
            infohab_oculto = false            
        }else{
            
            if(!infosoft_oculto){
                infosoftware.classList.toggle("active");
                infosoft_oculto = true
            }
            if(!infoidi_oculto){
                infoidiomas.classList.toggle("active");
                infoidi_oculto = true
            }

            infohabilidades.classList.toggle("active");
            infohab_oculto = false
        }
    }else{
        
        ocultarinfo();
    }
    
    
    
    
}

btnsoftware.onclick = function () {
    
    if(infosoft_oculto){
        if(infoad_oculto){
            infoadicional.classList.toggle("active");
            infoad_oculto = false;
            infosoftware.classList.toggle("active");
            infosoft_oculto = false            
        }else{
            
            if(!infohab_oculto){
                infohabilidades.classList.toggle("active");
                infohab_oculto = true
            }
            if(!infoidi_oculto){
                infoidiomas.classList.toggle("active");
                infoidi_oculto = true
            }

            infosoftware.classList.toggle("active");
            infosoft_oculto = false
        }
    }else{
        
        ocultarinfo();
    }

}

btnidiomas.onclick = function () {
    if(infoidi_oculto){
        if(infoad_oculto){
            infoadicional.classList.toggle("active");
            infoad_oculto = false;
            infoidiomas.classList.toggle("active");
            infoidi_oculto = false            
        }else{
            
            if(!infosoft_oculto){
                infosoftware.classList.toggle("active");
                infosoft_oculto = true
            }
            if(!infohab_oculto){
                infohabilidades.classList.toggle("active");
                infohab_oculto = true
            }

            infoidiomas.classList.toggle("active");
            infoidi_oculto = false
        }
    }else{
        
        ocultarinfo();
    }
   
}


const btnEl = document.querySelector('.adicional')
const toggleOptions = () => {
    const wrapperEl = document.querySelector('.wrapper')
    const iconEl = btnEl.querySelector('svg')

    wrapperEl.classList.toggle('active')

    if (iconEl.classList.contains('fa-plus')) {
        iconEl.classList.replace('fa-plus', 'fa-minus')
    } else {
        iconEl.classList.replace('fa-minus', 'fa-plus')
        ocultarinfo()
    }



}
btnEl.addEventListener('click', toggleOptions)



