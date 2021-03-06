import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import API from "../helpers/API";
import {RiUserSettingsFill} from 'react-icons/ri';

const MyJobs = (props) => {
    const [users, setUsers] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        getUsers();
    }, []);
    
    const getUsers = async () => {
        let response = await API.getContent('/users');
        if (response.ok) {
            let users = response.data;
            setUsers(users);
        }
        else {
          setErrorMsg(response.error)
        }
      };

    const handleDelete = async (userid) => {
        let response = await API.deleteContent(`/users/${userid}`);
        if (response.ok) {
            let users = response.data;
            setErrorMsg("");
            setUsers(users);
        }
        else {
            setErrorMsg(response.error)
        }
    }

    const handleAdminChange = async (userid, usertype) => {
        let response = await API.updateAdmin(userid, usertype);
        if (response.ok) {
            let users = response.data;
            setUsers(users)
        }
        else {
            setErrorMsg(response.error);
        }
    }

    return (
     <div className="container">
      <h2><RiUserSettingsFill className="me-2" />Manage Users</h2>
      
        {props.user.usertype === "admin"}

      <Table bordered>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Email address</th>
            <th>User type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users
            .map(u => (
              <tr key={u.userid}>
                <td>{u.userid}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.usertype}</td>
                <td>{u.usertype === "admin" ? (<button className="btn btn-danger me-3" onClick={e => handleAdminChange(u.userid, u.usertype)}>Remove admin power</button>) : (<button className="btn btn-primary me-3" onClick={e => handleAdminChange(u.userid, u.usertype)} >Set as admin</button>)
                    }<button className="btn btn-danger" onClick={e => handleDelete(u.userid)}>Remove user</button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      {errorMsg && errorMsg === "Error 401: Unauthorized" ? <p>Sorry! You can't delete that user because they currently have jobs assigned to them. Please reassign their jobs and try again.</p> : <p>{errorMsg}</p>}
     </div>

  )
}

export default MyJobs