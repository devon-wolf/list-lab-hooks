import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/CharacterDetail';

const DetailPage = () => {
	const [loading, setLoading] = useState(false);
	const [character, setCharacter] = useState({ name: 'Me', affiliation: 'None', imageUrl: 'no.jpg'});

	return (
	<div>
		<h1>Detail page</h1>
		{loading
			? <p>Loading...</p>
			: <CharacterDetail 
				name={character.name}
				affiliation={character.affiliation}
				image={character.imageUrl}
				/>
		}
	</div>
)};

export default DetailPage;
