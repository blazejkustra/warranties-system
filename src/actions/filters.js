// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SET_CATEGORY_BUY
export const setCategoryBuy = () => ({
    type: 'SET_CATEGORY_BUY',
});

// SET_CATEGORY_SELL
export const setCategorySell = () => ({
    type: 'SET_CATEGORY_SELL',
});