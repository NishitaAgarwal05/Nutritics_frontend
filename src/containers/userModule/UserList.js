import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {ImBlocked} from "react-icons/im";
import {FiActivity} from "react-icons/fi"
class UserList extends Component {
state = { 
      userlist:[]
     }
     componentDidMount() {
        console.log("componentDidMount");
        axios
          .get("https://nutritrics-backend.herokuapp.com/api/v1/user/listUsers",{
            headers:{
              "Authorization": localStorage.jwtToken
            }
          })
          .then((response) => {
            console.log(response);
            this.setState({ userlist: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
      }
      handleClick = (id) =>{
        let data={};
        axios.put(`https://nutritrics-backend.herokuapp.com/api/v1/user/activateOrBlockUser/${id}`,data,{
          headers:{
            "Authorization": localStorage.jwtToken
          }
      })
        .then((res) => {
            console.log(res.data)
            alert("Status updated successfully!"); 
            window. location. reload(false);
            // this.props.navigate("/nutritionPlan")
        })
        .catch((err) => {console.log(err)});
    };
    render() { 
        return (
          <div className="w-75 mx-auto mt-3" style={{height: "100vh"}}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.userlist.map((u) => (
                  <tr key={u.id}>
                  <td>{u.userId}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                    <td>
                      {
                        u.status.toLowerCase()==="active"?
                        <button style={{ margin: '.25rem'}} type="button" className="btn btn-outline-success" size="sm" onClick={this.handleClick.bind(this,u.userId)}><FiActivity></FiActivity></button>
                        :
                        <button style={{ margin: '.25rem'}}  type="button" className="btn btn-outline-secondary" onClick={this.handleClick.bind(this,u.userId)}><ImBlocked></ImBlocked></button>                      
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          );
    }
}
 
export default UserList;