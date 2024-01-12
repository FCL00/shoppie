import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
const ProductCard = ({ img }) => {
    return (
        <div className="card rounded-md bg-[#252525] shadow-lg">
            <div className="card-img mb-4 relative">
                <img
                    className="rounded-t-md object-cover"
                    src={img}
                    alt="card image"
                />
                <div className="absolute top-1 right-1 bg-black/50 rounded-md">
                    <button className="p-2 rounded-full">
                        <FontAwesomeIcon
                            className="text-2xl hover:text-violet-500"
                            icon={faCartPlus}
                        />
                    </button>
                    <button className="p-2 rounded-full">
                        <FontAwesomeIcon
                            className="text-2xl hover:text-violet-500"
                            icon={faHeart}
                        />
                    </button>
                </div>
            </div>
            <div className="card-desc p-3">
                <h1 className="text-2xl text-white font-bold flex justify-between mb-4">
                    Product <span className="text-violet-500">$4.99</span>
                </h1>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora veritatis saepe eligendi sequi cum quae consequatur
                    aliquam dolor itaque ipsa.
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
