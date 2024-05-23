let weight = 88;
let height = 1.83;
let BMI = weight/(height*height);

console.log("Your weight is " + weight + " Kg");
console.log("Your height is " + height + " m");
console.log("Therefore your BMI is " + BMI);

if (BMI < 18.5){
    console.log("Eat some food bitch");
}

else if(BMI >= 18.5 && BMI < 25){
    console.log("Ur normal, just like every other loser. Lift some weights bro");
}

else if(BMI >= 25 && BMI < 30){
    console.log("Ur a dope ass Gym Rat");
}

else {
    console.log("Fatso.. Go to the gym you pig");
}

// Function to calculate BMI
function calculateBMI(weight, height) {
    // Convert height to meters
    height = height / 100; 
    
    // Calculate BMI
    var bmi = weight / (height * height);
    
    // Return BMI rounded to two decimal places
    return bmi.toFixed(2);
}

// Function to interpret BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Eat some food bitch";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Ur normal, just like every other loser. Lift some weights bro";
    } else if (bmi >= 25 && bmi < 30) {
        return "Ur a dope ass Gym Rat";
    } else {
        return "Fatso.. Go to the gym you pig";
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Calculate BMI
    var bmi = calculateBMI(weight, height);

    // Get BMI category
    var category = getBMICategory(bmi);

    // Display result
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi + "<br>Your BMI Category is: " + category;
}

// Add event listener to form submission
document.getElementById('bmiForm').addEventListener('submit', handleSubmit);

function createPattern(rows) {
    // Outer loop for rows
    for (var i = 1; i <= rows; i++) {
        var pattern = '';

        // Inner loop for each character in a row
        for (var j = 1; j <= i; j++) {
            pattern += '* ';
        }

        // Display the pattern for each row
        console.log(pattern);
    }
}

// Call the function with the number of rows you want in the pattern
createPattern(5);

function myFunction(){
    alert("You're single, aren't you? (o)__(o)");
}


