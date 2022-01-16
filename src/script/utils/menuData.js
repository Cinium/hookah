const brandedHookahs = [
	{
		name: '«Баунти»',
		price: '3000',
		props: [
			{ name: 'Добавки', value: 'шоколад, молоко, кокосовый сироп' },
			{ name: 'Чаша', value: 'ананас' },
			{ name: 'Крепость', value: 'средняя' },
		],
	},
	{
		name: '«Мохито»',
		price: '3000',
		props: [
			{ name: 'Добавки', value: 'мята, лайм, белый ром и много-много льда' },
			{ name: 'Чаша на выбор', value: 'яблоко, апельсин, грейпфрут' },
			{ name: 'Крепость', value: 'крепкий' },
		],
	},
	{
		name: '«Пина колада»',
		price: '3000',
		props: [
			{
				name: 'Добавки',
				value: 'молоко, ананасовый сок, кокосовый сироп, лед',
			},
			{ name: 'Чаша', value: 'ананас' },
			{ name: 'Крепость', value: 'средняя' },
		],
	},
];

const cigars = [
	{
		name: 'Куба',
		list: [
			'Cohiba Panatelas',
			'Cohiba Siglo II',
			'Cohiba Siglo IV',
			'Cohiba Siglo V',
			'Cohiba Robustos',
			'H. Upmann Magnum',
			'Hoyo De Mont. Epicure №',
			'Montecristo №4',
			'Partagas Serie №4',
			'Romeo & Julieta Churchliss.',
			'Romeo & Julieta №2',
		],
	},
	{
		name: 'Доминикана',
		list: [
			'CT Reserva Decadencia Churchill',
			'Arturo Fuente Anejo №77 Shark',
			'Davidoff Escurio Gran Perfecto',
			'Davidoff WSC Churchill',
			'Zino Platinum XS',
			'Zino Platinum Barrel',
			'Macanudo Cafe Ascots',
			'Macanudo Maduro Ascots',
		],
	},
	{
		name: 'Никарагуа',
		list: ['Nub Sun Grown 460 Tubos'],
	},
];

const classicHookahs = [
	{
		name: 'Кальяны на глиняной чаше',
		sections: [
			{
				name: null,
				params: [
					{
						name: 'Standart',
						value: '1200',
						add: { name: 'Крепость', value: 'легкий' },
					},
					{
						name: 'Premium',
						value: '1500',
						add: { name: 'Крепость', value: 'крепкий' },
					},
				],
			},
			{
				name: 'Замена чаши',
				params: [
					{ name: 'Standart', value: '900' },
					{ name: 'Premium', value: '1200' },
				],
			},
		],
		note: null,
	},
	{
		name: 'Кальяны на фруктовой чаше',
		sections: [
			{
				name: 'Апельсин',
				params: [
					{ name: 'Standart', value: '1600' },
					{ name: 'Premium', value: '1900' },
				],
			},
			{
				name: 'Яблоко',
				params: [
					{ name: 'Standart', value: '1600' },
					{ name: 'Premium', value: '1900' },
				],
			},
			{
				name: 'Грейпфрут',
				params: [
					{ name: 'Standart', value: '1900' },
					{ name: 'Premium', value: '2300' },
				],
			},
			{
				name: 'Ананас',
				params: [
					{ name: 'Standart', value: '2200' },
					{ name: 'Premium', value: '2700' },
				],
			},
		],
		note: null,
	},
	{
		name: 'Добавки в колбу',
		sections: [
			{
				name: null,
				params: [
					{ name: 'Вино', value: '600' },
					{ name: 'Мята', value: '100' },
					{ name: 'Молоко', value: '200' },
					{ name: 'Сок в ассортименте', value: '300' },
				],
			},
		],
		note: 'Вы можете добавить в кальян любой алкоголь из барной карты ресторана Panorama A.S.P.',
	},
];

export { brandedHookahs, cigars, classicHookahs };
