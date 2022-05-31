import React, { Component } from 'react';
class Admin extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (

            <div>
                <button type="button" class="btn btn-primary">AddUser</button>
                <button type="button" class="btn btn-secondary">UpdateUser</button>
                <button type="button" class="btn btn-dark">UserList</button>

            </div>




          );
    }
}
 
export default Admin;