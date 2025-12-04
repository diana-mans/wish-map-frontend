import { useEffect, useState } from 'react';
import { MainPage } from '../pages/MainPage';
import { Popup } from '../pages/Popup/Popup';
import { FinalPage } from '../pages/FinalPage/FinalPage';

export const App = () => {
	const [imageSrc, setImageSrc] = useState('');
	const [successSubmit, setSumbit] = useState(false);

	return (
		<div className='App'>
			{successSubmit ? (
				<FinalPage imageSrc={imageSrc} />
			) : (
				<MainPage imageSrc={imageSrc} setImageSrc={setImageSrc} setSubmit={() => setSumbit(true)} />
			)}
			{/* <FinalPage imageSrc={imageSrc} /> */}
			{/* <Popup closePopup={() => {}} /> */}
		</div>
	);
};
