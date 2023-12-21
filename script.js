const colors = document.querySelectorAll('.color');
const shape = document.getElementById('shape');

for(let i = 0; i < colors.length; i++){
    colors[i].onclick = changeColor;
}

function changeColor(e){
    let hex = getComputedStyle(e.target).getPropertyValue('--color');
    shape.style.fill = hex
}


const inputColor = document.getElementById('inputColor');
inputColor.addEventListener('input',()=>{
    shape.style.fill = inputColor.value;
})