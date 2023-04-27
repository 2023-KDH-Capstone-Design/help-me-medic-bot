import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/test/test/");
      const result = res.json();
      return result;
    };

    fetchData().then((res) => setData(res));
  }, []);

  return <div className="App">{JSON.stringify(data)}</div>;
};

export default App;
