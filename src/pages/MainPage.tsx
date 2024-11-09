import { Header } from '../blocks/Header/Header';
import cls from './MainPage.module.scss';
import img1 from '../assets/images/dream-img.png';
import img2 from '../assets/images/everything-will-come-true.png';
import img3 from '../assets/images/lets-go.png';
import img4 from '../assets/images/imaging.png';
import img5 from '../assets/images/go.png';
import img6 from '../assets/images/will-be.png';
import img7 from '../assets/images/end.png';
import step1 from '../assets/images/step1.png';
import step2 from '../assets/images/step2.png';
import step3 from '../assets/images/step3.png';
import addPhoto from '../assets/images/add_photo.png';
import textarPink from '../assets/images/lines.png';
import textarGreen from '../assets/images/lines_green.png';
import textarBlue from '../assets/images/lines_blue.png';
import arrPink from '../assets/images/arrow_pink.png';
import arrGreen from '../assets/images/arrow_green.png';
import arrBlue from '../assets/images/arrow_blue.png';
import { useEffect, useState } from 'react';
import { Footer } from '../blocks/Footer/Footer';
import { Card } from './Card';

const cardsArray = [
	{
		id: 1,
		name: 'ЯЧЕЙКА 2 – БОГАТСТВО',
		desc: `Представьте ваши самые роскошные рационы. Возможно, это праздничный ужин, за которым собрались ваши друзья и\u00A0близкие, или любимые блюда/продукты, которые вы регулярно едите. Представьте тот самый рацион, который делает вас краше и\u00A0здоровее.\n\nПодпишите снизу цель и\u00A0фразу, описывающую это состояние: например, «Мои шикарные завтраки для сияющей кожи».`,
		example: `Мои шикарные завтраки для сияющей кожи`,
		color: '#f89bb0',
		textarea_image: textarPink,
		arrow_image: arrPink,
	},
	{
		id: 2,
		name: 'ЯЧЕЙКА 3 – СЛАВА, \nЛИДЕРСТВО',
		desc: `Представьте момент, в\u00A0котором вы купаетесь в\u00A0лучах славы. Для каждого этот пункт имеет свое значение. Возможно, вы хотите бы настолько известны, что с\u00A0вами фотографируются на улицах. а\u00A0может, к вам подходят в\u00A0спортзале и\u00A0спрашивают, чем вы питаетесь для такой идеальной фигуры.\n\nПодпишите снизу цель и\u00A0фразу, описывающую это состояние: например, «Я лучшая версия себя».`,
		example: `Я лучшая версия себя`,
		color: '#a0d8cd',
		textarea_image: textarGreen,
		arrow_image: arrGreen,
	},
	{
		id: 3,
		name: 'ЯЧЕЙКА 4 – СЕМЬЯ',
		desc: `Представьте момент, в\u00A0котором вы делитесь здоровьем со\u00A0своими самыми близкими и\u00A0любимыми. Семейный ужин или вы вместе с\u00A0детьми печете пирог. а\u00A0может, в\u00A0голове картинка, как сытый и\u00A0довольный муж хвалит ваше здоровое меню. Наконец-то! Получилось!\n\nПодпишите снизу цель и\u00A0фразу, описывающую это состояние: например, «Мои близкие здоровы и\u00A0полны энергии».`,
		example: `Мои близкие здоровы и\u00A0полны энергии`,
		color: '#4971e3',
		textarea_image: textarBlue,
		arrow_image: arrBlue,
	},
	{
		id: 4,
		name: 'ЯЧЕЙКА 5 – САМОВЫРАЖЕНИЕ',
		desc: `Представьте момент, в\u00A0котором вы заняты любимым творческим делом, вашим хобби, и\u00A0момент, в\u00A0котором самовыражение зависит от вашего здоровья и\u00A0питания. Например, вы всегда мечтали заняться верховой ездой, но\u00A0лишние килограммы не позволяли вам этого. Поймайте момент, в\u00A0котором вы добились идеальной фигуры и\u00A0надеваете ту самую заветную форму наездника. \n\nПодпишите снизу цель и\u00A0фразу, описывающую это состояние: например, «Я исполняю свою мечту о\u00A0верховой езде с\u00A0легкостью».`,
		example: `Я исполняю свою мечту о\u00A0верховой езде с\u00A0легкостью`,
		color: '#f89bb0',
		textarea_image: textarPink,
		arrow_image: arrPink,
	},
	{
		id: 5,
		name: 'ЯЧЕЙКА 6 – ЗНАНИЯ',
		desc: `Добавьте на карту момент, который связан с\u00A0вашим образованием, обучением, интеллектуальным ростом. Например, вы давно мечтали научиться готовить дома йогурты. и\u00A0вот вы прошли обучение у\u00A0Сергея Леонова, и\u00A0теперь в\u00A0любой момент можете себя побаловать: сегодня вишневый йогурт, завтра карамельный и\u00A0т. д. Для вас это больше не фантастика, а\u00A0норма вкусной, здоровой жизни!\n\nПодпишите снизу цель и\u00A0фразу, описывающую это состояние: например, «Я сияю и\u00A0радуюсь, получая новые знания».`,
		example: `Я сияю и\u00A0радуюсь, получая новые знания`,
		color: '#a0d8cd',
		textarea_image: textarGreen,
		arrow_image: arrGreen,
	},
	{
		id: 6,
		name: 'ЯЧЕЙКА 7 – \nЛЮБОВЬ, БРАК',
		desc: `Добавьте на карту то, что так ценно вашему сердцу. Вы с\u00A0вашей половинкой в\u00A0красивых купальниках ЗОЖигаете в\u00A0отпуске на море, счастливые и\u00A0подтянутые, а\u00A0может, у\u00A0вас появилось новое совместное увлечение или ждете прибавления в\u00A0семействе. \n\nПодпишите снизу цель и\u00A0фразу, описывающую это состояние: например, «Мы с\u00A0любимым счастливы, здоровы и\u00A0скоро станем родителями».`,
		example: `Мы с\u00A0любимым счастливы, здоровы и\u00A0скоро станем родителями`,
		color: '#4971e3',
		textarea_image: textarBlue,
		arrow_image: arrBlue,
	},
	{
		id: 7,
		name: 'ЯЧЕЙКА 8 – КАРЬЕРА',
		desc: `Представьте момент, в\u00A0котором вы достигаете поставленных для себя высот. Это может быть новая должность, получение желаемой зарплаты или открытие своего дела. Чувствуете мурашки? а\u00A0может, вам важно, чтобы близкие признали ваши заслуги как домохозяйки? Какой элемент здоровья поможет вам достичь желаемого? Питание? Дисциплина? Спорт? Все вместе? \n\nПодпишите снизу цель и\u00A0фразу, описывающую это состояние: например, «Я полна энергии и\u00A0стала лучшим сотрудником месяца в\u00A0своей фирме».`,
		example: `Я полна энергии и\u00A0стала лучшим сотрудником месяца в\u00A0своей фирме`,
		color: '#f89bb0',
		textarea_image: textarPink,
		arrow_image: arrPink,
	},
	{
		id: 8,
		name: 'ЯЧЕЙКА 9 – ПУТЕШЕСТВИЯ',
		desc: `Представьте страну или место, вкус которых вы так хотите попробовать. Загадочная Япония? Или яркая Корея? а\u00A0может, вы давно грезите попробовать настоящий французский багет с\u00A0сыром? Добавляйте на\u00A0карту путешествие своей мечты и\u00A0готовьтесь ЗОЖигать по полной!\n\nПодпишите снизу цель и\u00A0фразу, описывающую это состояние: например, «Я наслаждаюсь свежевыловленной рыбкой на\u00A0берегу Средиземного моря».`,
		example: `Я наслаждаюсь свежевыловленной рыбкой на\u00A0берегу Средиземного моря`,
		color: '#a0d8cd',
		textarea_image: textarGreen,
		arrow_image: arrGreen,
	},
];

const getRandomImageIdx = () => {
	return Math.floor(Math.random() * 44 + 1);
};

export const MainPage = () => {
	const [texts, setTexts] = useState(Array(9).fill(''));
	const [imageSrcs, setImageSrcs] = useState(Array(9).fill(''));
	const [currentIndices, setCurrentIndices] = useState(Array(9).fill(1)); // Индексы текущих изображений
	const [text1, setText1] = useState('');
	const [imageSrc1, setImageSrc1] = useState('');

	const handleImageUpload = (event: any, setImageSrc: (res: string) => void) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				if (reader.result && typeof reader.result === 'string') {
					setImageSrc(reader.result);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	useEffect(() => {
		const newImageSrcs = [];
		const newIndices = [];

		for (let i = 0; i < 9; i++) {
			let newIdx = getRandomImageIdx();
			newImageSrcs.push(`photos/${newIdx}.png`);
			newIndices.push(newIdx);
		}
		setImageSrcs(newImageSrcs);
		setCurrentIndices(newIndices);
	}, []);

	return (
		<div className={cls.MainPage}>
			<Header />
			<img src={img1} alt='Dream' className={cls.img1} />
			<h1>
				Зожигай
				<br />
				на максимум!
			</h1>
			<p>составь свою карту здоровья и желаний</p>
			<div className={cls.line}></div>
			<h1 className='pink'>
				О чем вы
				<br />
				мечтаете?
			</h1>
			<p style={{ marginTop: '30px' }}>
				Чувствовать себя <b>самой красивой и желанной</b>, чтобы вам дарили цветы и подарки без
				повода?
				<br />
				<br />
				Чтобы прохожие <b>восхищенно</b> оборачивались вслед?
				<br />
				<br />
				Или прийти на встречу выпускников, и чтобы все обалдели от того, насколько
				<b> молодо и свежо вы выглядите?</b>
				<br />
				<br />А может, вы давно хотите заняться танцами, но стесняетесь своего тела и лишнего веса?
			</p>
			<div className={cls.blue_cont}>
				<img src={img2} alt='everything will come true' className={cls.img2} />
				<h1 className='white'>
					ЗДОРОВЬЕ –<br />
					ОСНОВА ВСЕХ СФЕР
					<br />
					НАШЕЙ ЖИЗНИ!
				</h1>
			</div>
			<p>
				Можно быть безмерно богатым, но какой в этом толк, если плохо себя чувствуете?
				<br />О каком повышении на работе может идти речь, если постоянно болеете?
				<br />
				<br />
				<b>Именно здоровье — фундамент для счастливой жизни, а оно напрямую зависит от питания.</b>
				<br />
				<br />
				<b>Давайте ЗОЖигать жизнь на максимум!</b> Давайте вместе представим, как круто изменится
				ваша жизнь по всем сферам, если вы улучшите питание и будете готовить вместе с Сергеем
				Леоновым.
				<br />
				<br />
				<b>Следуйте инструкции и заполняйте окошки.</b>
			</p>
			<img src={img4} alt='lets go' className={cls.img3} />
			<h1>
				Пожалуйста,
				<br />
				представьтесь:
			</h1>
			<p>ФОРМА</p>
			<img src={step1} alt='step 1' className={`${cls.step1} ${cls.step}`} />
			<ul>
				<li>
					Запишите цели, связанные со здоровьем (улучшение самочувствия), красотой (состояние кожи,
					волос, ногтей) и молодостью (внутренний баланс, ощущение бодрости, свежий вид).
				</li>
			</ul>
			<p style={{ marginTop: '20px' }} className='wide-text'>
				Будьте конкретны: например, «стройная фигура», «много сил и энергии», «давление/цикл в
				норме», «анализы на гормоны хорошие», «кожа сияющая, без прыщей», «волосы перестали
				выпадать» и т. д.
			</p>
			<img src={img3} alt='imaging' className={cls.img4} />
			<img src={step2} alt='step 2' className={`${cls.step2} ${cls.step}`} />
			<p style={{ marginBottom: '20px' }} className='wide-text'>
				Выберите вдохновляющие изображения и слова под заданные ячейки.
			</p>
			<ul>
				<li>
					Найдите изображения, которые отражают ваше представление о здоровье, красоте и молодости:
					цветущие пейзажи, стройные фигуры, улыбающиеся лица, свежие фрукты, воду, спорт, отдых.
				</li>
				<li>
					Подберите слова и фразы, которые вам откликаются, например: «Внутреннее сияние», «Сила
					природы», «Гармония и баланс», «Каждый день в радости».
				</li>
			</ul>
			<h2 className={cls.use_photo}>
				Или используйте фото из шаблонов карты.
				<br />
				<br />
				Мы подготовили их для вас заранее =)
			</h2>
			<img src={img5} alt='lets go' className={cls.img5} />
			<img src={step3} alt='step 3' className={`${cls.step3} ${cls.step}`} />
			<p className='wide-text'>
				Начните размещать собранные изображения и слова в соответствии с заданными ячейками.
			</p>
			<div className='cell blue'>ЯЧЕЙКА 1 – Я</div>
			<p className='wide-text'>
				В центре вашей карты разместите свою фотографию или коллаж, в котором вы себя видите в своей
				наилучшей форме. Например, гордо стоите в обтягивающем платье или только что пробежали свой
				первый полумарафон. <br />
				<br />
				Подпишите снизу цель и фразу, описывающую это состояние: например, «Я счастлива, здорова,
				энергична и восхитительна».
			</p>
			<h2 className={cls.add_photo_text}>Загрузите ваше фото</h2>
			<input
				type='file'
				accept='image/*'
				onChange={(ev) => handleImageUpload(ev, (res) => setImageSrc1(res))}
				style={{ display: 'none' }} // Скрываем input
				id='upload-photo'
			/>
			<label htmlFor='upload-photo'>
				<img src={addPhoto} alt='add photo' className={cls.add_photo} />
			</label>
			<div className={cls.card_vert}>
				<div className={cls.user_photo} style={{ backgroundImage: `url(${imageSrc1})` }} />
				<div className={cls.text}>
					{text1 ? (
						text1
					) : (
						<>
							ПРИМЕР ТЕКСТА:
							<br />
							«Я счастлива, здорова, энергична и восхитительна».
						</>
					)}
				</div>
			</div>
			<h2>
				Введите текст
				<br />
				для подписи
			</h2>
			<textarea
				name='desc'
				id='1'
				maxLength={140}
				onChange={(event) => {
					const { value } = event.target;
					if (value.length <= 140) {
						setText1(value);
					}
				}}></textarea>

			{cardsArray.map((el, idx) => (
				<Card
					key={idx}
					card={{
						...el,
						text: texts[idx],
						setText: (value: string) => {
							const newTexts = [...texts];
							newTexts[idx] = value;
							setTexts(newTexts);
						},
						imageSrc: imageSrcs[idx],
						setImageSrc: (value: string) => {
							const newImageSrcs = [...imageSrcs];
							newImageSrcs[idx] = value;
							setImageSrcs(newImageSrcs);
						},
					}}
					handleImageUpload={handleImageUpload}
					currentImageIndex={currentIndices[idx]}
					setCurrentImageIndex={(index) => {
						const newIndices = [...currentIndices];
						newIndices[idx] = index;
						setCurrentIndices(newIndices);

						const newImageSrcs = [...imageSrcs];
						newImageSrcs[idx] = `photos/${index}.png`;
						setImageSrcs(newImageSrcs);
					}}
				/>
			))}

			<div className={cls.blue_button}>
				<h1>Внимание!</h1>
				<h3>
					Нажми, чтобы увидеть предварительный результат карты для активации.
					<br />
					Все еще можно исправить!
				</h3>
				<button>Посмотреть</button>
			</div>
			<img src={img6} alt='will be' className={cls.img6} />
			<h1 className={cls.send_text}>
				<span>нажми,</span> чтобы активировать карту <span>и запустить процесс</span> исполнения
				желаний
			</h1>
			<img src={img7} alt='will be' className={cls.img7} />
			<div className={cls.blue_line}></div>

			<Footer />
		</div>
	);
};
