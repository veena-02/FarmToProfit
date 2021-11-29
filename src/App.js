import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import FarmerDashboard from './Components/FarmerDashboard/FarmerDashboard';
import EquipmentById from './Components/EquipmentById/EquipmentById';
import ContactUs from './Components/ContactUs/ContactUs';
import FarmerRegistration from './Components/FarmerRegistration/FarmerRegistration';
import LessorRegistration from './Components/LessorRegistration/LessorRegistration';
import AddVehicle from './Components/AddVehicle/AddVehicle';
import SameTypeEquip from './Components/EquipmentOfSameType/SameTypeEquip.js';
import EditProfileF from './Components/UserProfile_Farmer/EditProfileF';
import EditProfileL from './Components/UserProfile_Lessor/EditProfileL';
import Footer from './Components/Footer/Footer';
import LessorDashboard from './Components/LessorDashboard/LessorDashboard';
import MyEquipment from './Components/MyEquipment/MyEquipment';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}/>  
          <Route path="lessorRegistration" element={<LessorRegistration />} /> 
          <Route path="farmerRegistration" element={<FarmerRegistration />} />
          <Route path="equipmentList" element={<FarmerDashboard />} />
          <Route path=":equipmentId" element={<EquipmentById/>} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="addvehicle" element={<AddVehicle />} />
          <Route path="equipmentList/:equipType" element={<SameTypeEquip />} />
          <Route path="equipmentList/:equipType/:equip" element={<EquipmentById />} />
          <Route path="editProfileF" element={<EditProfileF />} /> 
          <Route path="editProfileL" element={<EditProfileL />} /> 
          <Route path="lessorDashboard" element={<LessorDashboard />}/>
          <Route path="myEquipment" element={<MyEquipment />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
