import { useEffect } from 'react';
import cls from './MainPage.module.scss';
import addPhoto from '../assets/images/add_photo.png';

export const Card = ({
	card,
	handleImageUpload,
	currentImageIndex,
	setCurrentImageIndex,
}: {
	card: {
		id: number;
		name: string;
		desc: string;
		example: string;
		color: string;
		textarea_image: any;
		arrow_image: any;
		text: string;
		setText: (text: string) => void;
		imageSrc: string;
		setImageSrc: (ev: string) => void;
	};
	handleImageUpload: (event: any, setImageSrc: (res: string) => void) => void;
	currentImageIndex: number;
	setCurrentImageIndex: (id: number) => void;
}) => {
	const handleNextImage = () => {
		setCurrentImageIndex(currentImageIndex < 44 ? currentImageIndex + 1 : 1); // Переключаемся на следующее изображение
	};

	const handlePrevImage = () => {
		setCurrentImageIndex(currentImageIndex > 1 ? currentImageIndex - 1 : 44); // Переключаемся на предыдущее изображение
	};

	return (
		<>
			<div className='cell' style={{ backgroundColor: card.color }}>
				{card.name}
			</div>
			<p className='wide-text'>{card.desc}</p>
			<h2 className={`${cls.add_photo_text}`} style={{ color: card.color }}>
				Выбери фото из шаблона
				<br />
				или загрузи свой вариант
			</h2>
			<input
				type='file'
				accept='image/*'
				onChange={(ev) => handleImageUpload(ev, card.setImageSrc)}
				style={{ display: 'none' }}
				id={`upload-photo-${card.name}`}
			/>
			<label htmlFor={`upload-photo-${card.name}`}>
				<img src={addPhoto} alt='add photo' className={cls.add_photo} />
			</label>
			<div
				className={cls.card_horiz}
				style={{ transform: `rotate(${card.id % 2 === 0 ? 2 : -2}deg)` }}>
				<div className={cls.user_photo} style={{ backgroundImage: `url(${card.imageSrc})` }} />
				<div className={cls.text}>{card.text || `ПРИМЕР ТЕКСТА:\n«${card.example}».`}</div>
				<div className={cls.arrows}>
					<button
						onClick={handlePrevImage}
						style={{
							backgroundImage: `url(${card.arrow_image})`,
							transform: 'scale(-1, 1) translateX(50%)',
						}}></button>
					<button
						onClick={handleNextImage}
						style={{
							backgroundImage: `url(${card.arrow_image})`,
							transform: 'translateX(50%)',
						}}></button>
				</div>
			</div>
			<h2 style={{ color: card.color }}>
				Введите текст
				<br />
				для подписи
			</h2>
			<textarea
				style={{ backgroundImage: `url(${card.textarea_image})` }}
				maxLength={90}
				onChange={(event) => {
					const { value } = event.target;
					if (value.length <= 90) {
						card.setText(value);
					}
				}}></textarea>
			{/* Кнопки для переключения изображений */}
		</>
	);
};
