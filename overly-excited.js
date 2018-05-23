// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// Now you should define another variable that will hold an array of different words than your existing sentence.
let betterSentence = ["The", "shark", "loves", "swimming", "around", "the", "ocean", "and", "being", "nice", "to", "people", "."]

    //Added a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.
function addExcitement (theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = [];
    for (let i = 0; i < theWordArray.length; i++) {
       buildMeUp.push(theWordArray[i]);
        // If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output. 
       if((i+1) % 3 === 0) {
           //added this for loop to go through the words and divide by three to add the extra exclamation points
        for(let j = 0; j < (i+1) / 3; j++)
            buildMeUp.push(punctuation);
            //changed "!" to character variable so that the user could plug in whatever they want
        } 
        console.log(buildMeUp.join(" "));
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "*");

// Invoke your function for a second time, passing in the new sentence variable and a different special character.
addExcitement(betterSentence, "?");