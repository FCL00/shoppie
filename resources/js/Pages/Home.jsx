import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import ProductCard from "@/Components/ProductCards/ProductCard";
import food from "@/assets/food.png";
import godzilla from "@/assets/godzilla.png";
import japan from "@/assets/japan.png";
import kingkong from "@/assets/kingkong.png";
import BannerImage from "@/Components/Banner/BannerImage";
const Home = () => {
    return (
        <GuestLayout>
            <BannerImage />
            <div className="grid grid-cols-4 gap-5">
                <ProductCard img={japan} />
                <ProductCard img={kingkong} />
                <ProductCard img={food} />
                <ProductCard img={godzilla} />

                <ProductCard img={food} />
                <ProductCard img={godzilla} />
                <ProductCard img={japan} />
                <ProductCard img={kingkong} />

                <ProductCard img={godzilla} />
                <ProductCard img={food} />
                <ProductCard img={kingkong} />
                <ProductCard img={japan} />
            </div>
        </GuestLayout>
    );
};

export default Home;
