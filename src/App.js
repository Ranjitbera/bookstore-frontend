import React from "react";
import LoginRegister from "./components/LoginRegister";
import Home from "./components/Home";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister/> }/>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
