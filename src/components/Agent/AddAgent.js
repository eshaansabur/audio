import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddAgent = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('users.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    const makeRechargeAgent = (event) => {
        event.preventDefault();
    }
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-5 text-start ms-4'>
                <form className='ml-5' onSubmit={makeRechargeAgent}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Enter User Id</label>
                    <input type="number" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <select class="form-select w-50" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">Make Recharge Agent</option>
                <option value="2">Make Host Agent</option>
                </select>
                        <button type="submit" className="btn login-button px-5 text-white mt-3">Update Information</button>
                </form>
        </div>
    );
};

export default AddAgent;