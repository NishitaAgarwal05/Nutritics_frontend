const initialState = {
    payments: [],
    payment :{},
};

const paymentReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_PAYMENTS":
            return {...state, payments : action.payload};
        default:
            return state;
    }
};

export default paymentReducer;