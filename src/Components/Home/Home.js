import React from 'react';
import './Home.css';
import pic from './../../Assets/images/allToolsPic.jpg';
import MyNavbar from './../MyNavbar/MyNavbar';
import { NavLink } from 'reactstrap';
const Home=()=>{
    return(
        <>
        <MyNavbar />
        <div className="home_background">
           <div className="home_background_text">
               <p>
                   A Farmer-friendly portal to rent farm equipment on lease and take your farm towards making huge profit. 
               </p>   
                <NavLink className="register_here" href="#">Register now and let us help you.</NavLink>

           </div>
        </div>
        </>
    );
}

export default Home;
