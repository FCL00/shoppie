import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    const [hide, setHide] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        fullname: "",
        email: "",
        address: "",
        password: "",
        password_confirmation: "",
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        post("/register");
    };

    const toggleVisibility = () => {
        setHide((prevState) => !prevState);
    };
    return (
        <GuestLayout>
            <div className="flex justify-center items-center p-5 rounded-md min-h-screen">
                <form
                    className="w-[300px] md:w-[500px] flex flex-col"
                    onSubmit={onSubmitHandler}
                >
                    <div className="mb-4 space-y-2">
                        <h1 className="text-5xl font-bold">Get's Started</h1>
                        <p>
                            Already have an account?{" "}
                            <Link className="text-violet-500" href="/login">
                                Sign In
                            </Link>
                        </p>
                    </div>

                    <div className="mb-4 bg-[#252525] p-5 rounded-md">
                        <div className="flex flex-col mb-4">
                            <label className="" htmlFor="fullname">
                                Fullname
                            </label>
                            <input
                                id="fullname"
                                name="fullname"
                                className="bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm"
                                type="text"
                                placeholder="Enter your fullname"
                                required
                                autoComplete="off"
                                onChange={onChangeHandler}
                                value={data.fullname}
                            />
                            {errors.fullname && (
                                <div className="text-red-500">
                                    {errors.fullname}
                                </div>
                            )}
                        </div>
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
                                onChange={onChangeHandler}
                                value={data.email}
                            />
                            {errors.email && (
                                <div className="text-red-500">
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="" htmlFor="address">
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                className="bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm"
                                type="text"
                                placeholder="Enter your address"
                                required
                                autoComplete="off"
                                onChange={onChangeHandler}
                                value={data.address}
                            />
                            {errors.address && (
                                <div className="text-red-500">
                                    {errors.address}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    className="bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white w-full text-sm"
                                    type={hide ? "text" : "password"}
                                    placeholder="Enter your password"
                                    required
                                    min={8}
                                    max={25}
                                    onChange={onChangeHandler}
                                    value={data.password}
                                />
                                <FontAwesomeIcon
                                    className="absolute right-0 -top-3 pt-6 px-3 text-gray-400"
                                    icon={hide ? faEyeSlash : faEye}
                                    onClick={toggleVisibility}
                                />
                            </div>
                            {errors.password && (
                                <div className="text-red-500">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="" htmlFor="password_confirmation">
                                Retype Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    className="bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white w-full text-sm"
                                    type={hide ? "text" : "password"}
                                    placeholder="Confirm password"
                                    required
                                    min={8}
                                    max={25}
                                    onChange={onChangeHandler}
                                    value={data.password_confirmation}
                                />
                                {errors.password && (
                                    <div className="text-red-500">
                                        {errors.password}
                                    </div>
                                )}
                                <FontAwesomeIcon
                                    className="absolute right-0 -top-3 pt-6 px-3 text-gray-400"
                                    icon={hide ? faEyeSlash : faEye}
                                    onClick={toggleVisibility}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="p-3 bg-violet-600 hover:bg-violet-500 w-full rounded-md"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
};

export default Register;
