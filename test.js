
console.log("---------------------------------------------------------------------")
console.log(`
>   THIS IS THE TEST ZONE!                              <
>   Used for testing JS functionality only.         <
   `)
console.log("---------------------------------------------------------------------")



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
 