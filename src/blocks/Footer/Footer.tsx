import cls from './Footer.module.scss';
import icon from '../../assets/images/icon.png';

export const Footer = () => {
	return (
		<div className={cls.Footer}>
			<div className={cls.flex}>
				<p className={cls.p_first} style={{ textAlign: 'right' }}>
					кулинарная
					<br />
					онлайн-академия
					<br />
					Сергея Леонова
				</p>
				<img src={icon} alt='' />
				<p className={cls.p_last} style={{ textAlign: 'left' }}>
					школа №1*
					<br />
					в сфере
					<br />
					ЗОЖ-обучения
				</p>
			</div>
			<p className={cls.p}>
				*По количеству учеников на обучающей платформе GetCourse, декабрь 2022 г.
			</p>
		</div>
	);
};
