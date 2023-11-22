

let container = document.querySelector(".container");
let colorPicked;
let rainbowColors = ["black", "#CB0FFF", "#FDFF00", "#38FF12", "#6600FF"];
let isRainbowOn = false;
let reset = document.querySelector(".reset");
let eraser = document.querySelector(".eraser");
let cell;


//MAKE A 16x16 GRID

function createDivs(num) {
    container.innerHTML = "";
    for (i = 0; i < num * num; i++) {
        cell = document.createElement("div");
   
        cell.classList.add("cell");
  
        cell.style.width = 500/num - 2 + "px"
        cell.style.height = 500/num - 2 + "px" 
    
        container.appendChild(cell);
        
        
    }
    }
createDivs(16);

//RESIZE GRID

let range = document.querySelector("#range")
let value = document.querySelector("#value")


range.addEventListener("input", resizeGrid)

function resizeGrid() {
    value.textContent = "Adjust size: " + range.value;
    let num = document.querySelector("#range").value;
    createDivs(num)
    
}



//CHANGE COLOR TO BLACK OR RAINBOW
let cells;
let isDrawModeOn = false

container.addEventListener("click", () => {
    if (!isDrawModeOn) {
    isDrawModeOn = true ;
    drawModeOn();
    }

    else if (isDrawModeOn) {
        isDrawModeOn = false;
    }
})




function drawModeOn() {
    cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", changeColor);
    }
    )
}

  

    

//ERASER MODE

let isEraserModeOn = false;

eraser.addEventListener("click", () => {
    isEraserModeOn = true
    eraserMode();
}
)
   
function eraserMode() {
   
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (isEraserModeOn) {
        cell.style.backgroundColor = "white" 
    }})
    })
}



    

function changeColor() {
    if (!isRainbowOn && !isEraserModeOn && isDrawModeOn) {
    this.style.backgroundColor = colorPicked}

    else if (isRainbowOn && !isEraserModeOn && isDrawModeOn) {
        colorPicked = rainbowColors[Math.floor(Math.random() * rainbowColors.length)]
        this.style.backgroundColor = colorPicked;
    }

}





let black = document.querySelector(".black")
let rainbow = document.querySelector(".rainbow")

black.addEventListener('click', () => {
    colorPicked = "black";
    isRainbowOn = false;
    isEraserModeOn = false;
    
});

rainbow.addEventListener('click', () => {
    colorPicked = rainbowColors[Math.floor(Math.random() * rainbowColors.length)]
    isRainbowOn = true;
    isEraserModeOn = false;
    
    
});



reset.addEventListener("click", resizeGrid)
