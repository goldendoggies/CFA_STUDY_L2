// declare variableS
const firstHover = document.querySelector('.firstHover')
const highlight = document.querySelectorAll('.highlight')
const highlightO = document.querySelectorAll('.highlightO')

// create functions
function changeColor(element) {element.style.backgroundColor = 'yellow'}
function changeColorO(element) {element.style.backgroundColor = 'orange'}
function changeColorBack(element) {element.style.backgroundColor = 'white'}


// mouseover => highlight cells
firstHover.addEventListener('mouseover', function() {
  highlight.forEach(changeColor);
  highlightO.forEach(changeColorO);


  const showFormula = document.querySelector('.fStat') //select div
  const content = document.createElement("div"); //create result element
  const content2 = document.createElement("div"); //create result element

  const results = "\n\n The Formula is:\n\n            (RSS/k)\nF = -----------------\n            (SSE/n-k-1) "// do actual calculation
  const results2 = "\n\n The Formula is:\n\n F = RSS / SSE \n\n"// do actual calculation

  content.textContent = results; //add results to text content for new element
  content2.textContent = results2; //add results to text content for new element



  content.classList.add("h4"); //update the class to h4 (bootstrap)
  content.setAttribute("class", "content"); //set ID to 'content' for new p element
  content.style.whiteSpace = 'pre'
  content.style.backgroundColor = 'yellow'

  content2.classList.add("h4"); //update the class to h4 (bootstrap)
  content2.setAttribute("class", "content2"); //set ID to 'content' for new p element
  content2.style.whiteSpace = 'pre'
  content2.style.backgroundColor = 'orange'
  showFormula.append(content); //add new element, with results, class and id to container element
  showFormula.append(content2); //add new element, with results, class and id to container element
});


// mouseout => unhighlight cells
firstHover.addEventListener('mouseout', function() {
  highlight.forEach(changeColorBack);
  highlightO.forEach(changeColorBack);
  const content = document.querySelector(".content"); 
  const content2 = document.querySelector(".content2"); 

  content.remove() 
  content2.remove() 
});