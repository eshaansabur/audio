import React, { useEffect, useState } from 'react';
import HostAgent from './HostAgent';

const HostAgentList = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('hostagents.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    const handleDeleteUser = (user) => {
        const remaining = users.filter(us => us._id !== user._id)
        console.log(remaining)
        setUsers(remaining);
    }
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-3 ms-4 text-start'>
        <p className='text-success fw-bold'>Total Host Agents: {users.length}</p>
         <table class="table table-secondary table-striped table-hover table-bordered border-light">
         <thead>
            <tr>
            <th scope="col">UserId</th>
            <th scope="col">Name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">Phone</th>
            <th scope="col">Hosts</th>
            <th scope="col">Address</th>
            <th scope="col">See Hosts Details</th>
            <th scope="col">Delete as a Host Agent</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => <HostAgent key={user._id} user={user} handleDeleteUser={handleDeleteUser}></HostAgent>)
            }
        </tbody>
        </table>   
        </div>
    );
};

export default HostAgentList;