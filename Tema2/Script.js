var tds = document.querySelectorAll("td");
// var dv = document.querySelectorAll("div");
var mySubmit = document.getElementById("myBtn");
var myReset = document.getElementById("myBtn2");
var moves = 0;
var completedMove = 0;
var m = 0;

var playerTurn = 1;
console.log(playerTurn)

let values = [0, 0, 0, 0, 0, 0, 0, 0, 0];



for (var i = 0; i < tds.length; ++i) {
	tds[i].addEventListener("click", function () {
		var tc = this.textContent;
		var celula = parseInt(this.getAttribute('id')) - 1;
		console.log(celula, 'este id-ul celulei');
		console.log('playerTurn', playerTurn);
		if (playerTurn === 1) {
			if ((tc === "") && (moves !== 1) && (values[celula] !== 2) && (values[celula] !== 3)) {
				this.textContent = "X";
				// document.getElementById('myDv').textContent = 'Player2';
				moves = moves + 1;
				completedMove = 1;
				// console.log(i);
			} else if ((tc === "X") && (values[celula] !== 2) && (values[celula] !== 3)) {
				this.textContent = "";
				moves = 0;
				completedMove = 0;
				// console.log(i);
			} else if (tc === "O") {
				this.textContent = "O";
				// console.log(i);
			}
			



		} else if (playerTurn === 2) {
			if ((tc === "") && (moves !== 1) && (values[celula] !== 2) && (values[celula] !== 3)) {
				this.textContent = "O";
				// document.getElementById('myDv').textContent = 'Player1';
				moves = moves + 1;
				completedMove = 1;
				console.log(i);
			} else if ((tc === "O") && (values[celula] !== 2) && (values[celula] !== 3)) {
				this.textContent = "";
				moves = 0;
				completedMove = 0;
				console.log(i);
			} else if (tc === "X") {
				this.textContent = "X";
				console.log(i);
			}

		}




	});
}




mySubmit.addEventListener('click', function () {
	if ((playerTurn === 1) && (completedMove === 1)) {
		playerTurn = 2;
		document.getElementById('myDv').textContent = 'Player2s turn: waiting for his move';
		completedMove = 0;
		moves = 0;
		
		for (j = 0; j < tds.length; j = j + 1) {
			if(tds[j].textContent === 'X'){
				values[j] = 2;
			}
			if(tds[j].textContent === 'O'){
				values[j] = 3;
			}

			console.log(tds[j].textContent, values[j]);
		}

// PLAYER 1  conditie castig pentru linii;

		if(values[0] * values[1] * values[2] === 8) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

		} else if (values[3] * values[4] * values[5] === 8) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

		} else if (values[6] * values[7] * values[8] === 8) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

		}


// PLAYER 1 conditie castig pentru coloane
    
	    if(values[0] * values[3] * values[6] === 8) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

		} else if (values[1] * values[4] * values[7] === 8) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

		} else if (values[2] * values[5] * values[8] === 8) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

		} 

// PLAYER 1 conditie castig pentru diagonale;


	if ((values[0] * values[4] * values[8] === 8) || (values[2] * values[4] * values[6] === 8)) {
		console.log('player1',' wins');
		document.getElementById('myDv').textContent = 'Game Over - Winner Player1';
	}
//PLAYER 1 conditie egal
    m = 0;

	for (j = 0; j <= 8; j = j + 1 ) {
		if (values[j] !== 0){
			m = m + 1;
		}
	}

	if (m === 9){
		document.getElementById('myDv').textContent = 'Game Over - Tie';
	}


	} else if ((playerTurn === 2) && (completedMove === 1)) {
		playerTurn = 1;
		document.getElementById('myDv').textContent = 'Player1s turn: waiting for his move';
		completedMove = 0;
		moves = 0;

		for (j = 0; j < tds.length; j = j + 1) {
			if(tds[j].textContent === 'X'){
				values[j] = 2;
			}
			if(tds[j].textContent === 'O'){
				values[j] = 3;
			}

			console.log(tds[j].textContent, values[j]);
		}

//PLAYER 2 conditie castig pentru linii;

		if(values[0] * values[1] * values[2] === 27) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player2';

		} else if (values[3] * values[4] * values[5] === 27) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player2';

		} else if (values[6] * values[7] * values[8] === 27) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player2';

		}


//PLAYER 2 conditie castig pentru coloane
    
	    if(values[0] * values[3] * values[6] === 27) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player2';

		} else if (values[1] * values[4] * values[7] === 27) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player2';

		} else if (values[2] * values[5] * values[8] === 27) {
			console.log('player1',' wins');
			document.getElementById('myDv').textContent = 'Game Over - Winner Player2';

		} 

//PLAYER 2 conditie castig pentru diagonale;
		


	if ((values[0] * values[4] * values[8] === 27) || (values[2] * values[4] * values[6] === 27)) {
		console.log('player2',' wins');
		document.getElementById('myDv').textContent = 'Game Over - Winner Player2';
	}

//PLAYER 2 conditie egal
    m = 0;

	for (j = 0; j <= 8; j = j + 1 ) {
		if (values[j] !== 0){
			m = m + 1;
		}
	}

	if (m === 9){
		document.getElementById('myDv').textContent = 'Game Over - Tie';
	}



    }else {
		playerTurn = 1;
	}
    console.log('playerTurn', playerTurn);

	

})


myBtn2.addEventListener('click', function () {
	location.reload();

	});
