import { BrowserRouter, Routes, Route } from "react-router-dom";
import userContext from "../hooks/userContext";
import { useState } from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

export default function Router() {
  const [user, setUser] = useState({});

  return (
    <userContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}
