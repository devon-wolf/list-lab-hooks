import { useState, useEffect } from 'react';
import { fetchTrek, fetchTrekById } from '../services/starTrekFetch';

export const useCharacters = () => {
	const [loading, setLoading] = useState(true);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetchTrek()
			.then(result => setCharacters(result))
			.catch(console.error)
			.finally(() => setLoading(false));
	}, []);

	return [loading, characters];
};

export const useCharacter = (id) => {
	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetchTrekById(id)
			.then(result => setCharacter(result))
			.catch(console.error);
	});

	return character;
}