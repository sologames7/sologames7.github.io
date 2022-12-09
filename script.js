let phrase = document.getElementById("phraseQuiBouge")
function startMoving() {
    timer = setInterval(function() {
        let color = ""
        let sentenceToShow = ""
        if (phrase.innerHTML == "Je m'appelle Souleman Moreau"){
            sentenceToShow = "J'ai 19 ans"
            color= "red"
        }else if(phrase.innerHTML == "J'ai 19 ans"){
            sentenceToShow = "Je suis sur Lyon"
            color= "blue"
        }else if(phrase.innerHTML == "Je suis sur Lyon"){
            sentenceToShow = "Je m'appelle Souleman Moreau"
            color="green"
        }
        phrase.style.zIndex= '0'
        phrase.style.animation = "phrase 4s infinite"
        phrase.innerHTML = sentenceToShow
        phrase.style.color = color
        phrase.style.fontWeight = "bolder"
        
    }, 4000);
}

startMoving()

let header = document.getElementsByTagName("header")
let navLinks = document.getElementsByClassName("navLink")
let lastKnownScrollPosition = 0;
let logo = document.getElementById("logo")
let spans = document.getElementsByClassName("mbSpan")

document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 50) {
        header[0].style.marginTop = "0px"
        header[0].style.backgroundColor = "white"
        navLinks[0].style.color = 'black'
        navLinks[1].style.color = 'black'
        navLinks[2].style.color = 'black'
        logo.style.color = "black"
        spans[0].style.backgroundColor = "black"
        spans[1].style.backgroundColor = "black"
        spans[2].style.backgroundColor = "black"
    }else{
        header[0].style.backgroundColor = "#202020"
        header[0].style.marginTop = "55px"
        navLinks[0].style.color = 'white'
        navLinks[1].style.color = 'white'
        navLinks[2].style.color = 'white'
        logo.style.color = "white"
        spans[0].style.backgroundColor = "white"
        spans[1].style.backgroundColor = "white"
        spans[2].style.backgroundColor = "white"   
    }
    let imgHand = document.getElementById('phoneHand')
    let skillIcons = document.getElementsByClassName('skillIcon')
    console.log(skillIcons);
    if(lastKnownScrollPosition > 1100){
        imgHand.style.animation = 'upHand 2s ease'
        imgHand.style.transform = 'translateY(0)'
    }
    if(lastKnownScrollPosition > 1250){
        for (let index = 0; index < skillIcons.length; index++) {
            skillIcons[index].style.animation = 'fondu 2s ease'
            skillIcons[index].style.opacity = '1' 
        }
    }
  });

// menu déroulant
let menuBurgerOpen = document.getElementById("menuBurger")
let menuBurgerClose = document.getElementById("closeMenu")
let menuDeroulant = document.getElementById("menuDeroulant")

menuBurgerOpen.addEventListener('click', ()=>{
    menuDeroulant.style.animation = "openMenu 0.5s ease"
    menuDeroulant.style.transform = "translateX(0%)"
})

menuBurgerClose.addEventListener('click', ()=>{
    menuDeroulant.style.animation = "closeMenu 0.5s ease"
    menuDeroulant.style.transform = "translateX(100%)"

})

let burgerLinks = document.getElementsByClassName("navLinkMenu")

for (let index = 0; index < burgerLinks.length; index++) {
    burgerLinks[index].addEventListener('click', ()=>{
        menuDeroulant.style.animation = "closeMenu 0.5s ease"
        menuDeroulant.style.transform = "translateX(100%)"
    })
    
}
// 