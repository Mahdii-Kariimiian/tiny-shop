
'use client'
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.avif";
import search from "../../../public/icons/search.png";
import shoppingCart from "../../../public/icons/shopping-cart.png";
import heart from "../../../public/icons/heart.png";
import usFlag from "../../../public/icons/united-states-of-america.png";
import user from "../../../public/icons/user.png";
import Link from "next/link";
import LoginModal from "@/app/login/page";

const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleLogin = (email: string, password: string) => {
        console.log("Logging in with:", email, password);
        setIsLoginModalOpen(false);
    };

    return (
        <div className="bg-white flex gap-7 items-center text-black justify-between px-5 sticky top-0 z-10">
            <Link href={"/"} className="cursor-pointer">
                <Image
                    className="max-w-24"
                    src={logo}
                    alt="Logo"
                    layout="responsive"
                />
            </Link>

            <div className="flex gap-3 items-center mr-auto border border-gray-400 p-2 rounded-lg">
                <label htmlFor="">
                    <Image src={search} alt="Search Icon" width={25} />
                </label>
                <input
                    type="text"
                    className="w-96"
                    placeholder="Search for Products"
                />
            </div>

            <div className="flex gap-5 items-center">
                <Image src={shoppingCart} alt="Shopping Cart Icon" width={25} />
                <Image src={heart} alt="Favorite Icon" width={25} />
                <div className="flex gap-2 items-center">
                    <Image src={usFlag} alt="Flag" width={25} />
                    <p>English</p>
                </div>
            </div>

            <div
                className="cursor-pointer"
                onClick={() => setIsLoginModalOpen(true)}
            >
                <Image src={user} alt="Profile Icon" width={25} />
            </div>

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLogin={handleLogin}
            />
        </div>
    );
};

export default Header;
