import { render, screen } from '@testing-library/react';
import { ForexPage } from './ForexPage';

jest.mock('react-apexcharts', () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

test('renders forex page title', () => {
  render(<ForexPage />);
  const titleElement = screen.getByText(/Forex Data/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders currency tabs', () => {
  render(<ForexPage />);
  const buttonElement = screen.getByText(/^EUR$/i);
  expect(buttonElement).toBeInTheDocument();
});
