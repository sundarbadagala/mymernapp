import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'

test('renders learn react link', async() => {
  render(<App />);
  const linkElement = screen.getByText(/add/i);
  expect(linkElement).toBeInTheDocument();
});
