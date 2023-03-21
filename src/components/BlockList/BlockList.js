import React, { useEffect, useState } from 'react';
import BlockedUser from './BlockedUser';

const BlockList = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('users.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    const handleDeleteUser = (user) => {
        const remaining = users.filter(us => us._id !== user._id)
        console.log(remaining)
        setUsers(remaining);
    }
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-5 ms-4 text-start'>
        <p className='text-danger'>Total Blocked Users: {users.length}</p>
         <table class="table table-secondary table-striped table-hover table-bordered border-light">
         <thead>
            <tr>
            <th scope="col">UserId</th>
            <th scope="col">Name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">balance</th>
            <th scope="col">Phone</th>
            <th scope="col">See Info</th>
            <th scope="col">Delete User</th>
            <th scope="col">Unblock</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => <BlockedUser key={user._id} user={user} handleDeleteUser={handleDeleteUser}></BlockedUser>)
            }
        </tbody>
        </table>   
        </div>
    );
};

export default BlockList;