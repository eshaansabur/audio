import React from 'react';
import { useNavigate } from 'react-router-dom';
const BlockedUser = (props) => {
    const {_id, status, name, username, email, address, phone, balance} = props.user;
    const {handleDeleteUser} = props;
    const navigate = useNavigate();
    const seeUserDetails = (id) =>{
        navigate(`/blockedDetails/${id}`)
    }
    const unblockUser = (id) =>{
        navigate(`/unblock/${id}`)
    }
    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{balance}</td>
            <td>{phone}</td>
            <td className='px-3'><button onClick={()=>seeUserDetails(_id)} className='btn login-button text-white'><small>Details</small></button></td>
            <td><button onClick={()=>handleDeleteUser(props.user)} className='btn btn-danger'><small>Delete</small></button></td>
            <td><button onClick={()=>unblockUser(_id)} className='btn btn-secondary text-white'><small>Block</small></button></td>
        </tr>
    );
};

export default BlockedUser;