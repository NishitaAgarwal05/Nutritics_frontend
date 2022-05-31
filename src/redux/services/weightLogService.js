import http from "../../http-common";

class WeightLogService{
    get(id){
        return http.get(`/showWeightLog/${id}`);
    }
    getById(id){
        return http.get(`/showWeightLogByUserId/${id}`);
    }
    getAll(){
        return http.get("/showAllWeightLog");
    }
    create(data){
        return http.post("/addWeightLog",data);
    }
    update(id,data){
        return http.put(`/updateWeightLog/${id}`,data);
    }
    delete(id){
        return http.delete(`/removeWeightLog/${id}`);
    }

}
export default new WeightLogService();