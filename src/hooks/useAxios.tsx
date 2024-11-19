"use client";
import axios from "axios";
import { useState } from "react";
import { Product } from "@/type";

const UseAxios = () => {
    const [response, setResponse] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>("");
    const [loading, setLoading] = useState<boolean>(false);

    const axiosInstance = axios.create({
        baseURL: "https://api.escuelajs.co/api/v1/",
    });

    const fetchData = async (
        url: string,
        method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
        data = {},
        params = { offset: 0, limit: 0 }
    ) => {
        setLoading(true);
        setError(null);

        try {
            const result = await axiosInstance({ url, method, data, params });
            setResponse(result.data);
        } catch (error: any) {
            setError(error?.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };
    return { response, error, loading, fetchData };
};

export default UseAxios;
