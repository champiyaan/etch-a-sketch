// Selecting container and resize button
const container = document.getElementById("container");
const resizeButton = document.getElementById("resizeButton");

// Function to create the grid of squares
function createGrid(size) {
  // Clearing previous grid
  container.innerHTML = "";
  // Setting CSS variable for grid size
  container.style.setProperty("--grid-size", size);

  // Creating squares and adding hover effect
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });
    container.appendChild(square);
  }
}

// Function to generate random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Event listener for resize button
resizeButton.addEventListener("click", () => {
  // Prompting user for new grid size
  let newSize = prompt("Enter the number of squares per side (max 100):");
  // Ensuring the input is within the limits
  newSize = Math.min(Math.max(parseInt(newSize), 1), 100);
  // Creating grid with new size
  createGrid(newSize);
});

// Initializing grid with default size
createGrid(16);
