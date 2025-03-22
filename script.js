// NOTE: Joséphine Péronne
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')){    
    console.log(e.target.textContent)
    //let valeurRecup = display.textContent
    document.querySelector('.calculator__display').textContent = e.target.textContent
    }
}
)
