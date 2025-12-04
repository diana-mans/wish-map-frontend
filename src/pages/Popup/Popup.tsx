import cls from './Popup.module.scss';
import closeImg from '../../assets/images/close.png';

export const Popup = ({ closePopup }: { closePopup: () => void }) => {
	return (
		<div className={cls.Popup}>
			<img src={closeImg} alt='' className={cls.close} onClick={() => closePopup()} />
		</div>
	);
};
