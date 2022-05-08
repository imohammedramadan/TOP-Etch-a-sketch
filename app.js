// creating the sketch grid
const sketchGrid = document.querySelector(".sketch-grid");
const sketchGridChildren = sketchGrid.childNodes;
const slider = document.querySelector(".grid-slider");
const sliderValue = document.querySelectorAll(".grid-slider-value span");
const eraseBtn = document.querySelector(".erase-btn");
const colorPicker = document.querySelector(".color-picker");

let sketchGridSize = 16;
let selectedColor = colorPicker.value;

// get slider size from user through a slider

function sketchGridCreator() {
	sketchGrid.style.cssText = `grid-template-columns: repeat(${sketchGridSize}, 1fr);`;

	resetGrid();

	for (let i = 0; i < sketchGridSize; i++) {
		for (let i = 0; i < sketchGridSize; i++) {
			const createNewDiv = document.createElement("div");
			sketchGrid.appendChild(createNewDiv);
		}
	}
	pixelColoring(selectedColor);
}

function gridSizeSlider() {
	slider.addEventListener("input", () => {
		sketchGridSize = slider.value;
		sketchGridCreator();
		sliderValue.forEach((gridSizeValue) => {
			gridSizeValue.textContent = sketchGridSize;
		});
	});
}

// to reset created sketch grid for a new grid creation
function resetGrid() {
	while (sketchGrid.firstChild) {
		sketchGrid.removeChild(sketchGrid.firstChild);
	}
}

const sketchControls = document.querySelector(".sketch-controls");
const gridSizeInput = document.querySelectorAll('input[name="grid-size"]');

function liveGridSizeChange() {
	gridSizeInput.forEach((radioBtn) => {
		console.log(radioBtn);
		radioBtn.addEventListener("click", () => {
			if (radioBtn.checked) {
				sketchGridSize = radioBtn.value;
				sketchGridCreator();
			}
		});
	});
}

// var mouseIsDown = false;

// window.addEventListener("mousedown", function () {
// 	mouseIsDown = true;
// 	setTimeout(function () {
// 		if (mouseIsDown) {
// 			// mouse was held down for > 2 seconds
// 		}
// 	}, 2000);
// });

// window.addEventListener("mouseup", function () {
// 	mouseIsDown = false;
// });

// coloring the grid
function pixelColoring(selectedColor) {
	sketchGridChildren.forEach((pixel) => {
		pixel.addEventListener("mouseover", () => {
			pixel.style.backgroundColor = selectedColor;
		});
	});
}

function penColorPicker() {
	colorPicker.addEventListener("input", () => {
		selectedColor = colorPicker.value;
		pixelColoring(selectedColor);
	});
}

function colorEraser() {
	eraseBtn.addEventListener("click", () => {
		const eraseColor = "#121212";
		sketchGridChildren.forEach((pixel) => {
			pixel.style.backgroundColor = eraseColor;
		});
	});
}

// function laterTest(pixel) {
// 	if (mouseIsDown) {
// 		return;
// 	} else {

// 	}
// }

function etchASketch() {
	sketchGridCreator();
	liveGridSizeChange();
	gridSizeSlider();
	pixelColoring(selectedColor);
	penColorPicker();
  colorEraser();
}

etchASketch();
