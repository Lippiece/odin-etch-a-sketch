let divs = document.querySelectorAll("div");
let paintContainer = divs[0];
let btnContainer = divs[1];

let btns = document.querySelectorAll("button");
let clearBtn = btns[0];
let changeBtn = btns[1];
let colorBtn = btns[2];
let rainbowBtn = btns[3];

let paintBlocks = [];
let blocksNumber = 16 * 16;

let color;
function displayBlocks() {
	toRemove = document.querySelectorAll("div");
	for (let i = 1; i < toRemove.length - 2; i++) {
		const element = toRemove[i];
		element.remove();
	}

	for (let i = 0; i < blocksNumber; i++) {
		let temp = document.createElement("div");
		paintBlocks.push(temp);
		paintContainer.appendChild(paintBlocks[i]);

		paintBlocks[i].style.width = `${100 / Math.sqrt(blocksNumber)}%`;
		paintBlocks[i].style.height = `${100 / Math.sqrt(blocksNumber)}%`;

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

changeBtn.addEventListener("click", function (e) {
	blocksNumber = parseInt(prompt("How many blocks on one side?", 32));
	blocksNumber *= blocksNumber;
	displayBlocks();
});

