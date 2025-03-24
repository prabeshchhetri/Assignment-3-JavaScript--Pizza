// Display student info dynamically
document.getElementById("student-info").innerText = "Student: Prabesh Chhetri (ID: 200603366)";

// Pizza class to store pizza details
class Pizza {
  constructor(size, crust, ingredients) {
    this.size = size;
    this.crust = crust;
    this.ingredients = ingredients;
  }

  // Method to get a description of the pizza
  getDescription() {
    return `
      You have ordered a ${this.size} pizza with a ${this.crust} crust. 
      Toppings: ${this.ingredients.join(", ")}.
    `;
  }
}

// Event listener for the form submission
document.getElementById("pizza-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Capture the values from the form
  const size = document.getElementById("size").value;
  const crust = document.getElementById("crust").value;
  const ingredients = Array.from(document.getElementById("ingredients").selectedOptions)
    .map(option => option.value);

  // Create a new Pizza object
  const pizza = new Pizza(size, crust, ingredients);

  // Display the pizza description to the user
  document.getElementById("pizza-description").innerHTML = pizza.getDescription();
});
