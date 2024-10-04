export function bmi(): void {
  // Get the height and weight values from input elements
  const heightElement = document.getElementById("height") as HTMLInputElement;
  const weightElement = document.getElementById("weight") as HTMLInputElement;

  // Convert the values to numbers
  const height = parseFloat(heightElement.value);
  const weight = parseFloat(weightElement.value);

  // Check if height is zero to avoid division by zero
  if (height === 0) {
    alert("Height cannot be zero.");
    return;
  }

  // Calculate BMI
  const value = weight / (height * height);

  // Alert BMI value with two decimal places
  alert(value.toFixed(2));
}