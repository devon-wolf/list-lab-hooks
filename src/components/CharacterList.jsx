import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => (
	<ul aria-label="characters">
		{characters.map(character => (
			<li key={`${character.name}-${character.affiliation}`}>
				<CharacterItem
					name={character.name}
					affiliation={character.affiliation}
					image={character.imageUrl}
				/>
			</li>
		))}
	</ul>
);

CharacterList.propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		affiliation: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired
	})).isRequired
};

export default CharacterList;