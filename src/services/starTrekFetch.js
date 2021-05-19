export const fetchTrek = () => {
	return fetch('https://trek-dex.herokuapp.com/api/v1/characters')
				.then(res => res.json())
				.catch(console.error);
}

export const fetchTrekById = (id) => {
	return fetch(`https://trek-dex.herokuapp.com/api/v1/characters/${id}`)
		.then(res => res.json())
		.catch(console.error);
}