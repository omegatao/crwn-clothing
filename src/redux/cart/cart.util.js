export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        const newCartItems = cartItems.map((cartItem) => {
            return cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem;
        });
        console.log(newCartItems);
        return newCartItems;
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
