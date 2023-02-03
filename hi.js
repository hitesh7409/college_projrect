// Select the navigation menu
const nav = document.querySelector("nav");

// Add a toggle button to the navigation menu
nav.innerHTML = `
  ${nav.innerHTML}
  <button id="toggle-nav">&#9776;</button>
`;

// Select the toggle button
const toggleBtn = document.querySelector("#toggle-nav");

// Add a click event listener to the toggle button
toggleBtn.addEventListener("click", function() {
  // Toggle the "open" class on the navigation menu
  nav.classList.toggle("open");
});
