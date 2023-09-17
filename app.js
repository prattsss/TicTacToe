let turn = "X";
let gameOver = false
let reset = document.getElementById("reset")
let turnInfo = document.querySelector(".turn-info")
const changeTurn = () => {
  return turn === "X" ? "0" : "X"
}

function checkWin() {
  let moveBox = document.querySelectorAll(".moveBox")
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]
  wins.forEach(e => {
    if ((moveBox[e[0]].innerText === moveBox[e[1]].innerText) && (moveBox[e[2]].innerText === moveBox[e[1]].innerText) && (moveBox[e[0]].innerText !== "")) {
      turnInfo.innerText = moveBox[e[0]].innerText + " won"
      gameOver = true
    }
  })

}

let boxes = document.querySelectorAll(".boxes")
boxes.forEach(elem => {
  let moveBox = elem.querySelector(".moveBox")
  elem.addEventListener("click", () => {
    if (moveBox.innerText === '') {
      moveBox.innerText = turn;
      turn = changeTurn();
      checkWin()
      if (!gameOver) {
        turnInfo.innerText = `Turn for ${turn}`
      }
    }
  })
})

reset.addEventListener("click", () => {
  let moveBox = document.querySelectorAll(".moveBox")
  Array.from(moveBox).forEach(element => {
    element.innerText = ""
  });
  turn = "X";
  gameOver = false
  turnInfo.innerText = `Turn for ${turn}`
})
