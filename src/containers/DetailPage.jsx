import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/CharacterDetail';
import { fetchTrekById } from '../services/starTrekFetch';

const DetailPage = ({ match }) => {
	const [loading, setLoading] = useState(false);
	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetchTrekById(match.params.id)
			.then(result => {
				setCharacter(result);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

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
