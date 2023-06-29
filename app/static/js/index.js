// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize form count and get the "Add Form" button and form fields container
  let formCount = 0;
  let addFormButton = document.getElementById("add-form-btn");
  let formFieldsContainer = document.getElementById("form-fields");
  let noFormsMessage = document.getElementById("no-forms-message");

  // Event listener for adding a new form field
  addFormButton.addEventListener("click", function () {
    // Create a new form field div
    let formField = document.createElement("div");
    formField.classList.add("form-field");
    formField.innerHTML = `
      <hr>
      <h3>Form ${formCount + 1}</h3>
      <label for="name${formCount + 1}">Name</label>
      <input type="text" name="name${formCount + 1}" id="name${
      formCount + 1
    }" required>
      <label for="description${formCount + 1}">Description</label>
      <input type="text" name="description${formCount + 1}" id="description${
      formCount + 1
    }" required>
      <label for="file${formCount + 1}">File</label>
      <input type="file" name="file${formCount + 1}" id="file${
      formCount + 1
    }" required>
    `;

    // Append the new form field to the container
    formFieldsContainer.appendChild(formField);
    formCount++;

    // Hide the "No Forms" message when a form is added
    noFormsMessage.style.display = "none";
  });

  // Get the dynamic form element
  // ------------------ SUBMITTING THE FORM ------------------
  let dynamicForm = document.getElementById("dynamic-form");
  dynamicForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Create a new FormData object to store form data
    var formData = new FormData();

    // Get all form field elements
    let formFields = document.getElementsByClassName("form-field");
    console.log(`When submitting the form, found ${formFields.length} forms`);
    Array.from(formFields).forEach(function (field, index) {
      // Get the input elements within each form field
      let nameInput = field.querySelector('input[name^="name"]');
      let descriptionInput = field.querySelector('input[name^="description"]');
      let fileInput = field.querySelector('input[name^="file"]');
      console.log(`Adding the form ${index} with data:
			name: ${nameInput.value}
			name: ${descriptionInput.value}
			name: ${fileInput.files[0]}
		`);
      // Append the input values to the formData object
      formData.append(`name${index + 1}`, nameInput.value);
      formData.append(`description${index + 1}`, descriptionInput.value);
      formData.append(`file${index + 1}`, fileInput.files[0]);
    });

    // Send the form data (including files) to the server using the Fetch API
    fetch("/process-form", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response;
      })
      .then(function (data) {
        console.log(`Response:\n${data}`);
        // Handle the response data as needed
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  });
});
