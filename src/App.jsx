import React, { useEffect } from "react";
import api from "./api/api";
import axios from "axios";

const App = () => {
  api
    .get(`stable/stock/AAPL/quote?token=${process.env.REACT_APP_API_KEY}`)
    .then((res) => console.log(JSON.parse(res.request.response)));
  return (
    <div>
      <h1>Hello from the other side!</h1>
      <p>Page1</p>
      <p>Page2</p>
    </div>
  );
};

export default App;
