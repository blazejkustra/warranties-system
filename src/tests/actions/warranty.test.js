import { addWarranty, editWarranty, setWarranties, removeWarranty } from "../../actions/warranty";
import warranties from "../fixtures/warranties";

test('should setup addWarranty action object', () => {
    const action = addWarranty(warranties[0]);
    expect(action).toEqual({
        type: 'ADD_WARRANTY',
        warranty: warranties[0]
    });
});

test('should setup editWarranty action object', () => {
    const updates = { number: '123', other: 'abc123'};
    const action = editWarranty(warranties[0].id, updates);
    expect(action).toEqual({
        type: 'EDIT_WARRANTY',
        id: warranties[0].id,
        updates
    });
});

test('should setup removeWarranty action object', () => {
    const action = removeWarranty(warranties[0].id);
    expect(action).toEqual({
        type: 'REMOVE_WARRANTY',
        id: warranties[0].id
    });
});

test('should setup setWarranties action object', () => {
    const action = setWarranties(warranties);
    expect(action).toEqual({
        type: 'SET_WARRANTIES',
        warranties
    });
});