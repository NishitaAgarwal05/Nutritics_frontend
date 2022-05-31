import { ActionTypes } from "../constants/action-types"

const initialState=[
    
]

export const weightLogReducer=(weightLogs=initialState,{ type, payload })=>{
    switch(type){
        case ActionTypes.CREATE_WEIGHTLOG:
            return [...weightLogs,payload];
        case ActionTypes.READ_WEIGHTLOG:
            console.log(payload);
            return payload;
        case ActionTypes.UPDATE_WEIGHTLOG:
            return weightLogs.map((weightLog)=>{
                if(weightLog.id=== payload.id){
                    return{
                        ...weightLogs,
                        ...payload,
                    };
                } else {
                    return weightLogs;
                }
            });
        case ActionTypes.DELETE_WEIGHTLOG:
            return weightLogs.filter(({ id })=> id!== payload.id);
        case ActionTypes.READ_WEIGHTLOG_BYID:
            return payload;
        default:
            return weightLogs;
    }
};
