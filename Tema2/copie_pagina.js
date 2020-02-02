// var tds = document.querySelectorAll("td");

// var playerTurnValue; 
//  // In functie de valoarea acestei variabile se stabileste cine trebuie sa actioneze; 
//  // 1 == player 1; 2 == player 2;
//  var ok = 0;
//  // semnaleza daca player-ul a facut mutarea sau este blank;
//  var mutari = 0;
//  // semnaleaza cate mutari a facut player-ul din tura respectiva; 
//  var mutariPosibile = 1;

// function myFunction() {
// 	mutariPosibile = mutari
// }


			

//    for(k = 1; k <= 9; i = k + 1) {
// 	   	if (k % 2 === 1) {
// 		 	for (var i = 0; i < tds.length; ++i) {
// 				tds[i].addEventListener("click", function () {
// 					var tc = this.textContent;

					// if ((tc === "") && (mutari!==1)) {
					// 	this.textContent = "X";
					// 	ok = 1;
					// 	mutari = mutari + 1;
					// } else if (tc === "X") {
					// 	this.textContent = "";
					// 	ok = 0;
					// 	mutari = mutari - 1;
					// 	playerTurnValue = 2;
					// } else if (tc === "O") {
					// 	this.textContent = "O";
					// 	ok = 0;
					// }
					
// 				});
// 			}
// 		} else if (k % 2 === 0) {
// 			for (var i = 0; i < tds.length; ++i) {
// 				tds[i].addEventListener("click", function () {
// 					tc = this.textContent;

// 					if (tc === "") {
// 						this.textContent = "O";
// 						ok = 1;
// 						mutari = mutari + 1;
// 					} else if (tc === "O") {
// 						this.textContent = "";
// 						ok = 0;
// 						mutari = mutari - 1;
// 					} else if (tc === "X") {
// 						this.textContent = "X";
// 						ok = 0;
// 					}

// 				});
// 			}

// 		}

// 		document.getElementById("myBtn").addEventListener("click", myFunction);

// 	}

// var x = document.querySelectorAll("td");
// x.addEventListener("click", function() {
// 	var textCelula = this.textContent;
// 	if ((tc === "") && (mutari!==1)) {
// 		this.textContent = "X";
// 		ok = 1;
// 		mutari = mutari + 1;
// 	} else if (tc === "X") {
// 		this.textContent = "";
// 		ok = 0;
// 		mutari = mutari - 1;
// 	} else if (tc === "O") {
// 		this.textContent = "O";
// 		ok = 0;
// 	}

// });










/////// copie scrit.js initial









// var tds = document.querySelectorAll("td");

// var playerTurnValue; 
//  // In functie de valoarea acestei variabile se stabileste cine trebuie sa actioneze; 
//  // 1 == player 1; 2 == player 2;
//  var ok = 0;
//  // semnaleza daca player-ul a facut mutarea sau este blank;
//  var mutari = 0;
//  // semnaleaza cate mutari a facut player-ul din tura respectiva; 

// function myFunction() {
// 				playerTurnValue = 2;
// 				console.log(playerTurnValue);
// 			}

// function myFunction2() {
// 				playerTurnValue = 1;
// 				console.log(playerTurnValue);
// 			}



//  	for (var i = 0; i < tds.length; ++i) {
// 		tds[i].addEventListener("click", function () {
// 			var tc = this.textContent;

// 			if ((tc === "") && (mutari!==1)) {
// 				this.textContent = "X";
// 				ok = 1;
// 				mutari = mutari + 1;
// 			} else if (tc === "X") {
// 				this.textContent = "";
// 				ok = 0;
// 				mutari = mutari - 1;
// 				playerTurnValue = 2;
// 			} else if (tc === "O") {
// 				this.textContent = "O";
// 				ok = 0;
// 			}
			
// 			document.getElementById("myBtn").addEventListener("click", myFunction);



// 		});
// 	}

// if (playerTurnValue === 1){
// 	for (var i = 0; i < tds.length; ++i) {
// 		tds[i].addEventListener("click", function () {
// 			var tc = this.textContent;

// 			if ((tc === "") && (mutari!==1)) {
// 				this.textContent = "X";
// 				ok = 1;
// 				mutari = mutari + 1;
// 			} else if (tc === "X") {
// 				this.textContent = "";
// 				ok = 0;
// 				mutari = mutari - 1;
// 				playerTurnValue = 2;
// 			} else if (tc === "O") {
// 				this.textContent = "O";
// 				ok = 0;
// 			}
			
// 			document.getElementById("myBtn").addEventListener("click", myFunction);



// 		});
// 	}

// }	
	 

//  if (playerTurnValue === 2){
// 	for (var i = 0; i < tds.length; ++i) {
// 		tds[i].addEventListener("click", function () {
// 			 var tc = this.textContent;

// 			if (tc === "") {
// 				this.textContent = "O";
// 				ok = 1;
// 				mutari = mutari + 1;
// 			} else if (tc === "O") {
// 				this.textContent = "";
// 				ok = 0;
// 				mutari = mutari - 1;
// 			} else if (tc === "X") {
// 				this.textContent = "X";
// 				ok = 0;
// 			}

// 			document.getElementById("myBtn").addEventListener("click", myFunction2);

// 		});
// 	}
// }



	

//  document.querySelectorAll("td").addEventListener("click", functie);

// function functie() {
//  	var textCelula = this.textContent;
// 	if ((textCelula === "") && (mutari !== 1)) {
// 		this.textContent = "X";
// 		ok = 1;
// 		mutari = mutari + 1;
// 	} else if (textCelula === "X") {
// 		this.textContent = "";
// 		ok = 0;
// 		mutari = mutari - 1;
// 	} else if (textCelula === "O") {
// 		this.textContent = "O";
// 		ok = 0;
// 	}

// }












///////////////// text functional



var tds = document.querySelectorAll("td");
// var dv = document.querySelectorAll("div");


var playerTurn = 3;
console.log(playerTurn)

for (var i = 0; i < tds.length; ++i) {
	tds[i].addEventListener("click", function () {
		var tc = this.textContent;
		if (document.getElementById('myDv').textContent === 'Player1') {

			if (tc === "") {
				this.textContent = "X";
				document.getElementById('myDv').textContent = 'Player2';
				playerTurn = 2;
				console.log(playerTurn)
			} else if (tc === "X") {
				this.textContent = "";
			} else {
				this.textContent = "X";
			}
		} else if (document.getElementById('myDv').textContent === 'Player2') {
			if (tc === "") {
				this.textContent = "O";
				document.getElementById('myDv').textContent = 'Player1';
				playerTurn = 1;
				console.log(playerTurn)
			} else if (tc === "O") {
				this.textContent = "";
			} else {
				this.textContent = "O";
			}

		}
	});
}

/////surplus cod


if ((completedMove === 1) && (document.getElementById('myDv').textContent === 'Player1')) {
	
	function changeTurn1to2() {
		document.getElementById('myDv').textContent = 'Player2';
		console.log('herb');
		moves = 0;
		completedMove = 0;

	}
	
	 if ((completedMove === 1) && (document.getElementById('myDv').textContent === 'Player2')){
	

	function changeTurn2to1() {
		document.getElementById('myDv').textContent = 'Player1';
		console.log('iepu');
		moves = 0;
		completedMove = 0;


	}
}

}




for (j = 1; j <= 3; j = j + 1 ){
	if (v[j] * v[j + 1] * v[j + 2] === 8) {
		console.log('player1',' wins');
	} else if (v[j] * v[j + 3] * v[j + 6] === 8){
		console.log('player1',' wins');
	} 
} 


	if ((v[1] * v[5] * v[9] === 8) || (v[3] * v[5] * v[7] === 8)) {
		console.log('player1',' wins');
		document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

	}




	if(v[0] * v[1] * v[2] === 8) {
		console.log('player1',' wins');
		document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

	} else if (v[3] * v[4] * v[5] === 8) {
		console.log('player1',' wins');
		document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

	} else if (v[6] * v[7] * v[8] === 8) {
		console.log('player1',' wins');
		document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

	}

    
    if(v[0] * v[3] * v[6] === 8) {
		console.log('player1',' wins');
		document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

	} else if (v[1] * v[4] * v[7] === 8) {
		console.log('player1',' wins');
		document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

	} else if (v[2] * v[5] * v[8] === 8) {
		console.log('player1',' wins');
		document.getElementById('myDv').textContent = 'Game Over - Winner Player1';

	}

for (j = 0; j <= 8; j = j + 1 ) {
	if (value[j] !== 0){
		m = m + 1;
	}
}

if (m === 9){
	document.getElementById('myDv').textContent = 'Game Over - Tie';
}
