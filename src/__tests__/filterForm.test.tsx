import { fireEvent, render, screen } from "@testing-library/react";
import OptionForm from "../components/FilterForm";
import { IOptionForm } from "../components/FilterForm/filterForm.types";

const options: string[] = ["Option 1", "Option 2", "Option 3"];
const checked: string[] = ["Option 2"];

const defaultProps: IOptionForm = {
  title: "Test Form",
  options,
  checked,
  isLoading: false,
  id: "brand",
  onCheckedChange: jest.fn(),
};

describe("OptionForm", () => {
  it("renders the component with the correct props", () => {
    render(<OptionForm {...defaultProps} />);
    const formTitle = screen.getByText("Test Form");
    expect(formTitle).toBeInTheDocument();
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBe(options.length);
    expect(checkboxes[1]).toHaveAttribute("checked");
  });

  it("calls the onCheckedChange function when a checkbox is clicked", () => {
    const onCheckedChange = jest.fn();
    render(<OptionForm {...defaultProps} onCheckedChange={onCheckedChange} />);
    const checkbox = screen.getByLabelText("Option 1");
    fireEvent.click(checkbox);
    expect(onCheckedChange).toHaveBeenCalled();
  });

  it("filters the options when the search field is updated", () => {
    render(<OptionForm {...defaultProps} />);
    const searchField = screen.getByRole("textbox", { name: /search/i });
    fireEvent.change(searchField, { target: { value: "2" } });
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBe(1);
    expect(checkboxes[0]).toHaveAttribute("value", "Option 2");
  });

  it("shows a skeleton loader when isLoading is true", () => {
    render(<OptionForm {...defaultProps} isLoading={true} />);
    const skeletonLoader = screen.getByTestId("skeleton-loader");
    expect(skeletonLoader).toBeInTheDocument();
  });
});