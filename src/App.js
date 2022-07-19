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
import AddWeightLog from './containers/weightLog/AddWeightLog';
import IWeightLog from './containers/weightLog/IWeightLog';
import EditWeightLog from'./containers/weightLog/EditWeightLog';
import AddNutritionPlan from './containers/nutritionPlan/AddPlan';

import AddPlan from "./containers/dietPlan/AddPlan";
import DietPlan from "./containers/dietPlan/DietPlan";
import DietPlanDetails from "./containers/dietPlan/PlanDetails";
import UpdateDietPlan from './containers/dietPlan/UpdateDietPlan';

import Payments from './containers/paymentModule/Payments';
import AddPaymentOffer from './containers/paymentModule/AddOffer';
import AddPayment from './containers/paymentModule/AddPayment';
import UpdatePayment from './containers/paymentModule/UpdatePayment';

import Login from "./containers/userModule/Login";
import UserList from './containers/userModule/UserList';
import RegisterUser from './containers/userModule/RegisterUser';
import ProfileUpdate from './containers/userModule/ProfileUpdate';
import ChangePassword from './containers/userModule/ChangePassword';

function App() {
  return (
    <div className="App">
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
          <Route path="/weightLogs" element={<IWeightLog/>}/>
          <Route path="/weightLog/update/:id" element={<EditWeightLog/>}/>

          <Route path="/dietPlan" element={<DietPlan />} />
          <Route path="/dietPlan/details/:id" element={<DietPlanDetails />} />
          <Route path="/dietPlan/add" element={<AddPlan />} />
          <Route path="/dietPlan/update/:planId" element={<UpdateDietPlan />} />

          
          <Route path="/payments" element={<Payments />} />
          <Route path="/payment/add/:planId" element={<AddPayment />} />
          <Route path="/payment/update/:paymentId" element={<UpdatePayment />} />
          <Route path="/payment/AddOffer" element={<AddPaymentOffer />} />

          {/* <Route path="/Login" element = {<LoginUser/>} /> */}
          <Route path="/userlist" element = {<UserList/>} />
          <Route path = "/registerUser" element = {<RegisterUser/>} />
          <Route path = "/profileUpdate" element = {<ProfileUpdate/>} />
          <Route path = "/changePassword" element = {<ChangePassword/>} />

          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      
        <Footer />
        </Router>
    </div>
  );
}

export default App;
