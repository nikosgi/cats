import { render } from '@testing-library/react';
import Loading from './Loading';
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


it("renders an image", () => {
    act(() => {
      render(<Loading />, container);
    });
    const img = document.querySelector("img");
    expect(img.src).toContain('logo.svg')

  });


