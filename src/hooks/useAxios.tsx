"use client";
import axios from "axios";
import { useState } from "react";
import { Product, TokenResponse } from "@/type";
import { headers } from "next/headers";

const UseAxios = () => {
    const [response, setResponse] = useState<Product | TokenResponse | null>(
        null
    );
    const [error, setError] = useState<string | null>("");
    const [loading, setLoading] = useState<boolean>(false);

    const accessToken = "testAccessToken";

    const axiosInstance = axios.create({
        baseURL: "https://api.escuelajs.co/api/v1/",
    });

    // interceptors
    axiosInstance.interceptors.request.use((config) => {
        if (accessToken) {
            config.headers.Authorization = `bearer ${accessToken}`;
        }
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response?.status === 401) {
                // request for refresh token with post
            }
        }
    );
    ///////////////

    const fetchData = async (
        url: string,
        method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
        data = {},
        params = { offset: 0, limit: 0 },
        headers = {}
    ) => {
        setLoading(true);
        setError(null);
        console.log("rendered");
        try {
            const result = await axiosInstance({
                url,
                method,
                data,
                params,
                headers,
            });
            setResponse(result.data);
            console.log("custom hook", result.data);
        } catch (error: any) {
            setError(error?.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };
    return { response, error, loading, fetchData };
};

export default UseAxios;
