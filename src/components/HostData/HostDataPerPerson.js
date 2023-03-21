import React from 'react';
import { useNavigate } from 'react-router-dom';
const HostDataPerPerson = (props) => {
    const {_id, status, earning, name, username, email, address, phone, daily, monthly, coins, diamonds} = props.user;
    const {handleDeleteUser} = props;
    const navigate = useNavigate();
    const seeUserDetails = (id) =>{
        navigate(`/hostData/${id}`)
    }
    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{username}</td>
            <td>{earning}</td>
            <td>{daily} hours</td>
            <td>{monthly} hours</td>
            <td>{coins}</td>
            <td>{diamonds}</td>
            <td><button onClick={()=>seeUserDetails(_id)} className='btn login-button text-white'><small>Details</small></button></td>
            <td><button onClick={()=>handleDeleteUser(props.user)} className='btn btn-danger'><small>Delete</small></button></td>
        </tr>
    );
};

export default HostDataPerPerson;