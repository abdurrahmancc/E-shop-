import Features1 from "../components/features/Features1";
import TrendingProducts from "../components/home/home1/TrendingProducts";
import CardBanner1 from "../components/Banner/CardBanner1";
import SpecialProducts from "../components/home/home1/SpecialProducts";
import FeaturedProducts from "../components/home/home1/FeaturedProducts";
import TopSellingProducts from "../components/home/home1/TopSellingProducts";
import SpecialSec from "../components/home/home1/specialSec/SpecialSec";
import Newsletter1 from "../components/shared/newsletter/Newsletter1";
import Footer1 from "../components/shared/footer/Footer1";
import ScrollUpBtn from "../components/shared/ScrollUpBtn";
import { GetStaticProps } from "next";
import { productsData } from "../database/data";
import { ProductModel } from "../types/types";
import Header1 from "../components/headers/Header1";
import TopCategoriesBanner1 from "../components/home/home1/TopCategoriesBanner1";
import SEO from "../components/SEO/SEO";

interface Products {
  products: ProductModel[];
}

export default function Home({ products }: Products) {
  return (
    <>
      <SEO pageTitle="Home Default" />
      <header>
        <Header1 />
        <TopCategoriesBanner1 />
      </header>
      <main className="pt-10 lg:pt-[50px]">
        {/* ============= features start =========== */}
        <section className="max-w-[1443px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <Features1 />
        </section>
        {/* ============= features end =========== */}
        {/* ============= Trending Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <TrendingProducts products={products} />
        </section>
        {/* ============= Trending Products end =========== */}
        {/* ============= card banner start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <CardBanner1 />
        </section>
        {/* ============= card banner end =========== */}
        {/* ============= Special Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <SpecialProducts products={products} />
        </section>
        {/* ============= Special Products end =========== */}
        {/* ============= Special Sec start =========== */}
        <section className="bg-[#F2F2F6] mt-[150px] lg:mt-[190px] 2xl:h-[517px] xl:h-[400px] lg:h-[517px] md:h-[340px] sm:h-[450px] h-[350px]">
          <SpecialSec />
        </section>
        {/* ============= Special Sec end =========== */}
        {/* ============= Featured Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <FeaturedProducts products={products} />
        </section>
        {/* ============= Featured Products end =========== */}

        {/* ============= newsletter start =========== */}
        <section className="mt-20 lg:mt-[120px]">
          <Newsletter1 />
        </section>
        {/* ============= newsletter end =========== */}
        {/* ============= Top Selling Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <TopSellingProducts products={products} />
        </section>
        {/* ============= Top Selling Products end =========== */}
        {/* ======== scroll up button start ======= */}
        <ScrollUpBtn />
        {/* ======== scroll up button end ======= */}
      </main>
      <footer className="mt-20 lg:mt-[120px]">
        <Footer1 />
      </footer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = productsData;
  return {
    props: {
      products,
    },
  };
};
