import database from '../firebase/firebase';

//ADD_WARRANTY
export const addWarranty = (warranty) => ({
    type: 'ADD_WARRANTY',
    warranty
});

export const startAddWarranty = (warrantyData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            category = 'buy',
            number = '',
            item = '',
            model = '',
            serialNumber = '',
            startDate = 0,
            duration = 0,
            invoice = '',
            other = ''
        } = warrantyData;

        const warranty = {
            category, number, item, model, serialNumber, startDate, duration, invoice, other
        }

        return database.ref(`users/${uid}/warranties`).push(warranty).then((ref) => {
            dispatch(addWarranty({
                id: ref.key,
                ...warranty
            }));
        });
    };
};

//REMOVE_WARRANTY
export const removeWarranty = (id) => ({
    type: 'REMOVE_WARRANTY',
    id
});

export const startRemoveWarranty = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/warranties/${id}`).remove().then(() => {
            dispatch(removeWarranty(id));
        });
    };
};

//EDIT_WARRANTY
export const editWarranty = (id, updates) => ({
    type: 'EDIT_WARRANTY',
    id,
    updates
});

export const startEditWarranty = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/warranties/${id}`).update(updates).then(() => {
            dispatch(editWarranty(id, updates));
        });
    };
};

//SET_WARRANTIES
export const setWarranties = (warranties) => ({
    type: 'SET_WARRANTIES',
    warranties
});

export const startSetWarranties = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/warranties`)
            .once('value')
            .then((snapshot) => {
                const warranties = [];
                snapshot.forEach(childSnapshot => {
                    warranties.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                });
                return dispatch(setWarranties(warranties));
            });
    };
};