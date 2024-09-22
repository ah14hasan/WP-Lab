// Function to reverse the elements of an array  
function reverseArray(arr) {
    // Create a new array to store the reversed elements  
    let reversedArray = [];

    // Loop through the original array from the end to the beginning  
    for (let i = arr.length - 1; i >= 0; i--) {
        // Add each element to the new array  
        reversedArray.push(arr[i]);
    }

    // Return the new array with reversed elements  
    return reversedArray;
}

// Create an array of numbers  
const originalArray = [1, 2, 3, 4, 5];

// Call the function to reverse the array and store the result  
const reversedArray = reverseArray(originalArray);

// Output the original and reversed arrays  
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);



