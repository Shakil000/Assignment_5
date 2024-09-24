// Function for Input Field Value
function donation(id){
    const inputValue = document.getElementById(id).value;
    const convertInputValue = parseFloat(inputValue);
    return convertInputValue;
}


// Function for Text Field Value

function textFieldValue(id){
    const textValue = document.getElementById(id).innerText;
    const convertTextFieldValue = parseFloat(textValue);
    return convertTextFieldValue;
}


// function for Navbar main Amount

function navbarTextFieldValue(id){
    const navbarTextField = document.getElementById(id).innerText;
    const convertNavbarTextFieldValue = parseFloat(navbarTextField);
    return convertNavbarTextFieldValue;
}


// Function for toggle button

function toggleButton(id){
    document.getElementById('donation_section').classList.add('hidden');
    document.getElementById('history_section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


// function modal(id){
//     document.getElementById(id);
// }