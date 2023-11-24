//your code here
let btn  = document.querySelector("button");
let input = document.getElementById("guess");
let para = document.getElementById("respond");
let random = Math.floor(Math.random()*100) + 1;
btn.addEventListener("click", onClick);
function onClick(){
	let number = parseInt(input.value);
	if(number < random){
		para.innerText = "guess higher";
	}
	else if(number > random){
		para.innerText = "guess lower";
	}
	else{
		para.innerText = "Correct guess";
		btn.removeEventListener("click", onClick);
		return;
	}
	input.value ="";
}
