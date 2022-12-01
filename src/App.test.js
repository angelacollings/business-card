import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given that the page has a photo", () => {
  test("Then it renders the photo or alt text", () => {
    render(<App />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "photo.jpeg");
    expect(imageElement).toHaveAttribute("alt", "me");
  });
});
describe("Given that the page has an info component", () => {
  test("Then name and title exist", () => {
    render(<App />);
    const nameElement = screen.getByRole("heading", {
      name: "Angela Collings",
    });
    expect(nameElement).toBeInTheDocument();
    const titleElement = screen.getByRole("heading", {
      name: "Software Developer",
    });
    expect(titleElement).toBeInTheDocument();
  });
});
describe("Given that the page has an email icon", () => {
  test("Then the email icon is displayed", () => {
    render(<App />);
    const emailElement = screen.getByRole("img", {
      class: "svg-inline--fa fa-envelope Icon",
    });
    expect(emailElement).toBeInTheDocument();
  });
});
describe("Given that the page has a linkedin icon", () => {
  test("Then the linkedin icon is displayed", () => {
    render(<App />);
    const linkedinElement = screen.getByRole("img", {
      class: "svg-inline--fa fa-linkedin Icon",
    });
    expect(linkedinElement).toBeInTheDocument();
  });
});
describe("Given that the page has a github icon", () => {
  test("Then the github icon is displayed", () => {
    render(<App />);
    const githubElement = screen.getByRole("img", {
      class: "svg-inline--fa fa-github Icon",
    });
    expect(githubElement).toBeInTheDocument();
  });
});

describe("Given that the page has an about component", () => {
  test("Then about and interests exist", () => {
    render(<App />);
    const aboutElement = screen.getByRole("heading", { name: "About" });
    expect(aboutElement).toBeInTheDocument();
    const interestsElement = screen.getByRole("heading", { name: "Interests" });
    expect(interestsElement).toBeInTheDocument();
  });
});
