// declare variable
const firstHover = document.querySelector('#firstHover')
// console.log(firstHover)

const highlight = document.querySelectorAll('.highlight')
// console.log(highlight)



// create functions
function changeColor(element) {
  element.style.backgroundColor = 'yellow'
}

function changeColorBack(element) {
  element.style.backgroundColor = 'white'
}


// mouseover => highlight cells
firstHover.addEventListener('mouseover', function() {
  highlight.forEach(changeColor);
});

// mouseout => unhighlight cells
firstHover.addEventListener('mouseout', function() {
  highlight.forEach(changeColorBack);
});
