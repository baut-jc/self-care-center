//Arrays
var affirmations = [
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

var mantras = [
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


//Query Selectors for functionaality
var affirmationRadioButton = document.getElementbyId('affirmation')
var mantraRadioButtion = document.getElementbyId('mantra')
var displayMessage = document.querySelector('.submit')

//Event Listeners
// -event listener for random(function) "affirmation" radio button
affirmationRadioButton.addEventListener('click', displayMessage)
// -event listener for random(function) "mantra" radio button
// -event listener to invoke radio buttons and receive message button


//Functions
//* to get random string from array.
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

//1. Create random affirmations.
function displayRandomAffirmation() {
    var affirmation = affirmations[getRandomIndex(affirmations)]
}
//2. Create random mantras function.
function displayRandomMantras() {
    var mantra = mantras[getRandomIndex()]
    for(var i = 0; i < mantras.length, i++) {
        console.log(displayRandomMantras())
    }
}
//3. Create function that will display for random string of array.
function displayMessage() {
    console.log(displayRandomMantras())
}
//4. Create function that will invoke random affirmation/mantra when submit button is invoked through invoking other functions affirmation/mantra.
//5. Hide icon when submit button is clicked.