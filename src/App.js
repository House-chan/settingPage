import './App.css';
import React, {useState} from "react"
import Topic from "./components/Topic"
import Profile from "./components/Profile"
import Address from "./components/Address"
import Payment from "./components/Payment"
import Privacy from "./components/Privacy"
import Purchase from "./components/Purchase"

function App() {
  
  const [active, setActive] = useState("Profile");

 
  return (
    <div className="container">
      {/* <h1> Testing </h1>
      <h2>hel {x ? "Yes" : "No" }</h2> */}
      
      <Topic state={setActive}/>
      {active === "Profile" && <Profile />}
      {active === "Address" && <Address />}
      {active === "Payment" && <Payment />}
      {active === "Privacy" && <Privacy />}
      {active === "Purchase" && <Purchase />}
      
      {/* if(activePage == "Profile"){
        <Profile />      
      }
      else if(activePage == "Address"){
        <Address />
      } */}

    </div>
  );
}


export default App;
