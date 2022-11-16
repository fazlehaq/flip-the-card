const board = document.querySelector('.game-board');
let cards = null;
const restartElement = document.querySelector('.restart-game');
const restartButton = document.querySelector('#restart-button');
const  restartMessage = document.querySelector('[data-message]');
const scoreElement = document.querySelector('[data-score]');
const arr = [
    {
        name : "brain",
        link : "/images/brain.png"
    } ,
    {
        name : "brain",
        link : "/images/brain.png"
    } ,
    {
        name : "butterfly",
        link : "/images/butterfly.jpg"
    } , 
    {
        name : "butterfly",
        link : "/images/butterfly.jpg"
    } , 
    {
        name : "chicken",
        link : "/images/chicken.jpg"
    } , 
    {
        name : "chicken",
        link : "/images/chicken.jpg"
    } ,
    {
        name : "lion",
        link : "/images/lion.jpg" 
    } ,
    {
        name : "lion",
        link : "/images/lion.jpg" 
    } ,
    {
        name : "orange",
        link : "/images/orange.jpg"
    },
    {
        name : "orange",
        link : "/images/orange.jpg"
    },
    {
        name : "snake",
        link : "/images/snake.jpg"
    },
    {
        name : "snake",
        link : "/images/snake.jpg"
    }
]


// Declarartion
let  cardsChoosen = [];
let score = 0;

function createBoard(){
    arr.sort( ()=> 0.5-Math.random() );
    scoreElement.innerText=0;
    for(let i=0;i<arr.length;i++){
        const img = document.createElement('img');
        img.setAttribute("src","/images/blank.jpg");
        img.classList.add("card");
        img.setAttribute("data-index" , `${i}`)
        board.append(img);
    }
    setCards()
}

function setCards(){
    cards = document.querySelectorAll('.card');
    cards.forEach(card =>{
        card.addEventListener('click',fun1)
    })
}

createBoard();

function fun1(){
    const index = this.getAttribute('data-index');
    cardsChoosen.push ( 
        {
            name : arr[index].name, 
            index: index 
        } 
    );
    this.setAttribute("src",arr[index].link);
    if(cardsChoosen.length === 2){
        setTimeout(checkForMatch,300);
    }
}

function checkForMatch(){
    if(cardsChoosen[0].name === cardsChoosen[1].name){
        score++;
        alert("Congratulations You found a match");
        scoreElement.innerHTML=score;
        freezeCard(cardsChoosen[0].index,cardsChoosen[1].index)
        if(score === 6){
            restartElement.style.display = "flex"
            restartMessage.innerHTML="Bingoo!!!<br>You Finished The Game"
        }
    }
    else{
        alert("try again");
        cards[cardsChoosen[0].index].setAttribute("src","/images/blank.jpg")
        cards[cardsChoosen[1].index].setAttribute("src","/images/blank.jpg")
    }
    cardsChoosen = [];
}

function freezeCard(i,j){
    cards[i].removeEventListener('click',fun1);
    cards[j].removeEventListener('click',fun1);
}

restartButton.addEventListener('click',resatartGame);

function resatartGame(){
    board.innerHTML="";
    restartElement.style.display = "none";    
    createBoard();
    cardsChoosen=[];
    score=0;
}





