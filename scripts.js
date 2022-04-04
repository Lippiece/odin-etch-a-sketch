let divs = document.querySelectorAll("div");
let paintContainer = divs[0];
let btnContainer = divs[1];

let paintBlocks = [];

for (let i = 0; i < 16; i++) {
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
