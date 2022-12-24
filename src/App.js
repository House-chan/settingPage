import './App.css';
import React, {useState} from "react"
import Topic from "./components/Topic"
import Profile from "./components/Profile"
import Address from "./components/Address"
import Payment from "./components/Payment"
import Privacy from "./components/Privacy"
import Purchase from "./components/Purchase"
// import Topic from "./components/AdminPage/Topic"
// import Promotion from "./components/AdminPage/Promotion"

function App() {
  
  const [active, setActive] = useState("Profile");
  // const [active, setActive] = useState("Promotion");

 
  return (
    <div className="container">
      
      <Topic setState={setActive}/>
      {active === "Profile" && <Profile />}
      {active === "Address" && <Address />}
      {active === "Payment" && <Payment />}
      {active === "Privacy" && <Privacy />}
      {active === "Purchase" && <Purchase />}
      {/* <Topic setState={setActive}/>
      {active === "Promotion" && <Promotion/>} */}

    </div>
  );
}


export default App;
