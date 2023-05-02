import { render, screen } from '@testing-library/react';
import { Layout } from '../components/Layout';

describe('Layout', () => {
  test('renders header with correct title', () => {
    const onChange = jest.fn();
    render(<Layout onChange={onChange}>test children</Layout>);
    expect(screen.getByText('eteration')).toBeInTheDocument();
  });

  test('renders children', () => {
    const onChange = jest.fn();
    render(<Layout onChange={onChange}>test children</Layout>);
    expect(screen.getByText('test children')).toBeInTheDocument();
  });

  test('renders cart if there are cart items', () => {
    const onChange = jest.fn();
    jest.mock('../../contexts/cart', () => ({
      useCart: () => ({ cartItems: [{ product: { id: '1', price: '10' }, quantity: 1 }] }),
    }));
    render(<Layout onChange={onChange}>test children</Layout>);
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  test('does not render cart if there are no cart items', () => {
    const onChange = jest.fn();
    jest.mock('../../contexts/cart', () => ({
      useCart: () => ({ cartItems: [] }),
    }));
    render(<Layout onChange={onChange}>test children</Layout>);
    expect(screen.queryByText('Cart')).toBeNull();
  });

  test('renders checkout button', () => {
    const onChange = jest.fn();
    render(<Layout onChange={onChange}>test children</Layout>);
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });
});