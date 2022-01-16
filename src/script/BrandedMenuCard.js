import MenuCard from './MenuCard.js';

class BrandedMenuCard extends MenuCard {
	generateCard() {
		this._element = this._getTemplate();

		this._titleElement = this._element.querySelector('.menu-card__name');
		this._priceElement = this._element.querySelector('.menu-card__price');

		this._titleElement.textContent = this._data.name;
		this._priceElement.textContent = this._data.price + ' ₽';

		this._data.props.forEach(prop => {
			const p = document.createElement('p');
			const pText = document.createTextNode(prop.value);
			p.appendChild(pText);

			const span = document.createElement('span');
			const spanText = document.createTextNode(prop.name + ': ');
			span.appendChild(spanText);

			p.classList.add('menu-card__property');
			span.classList.add('menu-card__property_hilighted');

			p.prepend(span);
			this._element.appendChild(p);
		});

		return this._element;
	}
}

export default BrandedMenuCard;
