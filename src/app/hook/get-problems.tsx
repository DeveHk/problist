"use client";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const useProblem = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [problems, setProblems] = useState<any>(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response: AxiosResponse = await axios("/api/problem/getall", {
                withCredentials: true,
            });
            console.log(response)
            setProblems(response.data);
        } catch (error) {
            setProblems(null)
            setError(true);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return { problems, isLoading, error };
};
