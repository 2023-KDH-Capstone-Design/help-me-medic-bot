import React, { useState, useEffect } from "react";

import LogIn from "./pages/LogIn";
import Main from "./pages/Main";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("name") !== null) setIsLogin(true);
  }, []);

  return isLogin ? <Main /> : <LogIn />;
};

export default App;
