import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import CustomColorPicker from './CustomColorPicker';
import InputRow from './InputRow';
import UploadField from './UploadField';

import './CardOptions.css';

const CardOptions = ({
	cardTitle,
	cardBackgroundColor,
	cardTextColor,
	gridBackgroundColor,
	gridBorderColor,
	handleBackgroundChange,
	handleCardColorChange,
	handleCardTitleChange,
	handleCardTextColorChange,
	handleEmptySpaceChange,
	handleGridBackgroundColorChange,
	handleGridBorderColorChange,
	hasEmptySpace,
}) => {
	return (
		<div className='card-options'>
			<fieldset className='card-options__section'>
				<legend className='card-options__title'>Title</legend>
				<div className='card-options__option'>
					<InputRow
						values={cardTitle}
						handleInputChange={handleCardTitleChange}
					/>
				</div>
			</fieldset>
			<fieldset className='card-options__section'>
				<legend className='card-options__title'>
					Card customizations
				</legend>
				<div className='card-options__option'>
					<CustomColorPicker
						text='Text color'
						handleChange={handleCardTextColorChange}
						color={cardTextColor}
					/>
				</div>
				<div className='card-options__option'>
					<CustomColorPicker
						text='Background color'
						handleChange={handleCardColorChange}
						color={cardBackgroundColor}
					/>
					<div className='card-options__separator'>or</div>
					<UploadField onChange={handleBackgroundChange} />
				</div>
			</fieldset>
			<fieldset className='card-options__section'>
				<legend className='card-options__title'>
					Grid customizations
				</legend>
				<div className='card-options__option'>
					<CustomColorPicker
						text='Background color'
						handleChange={handleGridBackgroundColorChange}
						color={gridBackgroundColor}
					/>
				</div>
				<div className='card-options__option'>
					<CustomColorPicker
						text='Border color'
						handleChange={handleGridBorderColorChange}
						color={gridBorderColor}
					/>
				</div>
			</fieldset>
			<fieldset className='card-options__section'>
				<legend className='card-options__title'>Empty space</legend>
				<div className='card-options__option'>
					<FormControlLabel
						control={
							<Switch
								color='dark'
								checked={hasEmptySpace}
								onChange={handleEmptySpaceChange}
							/>
						}
						label='Include a empty square'
						sx={{
							fontFamily: 'Lato',
						}}
					/>
				</div>
			</fieldset>
		</div>
	);
};

export default CardOptions;
