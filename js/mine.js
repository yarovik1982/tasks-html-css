const solutionBtn = document.querySelector("#solution");
const block = document.querySelector("#block");
const solutionBtn1 = document.querySelector("#solution-1");
const block1 = document.querySelector("#block-1");

solutionBtn.addEventListener("click", ()=>{
	block.classList.toggle("active");
});

solutionBtn1.addEventListener("click", ()=>{
	block1.classList.toggle("active1")
}); 


