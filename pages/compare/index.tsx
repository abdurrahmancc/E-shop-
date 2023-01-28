import React, { useState, useEffect } from "react";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import { ProductModel } from "../../types/types";
import Footer1 from "../../components/shared/footer/Footer1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import Newsletter4 from "../../components/shared/newsletter/Newsletter4";
import { GetStaticProps } from "next";
import { productsData } from "../../database/data";
import CompareTable from "../../components/compare/CompareTable";
import { useAppSelector } from "../../redux/app/reduxHooks";
import SEO from "../../components/SEO/SEO";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "compare", value: "/compare" },
];

interface Products {
  products: ProductModel[];
}

const ComparePage = ({ products }: Products) => {
  const { compare: keys } = useAppSelector((state) => state);
  const [compare, setCompare] = useState<ProductModel[]>([]);

  useEffect(() => {
    let result: ProductModel[] = [];
    products &&
      products.forEach((product: ProductModel) => {
        keys.compare.filter((key: any) => {
          if (product._id == key) {
            result.push(product);
          }
        });
      });
    setCompare(result);
  }, [products, keys]);

  if (compare?.length > 4) {
    compare.length = 4;
  }

  return (
    <>
      <SEO pageTitle="compare" />
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
          {compare?.length >= 1 ? (
            <CompareTable compare={compare} />
          ) : (
            <div className="min-h-[calc(100vh-820px)] h-[60vh] flex flex-col justify-center gap-y-10 items-center">
              <h4 className="md:text-4xl text-xl font-bold">
                There are 0 products in your compare
              </h4>
              <button
                onClick={() => window.history.back()}
                className="text-[#000000] duration-300 transition-all ease-in-out flex items-center gap-3 bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary rounded-full font-[500] uppercase py-4 mx-auto text-center text-lg px-8"
              >
                Return to back
              </button>
            </div>
          )}
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

export default ComparePage;

export const getStaticProps: GetStaticProps = async () => {
  const products = productsData;
  return {
    props: {
      products,
    },
  };
};
