import { act, fireEvent, render } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("rendered input", () => {
    const { getByTestId } = render(<Input showDiv={false} />);
    const inputElement = getByTestId("searchBar");
    expect(inputElement).toBeTruthy();
  });

  it("rendered div", () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const divElement = getByTestId("divText");
    expect(divElement).toBeTruthy();
  });

  it("don't rendered div", () => {
    const { queryByTestId } = render(<Input showDiv={false} />);
    const divElement = queryByTestId("divText");
    expect(divElement).toBeFalsy();
  });
  it("change on input cause change on header", async () => {
    await act(async () => {
      const { getByTestId } = render(<Input showDiv={true} />);
      const inputElement = getByTestId("searchBar");
      const headerElement = getByTestId("displaySearch");
      const inputWord = "Regan";
      await fireEvent.change(inputElement, { target: { value: inputWord } });
      expect(headerElement.innerHTML).toBe(inputWord);
    });
  });
});
