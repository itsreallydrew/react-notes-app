import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Count from './components/Count';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Footer from './components/Footer';

function App() {

const [notes, setNotes] = useState([]);

const addNote = (newNote) => {
	setNotes([...notes, newNote])
}

const deleteNotes = (id) => {
	setNotes([...notes.filter((note, index) => index!== id)])
}
	return (
		<div className='App' >
			<Header/>
			<Count count={notes.length === 0 ? 'No Notes to Display' : `Total Notes: ${notes.length}`} />
			<CreateArea onAdd={addNote}/>
			{notes.map((note, index) => (
				<Note 
				key={index}
				id={index}
				title={note.title}
				content={note.content}
				onDelete={deleteNotes}
				/>

			))}
			<Footer/>
		</div>
	);
}

export default App;
