// declare variableS
const firstHover = document.querySelector('.firstHover')
const highlight = document.querySelectorAll('.highlight')
const highlightO = document.querySelectorAll('.highlightO')

// create functions
function changeColor(element) {element.style.backgroundColor = 'yellow'}
function changeColorO(element) {element.style.backgroundColor = 'orange'}
function changeColorBack(element) {element.style.backgroundColor = 'white'}


const MathNS = `http://www.w3.org/1998/Math/MathML`;
const createMathElement = (tag) => document.createElementNS(MathNS, tag);


// mouseover => highlight cells
firstHover.addEventListener('mouseover', function() {
  highlight.forEach(changeColor);
  highlightO.forEach(changeColorO);

  const showFormula = document.querySelector('.fStat') //select div
  const content2 = document.createElement("div"); //create result element
  const content3 = document.createElement("div"); //create result element

  const math = createMathElement(`math`);
  math.setAttribute(`display`, `block`);
  
  let mo1 = createMathElement('mo');
  let mo2 = createMathElement('mo');
  let mfrac = createMathElement(`mfrac`);
  let mn1 = createMathElement(`mn`);
  let mn2 = createMathElement(`mn`);
  
  mo1.textContent = 'F';
  mo2.textContent = '=';
  mn1.textContent = `RSS/k`;
  mn2.textContent = `SEE/(n-k-1)`;
  
  
  math.appendChild(mo1);
  math.appendChild(mo2);
  math.appendChild(mfrac);
  mfrac.appendChild(mn1);
  mfrac.appendChild(mn2);
  
  content3.appendChild(math);
  
  const results2 = "\n\n The Formula is:\n\n F = RSS / SSE \n\n"// do actual calculation
  
  content2.textContent = results2; //add results to text content for new element

  content2.classList.add("h4"); //update the class to h4 (bootstrap)
  content2.setAttribute("class", "content2"); //set ID to 'content' for new p element
  content2.style.whiteSpace = 'pre'
  content2.style.backgroundColor = 'orange'

  content3.classList.add("h4"); //update the class to h4 (bootstrap)
  content3.setAttribute("class", "content3"); //set ID to 'content' for new p element
  content3.style.whiteSpace = 'pre'
  content3.style.backgroundColor = 'yellow'
  showFormula.append(content2, content3); //add new element, with results, class and id to container element
 
});


// mouseout => unhighlight cells
firstHover.addEventListener('mouseout', function() {
  highlight.forEach(changeColorBack);
  highlightO.forEach(changeColorBack);
  const content2 = document.querySelector(".content2"); 
  const content3 = document.querySelector(".content3"); 

  content2.remove() 
  content3.remove()
});



//  <math>
//   <mo>F</mo>
//   <mo>=</mo>
//   <mfrac>
//     <mn>RSS/K</mn>
//     <mn>SEE/(n-k-1)</mn>
//   </mfrac>
// </math>


// const MathNS = `http://www.w3.org/1998/Math/MathML`;
// const createMathElement = (tag) => document.createElementNS(MathNS, tag);

// const content3 = document.createElement("div"); //create result element

// const math = document.createMathElement('math');
// const mo = document.createMathElement('mo');
// const mo2 = document.createMathElement('mo');
// const mfrac = document.createMathElement('mfrac');
// const mn = document.createMathElement('mn');
// const mn2 = document.createMathElement('mn');


// const F = "F"// do actual calculation
//   const m1 = '='
//   const results3 = "1"// do actual calculation
//   const results4 = "3"// do actual calculation


//   // content3.textContent = results3
//   mo.textContent = F
//   mo2.textContent = m1
//   mn.textContent = results3
//   mn2.textContent = results4


// showFormula.append(content3); //add new element, with results, class and id to container element
// content3.append(math); //add new element, with results, class and id to container element
// math.append(mo);
// math.append(mo2);
// math.append(mfrac);
// mfrac.append(mn);
// mfrac.append(mn2);