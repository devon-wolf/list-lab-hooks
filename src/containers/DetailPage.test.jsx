import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailPage from './DetailPage';

describe.skip('Detail page', () => {
  it('renders detail page', async () => {
    
	render(<DetailPage match={{ params: { id: '7' } }}/>);
	
	screen.getByText('Detail page');
	screen.getByText('Loading...');

	// const character = await screen.findByLabelText('character details');
	
	// expect(character).not.toBeEmptyDOMElement();
	});
  });
