// NOTE: Joséphine Péronne
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action

    if (!action) {
        console.log('number key :', key)
    }
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key :', action)
    }
    if (action === 'decimal') {
        console.log('decimal key!')
      }
      
      if (action === 'clear') {
        console.log('clear key!')
      }
      
      if (action === 'calculate') {
        console.log('equal key!')
    }
  }
)


