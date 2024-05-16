// Global variable to store the current drawing color
let color = "black";

// Function to populate the container with a grid of squares
function populateContainer(size) {
  // Select the container element
  let container = document.querySelector(".container");

  // Remove any existing squares
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  // Set the grid template columns and rows based on the provided size
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Calculate the total number of squares needed
  let amount = size * size;

  // Create and add the squares to the container
  for (let i = 0; i < amount; i++) {
    // Create a new div element for each square
    let square = document.createElement("div");
    square.classList.add("cell");

    // Set the initial background color of the container (not the squares)
    container.style.backgroundColor = "#e0dd0e";

    // Add an event listener to change the square color on mouseover
    square.addEventListener("mouseover", colorSquare);

    // Add the square to the end of the container
    container.insertAdjacentElement("beforeend", square);
  }
}

// Initialize the grid with 16x16 squares
populateContainer(16);

// Function to change the grid size based on user input
function changeSize(input) {
  // Check if the input is within the valid range (2-100)
  input >= 2 && input <= 100
    ? populateContainer(input) // Update the grid size
    : alert("Input error ! choose between  2 to 100 squares"); // Show error message
}

// Function to change the square color on mouseover
function colorSquare() {
  // Check the current color mode
  color === "random"
    ? (this.style.backgroundColor = `hsl(${Math.random() * 360},100% ,50%)`) // Random color
    : (this.style.backgroundColor = color); // Specific color
}

// Function to change the drawing color
function changeColor(choice) {
  // Update the global color variable
  color = choice;
}

// Function to reset the container (set all squares to default color)
function resetContainer() {
  // Select the container element
  let container = document.querySelector(".container");
  // Select all squares
  let squares = container.querySelectorAll("div");

  // Reset the background color of all squares
  squares.forEach((div) => (div.style.backgroundColor = "#e0dd0e"));
}
