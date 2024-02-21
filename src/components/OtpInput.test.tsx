// otp-input.test.tsx
import { render, screen } from "../utils/test-utils";
import OtpInput from "./OtpInput";
import userEvent from "@testing-library/user-event"; // Import userEvent

// Extend Jest matchers with custom matchers
// You may need to create a file (e.g., jest.setup.js) to import this file globally in your Jest configuration.
import "@testing-library/jest-dom/extend-expect";

test("OtpInput component", () => {
  const onChangeMock = jest.fn();

  render(<OtpInput value="" valueLength={4} onChange={onChangeMock} />);

  // Accessing the input elements
  const inputs = screen.getAllByRole("textbox");

  // Test input focus and value insertion
  userEvent.type(inputs[0], "1");
  expect(onChangeMock).toHaveBeenCalledWith("1");
  expect(inputs[0]).toHaveValue("1"); // Use toHaveValue from jest-dom
  expect(inputs[1]).toHaveFocus(); // Use toHaveFocus from jest-dom

  // Test arrow key navigation
  userEvent.type(inputs[1], "{arrowleft}");
  expect(inputs[0]).toHaveFocus();

  userEvent.type(inputs[0], "{arrowright}");
  expect(inputs[1]).toHaveFocus();

  // Test backspace key functionality
  userEvent.type(inputs[1], "{backspace}");
  expect(onChangeMock).toHaveBeenCalledWith("");
  expect(inputs[0]).toHaveFocus();

  // Test reaching the last input and triggering API fetch
  userEvent.type(inputs[0], "1");
  userEvent.type(inputs[1], "2");
  userEvent.type(inputs[2], "3");
  userEvent.type(inputs[3], "4");
  expect(onChangeMock).toHaveBeenCalledWith("1234");
  expect(inputs[3]).toHaveFocus();
  expect(console.log).toHaveBeenCalledWith("fetch API");
});
