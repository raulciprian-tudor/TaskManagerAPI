import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Authentication from "./components/authentication/authentication";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // const [client, setClient] = useState({ name: "" });

  // const handleChange = (e) => {
  //   setClient({ ...client, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_BASE_URL}/api/clients`,
  //       client,
  //     );
  //     console.log(response.data);
  //   } catch (err) {
  //     console.error("Error adding client:", err);
  //   }
  // };

  // const getClientsList = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_BASE_URL}/api/list`,
  //       {
  //         headers: { "Content-Type": "application/json" },
  //       },
  //     );
  //     console.log(response.data);
  //   } catch (err) {
  //     console.error("Error getting clients:", err);
  //   }
  // };

  return (
    <Routes>
      <Route element={<Authentication />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
