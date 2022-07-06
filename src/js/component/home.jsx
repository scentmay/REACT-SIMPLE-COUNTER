import React from "react";

//create your first component
const SecondsCounter = (props) => {

		let digitOne = 0;
		let digitTwo = 0;
		let digitThree = 0;
		let digitFour = 0;
		let digitFive = 0;
		let digitSix = 0;

//La mecánica para separar el número es la siguiente:
// 1.- Divido el nº entre 10 y me quedo con la parte entera para conseguir la "parte izquierda" del nº
// 2.- Calculo el módulo de dividir entre 10 para quedarme con la "parte derecha" del nº

		if (props.seconds > 9){
			digitTwo = Math.trunc(props.seconds /10);
			digitOne = props.seconds % 10;
			
			if (digitTwo > 9){
				digitThree = Math.trunc(digitTwo/10);
				digitTwo = digitTwo % 10;

				if (digitThree > 9) {
					digitFour = Math.trunc(digitThree/10);
					digitThree = digitThree %10;

					if (digitFour > 9){
						digitFive = Math.trunc(digitFour/10);
						digitFour = digitFour %10;

						if (digitFive > 9){
							digitSix = Math.trunc(digitFive / 10);
							digitFive = digitFive % 10;
							console.log("Comprobamos los valores en consola")
							console.log(digitSix);
							console.log(digitFive);
							console.log(digitFour);
							console.log(digitThree);
							console.log(digitTwo);
							console.log(digitOne);
						}
					}
				}
			}
		}
		
		return(
			<div id="main-container">
				<div id="clock">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
						<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
						<path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
					</svg>
          		</div>
				<div className="digit">
					{digitSix}
				</div>
				<div className="digit">
					{digitFive}
				</div>
				<div className="digit">
					{digitFour}
				</div>
				<div className="digit">
					{digitThree}
				</div>
				<div className="digit">
					{digitTwo}
				</div>
				<div className="digit">
					{digitOne}
				</div>
			</div>
		);
}

export default SecondsCounter;


