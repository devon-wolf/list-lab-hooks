import React from 'react';
import CharacterList from '../components/CharacterList';
import { useCharacters } from '../hooks/useCharacters';

const ListPage = () => {
	const [loading, characters] = useCharacters();
	
	return (
		<div>
			<h1>List page</h1>
			{loading
				? (<p>Loading...</p>)
				: (<CharacterList characters={characters}/>)
			}
		</div>
	);
};

export default ListPage;
