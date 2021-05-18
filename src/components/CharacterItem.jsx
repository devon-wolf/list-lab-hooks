import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, affiliation, image }) => (
	<>
	<p>{name}: {affiliation}</p>
	<img alt={name} src={image} />
	</>
);

CharacterItem.propTypes = {
	name: PropTypes.string.isRequired,
	affiliation: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default CharacterItem;