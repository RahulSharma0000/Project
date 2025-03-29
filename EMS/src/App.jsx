import React, { useContext, useState,useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState();
  const authData =  useContext(AuthContext) 

  useEffect(()=>{
 if(authData){
  const loggedInUser=localStorage.getItem("loggedInUser")
  if (loggedInUser) {
    setUser(loggedInUser.role)
    
  }
 }   
 
     },[authData])
  

const handleLogin = (email,password)=>{
if (email=='admin@me.com' && password=='123') {
  setUser('admin')
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
} else if (authData && authData.employees.find((e)=>email ==e.email&&e.password==password)) {
  setUser('employee')
  localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
}else{
  alert("invalid Data")
}  
}




  return (
    <>
      {!user ? <Login handleLogin ={handleLogin}/> :''}
      {user =='admin'? <AdminDashboard/> : <EmployeDashboard/>}
      {/* <EmployeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;

