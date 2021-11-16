// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jonathan Rivera" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle


//Call for funtions to display the starting number in this case 0
updategb();
updatecc();
updateSugar();
updateTotal(gb, cc, sugar);

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Gingerbread + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    gb++;
    updategb();
    updateTotal(gb, cc ,sugar);
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Gingerbread + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    if(gb != 0){
        gb--;
    }
    updategb();
    updateTotal(gb, cc, sugar);
})

//Chocale chips "+" and "-" section
// Event listener for clicks on the "+" button for Chocolate Chips
document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Gingerbread + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    cc++;
    updatecc();
    updateTotal(gb, cc, sugar);
})

// Event listener for clicks on the "-" button for Chocolate Chips
document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Gingerbread + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    if(cc != 0){
        cc--;
    }
    updatecc();
    updateTotal(gb, cc, sugar);
}) 

//Sugar Sprinkle section "+" and "-" butons events
// Event listener for clicks on the "+" button for Sugar Sprinkle
document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Gingerbread + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    sugar++;
    updateSugar();
    updateTotal(gb, cc, sugar);
})

// Event listener for clicks on the "-" button for Sugar Sprinkle
document.getElementById('minus-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Gingerbread + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    if(sugar != 0){
        sugar--;
    }
    updateSugar();
    updateTotal(gb, cc, sugar);
}) 

//Functions section

//Displays the value of gb in the table
function updategb(){
    document.querySelector('#qty-gb').innerHTML = gb;
}

function updatecc(){
    document.querySelector("#qty-cc").innerHTML = cc;
}

function updateSugar(){
    document.querySelector('#qty-sugar').innerHTML = sugar;
}

//Total Display function
function updateTotal(ginger = 0, chip = 0, sprinkle = 0){
    let total = ginger + chip + sprinkle;
    document.querySelector('#qty-total').innerHTML = total;
}