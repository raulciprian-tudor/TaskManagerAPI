import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [client, setClient] = useState({ name: "" });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/clients`,
        client,
      );
      console.log(response.data);
    } catch (err) {
      console.error("Error adding client:", err);
    }
  };

  const getClientsList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/list`,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      console.log(response.data);
    } catch (err) {
      console.error("Error getting clients:", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={client.name}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Client</button>
      <button onClick={getClientsList}>Get Clients</button>
    </div>
  );
}

export default App;
