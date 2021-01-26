let easyButton = document.getElementById('easyButton')
let hardButton = document.getElementById('hardButton')
let input = document.getElementById('inBox')
let number = [Math.floor(Math.random() * 100)]
let inputAnswer = document.getElementById('inputAnswers')
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
//once submitt button is clicked i want it to display in inputAnswer 
submit.addEventListener('click', ()=>{
    answer = input.value;
    inputAnswers.innerHTML = answer;
    

    
})
    
let answer = (inputAnswers.innerHTML )
console.log(answer)
    
    


