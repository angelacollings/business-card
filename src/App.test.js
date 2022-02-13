import { render, screen } from '@testing-library/react';
import App from './App';

describe("Given that the page has a photo", () => {
  test('Then it renders the photo or alt text', () => {
  render(<App />);
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'photo.png');
  expect(imageElement).toHaveAttribute('alt', 'me');
});
})

