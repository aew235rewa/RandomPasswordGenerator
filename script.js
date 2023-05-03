const passwordField = document.querySelector('.js-password-field')
const lengthItem = document.querySelector('.js-length-item')
const lengthRange = document.querySelector('.js-length-range')
const number= document.querySelector('.js-number')
const symbol= document.querySelector('.js-symbol')
const btnGenerate= document.querySelector('.js-btn-generate')

const charsNumbers = '0123456789'
const charsSymbol = '@#$%^&*'

lengthRange.addEventListener('input', function(){
    lengthItem.value = lengthRange.value
})

lengthItem.addEventListener('input', function(){
    lengthRange.value = lengthItem.value
})

console.log(lengthItem.value)

btnGenerate.addEventListener('click', function(){
    let password = ''

    let charsLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(number.checked){
        charsLetters += charsNumbers
    }

    if(symbol.checked){
        charsLetters += charsSymbol
        console.log(charsLetters)
    }

    for(let i = 0; i< lengthItem.value; i++){
        password += charsLetters[Math.floor(Math.random()*charsLetters.length)]
        console.log(Math.floor(Math.random()*charsLetters.length))
    }

    passwordField.innerHTML = password
})