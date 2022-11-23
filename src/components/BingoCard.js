import { useState, useEffect } from 'react';

import './BingoCard.css';

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

const minMaxMap = [
	{
		min: 1,
		max: 15,
	},
	{
		min: 16,
		max: 30,
	},
	{
		min: 31,
		max: 45,
	},
	{
		min: 46,
		max: 60,
	},
	{
		min: 61,
		max: 75,
	},
];

const generateBingoNumbers = () => {
	let numberArr = [];

	for (let i = 0; i < 5; i++) {
		const rowArr = [];

		while (rowArr.length < 5) {
			const { min, max } = minMaxMap[i];
			const randomNumber = getRandomInt(min, max);

			if (!rowArr.includes(randomNumber)) {
				rowArr.push(randomNumber);
			}
		}

		numberArr.push(...rowArr);
	}

	return numberArr;
};

const BingoCard = ({
	backgroundColor,
	backgroundImage,
	gridBorderColor,
	counter,
	gridBackgroundColor,
	hasEmptySpace,
	isPrintOnly,
	textColor,
	title,
}) => {
	const [numbers, setNumbers] = useState([]);

	useEffect(() => {
		setNumbers(generateBingoNumbers());
	}, [counter]);

	return (
		<div
			isPrintOnly
			className={`bingo-card ${isPrintOnly ? 'is-print-only' : ''}`}
			style={{
				background: backgroundImage
					? `url(${backgroundImage}) center center / cover no-repeat`
					: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`,
				color: `rgba(${textColor.r}, ${textColor.g}, ${textColor.b}, ${textColor.a})`,
			}}
		>
			<BingoGrid
				backgroundColor={gridBackgroundColor}
				borderColor={gridBorderColor}
				modifier='bingo-card__grid--header'
				values={title}
			/>
			<BingoGrid
				backgroundColor={gridBackgroundColor}
				borderColor={gridBorderColor}
				hasEmptySpace={hasEmptySpace}
				modifier='bingo-card__grid--numbers'
				values={numbers}
			/>
		</div>
	);
};

const BingoGrid = ({
	backgroundColor,
	borderColor,
	modifier,
	values,
	hasEmptySpace,
}) => {
	return (
		<div
			style={{
				background: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`,
				borderColor: `rgba(${borderColor.r}, ${borderColor.g}, ${borderColor.b}, ${borderColor.a})`,
			}}
			className={`bingo-card__grid ${modifier || ''}`}
		>
			{values.map((value, index) => {
				return (
					<div
						key={index}
						className='bingo-card__square'
						style={{
							borderColor: `rgba(${borderColor.r}, ${borderColor.g}, ${borderColor.b}, ${borderColor.a})`,
						}}
					>
						<span
							className={
								index === 12 && hasEmptySpace
									? 'h-hidden'
									: undefined
							}
						>
							{value}
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default BingoCard;
