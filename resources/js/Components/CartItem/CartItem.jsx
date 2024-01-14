import React from "react";
import japan from "@/assets/japan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CartItem = () => {
    return (
        <div className="cart-item bg-[#252525] p-5 rounded-md relative mb-4">
            <div className="flex flex-col md:flex-row gap-5 ">
                <div className="product-image">
                    <img
                        className="w-full md:w-48 h-48 rounded-sm object-cover"
                        src={japan}
                        alt=""
                    />
                </div>
                <div className="flex flex-col space-y-5">
                    <h1>Product Details</h1>
                    <p>product item name Lorem ipsum</p>
                    <p className="text-violet-500">$4.99</p>
                    <div className="quantity">
                        <button className="p-2 bg-[#121212] rounded-l-md">
                            -
                        </button>
                        <input
                            className="w-[60px] p-2 text-black border-none outline-none shadow-none"
                            type="number"
                            min={1}
                            max={50}
                        />
                        <button className="p-2 bg-[#121212] rounded-r-md">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <button className="absolute top-5 right-5 p-3 bg-red-600 hover:bg-red-500 rounded-md">
                <FontAwesomeIcon className="" icon={faTrash} />
            </button>
        </div>
    );
};

export default CartItem;
