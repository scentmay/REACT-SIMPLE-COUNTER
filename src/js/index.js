//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/home.jsx";

//render your react application

//Colocamos número del que va a partir el contador:
let counter = 619895;

//Hacemos ejecutar una función cada segundo:
setInterval(function(){
    //La función pinta la app con el valor de counter EN CADA SEGUNDO:
    //es decir, 1.- pinto contador 2.- aumento contador
    ReactDOM.render(<SecondsCounter seconds={counter}/>, document.querySelector("#app"));
    counter +=1;
},1000);


