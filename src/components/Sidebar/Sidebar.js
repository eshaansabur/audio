import React, { useState } from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import WidgetsIcon from '@mui/icons-material/Widgets';
import './Sidebar.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HailIcon from '@mui/icons-material/Hail';
import BlockIcon from '@mui/icons-material/Block';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { KeyboardArrowUp } from '@mui/icons-material';
const Sidebar = () => {
    let [toggler, setToggler] = useState(false);
    let [toggler2, setToggler2] = useState(false);

    const handleToggler1 = () =>{
        setToggler(toggler => !toggler);
    }
    const handleToggler2 = () =>{
        setToggler2(toggler2 => !toggler2);
    }
    let toggleClassCheck = toggler? <KeyboardArrowUpIcon></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon></KeyboardArrowDownIcon>;
    let toggleClassCheck2 = toggler2? <KeyboardArrowUpIcon></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon></KeyboardArrowDownIcon>;

    return (
        <div className="col-2 col-md-2 col-lg-2 sidebar">
                <div className="sidebarmenu">
                    <div className="sidebarlist">
                    <ul className='itemslisting'>
                    <li className='item'>
                    <a onClick={handleToggler1} class="products text-white" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"><PeopleOutlineIcon></PeopleOutlineIcon> Users {toggleClassCheck}</a>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse mt-3" id="multiCollapseExample2">
                            <div class="card card-body sub border border-0">
                                <ul className='sub-item-menu'>
                                   <Link to='/allusers'><li>All Users</li></Link>
                                    <Link to='/activeusers'><li>Active Users</li></Link>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className='item'>
                    <Link to='/blockedusers'><BlockIcon></BlockIcon> BlockList</Link>
                    </li>
                    <li className='item'>
                    <Link to='/coinpricing'><CurrencyExchangeIcon></CurrencyExchangeIcon> Change Coin Price</Link>
                    </li>
                    <li className='item'>
                    <Link to='/addagent'><HailIcon></HailIcon> Add Agent</Link>
                    </li>
                    <li className='item'>
                    <Link to='/recharge'><AttachMoneyIcon></AttachMoneyIcon> Recharge for Recharge Agent</Link>
                    </li>
                    <li className='item'>
                    <a onClick={handleToggler2} class="products text-white" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3"><ListAltIcon></ListAltIcon> Agents List {toggleClassCheck2}</a>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse mt-3" id="multiCollapseExample3">
                            <div class="card card-body sub border border-0">
                                <ul className='sub-item-menu'>
                                   <Link to='/view-rechargeagentlist'><li>View Recharge Agent List</li></Link>
                                    <Link to='/view-hostagentlist'><li>View Host Agent List</li></Link>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    {/* <li className='item'>
                    <a class="products text-white" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"><ListAltIcon></ListAltIcon> Orders</a>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body dark">
                                <ul>
                                   <Link to='/orders'><li>All Orders</li></Link>
                                    <Link to='/neworders'><li>New Orders</li></Link>
                                    <Link to='/returnorders'><li>Return Orders</li></Link>
                                    <Link to='/cancelorders'><li>Cancel Orders</li></Link>
                                    <Link to='/completedorders'><li>Completed Orders</li></Link>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </li> */}
                    <li className='item'>
                    <Link to='/login'>Login/ Sign Up</Link></li>
                    </ul>
                    </div>
                </div>
        </div>
    );
};

export default Sidebar;