document.addEventListener("DOMContentLoaded", function () {
	// Get the dynamic form element
	let dynamicForm = document.getElementById("dynamic-form");
	dynamicForm.addEventListener("submit", handleSubmit);
});

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
