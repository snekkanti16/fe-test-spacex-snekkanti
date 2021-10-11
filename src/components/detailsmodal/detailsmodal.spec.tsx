import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import DetailsModal from "./index";
import rowData from "./detailsModalMockData";

describe("/", () => {
  it("should render the DetailsModal View Button", () => {
    const { container } = render(<DetailsModal {...rowData} />);
    expect(container).toMatchSnapshot();
  });
  it("should render the DetailsModal on view button click", async () => {
    const { getByText,getByRole } = render(<DetailsModal {...rowData} />);
    const button = getByText("View");
    fireEvent.click(button);
    await waitFor(() => getByRole("presentation"));
  const elem = getByRole("presentation");
  expect(elem).toMatchSnapshot();
  });
});
