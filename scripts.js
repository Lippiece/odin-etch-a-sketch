let divs = document.querySelectorAll("div");
let paintContainer = divs[0];
let btnContainer = divs[1];

for (let i = 0; i < 16; i++) {
	let temp = document.createElement("div");
	divs.push(temp);
	container.appendChild(divs[i]);
}
