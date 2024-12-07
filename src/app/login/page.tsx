"use client";

import React, { FC } from "react";
import UseAxios from "@/hooks/useAxios";
import { headers } from "next/headers";
import axios from "axios";

type LoginModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (email: string, password: string) => void;
};

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
    const [email, setEmail] = React.useState("john@mail.com");
    const [password, setPassword] = React.useState("changeme");
    const { fetchData, error, loading, response } = UseAxios();

    const handleLogin = async () => {
        await fetchData("auth/login", "POST", {
            email: email,
            password: password,
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                    Login
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Insert your email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Insert your Password"
                    />
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleLogin}
                        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
