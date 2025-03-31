// NOTE: Joséphine Péronne
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')
let valeurRecup=0
let operatorRecup = "add"

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        console.log(valeurRecup)
    if (e.target.classList.contains("key--operator")){
        console.log(e.target.dataset.action)
        operatorRecup = e.target.dataset.action
        display.textContent = e.target.textContent
    }
    else{
        valeur = Number(e.target.textContent)
        if(operatorRecup=="add"){valeurRecup = valeurRecup + valeur
        }
        if(operatorRecup=="divide"){valeurRecup = valeurRecup / valeur}
        if(operatorRecup=="multiply"){valeurRecup = valeurRecup * valeur}
        if(operatorRecup=="substract"){valeurRecup = valeurRecup - valeur}
        document.querySelector('.calculator__display').textContent = valeurRecup
    }
    }
}
)
