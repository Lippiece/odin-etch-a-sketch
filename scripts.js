let divs = document.querySelectorAll("div");
let paintContainer = divs[0];
let btnContainer = divs[1];

let btns = document.querySelectorAll("button");
let clearBtn = btns[0];
let changeBtn = btns[1];

let paintBlocks = [];
let blocksNumber = 16;

function displayBlocks() {
	/* FIXME: Blocks are already created! Delete them or something. */
	for (let i = 0; i < blocksNumber; i++) {
		let temp = document.createElement("div");
		paintBlocks.push(temp);
		paintContainer.appendChild(paintBlocks[i]);
		paintBlocks[i].style.backgroundColor = `rgb(${Math.floor(
			Math.random() * 255
		)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`;
		paintBlocks[i].addEventListener("mouseenter", function (e) {
			paintBlocks[i].style.backgroundColor = `rgb(${Math.floor(
				Math.random() * 255
			)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`;
		});
	}
}
displayBlocks();

clearBtn.addEventListener("click", function (e) {
	for (let i = 0; i < blocksNumber; i++) {
		paintBlocks[i].style.backgroundColor = "white";
	}
});

