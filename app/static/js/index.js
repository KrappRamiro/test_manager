// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize form count and get the "Add Form" button and form fields container
  let formCount = 0;
  let addFormButton = document.getElementById("add-form-btn");
  let formFieldsContainer = document.getElementById("form-fields");
  let noFormsMessage = document.getElementById("no-forms-message");

  console.log("DOM content loaded");

  // Event listener for adding a new form field
  addFormButton.addEventListener("click", function () {
    console.log("Add Form button clicked");

    // Create a new form field div
    formField = createForm(formCount);
    // Append the new form field to the container
    formFieldsContainer.appendChild(formField);
    formCount++;

    // Hide the "No Forms" message when a form is added
    noFormsMessage.style.display = "none";
    console.log("Form added");
  });

  // Get the dynamic form element
  let dynamicForm = document.getElementById("dynamic-form");
  dynamicForm.addEventListener("submit", handleSubmit);
});

/**
 * Creates a dynamic form element.
 * @param {number} formCount - The current count of forms.
 * @returns {HTMLElement} The created form element.
 */
function createForm(formCount) {
  console.log("Creating form...");

  // Create the form container element
  const formField = document.createElement("div");
  formField.className = "form-field";

  // Add a horizontal rule to visually separate forms
  const hr = document.createElement("hr");
  formField.appendChild(hr);

  // Add the form heading
  const heading = document.createElement("h3");
  heading.textContent = `Form ${formCount + 1}`;
  formField.appendChild(heading);

  // Create the Name label
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", `name${formCount + 1}`);
  nameLabel.textContent = "Name";
  formField.appendChild(nameLabel);

  // Create the Name input field
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", `name${formCount + 1}`);
  nameInput.setAttribute("id", `name${formCount + 1}`);
  nameInput.setAttribute("required", "");
  formField.appendChild(nameInput);

  // Create the Description label
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", `description${formCount + 1}`);
  descriptionLabel.textContent = "Description";
  formField.appendChild(descriptionLabel);

  // Create the Description input field
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("name", `description${formCount + 1}`);
  descriptionInput.setAttribute("id", `description${formCount + 1}`);
  descriptionInput.setAttribute("required", "");
  formField.appendChild(descriptionInput);

  // Create the File label
  const fileLabel = document.createElement("label");
  fileLabel.setAttribute("for", `file${formCount + 1}`);
  fileLabel.textContent = "File";
  formField.appendChild(fileLabel);

  // Create the File input field
  const fileInput = document.createElement("input");
  fileInput.setAttribute("type", "file");
  fileInput.setAttribute("name", `file${formCount + 1}`);
  fileInput.setAttribute("id", `file${formCount + 1}`);
  fileInput.setAttribute("required", "");
  formField.appendChild(fileInput);

  console.log("Form created");
  return formField;
}

/**
 * Handles the form submission.
 * @param {Event} event - The submit event object.
 */
function handleSubmit(event) {
  event.preventDefault();

  console.log("Form submitted");

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
			Name: ${nameInput.value}
			Description: ${descriptionInput.value}
			File: ${fileInput.files[0]}
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
}
