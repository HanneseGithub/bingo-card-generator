import './UploadField.css';

const UploadField = ({ onChange }) => {
	return (
		<div className='upload-field'>
			<input
				className='upload__input'
				onChange={onChange}
				type='file'
				accept='image/*'
			/>
		</div>
	);
};

export default UploadField;
