
function swapSpread () {
    const input1 = document.getElementById('fixRate');
    const input2 = document.getElementById('govRate');
    const container = document.querySelector("#container");
    const results = input1.value - input2.value
    const content = document.createElement("p");
    content.textContent = results;
    content.classList.add("h4");
    content.setAttribute("id", "content");
    container.append(content)
};

function swapSpreadClear () {
    const content = document.querySelector("#content");
    const input1 = document.getElementById('fixRate');
    const input2 = document.getElementById('govRate');
    content.remove()
    input1.value = ''; //set input back to blank
    input2.value = ''; //set input back to blank    
};