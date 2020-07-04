const filtersReducerDefaultState = {
    text: '',
    category: 'buy',
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text }
        case 'SET_CATEGORY_BUY':
            return { ...state, category: 'buy' }
        case 'SET_CATEGORY_SELL':
            return { ...state, category: 'sell' }
        default:
            return state;
    }
};

export default filtersReducer;