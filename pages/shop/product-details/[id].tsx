import Head from "next/head";
import React from "react";
import BottomHeader1 from "../../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../../components/headers/MiddleHeader1";
import TopHeader1 from "../../../components/headers/TopHeader1";
import RelatedProducts from "../../../components/home/home1/RelatedProducts";
import ProductImage from "../../../components/ProductDetails/ProductImage";
import Breadcrumb from "../../../components/shared/breadcrumb/Breadcrumb";
import Footer1 from "../../../components/shared/footer/Footer1";
import Newsletter4 from "../../../components/shared/newsletter/Newsletter4";
import ScrollUpBtn from "../../../components/shared/ScrollUpBtn";
import BottomDetails from "../../../components/ProductDetails/BottomDetails";
import TopProductDetails from "../../../components/ProductDetails/TopProductDetails";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "shop", value: "/shop" },
  { label: "Details", value: "Details" },
];

const Details = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <div className="flex flex-col lg:max-w-full mx-auto max-w-[550px] lg:flex-row xl:gap-12 pb-10 lg:pb-0 gap-10">
            <ProductImage />
            <TopProductDetails />
          </div>
        </section>
        {/* ============= Bottom Details start =========== */}
        <section className="bg-[#F2F4F8]">
          <div className="max-w-[1443px] py-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
            <BottomDetails />
          </div>
        </section>
        {/* ============= Bottom Details end =========== */}
        {/* ============= Related Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <RelatedProducts />
        </section>
        {/* ============= Related Products end =========== */}
        <section className="mt-[120px]">
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

export default Details;
