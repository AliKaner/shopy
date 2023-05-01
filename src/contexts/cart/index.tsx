import {
  createContext,
  useState,
  FC,
  ReactNode,
  useContext,
  useCallback,
} from "react";
import { ICartItem } from "../../api/models/ICartItem";
import { IProduct } from "../../api/models/IProduct";

interface ICartContext {
  cartItems: ICartItem[];
  addItemToCart: (product: IProduct) => void;
  removeItemFromCart: (productId: string) => void;
  calculateTotalPrice: () => number;
  emptyCart: () => void;
}

interface ICartProvider {
  children: ReactNode;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

const getInitialCartState = () => {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    return JSON.parse(cartData);
  }
  return [];
};

export const CartProvider: FC<ICartProvider> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>(() =>
    getInitialCartState()
  );

  const bulkUpdateCartItems = (newCartItems: ICartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(newCartItems));
    setCartItems(newCartItems);
  };

  const addItemToCart = useCallback(
    (product: IProduct) => {
      const existingItem = cartItems.find(
        (cartItem) => cartItem.product.id === product.id
      );

      const newCartItems = existingItem
        ? cartItems.map((cartItem) => {
            if (existingItem.id === cartItem.id) {
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
          })
        : [...cartItems, { product, quantity: 1, id: product.id }];
      bulkUpdateCartItems(newCartItems);
    },
    [cartItems]
  );

  const calculateTotalPrice = useCallback(() => {
    return cartItems.reduce((total, cartItem) => {
      const itemPrice = parseInt(cartItem.product.price) * cartItem.quantity;
      return total + itemPrice;
    }, 0);
  }, [cartItems]);

  const emptyCart = useCallback(() => {
    bulkUpdateCartItems([]);
  }, []);

  const removeItemFromCart = useCallback(
    (productId: string) => {
      const itemQuantity = cartItems.find(
        (cartItem) => cartItem.product.id === productId
      )?.quantity;

      if (itemQuantity === 1) {
        const newItems = cartItems.filter(
          (cartItem) => cartItem.product.id !== productId
        );
        bulkUpdateCartItems(newItems);
      }

      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.product.id === productId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    },
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        calculateTotalPrice,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
