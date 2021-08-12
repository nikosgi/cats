import { render, screen } from '@testing-library/react';
import Card from './Card';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";



let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders an image with url", () => {
    act(() => {
      render(<Card />, container);
    });
    const card = screen.getByTestId('card');
    const img = document.querySelector("img");
    expect(card).toContainElement(img)
    expect(img.src).toContain('stockpictures')

  });


it("renders a title and a description and a button", () => {
    act(() => {
        render(<Card />, container);
    });
    const card = screen.getByTestId('card');
    const action = screen.getByTestId('card-action');
    const title = document.querySelector("h3");
    const desc = document.querySelector("p");

    expect(card).toContainElement(title);
    expect(card).toContainElement(desc);
    expect(card).toContainElement(action);

});

it("renders the correct img url", () => {
    act(() => {
        render(<Card url="https://thecorrecturl/"/>, container);
    });

    const img = document.querySelector("img");
    expect(img.src).toBe("https://thecorrecturl/")

});

it("renders the correct title", () => {
    act(() => {
        render(<Card title="Test Cat Title"/>, container);
    });

    const desc = document.querySelector("h3");
    expect(desc.textContent).toBe("Test Cat Title")

});

it("renders the correct description", () => {
    act(() => {
        render(<Card desc="this is a test description"/>, container);
    });

    const desc = document.querySelector("p");
    expect(desc.textContent).toBe("this is a test description")

});


  