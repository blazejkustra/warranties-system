import {
    addWarranty,
    editWarranty,
    setWarranties,
    removeWarranty,
    startAddWarranty,
    startEditWarranty,
    startRemoveWarranty,
    startSetWarranties
} from "../../actions/warranty";
import warranties from "../fixtures/warranties";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'test-uid';
const defaultAuthState = { auth: { uid }};

beforeEach((done) => {
    const warrantiesData = {};
    warranties.forEach(({
         id,
         category,
         number,
         item,
         model,
         serialNumber,
         startDate,
         duration,
         invoice,
         other
    }) => {
        warrantiesData[id] = { category, number, item, model, serialNumber,
                              startDate, duration, invoice, other }
    })
    console.log(warrantiesData)
    database.ref(`users/${uid}/warranties`).set(warrantiesData).then(() => done());
})

test('should setup addWarranty action object', () => {
    const action = addWarranty(warranties[0]);
    expect(action).toEqual({
        type: 'ADD_WARRANTY',
        warranty: warranties[0]
    });
});

test('should add warranty to store and database', () => {

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