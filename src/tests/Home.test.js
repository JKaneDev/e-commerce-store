import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Home from '../components/Home';

describe('Home component', () => {
	beforeEach(() => {
		const { getByRole } = render(
			<Router>
				<Home />
			</Router>
		);
	});

	it('brings user to store', () => {
		act(() => {
			const button = screen.getByRole('button', { name: /Browse/i });
			userEvent.click(button);
		});
		expect(window.location.pathname).toBe('/store');
	});

	it('brings user to github', () => {
		const button = screen.getByRole('button', { name: /GitHub/i }).closest('a');
		userEvent.click(button);
		expect(button).toHaveAttribute('target', '_blank');
		expect(button).toHaveAttribute(
			'href',
			'https://github.com/JKaneDev/e-commerce-store'
		);
	});

	it('brings user to twitter', () => {
		const button = screen
			.getByRole('button', { name: /Twitter/i })
			.closest('a');
		userEvent.click(button);
		expect(button).toHaveAttribute('target', '_blank');
		expect(button).toHaveAttribute('href', 'https://twitter.com/?lang=en');
	});

	it('brings user to linked in', () => {
		const button = screen
			.getByRole('button', { name: /LinkedIn/i })
			.closest('a');
		userEvent.click(button);
		expect(button).toHaveAttribute('target', '_blank');
		expect(button).toHaveAttribute('href', 'https://uk.linkedin.com/');
	});
});
