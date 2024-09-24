document.getElementById('donation_button_noakhali').addEventListener('click', function(){
    const amount = donation('donation_input_noakhali');
    if(isNaN(amount) || amount <= 0){
        alert("Hay! Man Are You Joking");
        document.getElementById('donation_input_noakhali').value = '';
        my_modal.remove();
        return;
    }

    const add_amount_value = textFieldValue('add_amount_noakhali');
    const navbarAmount = navbarTextFieldValue('navbar_amount');

    if(amount > navbarAmount) {
        alert("You don't have enough balance to donate");
        document.getElementById('donation_input_noakhali').value = '';
        my_modal.remove();
        return;
    }
        const Increase_Amount = amount + add_amount_value;
        document.getElementById('add_amount_noakhali').innerText = Increase_Amount;
        const navbarMainAmount = navbarAmount - amount;
        document.getElementById('navbar_amount').innerText = navbarMainAmount;

});

document.getElementById('button_history').addEventListener('click', function(){
    const amount = donation('donation_input_noakhali');
    const navbarAmount = navbarTextFieldValue('navbar_amount');

    if(amount < navbarAmount){
        const heading = document.getElementById('noakhali').innerText;
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
        document.getElementById('donation_input_feni').value = '';
        my_modal.remove();
        return;
    }

    const add_amount_value = textFieldValue('add_amount_feni');
    const navbarAmount = navbarTextFieldValue('navbar_amount');

    if(amount > navbarAmount) {
        alert("You don't have enough balance to donate");
        document.getElementById('donation_input_feni').value = '';
        my_modal.remove();
        return;
    }
    const Increase_Amount = amount + add_amount_value;
    document.getElementById('add_amount_feni').innerText = Increase_Amount;
    const navbarMainAmount = navbarAmount - amount;
    document.getElementById('navbar_amount').innerText = navbarMainAmount;
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


// Donation for quota
document.getElementById('donation_button_quota').addEventListener('click', function(){
    const amount = donation('donation_input_quota');
    if(isNaN(amount) || amount <= 0){
        alert("Hay! Man Are You Joking");
        document.getElementById('donation_input_quota').value = '';
        my_modal.remove();
        return;
    }
    const add_amount_value = textFieldValue('add_amount_quota');
    const navbarAmount = navbarTextFieldValue('navbar_amount');
    if(amount > navbarAmount) {
        alert("You don't have enough balance to donate");
        document.getElementById('donation_input_quota').value = '';
        my_modal.remove();
        return;
    }
    const Increase_Amount = amount + add_amount_value;
    document.getElementById('add_amount_quota').innerText = Increase_Amount;
    const navbarMainAmount = navbarAmount - amount;
    document.getElementById('navbar_amount').innerText = navbarMainAmount;
   
});


document.getElementById('button_history').addEventListener('click', function(){
    const amount = donation('donation_input_quota');
    if(!isNaN(amount) ){
        const heading = document.getElementById('quota').innerText;
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
