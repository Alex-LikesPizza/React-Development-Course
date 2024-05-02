import FeedbackList from "../components/FeedbackList";
import { render, screen } from "@testing-library/react";

test('Feedback Message No Elements', () => {
  render(<FeedbackList feedbackList={[]}/>);
  const noFeedback = screen.getByText("No Feedback");
  expect(noFeedback).toBeInTheDocument();
});
test("Feedback Elements", () => {
  render(<FeedbackList feedbackList={[
    {id:1, text: "Item 1"},
    {id:2, text: "Item 2"}
  ]}/>);
  const listItem1 = screen.getByText("Item 1");
  expect(listItem1).toBeInTheDocument();
  const listItem2 = screen.getByText("Item 2");
  expect(listItem2).toBeInTheDocument();

  const listItem = screen.getAllByRole("listitem");
  expect(listItem.length).toBe(2);
})