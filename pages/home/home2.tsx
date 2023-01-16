import React from "react";
import CardBanner2 from "../../components/Banner/CardBanner2";
import SmartBanner2 from "../../components/Banner/SmartBanner2";
import SmartBannerSlider from "../../components/Banner/SmartBannerSlider";
import FeaturedProducts2 from "../../components/home/home2/FeaturedProducts2";
import HotNewArrivals from "../../components/home/home2/HotNewArrivals";
import OnSaleProducts from "../../components/home/home2/OnSaleProducts";
import SpecialProducts2 from "../../components/home/home2/SpecialProducts2";
import TopTrendingRecentlyGroupSec from "../../components/home/home2/TopTrendingRecentlyGroupSec";
import TrendingCategories from "../../components/home/home2/TrendingCategories";
import ShopByCategories from "../../components/home/home2/ShopByCategories";
import Footer2 from "../../components/shared/footer/Footer2";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import Header2 from "../../components/headers/Header2";
import { GetStaticProps } from "next";
import { productsData } from "../../database/data";
import { ProductModel } from "../../types/types";
import SEO from "../../components/SEO/SEO";

interface Products {
  products: ProductModel[];
}

const Home2 = ({ products }: Products) => {
  return (
    <>
      <SEO pageTitle="home" />
      <header>
        <Header2 />
      </header>
      <main>
        {/*======== single product banner section start ============*/}
        <section className="max-w-[1443px] container pt-10 lg:pt-[60px] w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <ShopByCategories />
        </section>
        {/*======== single product banner section end ==============*/}
        {/* ============= Trending Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <HotNewArrivals products={products} />
        </section>
        {/* ============= Trending Products end =========== */}
        {/* ============= Special Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <SpecialProducts2 products={products} />
        </section>
        {/* ============= Special Products end =========== */}
        {/* ============= Trending Categories start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <TrendingCategories />
        </section>
        {/* ============= Trending Categories end =========== */}
        {/* ============= smart banner start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <SmartBannerSlider />
        </section>
        {/* ============= smart banner end =========== */}
        {/* ============= On Sale Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <OnSaleProducts products={products} />
        </section>
        {/* ============= On Sale Products end =========== */}
        {/* ============= card banner start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <CardBanner2 />
        </section>
        {/* ============= Top Trending Recently Group Sec start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <TopTrendingRecentlyGroupSec products={products} />
        </section>
        {/* ============= Top Trending Recently Group Sec end =========== */}
        {/* ============= smart banner start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <SmartBanner2 />
        </section>
        {/* ============= smart banner end =========== */}
        {/* ============= Featured Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <FeaturedProducts2 products={products} />
        </section>
        {/* ============= Featured Products end =========== */}
        {/* ======== scroll up button start ======= */}
        <ScrollUpBtn />
        {/* ======== scroll up button end ======= */}
      </main>
      <footer className="sm:mt-[146px] lg:mt-[186px] mt-[220px] ">
        <Footer2 />
      </footer>
    </>
  );
};

export default Home2;

export const getStaticProps: GetStaticProps = async () => {
  const products = productsData;
  return {
    props: {
      products,
    },
  };
};
