import React, { useEffect, useState } from 'react';
import RechargeAgent from './RechargeAgent';

const RechargeAgentList = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('rechargeagents.json')
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
        <p className='text-success fw-bold'>Total Recharge Agents: {users.length}</p>
         <table class="table table-secondary table-striped table-hover table-bordered border-light">
         <thead>
            <tr>
            <th scope="col">UserId</th>
            <th scope="col">Name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">balance</th>
            <th scope="col">Phone</th>
            <th scope="col">Coins</th>
            <th scope="col">Address</th>
            <th scope="col">Delete Recharge Agent</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => <RechargeAgent key={user._id} user={user} handleDeleteUser={handleDeleteUser}></RechargeAgent>)
            }
        </tbody>
        </table>   
        </div>
    );
};

export default RechargeAgentList;