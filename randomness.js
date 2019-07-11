//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
function randomNumber(){
    console.log(Math.floor(Math.random()*21))
}
randomNumber()

function randomLetter(){
    var a = (Math.floor(Math.random()*26))
    console.log(alphabet[a])
}
randomLetter()

function randomFood(){
    var f = (Math.floor(Math.random()*foods.length))
    console.log(foods[f])
}
randomFood()

function randomStudent(){
    var s = (Math.floor(Math.random()*students.length))
    console.log(students[s])
}
randomStudent()

function randomGroup(){
    var g = (Math.floor(Math.random()*students.length/3))
    console.log(students[g] + students[g] + students[g] )
}
randomGroup()


/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////