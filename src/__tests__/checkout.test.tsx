import { render, screen, fireEvent } from "@testing-library/react";
import Checkout from "../components/Checkout";
import { CartProvider } from "../contexts/cart";


test("renders Checkout component", () => {
  render(
    <CartProvider>
      <Checkout />
    </CartProvider>
  );
  const totalText = screen.getByText(/total price:/i);
  expect(totalText).toBeInTheDocument();
  const checkoutButton = screen.getByRole("button", { name: /checkout/i });
  expect(checkoutButton).toBeInTheDocument();
});

test("calls emptyCart function when checkout button is clicked", () => {
  const emptyCartMock = jest.fn();
  jest.mock("../../contexts/cart", () => ({
    useCart: () => ({ calculateTotalPrice: jest.fn(), emptyCart: emptyCartMock }),
  }));

  render(
    <CartProvider>
      <Checkout />
    </CartProvider>
  );

  const checkoutButton = screen.getByRole("button", { name: /checkout/i });
  fireEvent.click(checkoutButton);
  expect(emptyCartMock).toHaveBeenCalledTimes(1);
});