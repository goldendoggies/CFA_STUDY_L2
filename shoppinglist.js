// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#active_learning_basic_dom_manipulation
// https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html

// step 1 list elements needed
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// step 2 add an event 'click button'
button.addEventListener('click', () => {
  const myItem = input.value; //enter input, create 'myItem'
  input.value = ''; //set input back to blank

//   step 3 once button is clicked, create three things
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

//   step 3b define each of these three things
  listItem.appendChild(listText); //add list item <li>
  listText.textContent = myItem; //set the property of list item text to the input value
  listItem.appendChild(listBtn); 
  listBtn.textContent = 'Delete';
  listBtn.setAttribute("class", "btn btn-secondary");

  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});