import { render, screen, cleanup } from "@testing-library/react";

import Users from "../Users";

// test("should render users component", () => {
//   render(<Users />);
//   const userElement = screen.getByTestId("user-1");
//   expect(userElement).toBeInTheDocument();
//   expect(userElement).toHaveTextContent("Hi");
// });

afterEach(() => {
  cleanup();
});

test("should render illegal user", () => {
  const user = { id: 1, name: "john", age: 15 };
  render(<Users user={user} />);
  const userElement = screen.getByTestId("user-1");
  expect(userElement).toBeInTheDocument();
  expect(userElement).toHaveTextContent("john");
});

test("should render legal user", () => {
  const user = { id: 2, name: "kelly", age: 20 };
  render(<Users user={user} />);
  const userElement = screen.getByTestId("user-2");
  expect(userElement).toBeInTheDocument();
  expect(userElement).toHaveTextContent("kelly");
  expect(userElement).toContainHTML("green");
});
