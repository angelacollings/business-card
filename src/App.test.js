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
describe("Given that the page has an info component", () => {
  test('Then name and title exist', () => {
    render(<App />);
    const nameElement = screen.getByRole('heading', { name: "Angela Collings" });
    expect(nameElement).toBeInTheDocument();
    const titleElement = screen.getByRole('heading', { name: "Software Developer" });
    expect(titleElement).toBeInTheDocument();
  });
})
describe("Given that the page has an email button", () => {
  test('Then the email button is displayed', () => {
    render(<App />);
    const emailButton = screen.getByRole('button', { name: "Email" });
    expect(emailButton).toBeInTheDocument();
  });
})