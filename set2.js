function reverseArray() {
    // Get the input array from the text field
    let input = document.getElementById('arrayInput').value;
    
    // Convert the comma-separated string into an array of numbers
    let array = input.split(',').map(Number);

    // Reverse the array in place
    array.reverse();

    // Display the reversed array
    document.getElementById('output').innerHTML = `Reversed Array: [${array.join(', ')}]`;
}


// remove duplicates
function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // If array is empty, return 0

    let i = 0; // Initialize the first pointer
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; // Increment i when a new unique element is found
            nums[i] = nums[j]; // Update the position of i with the new element
        }
    }

    return i + 1; // Return the new length of the array (i is the last index of unique elements)
}

function removeDuplicatesFromArray() {
    // Get the input value and split it into an array
    const input = document.getElementById("arrayInput2").value;
    const nums = input.split(',').map(Number); // Convert string inputs to numbers
    
    // Find the new length after removing duplicates
    const newLength = removeDuplicates(nums);

    // Directly slice the unique elements without a loop
    const uniqueElements = nums.slice(0, newLength);

    // Display the result on the webpage
    document.getElementById("output2").innerText = 
        "New length: " + newLength + 
        "\nUnique elements: " + uniqueElements.join(", ");
}


// two sum

let user = {
    username: '',
    operator: ''
};

function signup() {
    user.username = document.getElementById('username').value;
    user.operator = document.getElementById('operator').value;

    if (user.username !== '') {
        document.getElementById('signupContainer').style.display = 'none';
        document.getElementById('calcContainer').style.display = 'block';
    } else {
        alert("Please enter a valid username.");
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (user.operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').textContent = `Output: ${result}`;
}

// target
function calculateTwoSum() {
    // Get the input values
    let arrayInput = document.getElementById("arrayInput2").value.split(',').map(Number);
    let target = parseInt(document.getElementById("targetInput").value);
    let output = document.getElementById("output2");

    // Create a map to store the indices of the numbers
    let numMap = new Map();

    // Loop through the array
    for (let i = 0; i < arrayInput.length; i++) {
        let complement = target - arrayInput[i];

        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // Display the result
            output.innerHTML = `Indices: [${numMap.get(complement)}, ${i}]`;
            return;
        }

        // Store the index of the current number in the map
        numMap.set(arrayInput[i], i);
    }

    // If no solution is found, display a message
    output.innerHTML = "No two numbers add up to the target.";
}
