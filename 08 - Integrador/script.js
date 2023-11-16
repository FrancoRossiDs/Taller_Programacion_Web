window.onload = ()=>{
    const botonHeader = document.querySelector(".seccionBoton")

    botonHeader.addEventListener("click",
        ()=> 
        {
            document.querySelector(".seccionIntroduccion").style.animation = "invisible 2s"
            document.querySelector(".seccionPresentacion").style.animation = "invisible 2s"
            document.querySelector(".seccionBoton").style.animation = "invisible 2s"
            document.querySelector("div").style.animation = "toUp 2s"
            setTimeout(()=>document.querySelector("div").style.display = "none","1900")
        }
    )
}

const botonNav=document.querySelector(".botonNavegacion")
botonNav.addEventListener("click",
()=>
{
    document.querySelector(".contenedorHeader").style.animation="toUp_ 0.5s"
    BarraNavegacion.classList.toggle("toUp_");
});