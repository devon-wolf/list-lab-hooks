import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { trekData } from '../services/mockData';
import DetailPage from './DetailPage';


const server = setupServer(
	rest.get('https://trek-dex.herokuapp.com/api/v1/characters/7', (req, res, ctx) => {
		return res(
			ctx.json(trekData[14])
		)
	})
);

describe('Detail page', () => {
	beforeAll(() => server.listen());
	afterAll(() => server.close());

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
