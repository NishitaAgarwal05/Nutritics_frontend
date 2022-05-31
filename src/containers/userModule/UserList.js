import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateUser from './UpdateUser';
class UserList extends Component {
state = { 
          
          userlist:[]

     }

     componentDidMount() {
        console.log("componentDidMount");
        axios
          .get("https://nutritrics-backend.herokuapp.com/api/v1/user/listUsers")
          .then((response) => {
            console.log(response);
            this.setState({ userlist: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
      }

    render() { 
        return (
            <table className="table table-striped">
            <thead>
              <tr>
                {/* <th>Id</th> */}
                <th>userId</th>
                <th>name</th>
                <th>contact</th>
                <th>gender</th>
                <th>D.O.B</th>
                <th>photo</th>
                <th>email</th>
                <th>role</th>
                <th>status</th>
                <th>weight</th>
                <th>height</th>
                <th>intensity</th>
                <th>goal</th>
                <th>workOutTime</th>
                <th>wakeUpTime</th>
                <th>sleepTIme</th>
                <th>medicalCondition</th>
                <th>allergicTo</th>
                <th>loginName</th>
                <th>diateryOrientation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userlist.map((p) => (
                <tr key={p.id}>
                {/* <td>{p.id}</td> */}
                  <td>{p.userIdentification}</td>
                  <td>{p.name}</td>
                  <td>{p.contact}</td>
                  <td>{p.gender}</td>
                  <td>{p.dob}</td>
                  <td>{p.photo}</td>
                  <td>{p.email}</td>
                  <td>{p.role}</td>
                  <td>{p.status}</td>
                  <td>{p.weight}</td>
                  <td>{p.height}</td>
                  <td>{p.intensity}</td>
                  <td>{p.goal}</td>
                  <td>{p.workOutTime}</td>
                  <td>{p.wakeUpTime}</td>
                  <td>{p.sleepTime}</td>
                  <td>{p.medicalCondition}</td>
                  <td>{p.allergicTo}</td>
                  <td>{p.loginName}</td>
                  <td>{p.diateryOrientation}</td>
                  <td>
                    <Link to={`/updateUser${p.id}`}>
                      <button type="button" class="btn btn-primary">Update User</button>   
                    </Link>

                    <Link to={`/removeUser${p.id}`}>
                      <button type="button" class="btn btn-danger">Delete User</button>   
                    </Link>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          );
    }
}
 
export default UserList;