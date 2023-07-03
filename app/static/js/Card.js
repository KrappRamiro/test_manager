/**
 * Class representing a card.
 * @class
 */
class Card {
	/**
	 * Create a card instance.
	 * @constructor
	 * @param {number} cardCount - The card count.
	 */
	constructor(cardCount) {
		this.cardCount = cardCount;
		const card = document.createElement("div");
		card.className += "card";
		card.appendChild(this.createCardHeader());
		card.appendChild(this.createCardBody());
		return card;
	}

	/**
	 * Create the card header.
	 * @returns {HTMLElement} The card header element.
	 */
	createCardHeader() {
		const cardHeader = document.createElement("div");
		cardHeader.className += "card-header d-flex align-items-center";

		const cardTitle = document.createElement("h2");
		cardTitle.textContent = `Test N ${this.cardCount + 1}`;
		cardTitle.classList.add("me-auto");

		const statusIndicator = document.createElement("div");
		statusIndicator.id += `card-${this.cardCount + 1}-status-indicator`;
		statusIndicator.classList.add("ms-auto");

		// ------------- Card Header Construction --------------- //
		cardHeader.appendChild(cardTitle);
		cardHeader.appendChild(statusIndicator);
		return cardHeader;
	}

	/**
	 * Create the card body.
	 * @returns {HTMLElement} The card body element.
	 */
	createCardBody() {
		const cardBody = document.createElement("div");
		cardBody.className += "card-body";

		const nameInput = this.createNameInput();
		const descriptionInput = this.createDescriptionInput();
		const fileInput = this.createFileInput();

		cardBody.appendChild(nameInput);
		cardBody.appendChild(descriptionInput);
		cardBody.appendChild(fileInput);
		return cardBody;
	}

	/**
	 * Create the name input field.
	 * @returns {HTMLElement} The name input field wrapper.
	 */
	createNameInput() {
		/**
		 * Create the name label.
		 * @param {number} cardCount - The card count.
		 * @returns {HTMLElement} The name label element.
		 */
		function createNameLabel(cardCount) {
			const nameLabel = document.createElement("label");
			nameLabel.setAttribute("for", `name${cardCount + 1}`);
			nameLabel.textContent = "¿Cómo se llama este test?";
			return nameLabel;
		}

		const wrapper = document.createElement("div");
		wrapper.className += "form-floating";

		const nameInput = document.createElement("input");
		nameInput.setAttribute("type", "text");
		nameInput.setAttribute("name", `name${this.cardCount + 1}`);
		nameInput.setAttribute("id", `name${this.cardCount + 1}`);
		nameInput.setAttribute("required", "");
		nameInput.setAttribute("placeholder", `name`);
		nameInput.className = "form-control";

		const label = createNameLabel(this.cardCount);

		wrapper.appendChild(nameInput);
		wrapper.appendChild(label);
		return wrapper;
	}

	/**
	 * Create the description input field.
	 * @returns {HTMLElement} The description input field wrapper.
	 */
	createDescriptionInput() {
		/**
		 * Create the description label.
		 * @param {number} cardCount - The card count.
		 * @returns {HTMLElement} The description label element.
		 */
		function createDescriptionLabel(cardCount) {
			const descriptionLabel = document.createElement("label");
			descriptionLabel.setAttribute("for", `description${cardCount + 1}`);
			descriptionLabel.textContent = "¿Cuál es el propósito de este test?";
			return descriptionLabel;
		}

		const wrapper = document.createElement("div");
		wrapper.classList.add("form-floating");

		const descriptionInput = document.createElement("textarea");
		descriptionInput.setAttribute("type", "text");
		descriptionInput.setAttribute("description", `description${this.cardCount + 1}`);
		descriptionInput.setAttribute("id", `description${this.cardCount + 1}`);
		descriptionInput.setAttribute("required", "");
		descriptionInput.setAttribute("placeholder", `description`);
		descriptionInput.setAttribute("style", `height:150px;`);
		descriptionInput.classList.add("form-control");

		const label = createDescriptionLabel(this.cardCount);

		wrapper.appendChild(descriptionInput);
		wrapper.appendChild(label);
		return wrapper;
	}

	/**
	 * Create the file input field.
	 * @returns {HTMLElement} The file input field wrapper.
	 */
	createFileInput() {
		const wrapper = document.createElement("div");
		wrapper.classList.add("input-group");

		const fileInput = document.createElement("input");
		fileInput.setAttribute("type", "file");
		fileInput.setAttribute("name", `file${this.cardCount + 1}`);
		fileInput.setAttribute("id", `file${this.cardCount + 1}`);
		fileInput.setAttribute("required", "");
		fileInput.className = "form-control";

		const fileLabel = document.createElement("label");
		fileLabel.setAttribute("for", `file${this.cardCount + 1}`);
		fileLabel.className = "input-group-text";
		fileLabel.textContent = "Archivo .step";

		wrapper.appendChild(fileInput);
		wrapper.appendChild(fileLabel);

		return wrapper;
	}
}
