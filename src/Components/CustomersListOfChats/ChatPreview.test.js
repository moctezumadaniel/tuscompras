import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChatPreview } from "./index";
import ReduxProvider from "../ReduxProvider";

test("Chat Preview name and last message", () => {
  render(
    <ReduxProvider>
      <ChatPreview
        name={"Juan Daniel Trejo Moctezuma"}
        lastMessage={"Quiero hacer una pregunta sobre"}
      />
    </ReduxProvider>
  );
  const customerName = screen.queryByTestId("customerName");
  expect(customerName).toHaveTextContent(/Juan Daniel Trejo Moctezuma/);

  const lastMessage = screen.queryByTestId("lastMessage");
  expect(lastMessage).toHaveTextContent(/Quiero hacer una pregunta sobre/);
});
