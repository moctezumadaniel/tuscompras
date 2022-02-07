import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import CustomersListOfChats from ".";
import ReduxProvider from "../ReduxProvider";

test("Customer chats search input displays", () => {
  render(
    <ReduxProvider>
      <CustomersListOfChats />
    </ReduxProvider>
  );
  const search = screen.getByRole("searchbox");
  expect(search).toBeInTheDocument();
});
