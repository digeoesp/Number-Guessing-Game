let easyButton = document.getElementById('easyButton')
let hardButton = document.getElementById('hardButton')
let input = document.getElementById('inBox')
let number = [Math.floor(Math.random() * 100)]
let inputAnswer = document.getElementById('inputAnswer')
let submit = document.getElementById('submit')


easyButton.addEventListener('click', ()=> {
    console.log('easy button');
})
console.log(easyButton)

hardButton.addEventListener('click', ()=> {
    console.log('hard button');
})
console.log(hardButton)
//input MDN 
input.addEventListener('input', ()=>{
    let answer = (inputAnswer.innerHTML);
    input = input.value;
    answer = input.value;
    inputAnswer.innerHTML = answer;
    })


let answer = (inputAnswer.innerHTML )
console.log(answer)
