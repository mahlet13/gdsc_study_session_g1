let mass = parseFloat(prompt("Enter the mass (in kilograms):"));
let height = parseFloat(prompt("Enter the height (in meters):"));
let bmi = mass / (height ** 2);
alert("BMI: " + bmi.toFixed(2));