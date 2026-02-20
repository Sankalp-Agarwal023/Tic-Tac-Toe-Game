let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let winner = document.querySelector("#win");
let hide = document.querySelector(".hide")

let turn0 = true;
let count = 0;

let wincondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",(evt) =>{
        console.log("button was clicked");
        if (turn0){
            box.innerText = "X";
            box.style.color = "blue"
            turn0 = false;
        }else{
            box.innerText = "0";
            box.style.color = "orange"
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const resetGame = () => {
    enableboxes();
    turn0 = true;
    hide.classList.add("hide")
}

const newGame = () => {
    enableboxes();
    turn0 = true;
    hide.classList.add("hide");
    
}

const disableboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    win.innerText = `Congratulation,Winner is ${winner}`;
    hide.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
for (let val of wincondition){
    let pos1Val =  boxes[val[0]].innerText;
    let pos2Val =  boxes[val[1]].innerText;
    let pos3Val =  boxes[val[2]].innerText;

const checkDraw = () => {
    if (count == 9){
        win.innerText= "Draw";
        hide.classList.remove("hide");
        disableboxes();
    }
}

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val == pos2Val && pos2Val == pos3Val){
            showwinner(pos1Val);
            checkDraw();
            count++;
            newbtn.addEventListener("click",newGame);
        }
        }
}
resetbtn.addEventListener("click",resetGame);
}