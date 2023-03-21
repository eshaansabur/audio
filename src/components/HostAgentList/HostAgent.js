import React from 'react';
import { useNavigate } from 'react-router-dom';
const HostAgent = (props) => {
    const {_id, status, hosts, name, username, email, address, phone, balance} = props.user;
    const {handleDeleteUser} = props;
    const navigate = useNavigate();
    const seeHosts = (id) => {
        navigate(`/hosts/${id}`);
    }
    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{hosts}</td>
            <td>{address}</td>
            <td><button onClick={()=>seeHosts(_id)} className='btn login-button text-white'><small>Details</small></button></td>
            <td><button onClick={()=>handleDeleteUser(props.user)} className='btn btn-danger'><small>Delete</small></button></td>
        </tr>
    );
};

export default HostAgent;