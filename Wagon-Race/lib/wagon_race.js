// TODO: write your code here
let player1 = 1;
let player2 = 1;
document.addEventListener("keyup", (event) => {
  if (event.key === "a") {
    player1 += 1;
    document.querySelector(`#player1-race > td:nth-child(${player1 - 1})`).classList.remove('active');
    document.querySelector(`#player1-race > td:nth-child(${player1})`).classList.add('active');
  }
  if (event.key === "p") {
    player2 += 1;
    document.querySelector(`#player2-race > td:nth-child(${player2 - 1})`).classList.remove('active');
    document.querySelector(`#player2-race > td:nth-child(${player2})`).classList.add('active');
  }
  if (player1 === 12) {
    alert("player1 won!");
    document.querySelector(`#player1-race > td:nth-child(${player1})`).classList.remove('active');
    document.querySelector(`#player2-race > td:nth-child(${player2})`).classList.remove('active');
    player1 = 1;
    player2 = 1;
    document.querySelector(`#player1-race > td:nth-child(${player1})`).classList.add('active');
    document.querySelector(`#player2-race > td:nth-child(${player2})`).classList.add('active');
  }

  if (player2 === 12) {
    alert("player2 won!");
    document.querySelector(`#player1-race > td:nth-child(${player1})`).classList.remove('active');
    document.querySelector(`#player2-race > td:nth-child(${player2})`).classList.remove('active');
    player1 = 1;
    player2 = 1;
    document.querySelector(`#player1-race > td:nth-child(${player1})`).classList.add('active');
    document.querySelector(`#player2-race > td:nth-child(${player2})`).classList.add('active');
  }
  console.log(player1);
});
