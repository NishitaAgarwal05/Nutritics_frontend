
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { readWeightLog, deleteWeightLog } from "../../redux/actions/weightLogActions"
import { Container, Table } from "reactstrap";
import {AiFillEdit} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {RiDeleteBinLine} from "react-icons/ri";
import {Button} from "reactstrap";
import {FiEdit2}from "react-icons/fi";
import LineChart from "./LineChart";

class WeightLogList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete=this.handleDelete.bind(this);
    this.state={
      userData:{
        labels:[],
        datasets:[{
          label:"",
          data:[],
        }]
      }
     
    }
  }
  fetch=()=>{

  }
  async componentDidMount() {
   
     await this.props.readWeightLog();
    
  
    let { weightLogs } = this.props;
    this.setState({
      userData:{
        labels:weightLogs.map((data)=>data.updatedAt),
        datasets: [
          {
            label: "Weight in Kg",
            data: weightLogs.map((data) => data.weight),
            backgroundColor: "#696969",
            borderColor: "#696969",
          },
        ],
      }
  })
  }

  handleDelete=(id)=>{
    this.props.deleteWeightLog(id)
    .then(()=>{
        console.log("Deleted");
        window.location.reload(true);
    })
    .catch((e)=>{
        console.log(e);
    })


  }

  render() {
    let { weightLogs } = this.props;
    let loggedIn=false;

    return (
      <div className="w-75 mx-auto mt-3" style={{minHeight: "100vh"}}>
      
        <h1>Admin Page</h1>
         
         <Link 
         to="/weightLog/add"
         type="button" className="btn  float-end" style={{backgroundColor:"#f3a82f" ,color:"white"}}>
         Add WeighLog
         </Link>
     <table className="table table-striped">
       <thead>
         <tr>
           <th>User Id</th>
           <th>Weight</th>
           <th>Created At</th>
           <th>Updated At</th>
         </tr>
       </thead>
       <tbody>
         {weightLogs && weightLogs.map((weightLog, index) => (
           <tr>
             <td>{weightLog.user.userId}</td>
             <td>{weightLog.weight}</td>
             <td>{weightLog.createdAt}</td>
             <td>{weightLog.updatedAt}</td>
             <td>
             <Link  to={`/weightLog/update/${weightLog.id}`}>
               <Button style={{ margin: '.25rem' }} outline color="primary" size="sm"><FiEdit2></FiEdit2></Button>
             </Link>
             <Button style={{ margin: '.25rem' }} outline color="danger" size="sm" onClick={()=>this.handleDelete(weightLog.id)}><RiDeleteBinLine></RiDeleteBinLine></Button>
             
             </td>
           </tr>
         ))}
       </tbody>
     </table>
    
         
</div>
    );
  }
}

const mapStateToProps = (state) => {
 
  return {
    weightLogs: state.weightLogReducer,
  };
};
export default connect(mapStateToProps, { readWeightLog, deleteWeightLog })(WeightLogList);
