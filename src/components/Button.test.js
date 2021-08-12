import { act, fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("rendered button", () => {
    const { getByTestId } = render(<Button />);
    const buttonElement = getByTestId("button");
    expect(buttonElement).toBeTruthy();
  });
  it("render 1 button before button click", () => {
    const { getAllByTestId } = render(<Button />);
    const buttonList = getAllByTestId("button");
    expect(buttonList).toHaveLength(1);
  });

  it("render 2 button after button click", async () => {
    await act(async () => {
      const { getAllByTestId } = render(<Button />);
      const buttonList = getAllByTestId("button");
      await fireEvent.click(buttonList[0]);
      expect(getAllByTestId("button")).toHaveLength(2);
    });
  });
});
