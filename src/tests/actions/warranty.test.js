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
import moment from "moment";

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
    database.ref(`users/${uid}/warranties`).set(warrantiesData).then(() => done());
})

test('should setup addWarranty action object', () => {
    const action = addWarranty(warranties[0]);
    expect(action).toEqual({
        type: 'ADD_WARRANTY',
        warranty: warranties[0]
    });
});

test('should add warranty to store and database', (done) => {
    const store = createMockStore(defaultAuthState);

    const warranty = {
        category: 'buy',
        number: 1,
        item: 'New',
        model: 'macbook pro',
        serialNumber: '',
        startDate: moment(0).add(1, 'days').valueOf(),
        duration: 24,
        invoice: '',
        other: ''
    }

    store.dispatch(startAddWarranty(warranty)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_WARRANTY',
            warranty: {
                id: expect.any(String),
                ...warranty
            }
        });

        return database.ref(`users/${uid}/warranties/${actions[0].warranty.id}`)
            .once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(warranty);
        done();
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

test('should edit a warranty in store and in database', (done) => {
   const store = createMockStore(defaultAuthState);

   const id = 0;
   const updates = { category: 'sell', duration: 100 };

   store.dispatch(startEditWarranty(id, updates)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
         type: 'EDIT_WARRANTY',
         id,
         updates
      });

      return database.ref(`users/${uid}/warranties/${id}`).once('value');
   }).then((snapshot) => {
        expect(snapshot.val().duration).toBe(updates.duration);
        done();
   });
});

test('should setup removeWarranty action object', () => {
    const action = removeWarranty(warranties[0].id);
    expect(action).toEqual({
        type: 'REMOVE_WARRANTY',
        id: warranties[0].id
    });
});

test('should remove warranty from store and database', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = 0;

    store.dispatch(startRemoveWarranty(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_WARRANTY',
            id
        });

        return database.ref(`users/${uid}/warranties/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

// test('should setup setWarranties action object', () => {
//     const action = setWarranties(warranties);
//     expect(action).toEqual({
//         type: 'SET_WARRANTIES',
//         warranties
//     });
// });