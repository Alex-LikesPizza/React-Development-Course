import { fireEvent, render, screen } from "@testing-library/react"
import FormTest from "../components/form";

test("Form Test", () => {
  render(<FormTest />);
  const textbox = screen.getByRole("textbox");
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  expect(textbox).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  fireEvent.change(textbox, {target: {value: "Example text"}});
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  

});