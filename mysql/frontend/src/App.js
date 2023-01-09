import React, {} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import EditNew from "./Pages/EditNew";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/studentreg" element={<Register/>}/>
        <Route path="/studenthome" element={<Home/>}/>
        <Route path="/editnew/:id" element={<EditNew/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
