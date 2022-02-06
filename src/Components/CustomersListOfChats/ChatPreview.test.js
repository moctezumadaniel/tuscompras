import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChatPreview } from "./index";
import ReduxProvider from "../ReduxProvider";

test("Chat Preview name", () => {
  render(
    <ReduxProvider>
      <ChatPreview
        name={"Juan Daniel Trejo Moctezuma"}
        lastMessage={"Quiero hacer una pregunta sobre"}
      />
    </ReduxProvider>
  );
  const chatPreview = screen.findByTestId("customerName");
  expect(chatPreview).toHaveTextContent("Juan Daniel Trejo Moctezuma");
});
