import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllUser = (props) => {
    const {_id, status, name, username, email, address, phone, balance} = props.user;
    const {handleDeleteUser} = props;
    const navigate = useNavigate();
    const seeUserDetails = (id) =>{
        navigate(`/seeUserDetails/${id}`)
    }
    const banUser = (id) =>{
        navigate(`/banUser/${id}`)
    }
    return (
        <tr>
        <th scope="row">{_id}</th>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{balance}</td>
        <td>{phone}</td>
        <td>{status? <span className='badge rounded-pill bg-success px-4 py-2'>active</span> : <span className='badge rounded-pill bg-danger px-4 py-2'>inactive</span>}</td>
        <td className='px-3'><button onClick={()=>seeUserDetails(_id)} className='btn login-button text-white'><small>Details</small></button></td>
        <td><button onClick={()=>handleDeleteUser(props.user)} className='btn btn-danger'><small>Delete</small></button></td>
        <td><button onClick={()=>banUser(_id)} className='btn btn-secondary text-white'><small>Block</small></button></td>
    </tr>
    );
};

export default AllUser;