function Control(){

	function drawGameCanvas() {

			// Get the canvas element.
			canvas = document.getElementById("gameBoard");

			// Make sure you got it.
			if (canvas.getContext) {
			  // Specify 2d canvas type.
			  ctx = canvas.getContext("2d");

			  // Play the game until the ball stops.
			  gameLoop = setInterval(drawBall, 16);

			  // Add keyboard listener.
			  window.addEventListener('keydown', whatKey, true);

			}
	}




	function whatKey(evt) {

			switch (evt.keyCode) {
			  // Left arrow.
			case 37:
			  paddleX = paddleX - 20;
			  if (paddleX < 0) paddleX = 0;
			  break;

			  // Right arrow.
			case 39:
			  paddleX = paddleX + 20;
			  if (paddleX > boardX - paddleW) paddleX = boardX - paddleW;
			  break;
			}
	}
}