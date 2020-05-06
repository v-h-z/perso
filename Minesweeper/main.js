// alert("Good luck!"); // Of course you can remove this (annoying) line ;)
let minesweeperSize = parseInt(prompt("Quelle taille ?"), 10);
if (minesweeperSize > 12) minesweeperSize = 12;
console.log(minesweeperSize);

const minesweeper = document.querySelector("#minesweeper");
minesweeper.innerHTML = "";

for (let i = 0; i < minesweeperSize; i += 1) {
  minesweeper.insertAdjacentHTML('beforeend', "<tr></tr>");
}
for (let x = 0; x < minesweeperSize; x += 1) {
  minesweeper.childNodes.forEach(child => child.insertAdjacentHTML('beforeend', '<td class="unopened"></td>'));
}
const mineField = [];
const mineArray = document.querySelectorAll("#minesweeper > tr > td");
for (let i = 0; i <= Math.ceil(minesweeperSize / 4); i += 1) {
  const mine = mineArray[Math.floor(Math.random() * mineArray.length)];
  mineField.push(mine);
}


minesweeper.addEventListener('click', (event) => {
  // Do something (callback)
  console.log(event.target);
  const clickCell = event.target.cellIndex;
  const clickRow = event.target.parentNode.rowIndex;
  console.log(clickRow);
  console.log(clickCell);
  // const mineCell = mine1.cellIndex;
  // const mineRow = mine1.parentNode.rowIndex;
  // console.log(mineRow);
  // console.log(mineCell);

  event.target.classList.remove("unopened");
  event.target.classList.add("opened");
  let mineCounter = 0;
  mineField.forEach((mine) => {
    if (mine.cellIndex - clickCell >= -1 && mine.cellIndex - clickCell <= 1
      && mine.parentNode.rowIndex - clickRow >= -1 && mine.parentNode.rowIndex - clickRow <= 1) {
      mineCounter += 1;
    }
    if ((mineCounter > 0) && !(mineField.includes(event.target))) event.target.classList.add(`mine-neighbour-${mineCounter}`);
    if (event.target === mine) {
      // event.target.classList.remove(`mine-neighbour-${mineCounter}`);
      event.target.classList.add("mine");
      alert("you've lost");
    }
  });
  // const audio = new Audio('../sound.mp3');
  // audio.play();
});


// #minesweeper > tr:nth-child(1) > td:nth-child(3)
