import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const home = screen.getByText(/Eric Peng's Portfolio/i);
  expect(home).toBeInTheDocument();
});
