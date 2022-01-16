import MenuCard from './MenuCard.js';

class CigarsMenuCard extends MenuCard {
	generateCard() {
		this._element = this._getTemplate();

		this._titleElement = this._element.querySelector('.menu-card__name');
		this._titleElement.textContent = this._data.name;

		this._data.list.forEach(item => {
			const p = document.createElement('p');
			const pText = document.createTextNode(item);
			p.appendChild(pText);
			p.classList.add('menu-card__cigars-list');

			this._element.appendChild(p);
		})

		return this._element;
	}
}

export default CigarsMenuCard;