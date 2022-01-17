class NewsCard {
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

const news = [
	{
		title: 'Наш курительный клуб ежедневно работает с 16:00',
		date: '8 апреля',
		image: 'src/images/news/1.png'
	},
	{
		title: 'Дорогие гости, по выходным наш курительный клуб работает до 4 утра',
		date: '24 марта',
		image: 'src/images/news/2.png'
	},
	{
		title: 'Готовимся к вечеру с сигарами Davidoff',
		date: '12 марта',
		image: 'src/images/news/3.png'
	},
	{
		title: 'Наш курительный клуб ежедневно работает с 16:00',
		date: '8 апреля',
		image: 'src/images/news/1.png'
	},
	{
		title: 'Дорогие гости, по выходным наш курительный клуб работает до 4 утра',
		date: '24 марта',
		image: 'src/images/news/2.png'
	},
	{
		title: 'Готовимся к вечеру с сигарами Davidoff',
		date: '12 марта',
		image: 'src/images/news/3.png'
	},
]

// --- VARIABLES ---

// scroll buttons
const interiorButtonRight = document.querySelector('.interior__button_right');
const interiorButtonLeft = document.querySelector('.interior__button_left');
const newsButtonRight = document.querySelector('.news__button_right');
const newsButtonLeft = document.querySelector('.news__button_left');
const menuButtonLeft = document.querySelector('.menu__scroll-button_left');
const menuButtonRight = document.querySelector('.menu__scroll-button_right');

// scrollable feeds
const interior = document.querySelector('.interior__gallery');
const newsFeed = document.querySelector('.news__feed');

// menu tabs
const menuButtons = document.querySelectorAll('.menu__button');

// navs
const burgerMenu = document.querySelector('.burger-menu');
const headerDesktopNav = document.querySelector('.header__nav');

// --- FUNCTIONS ---

// scroll functions
let isDown = false,
	startX,
	scrollLeft;

function handleMouseDown(e, element) {
	isDown = true;
	element.style.scrollBehavior = 'auto';
	startX = e.pageX - element.offsetLeft;
	scrollLeft = element.scrollLeft;
}

function handleMouseUp(element) {
	isDown = false;
	element.style.scrollBehavior = 'smooth';
}

function handleMouseMove(e, element) {
	if (!isDown) return;
	const x = e.pageX - element.offsetLeft;
	const walk = x - startX;
	element.scrollLeft = scrollLeft - walk;
}

function handleRightButtonClick(element) {
	element.scrollLeft += 600;
}

function handleLeftButtonClick(element) {
	element.scrollLeft -= 600;
}

// menu functions
function showTab(e) {
	const cards = document.querySelectorAll('.menu__cards');
	cards.forEach(card => card.classList.add('menu__cards_hidden'));

	const tabs = document.querySelectorAll('.menu__button');
	tabs.forEach(tab => tab.classList.remove('menu__button_active'));

	const selectedTab = [...cards].find(card =>
		card.classList.contains(e.target.id)
	);

	selectedTab.classList.remove('menu__cards_hidden');
	e.target.classList.add('menu__button_active');
}

// mobile func
function checkIfMobile() {
	if (window.innerWidth >= 1130) {
		burgerMenu.style.display = 'none';
		headerDesktopNav.style.display = 'block';
		document.querySelector('.header__socials').style.display = 'flex';
	} else if (window.innerWidth < 1130 && window.innerWidth > 768) {
		burgerMenu.style.display = 'block';
		headerDesktopNav.style.display = 'none';
		document.querySelector('.header__socials_desktop').style.display = 'flex';
		burgerMenu.querySelector('.header__socials').style.display = 'none';
	} else {
		burgerMenu.querySelector('.header__socials').style.display = 'flex';
		document.querySelector('.header__socials_desktop').style.display = 'none';
		document
			.querySelectorAll('.menu__cards')
			.forEach(menu => menu.classList.add('gallery'));
	}
}

// --- LISTENERS ---

//interior section listeners
interior.addEventListener('mousedown', e => handleMouseDown(e, interior));
interior.addEventListener('mousemove', e => handleMouseMove(e, interior));
interior.addEventListener('mouseleave', () => (isDown = false));
interior.addEventListener('mouseup', () => handleMouseUp(interior));

interiorButtonRight.addEventListener('click', () =>
	handleRightButtonClick(interior)
);
interiorButtonLeft.addEventListener('click', () =>
	handleLeftButtonClick(interior)
);

// news section listeners
news.forEach(item => {
	const element = new NewsCard(item, '.news-card-template');
	const card = element.generateCard();
	document.querySelector('.news__feed').appendChild(card);
});

newsFeed.addEventListener('mousedown', e => handleMouseDown(e, newsFeed));
newsFeed.addEventListener('mousemove', e => handleMouseMove(e, newsFeed));
newsFeed.addEventListener('mouseleave', () => (isDown = false));
newsFeed.addEventListener('mouseup', () => handleMouseUp(newsFeed));

newsButtonLeft.addEventListener('click', () => handleLeftButtonClick(newsFeed));
newsButtonRight.addEventListener('click', () =>
	handleRightButtonClick(newsFeed)
);

// menu section listeners
menuButtons.forEach(button => button.addEventListener('click', showTab));

menuButtonLeft.addEventListener('click', () => {
	const menues = document.querySelectorAll('.menu__cards');
	const menu = [...menues].find(
		menu => !menu.classList.contains('menu__cards_hidden')
	);
	handleLeftButtonClick(menu);
});
menuButtonRight.addEventListener('click', () => {
	const menues = document.querySelectorAll('.menu__cards');
	const menu = [...menues].find(
		menu => !menu.classList.contains('menu__cards_hidden')
	);
	handleRightButtonClick(menu);
});

///////////

window.addEventListener('resize', checkIfMobile);

checkIfMobile();
