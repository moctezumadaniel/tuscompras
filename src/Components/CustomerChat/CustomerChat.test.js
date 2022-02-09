import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import CustomerChat, { Message, UserMessage, WriteMessage } from ".";
import ReduxProvider from "../ReduxProvider";

test("Chat name displays", () => {
  render(
    <ReduxProvider>
      <CustomerChat name={"Juan Daniel Trejo Moctezuma"} />
    </ReduxProvider>
  );
  const chatName = screen.getByTestId("chatName");
  expect(chatName).toBeInTheDocument;
  expect(chatName).toHaveTextContent("Juan Daniel Trejo Moctezuma");
});

test("Customer message displays correct message", () => {
  render(<Message message={"Customer message test"} />);
  const message = screen.getByTestId("message");
  expect(message).toHaveTextContent("Customer message test");
});

test("User message displays correct message", () => {
  render(<UserMessage message={"User message test"} />);
  const userMessage = screen.getByTestId("userMessage");
  expect(userMessage).toHaveTextContent("User message test");
});

test("New customer message input", () => {
  render(<WriteMessage />);
  const messageInput = screen.getByRole("textbox");
  expect(messageInput).toBeInTheDocument();
});
