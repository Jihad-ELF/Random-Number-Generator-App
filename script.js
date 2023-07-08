/**IMPORTANT NOTE:In the case of an <input> element, the 'value' property 
 * is used to retrieve the value entered by the user. On the other hand,
 *  the textContent property is used to retrieve the text content of an 
 * element that is not an input field */

function generate(){
    var minVal=parseInt(document.getElementById("min_value").value);
    var maxVal=parseInt(document.getElementById("max_value").value);
    if (isNaN(minVal)||isNaN(maxVal)|| minVal > maxVal){
        /*The isNaN() function determines whether a value is NaN Non-A-Nmber when converted to a number.*/
        /*The parseInt() function parses a string argument and returns an integer */
        alert("Please enter Valid Numbers for min and max Values!");
       
    }
    else{

         /**The Math.random() that generate a float number between 0 and 1*/
        /**math.floor() it  rounds down and returns the largest integer less than or equal to a given number. */
        var randomNumber = Math.floor(Math.random()*(maxVal-minVal+1))+ minVal;
        document.getElementById("generated_number").textContent=randomNumber;
    }
}


