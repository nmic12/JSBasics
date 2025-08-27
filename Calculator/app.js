const display = document.getElementById("display");


function checkLastDigit() {
    if(String(display.value).endsWith("+") == false) {
        return false;
    }
}

function appendToDisplay(input){
    display.value += input;
}

function appendToDisplayOp(inputOp) {
    console.log("foobar:", String(display.value).match("[+*/\\-]$"));
    
    if( ! String(display.value).match("[+*/\\-]$")) { 
        display.value += inputOp;
    } 
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

}