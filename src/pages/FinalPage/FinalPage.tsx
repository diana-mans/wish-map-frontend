import cls from './FinalPage.module.scss';
import img1 from '../../assets/images/finalpage-image.png';
import { useEffect, useState } from 'react';
import { Popup } from '../Popup/Popup';

export const FinalPage = ({ imageSrc }: { imageSrc: string }) => {
	const [openedPopup, setPopupOpen] = useState(true);
	const [downloadedImg, setDownloaded] = useState(false);



	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const downloadImage = () => {
		if (imageSrc) {
			const link = document.createElement('a');
			link.href = imageSrc; // Получаем данные в формате PNG
			link.download = 'wish-map.png'; // Имя файла для скачивания
			document.body.appendChild(link); // Добавляем ссылку в документ
			link.click(); // Программный клик по ссылке
			document.body.removeChild(link); // Удаляем ссылку после скачивания
			setDownloaded(true);
		}
	};
	
	return (
		<div className={cls.FinalPage}>
			{/* <div className={cls.container}>
				<img src={img1} className={cls.img1} alt='' />
				<div className={cls.text1}>Твоя карта желаний готова!</div>
				<div className={cls.p_container}>
					<p className={cls.bold}>
						Все обязательно исполнится, надо только
						<br />
						показать Вселенной, что ты готова.
					</p>
					<p>
						Ты ведь помнишь, что правильное питание — это
						<br />
						фундамент здоровья и счастливой жизни?
						<br />
						Вот и начать создавать для себя лучшее будущее <br />
						проще всего в процессе готовки. Мгновенный <br />
						результат сначала на столе, а потом и в зеркале.
					</p>
					<p>
						Специально для тебя я запускаю
						<br />
						<a href='/'>ЛИКВИДАЦИЮ ГАЙДОВ.</a> В следующем году
						<br />
						такого формата обучения больше не будет.
						<br />
						Это твои помощники на любой запрос!
						<br />
						Пользоваться ими сможешь всю жизнь.
					</p>
				</div>
				<div className={cls.text2}>
					<div>
						9 гайдов. 1300 страниц пользы.
						<br />
						600+ рецептов.
					</div>
				</div>
				<div className={cls.p_container}>
					<p>
						<b>
							И ТОЛЬКО 24 ЧАСА, КОГДА 1 ГАЙД СТОИТ
							<br />
							ВСЕГО 1000 р.
						</b>
						<br />
						при покупке полного комплекта + эксклюзивный курс
						<br />
						«Десерты на скорую руку» в подарок!
					</p>
					<p className={cls.bold}>Нужен конкретный гайд? Лови суперскидку 70%!</p>
				</div>
				<div className={cls.text1}>
					<div>
						Сделай первый шаг
						<br />к исполнению своих желаний!
					</div>
				</div>
			</div> */}
			<img src={imageSrc} alt='wish map' />
			<button className={cls.download_btn} onClick={() => downloadImage()}>
				{downloadedImg ? 'Карта загружена' : 'Скачать карту'}
			</button>
			{false && (
				<Popup
					closePopup={() => {
						document.body.style.overflow = 'auto';
						setPopupOpen(false);
					}}
				/>
			)}
		</div>
	);
};
