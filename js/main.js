let uzbek = document.querySelector('.uzbek')
let russian = document.querySelector('.russian')
let rus = document.querySelector('.ruscha')
let uz = document.querySelector('.ozbekcha')

uzbek.addEventListener('click', () =>{
  rus.style.setProperty('display','none', 'important')
  uz.style.setProperty('display','flex', 'important')
})

russian.addEventListener('click', () =>{
  rus.style.setProperty(' display','flex', 'important')
  uz.style.setProperty('display','none', 'important')
})