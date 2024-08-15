"use client";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const useAuth = () => {
  const [islogin, setIslogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response: AxiosResponse = await axios("/api/auth/islogin", {
        withCredentials: true,
      });
      console.log(response)
      setIslogin(response.data.isAuthenticated);
      setUser(response.data)
    } catch (error) {
      setUser(null)
      setError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { islogin, isLoading, user, error };
};
