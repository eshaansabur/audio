import React from 'react';
import './Topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import user1 from '../../images/person 1.png';
const Topbar = () => {
    const [newNotifications, setNewNotifications] = useState(5);
    const [settingsTask, setSettingsTask] = useState(0);
    const notifSetter =(zero) => {
        setNewNotifications(zero);
    }
    return (
        <div className='container-fluid topbar py-4 text-light'>
            <div className="topbarwrapper">
                <div className="topleft">
                <span className="logo text-light">Peace Garden Admin Panel</span>
                </div>
                <div className="topright">
                    <div className="topbariconcontainer mt-2">
                    <form class="d-flex">
                    <input class="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    </div>
                    <div className="topbariconcontainer">
                    <NotificationsIcon className='text-light'></NotificationsIcon>
                    {
                        newNotifications> 0 ? <span className='topIconBadge'>{newNotifications}</span> : ''
                    }
                    </div>
                    
                    <div className='topbariconcontainer nav-item dropdown text-light'>
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className='topavatar' src={user1} alt="" />
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Profile Settings</a></li>
                        <li><a class="dropdown-item" href="#">Messages/ Notice</a></li>
                        <li><a class="dropdown-item" href="#">Notifications</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;