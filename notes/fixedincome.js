
function swapSpread () {
    const input1 = document.querySelector('#fixRate'); //get input
    const input2 = document.querySelector('#govRate'); //get input
    const results = input1.value - input2.value // do actual calculation
    
    const container = document.querySelector("#container"); //select empty container
    const content = document.createElement("p"); //create result element
    content.textContent = results; //add results to text content for new element
    content.classList.add("h4"); //update the class to h4 (bootstrap)
    content.setAttribute("id", "content"); //set ID to 'content' for new p element
    container.append(content) //add new element, with results, class and id to container element
};

function swapSpreadClear () {
    const content = document.querySelector("#content");
    const input1 = document.querySelector('#fixRate');
    const input2 = document.querySelector('#govRate');
    input1.value = ''; //set input back to blank
    input2.value = ''; //set input back to blank   
    content.remove() 
};



function forwardRateModel () {
    const input1 = document.querySelector('#fRatelong'); //get input
    const input1a = document.querySelector('#fRatelongT'); //get input
    const input2 = document.querySelector('#fRateshort'); //get input
    const input2a = document.querySelector('#fRateshortT'); //get input
   
    const results = ( ((input1.value ** input1a.value) / (input2.value ** input2a.value)) ) // do actual calculation
    
    const container = document.querySelector("#container"); //select empty container
    const content = document.createElement("p"); //create result element
    content.textContent = results; //add results to text content for new element
    content.classList.add("h4"); //update the class to h4 (bootstrap)
    content.setAttribute("id", "content"); //set ID to 'content' for new p element
    container.append(content) //add new element, with results, class and id to container element
 }
 
 function forwardRateModelClear () {
    const content = document.querySelector("#content");
    const input1 = document.querySelector('#fRatelong'); //get input
    const input1a = document.querySelector('#fRatelongT'); //get input
    const input2 = document.querySelector('#fRateshort'); //get input
    const input2a = document.querySelector('#fRateshortT'); //get input
    input1.value = ''; //set input back to blank
    input2.value = ''; //set input back to blank    
    input1a.value = ''; //set input back to blank
    input2a.value = ''; //set input back to blank   
    content.remove()
 };
 