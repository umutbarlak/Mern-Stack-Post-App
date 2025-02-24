import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("auth"));
  }, []);

  return [token];
};

export default useToken;
