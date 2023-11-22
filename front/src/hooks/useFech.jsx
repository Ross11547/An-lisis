import { useState, useEffect } from "react";

export const UseFech=(ruta) => {
  const [res, setRes] = useState([]);
  const [loading,setLoading]=useState(true)

  const getApi = async () => {
    const response = await ruta();
    const json = await response?.json();
    setRes(json);
    setLoading(false);
  };
  useEffect(() => {
    getApi();
  }, []);

  return {
    loading,
    getApi,
    res,
  };
};

