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

function handleMenu() {
    const botonNavegacionVisible = document.querySelector(".menuVisible .botonNavegacion");
    const botonNavegacionInvisible = document.querySelector(".menuInvisible .botonNavegacion");

    // Toggle visibility of buttons in both sections
    if (botonNavegacionVisible) {
        botonNavegacionVisible.style.animation=("invisible");
    }
    
    if (botonNavegacionInvisible) {
        botonNavegacionInvisible.classList.toggle("invisible");
    }

    // Toggle visibility of menu sections
    document.querySelector(".menuInvisible").classList.toggle("visible");
    document.querySelector(".menuVisible").classList.toggle("invisible");
}
