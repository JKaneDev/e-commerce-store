import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import HomeNav from '../components/HomeNav';

describe('HomeNav component', () => {
	beforeEach(() => {
		const { getByRole } = render(
			<Router>
				<HomeNav />
			</Router>
		);
	});

	it('brings user to the store', () => {
		act(() => {
			const button = screen.getByRole('button', { name: /Browse/i });
			userEvent.click(button);
		});
		expect(window.location.pathname).toBe('/store');
	});

	it('brings user to authors github', () => {
		const button = screen
			.getByRole('button', { name: /JKaneDev/i })
			.closest('a');
		userEvent.click(button);
		expect(button).toHaveAttribute('target', '_blank');
		expect(button).toHaveAttribute('href', 'https://github.com/JKaneDev');
	});
});
