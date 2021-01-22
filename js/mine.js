const solutionBtn = document.querySelector("#solution");
const block = document.querySelector("#block");

const solutionBtn1 = document.querySelector("#solution-1");
const block1 = document.querySelector("#block-1");

const solutionBtn2 = document.querySelector("#solution-2");
const block2 = document.querySelector("#block-2");

const solutionBtn3 = document.querySelector("#solution-3");
const block3 = document.querySelector("#block-3");

solutionBtn.addEventListener("click", ()=>{
	block.classList.toggle("active");
});

solutionBtn1.addEventListener("click", ()=>{
	block1.classList.toggle("active1")
});


solutionBtn2.addEventListener("click", ()=>{
	block2.classList.toggle("active-2");
}); 

solutionBtn3.addEventListener("click", ()=>{
	block3.classList.toggle("active-3");
});
