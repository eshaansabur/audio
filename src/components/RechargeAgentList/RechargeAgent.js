import React from 'react';
import { useNavigate } from 'react-router-dom';
const RechargeAgent = (props) => {
    const {_id, status, coins, name, username, email, address, phone, balance} = props.user;
    const {handleDeleteUser} = props;
    const navigate = useNavigate();
    
    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{balance}</td>
            <td>{phone}</td>
            <td>{coins}</td>
            <td>{address}</td>
            <td><button onClick={()=>handleDeleteUser(props.user)} className='btn btn-danger'><small>Delete</small></button></td>
        </tr>
    );
};

export default RechargeAgent;