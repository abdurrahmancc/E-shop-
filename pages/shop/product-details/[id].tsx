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
import { GetStaticPaths, GetStaticProps } from "next";
import { productsData } from "../../../database/data";
import { ProductModel } from "../../../types/types";
import SEO from "../../../components/SEO/SEO";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "shop", value: "/shop" },
  { label: "Details", value: "Details" },
];

interface Product {
  product: ProductModel;
  products: ProductModel[];
}

const Details = ({ product, products }: Product) => {
  return (
    <>
      <SEO pageTitle="product-details" />
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
            <ProductImage product={product} />
            <TopProductDetails product={product} />
          </div>
        </section>
        {/* ============= Bottom Details start =========== */}
        <section className="bg-[#F2F4F8]">
          <div className="max-w-[1443px] py-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
            <BottomDetails product={product} />
          </div>
        </section>
        {/* ============= Bottom Details end =========== */}
        {/* ============= Related Products start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <RelatedProducts products={products} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const products = productsData;
  const paths = products.map((product: any) => ({
    params: {
      id: product._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const products = productsData;
  const product = products.find((prod) => prod?._id === id);
  return {
    props: {
      product,
      products,
    },
  };
};
