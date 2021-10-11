import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SpaceX Rocket Launches App', () => {
  render(<App />);
  const linkElement = screen.getByText(/SpaceX Rocket Launches/i);
  expect(linkElement).toBeInTheDocument();
});
