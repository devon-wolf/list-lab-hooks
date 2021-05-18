import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ListPage from './ListPage';

describe('List page', () => {
  it('renders list page', () => {
    render(<ListPage />);
	screen.getByText('List page');
  });
});