
console.log("/========//========//========//========//========//========//========/")
console.log(`
    THIS IS THE TEST ZONE! 
    Used for testing JS functionality only. 
    `)
console.log("/========//========//========//========//========//========//========/")


function swapSpread () {
    let input1 = document.getElementById('fixRate');
    let input2 = document.getElementById('govRate');

    let results = input1.value - input2.value
    console.log(input1.value);
    console.log(input2.value);
    console.log(results);
    // return (results);

    const container = document.querySelector("#container");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = results;

    container.appendChild(content);
    input1.value = ''; //set input back to blank
    input2.value = ''; //set input back to blank


}

function swapSpreadClear () {


}


const div = document.querySelector("#results")
const p =  document.createElement("p")
p.innerText = "Hello John!"
div.append(p)


console.log(div.getAttribute("id"))

// step 1 list elements needed
// const list = document.querySelector('div');
// const input1 = document.querySelector('#fix');
// const input2 = document.querySelector('#gov');
// const button = document.querySelector('button');

// // step 2 add an event 'click button'
// button.addEventListener('click', () => {
//     const myItem = input1.value; //enter input, create 'myItem'
//     input1.value = ''; //set input back to blank
//     console.log(myItem);

//     // what I want to create
//     const listItem = document.createElement('p');

//     listItem.append(myItem); //add list item <p>




    // fix.focus();
// });