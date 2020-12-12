export const initialState = {
    basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            //remove from state only one item
            // another approach is to use uniq id's for each item(UUID library)
            const index = state.basket.findIndex(el =>
                el.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product id: ${action.id} as it's not in basket`
                );
            }
            return {
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;