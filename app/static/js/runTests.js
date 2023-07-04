document.addEventListener("DOMContentLoaded", function () {
	// Initialize form count and get the "Add Form" button and form fields container
	const runTestsButton = document.getElementById("run-tests-btn");
	// Event listener for adding a new form field
	runTestsButton.addEventListener("click", function () {
		const cardsStatusIndicators = document.querySelectorAll(".card-status-indicator");
		const testCards = document.querySelectorAll(".card");
		console.log(`When running tests, found ${cardsStatusIndicators.length} of them`);

		testCards.forEach(disableInputs);

		cardsStatusIndicators.forEach((statusIndicator) => {
			startTest(statusIndicator);

			const randomTimeout = getRandomTimeout(3000, 7000);
			setTimeout(() => {
				const randomOutcome = getRandomOutcome();
				if (randomOutcome === "pass") {
					passTest(statusIndicator);
				} else {
					failTest(statusIndicator);
				}
			}, randomTimeout);
		});
	});
});

/**
 * Generates a random timeout value between min and max.
 * @param {number} min - The minimum timeout value in milliseconds.
 * @param {number} max - The maximum timeout value in milliseconds.
 * @returns {number} The generated random timeout value.
 */
function getRandomTimeout(min, max) {
	return Math.random() * (max - min) + min;
}

/**
 * Randomly chooses an outcome ("pass" or "fail").
 * @returns {string} The randomly chosen outcome.
 */
function getRandomOutcome() {
	const outcomes = ["pass", "fail"];
	const randomIndex = Math.floor(Math.random() * outcomes.length);
	return outcomes[randomIndex];
}

/**
 *
 * @param {HTMLElement} statusIndicator - The statusIndicator element to modify
 */
function startTest(statusIndicator) {
	statusIndicator.innerText = "Corriendo test...";
}
/**
 *
 * @param {HTMLElement} statusIndicator - The statusIndicator element to modify
 */
function passTest(statusIndicator) {
	statusIndicator.innerHTML = `<i class="fa-solid fa-check" style="color: green;"></i>`;
}
/**
 *
 * @param {HTMLElement} statusIndicator - The statusIndicator element to modify
 */
function failTest(statusIndicator) {
	statusIndicator.innerHTML = `<i class="fa-solid fa-xmark" style="color: red;"></i>`;
}
/**
 *
 * @param {HTMLElement} testCard - The testCard where we will look for the inputs to be disabled
 */
function disableInputs(testCard) {
	// Disable all <input>'s
	console.log(testCard);
	const inputElements = testCard.querySelectorAll("input");
	inputElements.forEach((input) => {
		input.disabled = true;
	});

	// Disable all <textarea>'s
	const textAreaElements = testCard.querySelectorAll("textarea");
	textAreaElements.forEach((textarea) => {
		textarea.disabled = true;
	});
}

/**
 *
 * @param {HTMLElement} testCard - The testCard where we will look for the inputs to be enabled
 */
function enableInputs(testCard) {
	// Enable all <input>'s
	console.log(testCard);
	const inputElements = testCard.querySelectorAll("input");
	inputElements.forEach((input) => {
		input.disabled = false;
	});

	// Enable all <textarea>'s
	const textAreaElements = testCard.querySelectorAll("textarea");
	textAreaElements.forEach((textarea) => {
		textarea.disabled = false;
	});
}
