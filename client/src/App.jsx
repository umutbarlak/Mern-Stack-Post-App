import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import useToken from "./hooks/useToken";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

const App = () => {
  const [token] = useToken();
  const { modal } = useSelector((state) => state.modal);

  return (
    <BrowserRouter>
      {token && <Navbar />}
      {modal && <Modal />}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/"
          element={token === null ? <Navigate to={"/auth"} /> : <Home />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
