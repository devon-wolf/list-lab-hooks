import React from 'react';
import CharacterDetail from '../components/CharacterDetail';
import { useCharacter } from '../hooks/useCharacters';

const DetailPage = ({ match }) => {

	const [loading, character] = useCharacter(match.params.id);

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
