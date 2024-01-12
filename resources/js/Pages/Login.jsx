import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, useForm, usePage } from "@inertiajs/react";

const Login = () => {
    const [hide, setHide] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        fullname: "",
        email: "",
        address: "",
        password: "",
        password_confirmation: "",
    });

    const toggleVisibility = () => {
        setHide((prevState) => !prevState);
    };

    return (
        <GuestLayout>
            <div className="flex justify-center items-center p-5 min-h-screen">
                <form className="w-[300px] md:w-[500px]" action="">
                    <div className="flex flex-col mb-4 space-y-2">
                        <h1 className="text-5xl font-bold">Get's Started</h1>
                        <p className="">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-violet-700">
                                Sign Up!
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-col bg-[#252525] p-5 rounded-md">
                        <div className="flex flex-col mb-4">
                            <label className="" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                className="bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm"
                                type="text"
                                placeholder="Enter your email"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white w-full text-sm"
                                    type={hide ? "password" : "text"}
                                    placeholder="Enter your password"
                                    required
                                    min={8}
                                    max={25}
                                    autoComplete="off"
                                />
                                <FontAwesomeIcon
                                    className="absolute right-0 -top-3 pt-6 px-3 text-gray-400"
                                    icon={hide ? faEyeSlash : faEye}
                                    onClick={toggleVisibility}
                                />
                            </div>
                        </div>

                        <div className="forgot-password mb-4">
                            <a className="text-violet-700" href="#">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="p-3 bg-violet-600 hover:bg-violet-500 w-full rounded-md"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
};

export default Login;
