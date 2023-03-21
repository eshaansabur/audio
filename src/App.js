import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AllUsers from './components/Users/AllUsers';
import ActiveUsers from './components/Users/ActiveUsers';
import BlockList from './components/BlockList/BlockList';
import CoinPricing from './components/CoinPricing/CoinPricing';
import AddAgent from './components/Agent/AddAgent';
import RechargeAgentList from './components/RechargeAgentList/RechargeAgentList';
import HostAgentList from './components/HostAgentList/HostAgentList';
import HostData from './components/HostData/HostData';
import RechargeForRechargeAgent from './components/Recharge/RechargeForRechargeAgent';

function App() {
  return (
    <div className="App row">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/allusers' element={<AllUsers></AllUsers>}></Route>
        <Route path='/activeUsers' element={<ActiveUsers></ActiveUsers>}></Route>
        <Route path='/blockedUsers' element={<BlockList></BlockList>}></Route>
        <Route path='/coinpricing' element={<CoinPricing></CoinPricing>}></Route>
        <Route path='/addagent' element={<AddAgent></AddAgent>}></Route>
        <Route path='/view-rechargeagentlist' element={<RechargeAgentList></RechargeAgentList>}></Route>
        <Route path='/view-hostagentlist' element={<HostAgentList></HostAgentList>}></Route>
        <Route path='/hosts/:hostId' element={<HostData></HostData>}></Route>
        <Route path='/recharge' element={<RechargeForRechargeAgent></RechargeForRechargeAgent>}></Route>

      </Routes>
    </div>
  );
}

export default App;
