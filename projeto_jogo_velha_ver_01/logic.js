// Inicializa as variáveis do jogo
var currentPlayer = "x";
var gameStatus = "";
var numTurns = 0;
var board = [["", "", ""], ["", "", ""], ["", "", ""]];
// Obtém todas as células e adiciona um evento de clique a elas
var cells = document.querySelectorAll(".cell");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}
// Função que é executada quando uma célula é clicada
function cellClicked() {
  // Verifica se a célula já foi preenchida ou se o jogo já acabou
  if (this.innerHTML !== "" || gameStatus !== "") {
    return;
  }
  // Preenche a célula com a jogada atual
  this.innerHTML = currentPlayer;
  // Atualiza a matriz do tabuleiro
  var row = this.id.charAt(4);
  var col = this.id.charAt(5);
  board[row][col] = currentPlayer;
  // Verifica se a jogada atual
// Verifica se a jogada atual venceu o jogo ou se o jogo empatou
if (checkWin() === true) {
    gameStatus = currentPlayer + " venceu!";
    endGame();
    } else if (checkTie() === true) {
    gameStatus = "Empate!";
    endGame();
    } else {
    // Muda o jogador atual
    if (currentPlayer === "x") {
    currentPlayer = "o";
    } else {
    currentPlayer = "x";
    }
// Atualiza o contador de jogadas
numTurns++;
    }
}
// Função que verifica se um jogador venceu o jogo
function checkWin() {
// Verifica as linhas
    for (var i = 0; i < 3; i++) {
    if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
    return true;
    }
}
// Verifica as colunas
for (var j = 0; j < 3; j++) {
    if (board[0][j] === currentPlayer && board[1][j] === currentPlayer && board[2][j] === currentPlayer) {
    return true;
    }
}
// Verifica as diagonais
if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
    return true;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
    return true;
}
// Se nenhum jogador venceu, retorna falso
    return false;
}
// Função que verifica se o jogo empatou
function checkTie() {
    if (numTurns === 8) {
    return true;
    }
    return false;
}
// Função que é executada quando o jogo termina
function endGame() {
// Desabilita todas as células
    for (var i = 0; i < cells.length; i++) {
    cells[i].classList.add("disabled");
    }
    // Exibe a mensagem de resultado
    var result = document.querySelector("#result");
    result.innerHTML = gameStatus;
}
