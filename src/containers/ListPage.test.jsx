import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ListPage from './ListPage';

describe('List page', () => {
  it('renders list page', async () => {
    render(<ListPage />);

	// API appears to be too speedy for the test to catch the loading message unless 'loading' is forced to stay 'true'
	screen.getByText('Loading...');
	
	return waitFor(() => {
		const charList = screen.getByRole('list', { name: 'characters' });
		expect(charList).not.toBeEmptyDOMElement();
		expect(charList).toMatchSnapshot();
	})
  });
});