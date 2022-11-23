import { useState } from 'react';
import { ChromePicker } from 'react-color';

import './CustomColorPicker.css';

const CustomColorPicker = ({ color, handleChange, text }) => {
	const [displayColorPicker, setDisplayColorPicker] = useState(false);

	const handleClick = () => {
		setDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		setDisplayColorPicker(false);
	};

	return (
		<div className='colorpicker'>
			<button
				className='colorpicker__trigger'
				onClick={handleClick}
			>
				<span className='colorpicker__trigger-inner'>
					<span
						style={{
							background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
						}}
						className='colorpicker__trigger-color'
					></span>
					<span className='colorpicker__trigger-text'>{text}</span>
				</span>
			</button>
			{displayColorPicker ? (
				<div className='colorpicker__popup'>
					<div
						className='colorpicker__cover'
						onClick={handleClose}
					/>
					<ChromePicker
						color={color}
						onChange={handleChange}
					/>
				</div>
			) : null}
		</div>
	);
};

export default CustomColorPicker;
