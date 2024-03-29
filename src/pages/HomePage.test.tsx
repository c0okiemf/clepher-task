import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

test('renders home page title', () => {
  render(<HomePage />);
  const titleElement = screen.getByText(/Data to enrich your online business/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders forex link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Forex Chart/i);
  expect(linkElement).toBeInTheDocument();
});
