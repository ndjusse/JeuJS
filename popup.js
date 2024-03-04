
function afficherPopup() {
    let popupBack = document.querySelector(".popupBack")
    popupBack.classList.add("active")
    console.log(popupBack)
}

function cacherPopup() {
    let popupBack = document.querySelector("popupBack")
    popupBack.classList.remove("active")
    console.log(popupBack)
}



function initAddEventListenerPopup(){

    buttonPartager = document.querySelector(".zonePartage button")
    let popupBack = document.querySelector(".popupBack")
    buttonPartager.addEventListener("click", () => {
        afficherPopup()
        console.log(popupBack)
        
    })

    popupBack.addEventListener("click", (event) =>{
        if(event.target === popupBack){
            cacherPopup()
            console.log(popupBack)
        }
    })

}    