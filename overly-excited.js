// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let exclamation = "!";
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = [];
    for (let i = 0; i < sentence.length; i++) {
       buildMeUp.push(sentence[i]);
        // If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output. 
       if((i+1) % 3 === 0) {
           //added this for loop to go through the words and divide by three to add the extra exclamation points
        for(let j = 0; j < (i+1) / 3; j++)
            buildMeUp.push("!");
        } 
        console.log(buildMeUp);
    }
  
}




// Invoke the function and pass in the array
addExcitement(sentence);