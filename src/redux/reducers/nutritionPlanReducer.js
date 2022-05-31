const initialState = {
    plans: [],
    plan: {},
};

const nutritionPlanReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PLANS":
        return { ...state, plans: action.payload };
      case "GET_PLAN":
        return { ...state, plan: action.payload };
      case "ADD_PLAN":
        return { ...state, plans: [...plans, action.payload] }; // [p1, p2, p3, p4]
      case "DELETE_PLAN":
        const plans = state.plans.filter((p) => p.id !== action.payload.id); // p1, p3, p4
        return { ...state, plans: plans };
      case "UPDATE_PLAN":
        return state.plans.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
      default:
        return state;
    }
  };
  
  export default nutritionPlanReducer;
 
 