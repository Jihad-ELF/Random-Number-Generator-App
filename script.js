/**IMPORTANT NOTE:In the case of an <input> element, the 'value' property 
 * is used to retrieve the value entered by the user. On the other hand,
 *  the textContent property is used to retrieve the text content of an 
 * element that is not an input field */

function generateRandomNumber(minVal,maxVal) {
    /**The Math.random() that generate a float number between 0 and 1*/
    /**math.floor() it  rounds down and returns the largest integer less than or equal to a given number. */ 
    const randomNumber = Math.floor(Math.random()*(maxVal-minVal+1))+ minVal;
    return randomNumber;
}

// Next step: Write a function that takes an HTML element id as a parameter and returns that element. Use that in Line 18 and Line 19.
function getElementValue(id){
    return document.getElementById(id).value;  
}
function generate(){
    /*The parseInt() function parses a string argument and returns an integer */
    const minVal = parseInt(getElementValue("min_value"));
    const maxVal= parseInt(getElementValue("max_value"));
    if (isNaN(minVal)||isNaN(maxVal)|| minVal > maxVal){
        /*The isNaN() function determines whether a value is NaN Non-A-Nmber when converted to a number.*/
        alert("Please enter Valid Numbers for min and max Values!");
    } else {     
        document.getElementById("generated_number").value=generateRandomNumber(minVal,maxVal);
    }
}


