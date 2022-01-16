import MenuCard from './MenuCard.js';

class ClassicMenuCard extends MenuCard {
	generateCard() {
		this._element = this._getTemplate();

		console.log(this._data);
		this._titleElement = this._element.querySelector('.menu-card__name');
		this._noteElement = this._element.querySelector('.menu-card__note');
		this._bodyElement = this._element.querySelector('.menu-card__body');

		this._titleElement.textContent = this._data.name;
		this._noteElement.textContent = this._data.note;

		this._data.sections.forEach(section => {
			const sec = document.createElement('div');
			sec.classList.add('menu-card__section');

			if (section.name) {
				const secName = document.createElement('h4');
				const secNameText = document.createTextNode(section.name);
				secName.classList.add('menu-card__section-name');
				secName.appendChild(secNameText);
				sec.appendChild(secName);
			}

			section.params.forEach(param => {
				const line = document.createElement('p');

				const price = document.createElement('span');
				const priceText = document.createTextNode(param.value + ' ₽');
				price.appendChild(priceText);

				const span = document.createElement('span');
				const spanText = document.createTextNode(param.name + ': ');
				span.appendChild(spanText);

				line.classList.add('menu-card__property');
				price.classList.add('menu-card__price');
				span.classList.add('menu-card__property_hilighted');

				if (param.add) {
					console.log(param)
				}

				line.prepend(price);
				line.prepend(span);
				sec.appendChild(line);
			});

			this._element.querySelector('.menu-card__section').appendChild(sec);

			// const p = document.createElement('p');
			// const pText = document.createTextNode(item);
			// p.appendChild(pText);
			// p.classList.add('menu-card__cigars-list');

			// this._element.appendChild(p);
		});

		return this._element;
	}
}

export default ClassicMenuCard;
