import { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);

export const useCartContext = () => {
    return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        isInCart(item)
            ? console.warn('item already on cart')
            : setCartList([...cartList, item]);
    };

    const clearCart = () => {
        setCartList([]);
    };

    const isInCart = (id) => {
        return cartList.filter((item) => item.id === id).length !== 0;
    };

    const removeItem = (item) => {
        console.log(isInCart(item.id));
        isInCart(item.id) &&
            setCartList(cartList.filter((prod) => prod.id !== item.id));
    };

    const cartTotal = () => {
        if (cartList.length > 0) {
            let total = 0;
            cartList.map((item) => (total += item.price * item.quantity));
            return total;
        } else {
            return 0;
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                clearCart,
                removeItem,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
