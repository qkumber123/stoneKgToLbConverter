/*
Grab string from text area
Create array of words from string
Iterate over array and check to see if isInteger
Do math on current i and next 2 i, then bump index by 2
Stringify array (add a return character after number if the next value is not vs or vs.) 

example: 

Artur Yarde 12 6 8 vs Anthony Beterbiev 12 6 4
*/



function convertTextarea() {
    console.log("Click!")

    let textarea = document.getElementById("mainInput").value;
    console.log(textarea);
    let textArray = textarea.split(/\s/);

    let nono = ["stone", "stones", "pound", "pounds", "ounce", "ounces", "kilogram", "kilograms", "kg", "kg.", "oz", "oz.", "lb", "lb.", "st", "st.", " ", "", "\n"];

    for (let i = 0; i < textArray.length; i++) {
        if (nono.includes(textArray[i].toLowerCase())) {
            textArray.splice(i, 1);
            i--;
        }
    }

    console.log(textArray)

    let convertedText = stoneToPounds(textArray);
    document.getElementById("mainOutput").value = stringifyArray(convertedText);

}

function stoneToPounds (textArray) {
    let convertedArray = []

    for (let i = 0; i < textArray.length; i++) {
        if (!isNaN(textArray[i])) {
            if (!isNaN(textArray[i + 1])) {
                let weight = Number(textArray[i]) * 14;
            weight += Number(textArray[i + 1]);
            weight += Number(textArray[i + 2]) / 16;
            i += 2;

            convertedArray.push(weight.toFixed(1));
            } else {
                let kgWeight = Number(textArray[i]) * 2.205;

                convertedArray.push(kgWeight.toFixed(1));
            }
            
        } else {
            convertedArray.push(textArray[i])
        }
    }

    return convertedArray
}

function stringifyArray (textArray) {
    let convertedString = ""
    for (let i = 0; i < textArray.length; i++) {
        if (!isNaN(textArray[i]) && (textArray[i + 1] != "vs" && textArray[i + 1] != "vs.")) {
            convertedString += textArray[i] + "\n";
        } else {
            convertedString += textArray[i] + " ";
        }
        
    }
    console.log("converted")
    return convertedString
}  

document.getElementById("mainButton").addEventListener("click", function() {convertTextarea()});