var prompt = require("prompt");

prompt.start();

var row1 = ["_", "_", "_"];
var row2 = ["_", "_", "_"];
var row3 = ["_", "_", "_"];
var matrix = [["_", "_", "_"], ["_", "_", "_"], ["_", "_", "_"]];
var moveCount = 1;

function getMove() {
  if (moveCount % 2 !== 0) {
    console.log("");
    console.log("PLAYER 1's TURN");
    console.log("");
  } else {
    console.log("");
    console.log("PLAYER 2's TURN");
    console.log("");
  }
  console.log(" ", ["1", "2", "3"]);
  console.log("1", matrix[0]);
  console.log("2", matrix[1]);
  console.log("3", matrix[2]);
  prompt.get(["row", "column"], function(err, result) {
    var piece;
    if (moveCount % 2 === 0) {
      piece = "X";
    } else {
      piece = "O";
    }
    if (matrix[result.row - 1][result.column - 1] === "_") {
      matrix[result.row - 1][result.column - 1] = piece;
      console.log(" ", ["1", "2", "3"]);
      console.log("1", matrix[0]);
      console.log("2", matrix[1]);
      console.log("3", matrix[2]);
      moveCount++;
      if (checkBoard(matrix)) {
        if (moveCount % 2 !== 0) {
          console.log("PLAYER 1 WINS!");
          playAgain();
        } else {
          console.log("PLAYER 2 WINS!");
          playAgain();
        }
      } else if (moveCount < 10) {
        getMove();
      } else {
        console.log("DRAW!");
        playAgain();
      }
    } else {
      console.log("Sorry that place is already taken, please try again.");
      getMove();
    }
  });
}

function playAgain() {
  console.log('Play again? (Y or N)');
  prompt.get(["_"], function(err, response) {
    if (response._ === "Y" || response._ === "y") {
      matrix = [["_", "_", "_"], ["_", "_", "_"], ["_", "_", "_"]];
      moveCount = 0;
      getMove();
    } else {
      console.log("GOODBYE!");
    }
  });
}

function checkBoard(matrix) {
  var row1 = matrix[0];
  var row2 = matrix[1];
  var row3 = matrix[2];
  var col1 = [row1[0], row2[0], row3[0]];
  var col2 = [row1[1], row2[1], row3[1]];
  var col3 = [row1[2], row2[2], row3[2]];

  if (row1[0] === "X" && row1[1] === "X" && row1[2] === "X") {
    return "You Win!";
  } else if (row2[0] === "X" && row2[1] === "X" && row2[2] === "X") {
    return "You Win!";
  } else if (row3[0] === "X" && row3[1] === "X" && row3[2] === "X") {
    return "You Win!";
  } else if (col1[0] === "X" && col1[1] === "X" && col1[2] === "X") {
    return "You Win!";
  } else if (col2[0] === "X" && col2[1] === "X" && col2[2] === "X") {
    return "You Win!";
  } else if (col3[0] === "X" && col3[1] === "X" && col3[2] === "X") {
    return "You Win!";
  } else if (row1[0] === "O" && row1[0] === "O" && row1[2] === "O") {
    return "You Win!";
  } else if (row2[0] === "O" && row2[0] === "O" && row2[2] === "O") {
    return "You Win!";
  } else if (row3[0] === "O" && row3[0] === "O" && row3[2] === "O") {
    return "You Win!";
  } else if (col1[0] === "O" && col1[1] === "O" && col1[2] === "O") {
    return "You Win!";
  } else if (col2[0] === "O" && col2[1] === "O" && col2[2] === "O") {
    return "You Win!";
  } else if (col3[0] === "O" && col3[1] === "O" && col3[2] === "O") {
    return "You Win!";
  } else if (row1[0] === "X" && row2[1] === "X" && row3[2] === "X") {
    return "You Win!";
  } else if (row1[2] === "X" && row2[1] === "X" && row3[0] === "X") {
    return "You Win!";
  } else if (row1[0] === "O" && row2[1] === "O" && row3[2] === "O") {
    return "You Win!";
  } else if (row1[2] === "O" && row2[1] === "O" && row3[0] === "O") {
    return "You Win!";
  }
}

getMove();
