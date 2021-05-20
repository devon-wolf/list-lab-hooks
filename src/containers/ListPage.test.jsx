import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListPage from './ListPage';

describe('List page', () => {
  it('renders list page', async () => {
	
    render(
	<MemoryRouter>
		<ListPage />
	</MemoryRouter>
	);

	screen.getByText('Loading...');
	
	return waitFor(() => {
		const charList = screen.getByRole('list', { name: 'characters' });
		expect(charList).not.toBeEmptyDOMElement();
		expect(charList).toMatchSnapshot();
	})
  });
});