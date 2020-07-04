//ADD_WARRANTY
export const addWarranty = (warranty) => ({
    type: 'ADD_WARRANTY',
    warranty
});

//EDIT_WARRANTY
export const editWarranty = (id, updates) => ({
    type: 'EDIT_WARRANTY',
    id,
    updates
});

//REMOVE_WARRANTY
export const removeWarranty = (id) => ({
    type: 'REMOVE_WARRANTY',
    id
});

//SET_WARRANTIES
export const setWarranties = (warranties) => ({
    type: 'SET_WARRANTIES',
    warranties
});

