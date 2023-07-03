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
		cardHeader.className +=
			"card-header d-flex justify-content-center align-items-center";

		const cardTitle = document.createElement("h2");
		cardTitle.textContent = `Test N ${this.cardCount + 1}`;

		const statusIndicator = document.createElement("div");
		statusIndicator.id += `card-${this.cardCount + 1}-status-indicator`;

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
		cardBody.appendChild(nameInput);
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
			nameLabel.textContent = "Name";
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
}
