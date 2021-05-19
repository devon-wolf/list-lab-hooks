import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem'

const CharacterDetail = ({ name, affiliation, image }) => (
	<div aria-label="character details">
		<CharacterItem 
			name={name}
			affiliation={affiliation}
			image={image}
		/>
	</div>
);

CharacterDetail.propTypes = {
	name: PropTypes.string.isRequired,
	affiliation: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default CharacterDetail;