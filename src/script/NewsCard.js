export default class NewsCard {
	constructor(data, templateSelector) {
		this._data = data;
		this._title = data.title;
		this._date = data.date;
		this._image = data.image;
		this._templateSelector = templateSelector;
	}

	generateCard() {
		this._element = this._getTemplate();

		this._titleElement = this._element.querySelector('.news-card__title');
		this._dateElement = this._element.querySelector('.news-card__date');
		this._imageElement = this._element.querySelector('.news-card__image');

		this._titleElement.textContent = this._title;
		this._dateElement.textContent = this._date;
		this._imageElement.src = this._image;

		return this._element;
	}

	_getTemplate() {
		const cardElement = document
			.querySelector(this._templateSelector)
			.content.querySelector('.news-card')
			.cloneNode(true);

		return cardElement;
	}
}
