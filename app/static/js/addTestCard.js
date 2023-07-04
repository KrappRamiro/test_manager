// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
	// Initialize form count and get the "Add Form" button and form fields container
	let formCount = 0;
	let addFormButton = document.getElementById("add-form-btn");
	let formFieldsContainer = document.getElementById("form-fields");
	let noFormsMessage = document.getElementById("no-forms-message");

	// Event listener for adding a new form field
	addFormButton.addEventListener("click", function () {
		console.log("Add Form button clicked");

		// Create a new form field div
		const testCard = new Card(formCount);
		// Append the new form field to the container
		formFieldsContainer.appendChild(testCard);
		formCount++;

		// Hide the "No Forms" message when a form is added
		noFormsMessage.style.display = "none";
		console.log("Form added");
	});
});
