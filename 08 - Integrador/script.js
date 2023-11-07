window.onload = ()=>{
    const botonHeader = document.querySelector(".seccionBoton")

    botonHeader.addEventListener("click",
        ()=> 
        {
            document.querySelector(".seccionIntroduccion").style.animation = "invisible 2s"
            document.querySelector(".seccionPresentacion").style.animation = "invisible 2s"
            document.querySelector(".seccionBoton").style.animation = "invisible 2s"
            document.querySelector("header").style.animation = "toUp 2s"
            setTimeout(()=>document.querySelector("header").style.display = "none","1900")
        }
    )

}