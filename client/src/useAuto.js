import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuto(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", { code })
      .then((res) => {
        console.log(res.data)
    })
      .catch(() => {
        Window.location = "/";
      });
  }, [code]);
}
