import cls from './Header.module.scss';
import icon from '../../assets/images/icon.png';

export const Header = () => {
	return (
		<div className={cls.Header}>
			<p className={cls.p_first} style={{ textAlign: 'right' }}>
				кулинарная
				<br />
				онлайн-академия
				<br />
				Сергея Леонова
			</p>
			<img src={icon} alt='' />
			<p className={cls.p_last} style={{ textAlign: 'left' }}>
				твой верный
				<br />
				проводник в мир
				<br />
				здоровья и энергии
			</p>
		</div>
	);
};
