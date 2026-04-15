import {  Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './component/LandingPage'
import Dashboard from "./component/Dashboard";
import Login from "./component/LoginPage";
import Register from "./component/Register";
import HelpDesk from "./component/Helpdesk";
import Matching from "./component/Matching";
import CreateTask from "./component/CreateTask";
import Impact from "./component/Reach";
import VolunteerSetup from "./component/voleenter";

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/volunteer-setup" element={<VolunteerSetup />} />
          <Route path="/ngo-dashboard" element={<Dashboard />}/>
      
      </Routes>
    
  
          </>
  )
}

export default App
