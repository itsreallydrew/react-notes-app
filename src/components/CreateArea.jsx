import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const CreateArea = ({onAdd}) => {
	const [isExpanded, setExpanded] = useState(false);
	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setNote({...note, [name]: value})
	};

	const handleExpanded = () => {
		setExpanded(true);
	};

	const onSubmit = (e) => {
		onAdd(note);
		setNote({
			title: '',
			content: '',
		});
		e.preventDefault();
	};
	return (
		<div className='create'>
			<form action=''>
			{isExpanded && (
				<input
					type='text'
					value={note.title}
					onChange={handleChange}
					placeholder='Title'
					name='title'
				/>
			)}
				<textarea
                value={note.content}
                onClick={handleExpanded}
                onChange={handleChange}
                rows={isExpanded ? 3: 1}
					name='content'
					placeholder='Write your note here...'></textarea>
				<button onClick={onSubmit} >
					<AddIcon />
				</button>
			</form>
		</div>
	);
};

export default CreateArea;
