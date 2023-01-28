import React from "react";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import { ProductModel } from "../../types/types";
import Footer1 from "../../components/shared/footer/Footer1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import Newsletter4 from "../../components/shared/newsletter/Newsletter4";
import { GetStaticProps } from "next";
import WishlistTable from "../../components/wishlist/WishlistTable";
import { productsData } from "../../database/data";
import SEO from "../../components/SEO/SEO";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "wishlist", value: "/wishlist" },
];

interface Products {
  products: ProductModel[];
}

const WishlistPage = ({ products }: Products) => {
  return (
    <>
      <SEO pageTitle="dashboard" />
      <header>
        <div className="bg-[#041E42]">
          <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
            {/* ============= top header start ============== */}
            <TopHeader1 />
            <MiddleHeader1 />
            <BottomHeader1 />
            {/* ============= top header end ============== */}
          </div>
        </div>
        {/* =========== breadcrumb start ======== */}
        <Breadcrumb breadcrumbData={breadcrumbData} />
        {/* =========== breadcrumb end ======== */}
      </header>
      <main>
        <section className="max-w-[1443px] mt-10 lg:mt-20 container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <WishlistTable products={products} />
        </section>
        <section className="mt-20 lg:mt-[120px]">
          <Newsletter4 />
        </section>
        {/* ======== scroll up button start ======= */}
        <ScrollUpBtn />
        {/* ======== scroll up button end ======= */}
      </main>
      <footer>
        <Footer1 />
      </footer>
    </>
  );
};

export default WishlistPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = productsData;
  return {
    props: {
      products,
    },
  };
};
