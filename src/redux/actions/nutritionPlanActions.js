import axios from "axios";
//actions to get all products
export const getAllPlansAction = ()=> async(dispatch) =>{
    const response = await axios.get("https://nutritrics-backend.herokuapp.com/api/v1/nutritionPlan/getAllPlans");
    console.log(response.data);
    dispatch({
        type: "GET_PLANS",
        payload: response.data,
    });
};

// Get plan by id action
export const getPlanByIdAction = (id) => async (dispatch) => {
    const result = await axios.get("https://nutritrics-backend.herokuapp.com/api/v1/nutritionPlan/getPlan/"+id);
    console.log(result);
    console.log(result.data);
    dispatch({
      type: "GET_PLAN",
      payload: result.data,
    });
  };

  export const addPlanAction = (plan) => async (dispatch) => {
    const result = await axios.post("https://nutritrics-backend.herokuapp.com/api/v1/nutritionPlan/createPlan", plan);
    console.log(result);
    console.log(result.data);
    dispatch({
      type: "ADD_PLAN",
      payload: result.data,
    });
  };

  export const deletePlanAction = (id) => async (dispatch) => {
    const result = await axios.delete(`api/v1/nutritionPlan/deletePlan/${id}`);
    console.log(result);
    console.log(result.data);
    dispatch({
      type: "DELETE_PLAN",
      payload: result.data,
    });
  };
  
  export const updatePlanAction = (plan) => async (dispatch) => {
    const result = await axios.put("https://nutritrics-backend.herokuapp.com/api/v1/nutritionPlan/updatePlan", plan);
    console.log(result);
    console.log(result.data);
    dispatch({
      type: "UPDATE_PLAN",
      payload: result.data,
    });
  };
  

