import { setTextFilter, setCategoryBuy, setCategorySell } from "../../actions/filters";

test('should set text filter action object with text value', () => {
    const action = setTextFilter('abc123');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'abc123'
    })
});

test('should set buy action object', () => {
    const action = setCategoryBuy();
    expect(action).toEqual({
        type: 'SET_CATEGORY_BUY',
    })
});

test('should set sell action object', () => {
    const action = setCategorySell();
    expect(action).toEqual({
        type: 'SET_CATEGORY_SELL',
    })
});
