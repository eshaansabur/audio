import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HostDataPerPerson from './HostDataPerPerson';

const HostData = () => {
    const {hostId} = useParams();
    //console.log(hostId);
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/hostdata.json')
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
        <p className='text-success fw-bold'>Total Hosts of This User: {users?.length}</p>
         <table class="table table-secondary table-striped table-hover table-bordered border-light">
         <thead>
            <tr>
            <th scope="col">UserId</th>
            <th scope="col">Name</th>
            <th scope="col">username</th>
            <th scope="col">Earning in month</th>
            <th scope="col">Hours(today)</th>
            <th scope="col">Hours(This month)</th>
            <th scope="col">Coins</th>
            <th scope="col">Diamonds</th>
            <th scope="col">See Host Details</th>
            <th scope="col">Delete this host</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => <HostDataPerPerson key={user._id} user={user} handleDeleteUser={handleDeleteUser}></HostDataPerPerson>)
            }
        </tbody>
        </table>   
        </div>
    );
};

export default HostData;