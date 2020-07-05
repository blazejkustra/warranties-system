export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_WARRANTY':
            return [...state, action.warranty]
        case 'EDIT_WARRANTY':
            return state.map((warranty) => {
                if(warranty.id === action.id) {
                    return {
                        ...warranty,
                        ...action.updates
                    };
                } else {
                    return warranty;
                }
            });
        case 'REMOVE_WARRANTY':
            return state.filter((warranty) => warranty.id !== action.id);
        case 'SET_WARRANTIES':
            return action.warranties;
        default:
            return state;
    }
};
