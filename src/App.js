import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import NutritionPlan from './containers/nutritionPlan/NutritionPlan';
import UpdatePlan from './containers/nutritionPlan/UpdatePlan';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AbacProvider } from "react-abac";
import NavBar from './containers/NavBar';
import { Navigate } from 'react-router';
import PlanDetails from './containers/nutritionPlan/PlanDetails';
import Footer from './containers/Footer';
import NewsLetterForm from './containers/NewsLetterForm';
import AddWeightLog from './containers/weightLog/AddWeightLog';
import WeightLogList from'./containers/weightLog/WeightlogList';
import EditWeightLog from'./containers/weightLog/EditWeightLog';
import Contact from './containers/Contact';
import AddNutritionPlan from './containers/nutritionPlan/AddPlan';

import AddDietPlan from "./containers/dietPlan/AddPlan";
import DietPlan from "./containers/dietPlan/DietPlan";
import DietPlanDetails from "./containers/dietPlan/PlanDetails";
import UpdateDietPlan from './containers/nutritionPlan/UpdatePlan';

import Payments from './containers/paymentModule/Payments';
import AddPaymentOffer from './containers/paymentModule/AddOffer';
import AddPayment from './containers/paymentModule/AddPayment';
import UpdatePayment from './containers/paymentModule/UpdatePayment';
import Login from './containers/Login';
import WeightLogListById from './containers/weightLog/WeightLogListById';

import LoginUser from "./containers/userModule/Login";
import UserList from './containers/userModule/UserList';
import RegisterUser from './containers/userModule/RegisterUser';
import UpdateUser from './containers/userModule/UpdateUser';

function App() {
  const roles={
    ADMIN: "ADMIN",
    USER: "USER",
  };
  const permissions={
    EDIT_PLAN: "EDIT_PLAN",
  }
  const rules={
    [roles.ADMIN]:{
      [permissions.EDIT_PLAN]: true
    },
  };
  return (
    <div className="App">
      <AbacProvider rules={rules} /*user=*/>
        <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />


          <Route path="/nutritionPlan" element={<NutritionPlan />} />
          <Route path="/nutritionPlan/details/:id" element={<PlanDetails />} />
          <Route path="/nutrionPlan/add" element={<AddNutritionPlan />} />
          <Route path="/nutritionPlan/update/:planId" element={<UpdatePlan />} />


          <Route path="/weightLog/add" element={<AddWeightLog/>}/>
          <Route path="/weightLogs/admin" element={<WeightLogList/>}/>
          <Route path="/weightLog/update/:id" element={<EditWeightLog/>}/>
          <Route path="/weightLogs/:id" element={<WeightLogListById />}/>
          <Route path="/weightLogs" element={<Login/>}/>

          <Route path="/dietPlan" element={<DietPlan />} />
          <Route path="/dietPlan/details/:id" element={<DietPlanDetails />} />
          <Route path="/dietPlan/add" element={<AddDietPlan />} />
          <Route path="/dietPlan/update/:planId" element={<UpdateDietPlan />} />

          
          <Route path="/payments" element={<Payments />} />
          <Route path="/payment/add" element={<AddPayment />} />
          <Route path="/payment/update/:paymentId" element={<UpdatePayment />} />
          <Route path="/payment/AddOffer" element={<AddPaymentOffer />} />

          {/* <Route path="/Login" element = {<LoginUser/>} /> */}
          <Route path="/userlist" element = {<UserList/>} />
          <Route path = "/registerUser" element = {<RegisterUser/>} />
          <Route path = "/updateUser:id" element = {<UpdateUser/>} />

          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      
        <Footer />
        </Router>
      </AbacProvider>
    </div>
  );
}

export default App;
