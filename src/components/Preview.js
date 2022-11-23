import { useState } from 'react';
import Button from '@mui/material/Button';

import BingoCard from './BingoCard';

import './Preview.css';

const Preview = ({
	cardBackgroundColor,
	cardBackgroundImage,
	cardTextColor,
	cardTitle,
	gridBackgroundColor,
	gridBorderColor,
	hasEmptySpace,
	title,
}) => {
	const [counter, setCounter] = useState(0); // Used to re-render bingo card numbers

	return (
		<div className='preview'>
			<h2 className='preview__title'>{title}</h2>
			{[...Array(4)].map((value, index) => (
				<BingoCard
					backgroundColor={cardBackgroundColor}
					backgroundImage={cardBackgroundImage}
					counter={counter}
					gridBackgroundColor={gridBackgroundColor}
					gridBorderColor={gridBorderColor}
					hasEmptySpace={hasEmptySpace}
					isPrintOnly={index > 0}
					key={index}
					textColor={cardTextColor}
					title={cardTitle}
				/>
			))}
			<Button
				className='preview__button'
				color='dark'
				onClick={() => setCounter((counter) => counter + 1)}
				variant='contained'
			>
				Generate New
			</Button>
			<Button
				className='preview__button'
				color='light'
				onClick={() => window.print()}
				variant='contained'
			>
				Print
			</Button>
		</div>
	);
};

export default Preview;
