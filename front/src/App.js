import React, { useState, useEffect } from "react";

import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/test/test/")
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className="App">{JSON.stringify(data)}</div>;
};

export default App;
