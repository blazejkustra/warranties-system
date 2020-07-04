import warrantyReducer from '../../reducers/warranty';
import warranties from "../fixtures/warranties";
import moment from 'moment';

test('should set default state', () => {
    const state = warrantyReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})

test('should add valid warranty', () => {
    const action = { type: 'ADD_WARRANTY', warranty: warranties[1] };
    const state = warrantyReducer([warranties[0]], action);
    expect(state).toEqual(warranties);
})

test('should remove a warranty', () => {
    const action = { type: 'REMOVE_WARRANTY', id: warranties[1].id };
    const state = warrantyReducer(warranties, action);
    expect(state).toEqual([warranties[0]]);
})

test('should edit a warranty', () => {
    const updates = { other: 'abc123' };
    const action = { type: 'EDIT_WARRANTY', id: warranties[0].id, updates};
    const state = warrantyReducer(warranties, action);
    expect(state[0].other).toEqual(updates.other);
})

// test('should setup addWarranty action object', () => {
//     const action = addWarranty(warranties[0]);
//     expect(action).toEqual({
//         type: 'ADD_WARRANTY',
//         warranty: warranties[0]
//     });
// });
//
// test('should setup editWarranty action object', () => {
//     const updates = { number: '123', other: 'abc123'};
//     const action = editWarranty(warranties[0].id, updates);
//     expect(action).toEqual({
//         type: 'EDIT_WARRANTY',
//         id: warranties[0].id,
//         updates
//     });
// });
//
// test('should setup removeWarranty action object', () => {
//     const action = removeWarranty(warranties[0].id);
//     expect(action).toEqual({
//         type: 'REMOVE_WARRANTY',
//         id: warranties[0].id
//     });
// });
//
// test('should setup setWarranties action object', () => {
//     const action = setWarranties(warranties);
//     expect(action).toEqual({
//         type: 'SET_WARRANTIES',
//         warranties
//     });
// });