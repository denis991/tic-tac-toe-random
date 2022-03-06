let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];//пустой массив
const player1 = 'X';
const player2 = 'O';//переменные
let playerX = 0;
let playerO = 0;
for (let i = 0; i < board.length; i++) {//строки
  for (let j = 0; j < board[i].length; j++) {//элементы строки массива
    let ran = Math.random()// от 0-1 рандом не целого чила
    if (playerX === 5 && playerO < 5) {
      board[i][j] = player2
      playerO++
    } else if (playerO === 5 && playerX < 5) {
      board[i][j] = player1
      playerX++
    } else if (ran < 0.5 && playerO < 6) {
      // (playerO > 5(выполнть else if) )
      board[i][j] = player2
      playerO++
    } else if (playerX < 6) {
      board[i][j] = player1
      playerX++
    }
  }
}
console.table(board)
