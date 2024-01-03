document.addEventListener("DOMContentLoaded", function () {

//Guardar el elemento y el contexto
    const mainCanvas = document.getElementById("main-canvas");
    const context = mainCanvas.getContext("2d");



// Función para cambiar el color
    const setBlack = () => {
        context.strokeStyle = "#000000";
    };

    const setBlue = () => {
        context.strokeStyle = "#00359a";
    };

    const setRed = () => {
        context.strokeStyle = "#d90909";
    };

    const setPurple = () => {
        context.strokeStyle = "#f600d1";
    };

    const setGreen = () => {
        context.strokeStyle = "#278300";
    };

    const setYellow = () => {
        context.strokeStyle = "#ffdd00";
    };

    const setSmall = () =>{
        context.lineWidth = 10;
    };

    const setMedium = () =>{
        context.lineWidth = 15;
    };

    const setBig = () =>{
        context.lineWidth = 25;
    };

// Evento de escucha para el clic en el boton
    const btnBlack = document.getElementById("btn-black"); //aquí va el id
    btnBlack.addEventListener("click", setBlack);//aqui la función que cambia el color

    const btnBlue = document.getElementById("btn-blue");
    btnBlue.addEventListener("click", setBlue);

    const btnRed = document.getElementById("btn-red");
    btnRed.addEventListener("click", setRed);

    const btnPurple = document.getElementById("btn-purple");
    btnPurple.addEventListener("click", setPurple);

    const btnGreen = document.getElementById("btn-green");
    btnGreen.addEventListener("click", setGreen);

    const btnYellow = document.getElementById("btn-yellow");
    btnYellow.addEventListener("click", setYellow);

    const btnSmall = document.getElementById("btn-small");
    btnSmall.addEventListener("click", setSmall);

    const btnMedium = document.getElementById("btn-medium");
    btnMedium.addEventListener("click", setMedium);

    const btnBig = document.getElementById("btn-big");
    btnBig.addEventListener("click", setBig);





});