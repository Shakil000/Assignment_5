document.getElementById('donation_button_noakhali').addEventListener('click', function(){
    const amount = donation('donation_input_noakhali');

    //validation the donation amount
    if(isNaN(amount) || amount <= 0){
        alert("Hay! Man Are You Joking");
        return;
    }

    //Get the added donation amount
    const add_amount_value = textFieldValue('add_amount_noakhali') || 0;
   

    // get value from navbar main amount
    const navbarAmount = navbarTextFieldValue('navbar_amount') || 0;

    
    if(amount > navbarAmount) {
        alert("You don't have enough balance to donate");
        document.getElementById('donation_input_noakhali').value = '';
        return;
    }
    // Value added here
const Increase_Amount = amount + add_amount_value;
// Set the value here
document.getElementById('add_amount_noakhali').innerText = Increase_Amount;
// Value subtract here
const navbarMainAmount = navbarAmount - amount;
 //console.log(navbarMainAmount)
//Set the value here
document.getElementById('navbar_amount').innerText = navbarMainAmount;
// console.log(heading)
   
   
});


document.getElementById('button_history').addEventListener('click', function(){
    // console.log("clicked");
    const amount = donation('donation_input_noakhali');
    // console.log(amount)
    // get value from navbar main amount
    const navbarAmount = navbarTextFieldValue('navbar_amount');

    if(!isNaN(amount) && navbarAmount > amount){
        // console.log(amount);
        const heading = document.getElementById('noakhali').innerText;
        // console.log(heading)
        const div = document.createElement('div');
        div.classList.add('border');
        div.innerHTML = `
        <h1>You Donations</h1>
        <p class = 'font-bold'>${amount} Taka is ${heading}</p>
        `
        document.getElementById('history_section').appendChild(div);
        const date = new Date();
        document.getElementById('date').innerHTML = date;
        document.getElementById('donation_input_noakhali').value = '';
    }
});


// Toggle

document.getElementById('button_donation').addEventListener('click', function(){
    toggleButton('donation_section');
});
document.getElementById('button_history').addEventListener('click', function(){
    toggleButton('history_section');
});



const historyTab = document.getElementById('button_history');
const donationTab = document.getElementById('button_donation');

historyTab.addEventListener('click', function(){
 historyTab.classList.add(
    'bg-[#B4F461]',
    'rounded'
);

     donationTab.classList.remove(
        'bg-[#B4F461]'
    );
});

donationTab.addEventListener('click', function(){
    historyTab.classList.remove(
       'bg-[#B4F461]',
       'rounded'
   );
   
        donationTab.classList.add(
           'bg-[#B4F461]'
       );
   });


// Donation For feni Bangladesh
document.getElementById('donation_button_feni').addEventListener('click', function(){
    const amount = donation('donation_input_feni');
    if(isNaN(amount) || amount <= 0){
        alert("Hay! Man Are You Joking");
        return;
    }else{
        alert("Thank You");
        //console.log(amount);
    const add_amount_value = textFieldValue('add_amount_feni');
    //console.log(add_amount_value);
    // Value added here
    const Increase_Amount = amount + add_amount_value;
    // Set the value here
    document.getElementById('add_amount_feni').innerText = Increase_Amount;

    // get value from navbar main amount
    const navbarAmount = navbarTextFieldValue('navbar_amount');
        //console.log(navbarAmount)
        // Value subtract here
    const navbarMainAmount = navbarAmount - amount;
    //console.log(navbarMainAmount)
    //Set the value here
    document.getElementById('navbar_amount').innerText = navbarMainAmount;
    // console.log(heading)
}
   
});


document.getElementById('button_history').addEventListener('click', function(){
    // console.log("clicked");
    const amount = donation('donation_input_feni');
    // console.log(amount)
    if(!isNaN(amount) ){
        // console.log(amount);
        const heading = document.getElementById('feni').innerText;
        // console.log(heading)
        const div = document.createElement('div');
        div.classList.add('border');
        div.innerHTML = `
        <h1>You Donations</h1>
        <p class = 'font-bold'>${amount} Taka is ${heading}</p>
        `
        document.getElementById('history_section').appendChild(div);
        const date = new Date();
        document.getElementById('date').innerHTML = date;
        document.getElementById('donation_input_feni').value = '';
    }
});
// Toggle

document.getElementById('button_donation').addEventListener('click', function(e){
    e.preventDefault();
    toggleButton('donation_section');
})


document.getElementById('button_history').addEventListener('click', function(e){
    e.preventDefault();
    toggleButton('history_section');
});

// document.getElementById('button_donation').addEventListener('click', function(e){
//     e.preventDefault();
   
// })


// document.getElementById('button_history').addEventListener('click', function(e){
//     e.preventDefault();
//     toggleButton('history_section');
// })

document.getElementById('donation_button_quota').addEventListener('click', function(){
    const amount = donation('donation_input_quota');
    if(isNaN(amount) || amount <= 0){
        alert("Hay! Man Are You Joking");
        return;
    }else{
        alert("Thank You");
        //console.log(amount);
    const add_amount_value = textFieldValue('add_amount_quota');
    //console.log(add_amount_value);
    // Value added here
    const Increase_Amount = amount + add_amount_value;
    // Set the value here
    document.getElementById('add_amount_quota').innerText = Increase_Amount;

    // get value from navbar main amount
    const navbarAmount = navbarTextFieldValue('navbar_amount');
        //console.log(navbarAmount)
        // Value subtract here
    const navbarMainAmount = navbarAmount - amount;
    //console.log(navbarMainAmount)
    //Set the value here
    document.getElementById('navbar_amount').innerText = navbarMainAmount;
    // console.log(heading)
}
   
});


document.getElementById('button_history').addEventListener('click', function(){
    // console.log("clicked");
    const amount = donation('donation_input_quota');
    // console.log(amount)
    if(!isNaN(amount) ){
        // console.log(amount);
        const heading = document.getElementById('quota').innerText;
        // console.log(heading)
        const div = document.createElement('div');
        div.classList.add('border');
        div.innerHTML = `
        <h1>You Donations</h1>
        <p class = 'font-bold'>${amount} Taka is ${heading}</p>
        `
        document.getElementById('history_section').appendChild(div);
        const date = new Date();
        document.getElementById('date').innerHTML = date;
        document.getElementById('donation_input_quota').value = '';
    }
});
// Toggle

document.getElementById('button_donation').addEventListener('click', function(e){
    e.preventDefault();
    toggleButton('donation_section');
})


document.getElementById('button_history').addEventListener('click', function(e){
    e.preventDefault();
    toggleButton('history_section');
});

// document.getElementById('button_donation').addEventListener('click', function(e){
//     e.preventDefault();
   
// })


// document.getElementById('button_history').addEventListener('click', function(e){
//     e.preventDefault();
//     toggleButton('history_section');
// })