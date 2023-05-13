import React from "react";
import Todowrapper from "./components/Todos.js"
import Navbar from "./components/navbar.js"
import About from "./components/About.js"
import {
    BrowserRouter as Router,
    Routes,
    Route,
 } from "react-router-dom"




 function App() {


return (
    <>
    <Router>

<Navbar/>


<Routes>
<Route exact path="/" 

    element={
   <>
<div className="Todos-wrapper">
<Todowrapper title="sdf"/>
 </div>
 </>

        
    }>
 </Route>


<Route exact path="/About" element={<About/>}>
</Route>

 </Routes>
 </Router>
 </>
);
}
export default App;
