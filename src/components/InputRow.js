import './InputRow.css';

const InputRow = ({ values, handleInputChange }) => {
	return (
		<div className='input-row'>
			{values.map((value, index) => {
				return (
					<input
						className='input-row__input'
						type='text'
						maxLength='1'
						key={index}
						value={values[index]}
						onChange={(e) =>
							handleInputChange(index, e.target.value)
						}
					/>
				);
			})}
		</div>
	);
};

export default InputRow;
