import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState();
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
   const loggedInUser =localStorage.getItem('loggedInUser')
   if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
    
   }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData ) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if(employee){
         setUser("employee")
         setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee" ,data:employee}))
      }
     
    } else {
      alert("invalid Crendentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? <AdminDashboard changeUser={setUser}  /> : (user == 'employee'?<EmployeDashboard changeUser={setUser}  data={loggedInUserData} /> :null)}
      {/* <EmployeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
