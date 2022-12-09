import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders input title.', () => {
  render(<App />);
  const text = screen.getByText(/login/i);
  expect(text).toBeInTheDocument();
});
