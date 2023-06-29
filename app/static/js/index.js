document.addEventListener("DOMContentLoaded", function () {
  // Initialize form count and get the "Add Form" button and form fields container
  var formCount = 1;
  var addFormButton = document.getElementById("add-form-btn");
  var formFieldsContainer = document.getElementById("form-fields");

  // Event listener for adding a new form field
  addFormButton.addEventListener("click", function () {
    // Create a new form field div
    var formField = document.createElement("div");
    formField.classList.add("form-field");
    formField.innerHTML = `
      <hr>
      <h3>Form ${formCount + 1}</h3>
      <label for="name${formCount + 1}">Name</label>
      <input type="text" name="name${formCount + 1}"
             id="name${formCount + 1}" required>
    `;

    // Append the new form field to the container
    formFieldsContainer.appendChild(formField);
    formCount++;
  });

  // Get the dynamic form element
  var dynamicForm = document.getElementById("dynamic-form");
  dynamicForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Create an object to store form data
    var formData = {};

    // Get all form field elements
    var formFields = document.getElementsByClassName("form-field");
    Array.from(formFields).forEach(function (field, index) {
      // Get the input element within each form field
      var input = field.querySelector("input");
      // Assign the input value to the corresponding property in the formData object
      formData[`name${index + 1}`] = input.value;
    });

    // Send the form data as JSON to the server using the Fetch API
    fetch("/process-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        // Handle the response data as needed
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  });
});
