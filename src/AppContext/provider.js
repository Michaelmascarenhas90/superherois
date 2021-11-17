import React, { useEffect, useState } from "react";
import AppContext from "./context";

import api from "../request/api";

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchHerois() {
      const herois = await api();
      setData(herois);
    }
    fetchHerois();
  }, []);

  return (
    <AppContext.Provider value={ { data } }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
