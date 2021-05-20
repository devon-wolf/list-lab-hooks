import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('Detail page', () => {
  it('renders detail page', async () => {
    
	render(<DetailPage match={{ params: { id: '7' } }}/>);
	
	screen.getByText('Detail page');
	screen.getByText('Loading...');

	return waitFor(() => {
		const character = screen.getByLabelText('character details');
		expect(character).not.toBeEmptyDOMElement();
		expect(character).toMatchSnapshot();	
	});
		
	});
});
