import { useEffect, useState, createContext } from 'react';
import {   BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react'
// import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import { verify } from "./auth/Users";
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Signup from "./components/SignUp/SignUp"
import Navbar from './components/Navbar/Navbar'
import DeliveryForm from './components/DeliveryDetails/DeliveryForm'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Services from './components/Service/Services';
import Service from './components/Service/Service';
import Receipts from './components/Receipts/Receipts';
import Receipt from './components/Receipts/Receipt';
import Trackings from './components/Tracking/Trackings';
import Tracking from './components/Tracking/Trackings';
import Orders from './components/OrderForm/OrderForm'
import OrderCard from './components/OrderForm/OrderCard'
import OrderForm from './components/OrderForm/OrderForm'
import PackageTracking from './components/Package_Tracking/Package_Tracking';
import Admin from "./components/Admin/Login/Login"
// import Dashboard from './components/Dashclassboard/scenes/Dashboard';
import Dashboard  from './components/Admin/Dashboard/Dashboard';
import Mapper from './components/Maper/Mapper';
// import Sidebar from "./components/Admin/scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
import Team from "./components/Admin/scenes/team";
import Invoices from "./components/Admin/scenes/invoices";
import Contacts from "./components/Admin/scenes/orders";
import Bar from "./components/Admin/scenes/bar/index";
import Form from "./components/Admin/scenes/form";
import Line from "./components/Admin/scenes/line";
import Pie from "./components/Admin/scenes/pie";
import FAQ from "./components/Admin/scenes/faq";
// import Geography from "./components/Admin/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/Admin/Glob/theme";
import Calendar from "./components/Admin/scenes/calendar/calendar";
import ProfileForm from './components/Profile/ProfileForm'


function App() {

  const [user, setUser] = useState(null)


  useEffect(() => {
    fetch("https://quickfleet-api.herokuapp.com/me")
    .then((r) => {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  },[])

  // useEffect(() => {
  //   const reverify = async () => {
  //     try {
  //       const currUser = await verify();
  //       setUserData(currUser);
  //       setAuthorized(true);
  //     } catch (error) {
  //       setAuthorized(false);
  //     }
  //   };
  //   reverify();
  // }, []);



  // authorized === true || authorized === false ?
  return  (
    <div className='App'>
      <Navbar user={user} setUser={setUser}/>
      <CssBaseline />
      <main className="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/service/:id' element={<Service />} />
              <Route path='/receipts' element={<Receipts />} />
              <Route path='/receipt/:id' element={<Receipt />} />
              <Route path='/trackings' element={<Trackings />} />
              <Route path='/orderform' element={<OrderForm />} />
              <Route path='/ordercard' element={<OrderCard />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/deliveryform' element={<DeliveryForm />} />
              {/* <Route path='/dashboard' element={<Dashboard />} /> */}
              <Route path='/admin' element={<Admin setUser={setUser}/>} />
              <Route path='/packagetrackings' element={<PackageTracking />} />
              <Route path='/tracking/:id' element={<Tracking />} />
              <Route path='/Login' element={<Login user={user} setUser={setUser} />} />
              <Route path='/Signup' element={<Signup  />} />
              <Route path='/Mapper' element={<Mapper  />} />
              <Route path='/profileform' element={<ProfileForm />} />
            </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
