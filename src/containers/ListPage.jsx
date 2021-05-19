import React, { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import { fetchTrek } from '../services/starTrekFetch';

const ListPage = () => {
	const [loading, setLoading] = useState(true);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {		
		fetchTrek()
			.then(result => {
				setCharacters(result);
				setLoading(false);
			})
			.catch(() => setLoading(false));

		// let cancelled = false;
		// fetchTrek()
		// 	.then(result => {
		// 		if (!cancelled) {
		// 			setCharacters(result);
		// 			setLoading(false);
		// 		}
		// 	})
		// return () => {
		// 	cancelled = true;
		// }
	}, []);
	
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
