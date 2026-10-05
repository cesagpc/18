

function startGame(){
	const main_screen = document.getElementById("main_screen");
	const age_select_scr = document.getElementById("age_select_scr");

	main_screen.style.display = "none";
	age_select_scr.style.display = "grid";

}

let edad = 1;

function age(x){
	const input = document.getElementById("age_input")
	let value = parseInt(input.value, 10) || 0;
	const min = parseInt(input.min, 10);
	const max = parseInt(input.max, 10);
	value = Math.min(max, Math.max(min, value + x));
	input.value = value;

	edad = value;
}

/******************************Frosting screen************************************/

function frosting_scr(){
	console.log(edad)


	const age_select_scr = document.getElementById("age_select_scr");
	const frosting_select_scr = document.getElementById("frosting_select_scr");
	const frostings_container = document.getElementById("frostings_container");

	age_select_scr.style.display = "none";
	frosting_select_scr.style.display = "flex";
	frostings_container.style.display = "flex";
}

let flavor = null;

/******************************Baking screen************************************/

function chooseFrosting(x){
	flavor = x.dataset.flavor;

	const frosting_select_scr = document.getElementById("frosting_select_scr");
	const baking_scr = document.getElementById("baking_screen");

	frosting_select_scr.style.display = "none";
	baking_scr.style.display = "flex";

	/*Oven changes*/
	let ovens = ['ovens/oven1.png', 'ovens/oven2.png', 'ovens/oven3.png', 'ovens/oven4.png'];

	let index = 0;
	let contador = 0;
	const imgElement = document.querySelector('#oven_image');

	function change() {
		imgElement.src = ovens[index];
		if (index > 2){
			index = 0;
		}else{
			index++;
		}

		contador++;

		if (contador >= 2){
			const baking_done_h1 = document.getElementById("baking_done_h1");
			const bring_out_btn = document.getElementById("bring_out_btn");


			clearInterval(intervalo)
			baking_done_h1.textContent = "LISTO!";
			bring_out_btn.style.display = "block";
		}
	}

	const intervalo = setInterval(change, 1000);
}

/******************************Cake screen************************************/

function bringCakeOut(){
	const cake_ready_header = document.getElementById("cake_ready_header");

	if(edad == 1){
		cake_ready_header.textContent = `¡Listo! \nFeliz ${edad} año mi amor 🐒❤️🐒`;
	}else{
		cake_ready_header.textContent = `¡Listo! \nFelices ${edad} años mi amor 🐒❤️🐒`;
	}

	const baking_screen = document.getElementById("baking_screen");
	const cake_screen = document.getElementById("cake_screen");

	const final_cake = document.getElementById("final_cake");

	baking_screen.style.display = "none";
	cake_screen.style.display = "flex";

	if (flavor == "chocolate"){
		final_cake.src = "cake/chocolate/1.png";
	} else if(flavor == "cookies"){
		final_cake.src = "cake/cookies/1.png";
	} else if (flavor == "cream") {
		final_cake.src = "cake/cream/1.png";
	} else if (flavor == "reeses") {
		final_cake.src = "cake/reeses/1.png";
	} else if (flavor == "strawberry") {
		final_cake.src = "cake/strawberry/1.png";
	} else if (flavor == "vanilla") {
		final_cake.src = "cake/vanilla/1.png";
	}
}


let currentNumber = 1;

function changeDeco() {
	const totalImages = 6;

	const final_cake = document.getElementById("final_cake");

	if (currentNumber < totalImages) {
		currentNumber++;
		final_cake.src = `cake/${flavor}/${currentNumber}.png`;
	} else {
		currentNumber = 1; // Loop back to the first image
		final_cake.src = `cake/${flavor}/${currentNumber}.png`;
	}
}
