const actions = {
    create: 'CREATE_FORM',
    update: 'UPDATE_FORM',
    clear: 'CLEAR_FORM'
};

export const createForm = payload => {
    return {
        type: "CREATE_FORM",
        payload
    };
};

export const updateForm = payload => {
    return {
        type: "UPDATE_FORM",
        payload
    };
};

export const clearForm = () => {
    return {
        type: "CLEAR_FORM"
    };
};
  

const initialState = {
    startDate: undefined,
    days: undefined,
    code: undefined,
    error: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.create: return action.payload;
        case actions.update: return { ...state, ...action.payload };
        case actions.clear: return {};
        default: return state;
    }
};