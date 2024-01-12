import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import ProductCard from "@/Components/ProductCards/ProductCard";
import food from "@/assets/food.png";
import godzilla from "@/assets/godzilla.png";
import japan from "@/assets/japan.png";
import kingkong from "@/assets/kingkong.png";

import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
} from "@radix-ui/react-icons";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/shadcn/ui/command";

const Products = () => {
    return (
        <GuestLayout>
            <form
                className="flex justify-between items-center gap-2 py-5"
                action=""
            >
                <h1 className="text-5xl font-bold">Products</h1>
                <div className="flex gap-2">
                    <input
                        id="email"
                        name="email"
                        className="bg-[#252525] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm w-[300px]"
                        type="text"
                        placeholder="Search..."
                        required
                        autoComplete="off"
                    />
                    <button className="bg-violet-600 p-3 rounded-sm">
                        Search
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5">
                <ProductCard key={1} img={food} />
                <ProductCard key={2} img={godzilla} />
                <ProductCard key={3} img={japan} />
                <ProductCard key={4} img={kingkong} />

                <ProductCard key={5} img={food} />
                <ProductCard key={6} img={godzilla} />
                <ProductCard key={7} img={japan} />
                <ProductCard key={8} img={kingkong} />

                <ProductCard key={9} img={food} />
                <ProductCard key={10} img={godzilla} />
                <ProductCard key={11} img={japan} />
                <ProductCard key={12} img={kingkong} />
            </div>
        </GuestLayout>
    );
};

export default Products;
