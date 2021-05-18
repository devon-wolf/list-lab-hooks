import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => (
	<ul>
		{characters.map(character => (
			<li>
				<CharacterItem
					key={`${character.name}-${character.affiliation}`}
					name={character.name}
					affiliation={character.affiliation}
					image={character.image}
				/>
			</li>
		))}
	</ul>
);

CharacterList.propTypes = {
	characters: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default CharacterList;