//Arrays
affirmations = [
    'I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.'
];

mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don\’t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.'
];

faveMessages = [

]

// //Query Selectors for functionality
var question = document.querySelector('.question')
var formDisplay = document.querySelector('.selection-form')
var affirmationRadioButton = document.getElementById('affirmation')
var mantraRadioButton = document.getElementById('mantra')
var submitButton = document.querySelector('.submit')
var displayMessage = document.querySelector('.random-message')
var messageDisplay = document.querySelector('.svg')
var meditationIcon = document.getElementById('yoga-icon')
var manifestButton = document.querySelector('.manifest-button')
var savedButton = document.querySelector('.saved-button')
var faveManifest = document.querySelector('.manifested-saves')

// //Event Listeners
submitButton.addEventListener('click', receiveMessageDisplay)
manifestButton.addEventListener('click', saveFaves)
savedButton.addEventListener('click', viewSavedFaves)

//Functions
//* to get random string from array.
function getRandomIndex(array) {
    var arrayIndex = Math.floor(Math.random()* array.length)
    var display = array[arrayIndex]
    return display
}

//1. Create random affirmations.
function affirmationsMessages() {
    displayMessage.innerText = getRandomIndex(affirmations)
}
//2. Create random mantras function.
function mantrasMessages() {
    displayMessage.innerText = getRandomIndex(mantras)
}
//3. Hide icon when submit button is clicked. Invoke random strings from different radio arrays.
function receiveMessageDisplay() {
    meditationIcon.classList.add('hidden')
    if (affirmationRadioButton) {
        affirmationsMessages()
    } else if (mantraRadioButton) {
        mantrasMessages()
    }
}
//1. Push messages to new Array
function saveFaves() {
    faveMessages.push(displayMessage.innerText)
        return faveMessages.shift()
 }
//2. Style and InnerText/HTML to show page.
function viewSavedFaves() {
    faveManifest.classList.remove('hidden')
    messageDisplay.classList.add('hidden')
    formDisplay.classList.add('hidden')
    question.innerText = '✨Manifested Faves✨'
    // for
    // saveFaves().innerHTML = `
    //     <div class = "svg">
    //         <li class="random-message">'${saveFaves()}'</li>
    //         <button class ="manifest-button">Manifest!</button>
    //         <button class ="saved-button">Manifested Saves!</button>
    //     </div> `
    // faveMessages.forEach(m => {
    //     return <div>{m}</div>
    // })
}
//3. create delete function
