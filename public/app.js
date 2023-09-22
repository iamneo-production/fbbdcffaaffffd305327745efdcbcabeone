// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
   const winFunction =(letter)=>{
    disabbleButtons();
    if(letter=="X"){
        msgRef.innerHTML="&#x1F389;<br>'X' Wins;
    }
    else{
        msgRef.innerHTML="&#x1F389;<br>'O' Wins;

    }
   } 
const drawFunction=()=>{
    disableButtons();
    msgRef.innerHTML="&#x1F60E;<br>"it's a Draw";
};
newgameBtn.addEventListener("")
