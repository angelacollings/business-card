import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
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
    const nameElement = screen.getByText(/Angela Collings/i);
    expect(nameElement).toBeInTheDocument();
    const titleElement = screen.getByText(/Software Developer/i);
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