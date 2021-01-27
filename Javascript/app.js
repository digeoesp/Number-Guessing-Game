let easyButton = document.getElementById('easyButton')
let hardButton = document.getElementById('hardButton')
let input = document.getElementById('inBox')
let inputAnswer = document.getElementById('inputAnswers')
let submit = document.getElementById('submit')
let answers = []
let numberOfAttempts = document.getElementById('numberOfAttempts')
let attempts = []
let count = 0
let number = [Math.floor(Math.random() * 100)]
let numOfAttemps = 3



submit.addEventListener('click', ()=>{
    let userInput = input.value;
    if(userInput == number){
        count++;
        numberOfAttempts.innerHTML = `you guessed right, your number was ${number}`
    }else if (userInput < number){
        count++;
        numberOfAttempts.innerHTML = "you guessed to low"
    }else if (userInput > number){
        count++;
        numberOfAttempts.innerHTML = "you guessed to high"
    } 
    if (userInput != number && count >= numOfAttemps){
        numberOfAttempts.innerHTML = "you guessed too many times"
    }
    
})

submit.addEventListener('click', ()=>{
    answers.push(input.value);
    inputAnswers.innerHTML = (`${answers},`);
    input.value = '';
})
    
    




easyButton.addEventListener('click', ()=> {
    numOfAttemps = 10;
    console.log('easy button');
})


hardButton.addEventListener('click', ()=> {
        numOfAttemps = 5;
       console.log('hard button');
    })
    




    



    

    


