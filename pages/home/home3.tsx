import React from "react";
import CardBanner3 from "../../components/Banner/cardBanner3";
import SmartBanner3 from "../../components/Banner/SmartBanner2";
import SmartBanner4 from "../../components/Banner/SmartBanner4";
import Features3 from "../../components/features/Features3";
import TrendingCategories from "../../components/home/home2/TrendingCategories";
import FeaturedProducts3 from "../../components/home/Home3/FeaturedProducts3";
import ShopByCategories from "../../components/home/Home3/ShopByCategories";
import SpecialProducts3 from "../../components/home/Home3/SpecialProducts3";
import TopRatedItems from "../../components/home/Home3/TopRatedItems";
import TopSellingProducts from "../../components/home/Home3/TopSellingProducts";
import TrendingProducts from "../../components/home/Home3/TrendingProducts";
import Footer3 from "../../components/shared/footer/Footer3";
import Newsletter3 from "../../components/shared/newsletter/Newsletter3";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import HotNewArrivals2 from "../../components/home/Home3/HotNewArrivals2";
import Header3 from "../../components/headers/Header3";
import { ProductModel } from "../../types/types";
import { GetStaticProps } from "next";
import { productsData } from "../../database/data";
import SEO from "../../components/SEO/SEO";

interface Products {
  products: ProductModel[];
}

const home3 = ({ products }: Products) => {
  return (
    <>
      <SEO pageTitle="home" />
      <header>
        <Header3 />
      </header>
      <main>
        {/* ============= features start =========== */}
        <section className="max-w-[1443px] pt-10 lg:pt-20 container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <Features3 />
        </section>
        {/* ============= features end =========== */}
        {/* ============= features start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <ShopByCategories />
        </section>
        {/* ============= features end =========== */}
        {/* ============= Top Selling Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <TopSellingProducts products={products} />
        </section>
        {/* ============= Top Selling Products end =========== */}
        {/* ============= Smart Banner start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <SmartBanner3 />
        </section>
        {/* ============= Smart Banner  end =========== */}
        {/* ============= Trending Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <TrendingProducts products={products} />
        </section>
        {/* ============= Trending Products end =========== */}
        {/* ============= Hot New Arrivals start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <HotNewArrivals2 products={products} />
        </section>
        {/* ============= Hot New Arrivals end =========== */}
        {/* ============= Categories start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <TrendingCategories />
        </section>
        {/* ============= Categories end =========== */}
        {/* ============= Smart Banner start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <SmartBanner4 />
        </section>
        {/* ============= Smart Banner end =========== */}

        {/* ============= Top Rated Items start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <TopRatedItems products={products} />
        </section>
        {/* ============= Top Rated Items end =========== */}
        {/* ============= Card Banner start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <CardBanner3 />
        </section>
        {/* ============= Card Banner end =========== */}
        {/* ============= Special Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <SpecialProducts3 products={products} />
        </section>
        {/* ============= Special Products end =========== */}
        {/* ============= Newsletter start =========== */}
        <section className="mt-20 lg:mt-[120px] w-full">
          <Newsletter3 />
        </section>
        {/* ============= Newsletter end =========== */}
        {/* ============= Featured Products  start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <FeaturedProducts3 products={products} />
        </section>
        {/* ============= Featured Products end =========== */}
        {/* ======== scroll up button start ======= */}
        <ScrollUpBtn />
        {/* ======== scroll up button end ======= */}
      </main>
      <footer className="mt-20 lg:mt-[120px]">
        <Footer3 />
      </footer>
    </>
  );
};

export default home3;

export const getStaticProps: GetStaticProps = async () => {
  const products = productsData;
  return {
    props: {
      products,
    },
  };
};
