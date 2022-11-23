import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';
import Preview from './Preview';
import CardOptions from './CardOptions';

import './App.css';

const theme = createTheme({
	palette: {
		dark: {
			light: '#292929',
			main: '#000000',
			dark: '#121212',
			contrastText: '#ffffff',
		},
		light: {
			light: '#f2f2f2',
			main: '#ffffff',
			dark: '#f9f9f9',
			contrastText: '#000000',
		},
	},
});

function App() {
	const [cardBackgroundColor, setCardBackgroundColor] = useState({
		r: '255',
		g: '255',
		b: '255',
		a: '1',
	});
	const [gridBackgroundColor, setGridBackgroundColor] = useState({
		r: '255',
		g: '255',
		b: '255',
		a: '1',
	});
	const [cardTextColor, setCardTextColor] = useState({
		r: '0',
		g: '0',
		b: '0',
		a: '1',
	});
	const [gridBorderColor, setGridBorderColor] = useState({
		r: '0',
		g: '0',
		b: '0',
		a: '1',
	});
	const [cardBackgroundImage, setCardBackgroundImage] = useState(false);
	const [cardTitle, setCardTitle] = useState(['B', 'I', 'N', 'G', 'O']);
	const [hasEmptySpace, setHasEmptySpace] = useState(false);

	const toggleEmptySpace = () => {
		setHasEmptySpace(!hasEmptySpace);
	};

	const updateCardTitle = (charIndex, newChar) => {
		const updatedTitle = cardTitle.map((value, index) =>
			charIndex === index ? newChar : value
		);

		setCardTitle(updatedTitle);
	};

	const updateCardBackgroundColor = (color) => {
		setCardBackgroundColor(color.rgb);
	};

	const updateCardTextColor = (color) => {
		setCardTextColor(color.rgb);
	};

	const updateGridBackgroundColor = (color) => {
		setGridBackgroundColor(color.rgb);
	};

	const updateGridBorderColor = (color) => {
		setGridBorderColor(color.rgb);
	};

	const updateCardBackgroundImage = (e) => {
		if (e.target.files && e.target.files[0]) {
			setCardBackgroundImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<div className='app-container'>
				<Header
					title='1-75 number bingo'
					description='Create your own custom and randomized 1-75 number bingo cards'
				/>
				<CardOptions
					cardTitle={cardTitle}
					cardBackgroundColor={cardBackgroundColor}
					cardTextColor={cardTextColor}
					gridBackgroundColor={gridBackgroundColor}
					gridBorderColor={gridBorderColor}
					handleBackgroundChange={updateCardBackgroundImage}
					handleCardColorChange={updateCardBackgroundColor}
					handleCardTitleChange={updateCardTitle}
					handleCardTextColorChange={updateCardTextColor}
					handleEmptySpaceChange={toggleEmptySpace}
					handleGridBackgroundColorChange={updateGridBackgroundColor}
					handleGridBorderColorChange={updateGridBorderColor}
					hasEmptySpace={hasEmptySpace}
				/>
				<Preview
					cardBackgroundColor={cardBackgroundColor}
					cardBackgroundImage={cardBackgroundImage}
					cardTextColor={cardTextColor}
					cardTitle={cardTitle}
					gridBackgroundColor={gridBackgroundColor}
					gridBorderColor={gridBorderColor}
					hasEmptySpace={hasEmptySpace}
					title='Preview'
				/>
			</div>
		</ThemeProvider>
	);
}

export default App;
