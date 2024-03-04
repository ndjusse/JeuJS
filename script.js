let listeMots = [ "Cachalot", "Pétunia", "Serviette" ]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]



/** cette fonction affiche une proposition que le joueur devra recopie
 dans la zone de saisi */ 

function afficherProposition(proposition){
    zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText=proposition
    
}


function afficheResultat(score, nbMotsProposes){ 
    let spanScore= document.querySelector(".spanScore span")
    afficheScore= `${score} / ${nbMotsProposes}` 
    spanScore.innerText= afficheScore
}

function lanceJeu(){
       
    let listeProposition = listeMots
    let i=0
    score=0

    let listeBtnRadio = document.querySelectorAll(".optionInput input")
    
    for (let index=0 ; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change" , (event) =>{
            if(event.target.value === "1"){
                listeProposition = listeMots
            }else{
                listeProposition = listePhrases
            }
            afficherProposition(listeProposition[i])
        })
    } 

    btnValide = document.getElementById("btnValide")
    console.log(btnValide)
    inputSaisi = document.getElementById("inputSaisi")


    let button = document.querySelector("button")
     button.addEventListener('keydown' , (event) => {
        if (event.keycode === 13 ){
            button()
        }
     })


    afficherProposition(listeProposition[i])

    // Gestion de l'événement click sur le bouton "valider"
    btnValide.addEventListener("click",  () => {
        if (inputSaisi.value === listeProposition[i] ){
            score++
        }
        i++
        afficheResultat(score,i)
        inputSaisi.value= ''
        if (listeProposition[i] === undefined){
            afficherProposition("le jeu est fini")
            btnValide.disabled = true
        }else{
            afficherProposition(listeProposition[i])
        }
    })
      
     afficheResultat(score,i) 

     
}