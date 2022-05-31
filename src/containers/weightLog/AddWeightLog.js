import React,{ Component, useState}  from "react";
import { connect, useDispatch } from "react-redux";
import { createWeightLog } from "../../redux/actions/weightLogActions";
import moment from 'moment';
import '../../style.css';

import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useNavigate , useLocation} from "react-router-dom";

var DatePicker = require("reactstrap-date-picker");

class AddWeightLog extends Component {

    constructor(props){
        super(props);
        this.handleChangeWeight=this.handleChangeWeight.bind(this);
        this.handleChangeDate1=this.handleChangeDate1.bind(this);
        this.handleChangeDate2=this.handleChangeDate2.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            
            id:"",
        weight:"",
        createdAt:"",
        updatedAt:"",
        user:{
            userId:"",
            userIdentification:"ABCD",
        name:"Muskan",
       contact:"9518789095",
       gender:"F",
       dob:"29-08-200",
       photo:"photo",
       email:"email",
       role:"role",
       status:"active",
       weight:60,
       height:5.6,
       intensity:12,
       goal:"goal",
       workOutTime:"32",
       wakeUpTime:"8:00",
       sleepTime:"9:00",
       medicalCondition:"good",
       allergicTo:"non",
       loginName:"ap",
       password:"123",
       diateryOrientation:123
        },
    submitted:false,
}
}
   componentDidMount(){
       console.log(this.windows)
   }
    handleChangeWeight=(e)=>{
        this.setState({
                
               weight:e.target.value
    });

    }

    handleChangeDate1=(e)=>{
        this.setState({
                
               createdAt:e.target.value
    });

    }

    handleChangeDate2=(e)=>{
        this.setState({
                
               updatedAt:e.target.value
    });

    }

    handleChangeUser=(e)=>{
        this.setState({
            user:{
                userId:e.target.value
            }
            
        })
    }


    async handleSubmit(){
        let id=this.props.userId!=""?this.props.userId:this.state.user.userId;
        let user={};
        await axios
        .get(`https://nutritrics-backend.herokuapp.com/api/v1/user/showUser/${id}`)
        .then((response) => {
         
         user=response.data;
         console.log(user);
        });
        const weightLog={
            id:this.state.id,
            weight:this.state.weight,
            createdAt:moment(this.state.createdAt).format('YYYY-MM-DD'),
            updatedAt:moment(this.state.updatedAt).format('YYYY-MM-DD'),
            user:user,
        };

        console.log(weightLog);
        this.props.createWeightLog(weightLog)
            .then((data)=>{
                this.setState({
                   
                 id:data.id,
                weight:data.weight,
                createdAt:data.createdAt,
                updatedAt:data.createdAt,
                user:data.user,
                submitted:true
            });
            console.log(data);
            this.props.navigate(`/weightLogs/${data.user.userId}`);
            // alert("Weight Log added successfully");

            })
            .catch((e)=>{
                console.log(e);
                alert("Could not add WeightLog because of some error");
            });
    }
    render(){
        var className=this.props.userId===""?"":"disable";
        
    return (
        
        <div data-testid="test-1">
           
                <div>
                   
                    <h1 >Add WeightLog Page </h1>
                    <Form >
                        <FormGroup>
                            <Label for="weight">Weight</Label>
                            <Input type="number" 
                            id="weight" 
                            name=" weight"
                             placeholder="Enter new Weight"
                             required
                             value={this.state.weight}
                             onChange={this.handleChangeWeight}/> 
                        </FormGroup>

                        <FormGroup>
                            <Label for="createdAt">Created At</Label>
                            <Input
                             type="date"
                            name="createdAt"
                            id="createdAt"
                            value={this.state.createdAt}
                            onChange={this.handleChangeDate1}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="updatedAt">Updated At</Label>
                            <Input
                             type="date"
                            name="updatedAt"
                            id="updatedAt"
                            value={this.state.updatedAt}
                            onChange={this.handleChangeDate2}
                           />
                        </FormGroup>
                       { this.props.userId===""?(
                        <FormGroup>
                            <Label for="userId">User Id</Label>
                            <Input
                             type="number"
                            name="userId"
                            id="userId"
                            value={this.state.user.userId}
                            onChange={this.handleChangeUser}
                            
                           />
                        </FormGroup>
                       ):(
                        <FormGroup>
                        <Label for="userId">User Id</Label>
                        <Input
                         type="number"
                        name="userId"
                        id="userId"
                        value={this.props.userId}
                        disabled
                        
                       />
                    </FormGroup>
                       )}
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </div>
           
            
    </div> 
    );
}
    }
    function WithNavigate(props) {
        let navigate = useNavigate();
        const location = useLocation();
        
        if(location.state){
  const { user } = location.state;
  console.log(user);
  return <AddWeightLog {...props} userId={user} navigate={navigate} />
        } else {
        return <AddWeightLog {...props} userId="" navigate={navigate} />
        }
    }
    
    //export default WithNavigate

export default connect(null,{ createWeightLog })(WithNavigate);