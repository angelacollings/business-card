import { render, screen } from '@testing-library/react';
import App from './App';

test('renders photo', () => {
  render(<App />);
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'photo.png');
  expect(imageElement).toHaveAttribute('alt', 'me');
});

