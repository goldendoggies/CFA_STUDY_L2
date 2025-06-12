
console.log("---------------------------------------------------------------------")
console.log(`
>   THIS IS THE TEST ZONE!                              <
>   Used for testing JS functionality only.         <
   `)
console.log("---------------------------------------------------------------------")


const showFormula = document.querySelector('.fStat') //select div

const MathNS = `http://www.w3.org/1998/Math/MathML`;
const createMathElement = (tag) => document.createElementNS(MathNS, tag);

const math = createMathElement(`math`);
math.setAttribute(`display`, `block`);

let mo1 = createMathElement('mo');
let mo2 = createMathElement('mo');
let mfrac = createMathElement(`mfrac`);
let mn1 = createMathElement(`mn`);
let mn2 = createMathElement(`mn`);

mo1.textContent = 'F';
mo2.textContent = '=';
mn1.textContent = `RSS/K`;
mn2.textContent = `SEE/(n-k-1)`;

math.appendChild(mo1);
math.appendChild(mo2);
mfrac.appendChild(mn1);
mfrac.appendChild(mn2);
math.appendChild(mfrac);


showFormula.appendChild(math);




// const MathNS = `http://www.w3.org/1998/Math/MathML`;
// const createMathElement = (tag) => document.createElementNS(MathNS, tag);

// const math = createMathElement(`math`); //create math element
// math.setAttribute(`display`, `block`); //set math element to block display

// let mo1 = createMathElement('mo');
// let mo2 = createMathElement('mo');
// let mfrac = createMathElement(`mfrac`); //create mfrac element
// let mn1 = createMathElement(`mn`);//create element
// let mn2 = createMathElement(`mn`);//create element

// mo1.textContent = 'F';
// mo2.textContent = '=';
// ms1.textContent = `RSS/K`; 
// ms2.textContent = `SEE/(n-k-1)`; 

// math.appendChild(mo1);
// math.appendChild(mo2);
// math.appendChild(mfrac);
// mfrac.appendChild(mn1);
// mfrac.appendChild(mn2);

// document.body.appendChild(math);

// This approach uses a single function handleClicks to manage actions for different buttons. The switch statement identifies which button was clicked based on its ID and executes the corresponding code. Event listeners are attached to each button, calling handleClicks with the appropriate ID when clicked.

// function handleClicks(buttonId) {
//    switch (buttonId) {
//      case 'button1':
//        // Actions for button 1 click
//        console.log('Button 1 clicked');
//        break;
//      case 'button2':
//        // Actions for button 2 click
//        console.log('Button 2 clicked');
//        break;
//      case 'button3':
//        // Actions for button 3 click
//        console.log('Button 3 clicked');
//        break;
//      default:
//        console.log('Unknown button clicked');
//    }
//  }
 

//  // Add event listeners to buttons
//  const button1 = document.getElementById('button1');
//  const button2 = document.getElementById('button2');
//  const button3 = document.getElementById('button3');
 
// console.log(button1)

//  button1.addEventListener('click', () => handleClicks('button1'));
//  button2.addEventListener('click', () => handleClicks('button2'));
//  button3.addEventListener('click', () => handleClicks('button3'));
 
function interBank () {
   const firstInterBank = document.querySelector('#firstInterBank')
   const secondInterBank = document.querySelector('.secondInterBank')
   const thirdInterBank = document.querySelector('.thirdInterBank')
   const results = firstInterBank.value // do actual calculation

   console.log(results)
   console.log(secondInterBank)
   console.log(thirdInterBank)
};