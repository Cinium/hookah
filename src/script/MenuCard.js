export default class MenuCard {
	constructor(data, templateSelector) {
		this._data = data;
		this._name = data.name;
		this._templateSelector = templateSelector;
	}

	generateCard() {
		this._element = this._getTemplate();
		this._titleElement = this._element.querySelector('.menu-card__name');
		this._titleElement.textContent = this._name;

		return this._element;
	}

	_getTemplate() {
		const cardElement = document
			.querySelector(this._templateSelector)
			.content.querySelector('.menu-card')
			.cloneNode(true);

		return cardElement;
	}
}
