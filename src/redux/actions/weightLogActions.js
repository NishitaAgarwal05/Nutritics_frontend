import { ActionTypes } from "../constants/action-types"
import weightLogService from "../services/weightLogService";

export const createWeightLog=(weightLog)=> async (dispatch)=>{
    try{
        const res= await weightLogService.create(weightLog);
        dispatch({
            type:ActionTypes.CREATE_WEIGHTLOG,
            payload:weightLog,
        });
        return Promise.resolve(res.data);
    } catch (err){
        return Promise.reject(err);
    }
    
};

export const readWeightLog=()=>async (dispatch)=>{
    try{
        const res= await weightLogService.getAll();
        console.log(res);
        dispatch({
            type:ActionTypes.READ_WEIGHTLOG,
            payload:res.data,
        });
    } catch (err){
        console.log(err);
    }
   
};

export const updateWeightLog=(id,data)=>async (dispatch)=>{
    try{
        const res= await weightLogService.update(id,data);
        dispatch({
            type:ActionTypes.UPDATE_WEIGHTLOG,
            payload:data,
        });
        return Promise.resolve(res.data);
    } catch (err){
        return Promise.reject(err);
    }
   
};


export const deleteWeightLog=(id)=>async (dispatch)=>{
    try{
        await weightLogService.delete(id);
        dispatch({
            type:ActionTypes.DELETE_WEIGHTLOG,
            payload:id,
        });
    } catch (err){
        console.log(err);
    }
   
};

export const readWeightLogByUser=(id)=>async (dispatch)=>{
    try{
        const res= await weightLogService.getById(id);
        console.log(res);
        dispatch({
            type:ActionTypes.READ_WEIGHTLOG_BYID,
            payload:res.data,
        });
    } catch (err){
        console.log(err);
    }
   
};