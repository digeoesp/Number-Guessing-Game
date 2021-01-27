let easyButton = document.getElementById('easyButton')
let hardButton = document.getElementById('hardButton')
let input = document.getElementById('inBox')
let number = [Math.floor(Math.random() * 100)]
let inputAnswer = document.getElementById('inputAnswers')
let submit = document.getElementById('submit')
let answers = []
let numberOfAttempts = document.getElementById('numberOfAttempts')
let attempts = []
let count = 0



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
    numberOfAttempts.value = count;
    answers.push(input.value);
    count++;
    console.log(count)
    numberOfAttempts.append(count)
    inputAnswers.innerHTML = (`${answers},`);
    input.value = '';
})
    





    

    


