import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import { ProductModel } from "../../types/types";
import Pagination from "../../components/shared/pagination/Pagination";
import Footer1 from "../../components/shared/footer/Footer1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import Newsletter4 from "../../components/shared/newsletter/Newsletter4";
import ShopFilter from "../../components/shop/ShopFilter";
import ShopHorizontal from "../../components/shop/ShopHorizontal";
import ShopVertical from "../../components/shop/ShopVertical";
import ShopBanner1 from "../../components/shop/ShopBanner1";
import ShopTopFilter from "../../components/shop/ShopTopFilter";
import { useRouter } from "next/router";
import Header1 from "../../components/headers/Header1";
import { GetStaticPaths, GetStaticProps } from "next";
import { productsData } from "../../database/data";
import SEO from "../../components/SEO/SEO";
import ShopBannerSlider from "../../components/Banner/ShopBannerSlider";

interface ProductTypes {
  products: ProductModel[];
}

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "shop", value: "/shop" },
];

const Shop = ({ products }: ProductTypes) => {
  const router = useRouter();
  const [page, setPage] = useState<number>(4);
  const [toggleCard, setToggleCard] = useState<boolean>(true);
  const [pageCount, setPageCount] = useState<number>(3);

  useEffect(() => {
    console.log(router.pathname, router?.query?.id);
    if (router.pathname == "/shop/[id]" && router?.query?.id == "4") {
      setToggleCard(false);
    }
  }, [router.pathname, router?.query?.id]);

  return (
    <>
      <SEO pageTitle="shop" />
      <header>
        <Header1 />
        {/* =========== breadcrumb start ======== */}
        <Breadcrumb breadcrumbData={breadcrumbData} />
        {/* =========== breadcrumb end ======== */}
      </header>
      <main>
        <section className="max-w-[1443px] mt-10 lg:mt-20 container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          {router.query.id == "3" ? <ShopBannerSlider /> : ""}
          <div className="flex lg:flex-row flex-col gap-y-20 gap-x-5 2xl:gap-x-[30px]">
            {/*============= filter start ============*/}
            <div
              className={`flex-grow-0 order-2 lg:order-1 lg:min-w-[264px] lg:w-[264px] h-full ${
                router.query.id == "1"
                  ? "lg:order-1"
                  : router.query.id == "2"
                  ? "lg:order-2"
                  : router.query.id == "3"
                  ? "hidden"
                  : "lg:order-1"
              } `}
            >
              <ShopFilter />
            </div>
            {/*============= filter end ============*/}

            <div
              className={`flex-grow order-1 ${
                router.query.id == "1" ? "lg:order-2" : "lg:order-1"
              }`}
            >
              {/*============= banner start =========== */}

              {router.query.id != "3" ? <ShopBanner1 /> : ""}
              {/*============= banner end =========== */}
              {/* =========== Shop Top Filter start ======= */}
              <ShopTopFilter toggleCard={toggleCard} setToggleCard={setToggleCard} />
              {/* =========== Shop Top Filter end ======= */}
              {/* ============ product card toggle start ============ */}
              {router.query.id == "4" ? (
                !toggleCard ? (
                  <ShopVertical products={products} />
                ) : (
                  <ShopHorizontal products={products} />
                )
              ) : toggleCard ? (
                <ShopHorizontal products={products} />
              ) : (
                <ShopVertical products={products} />
              )}

              {/* ============= product card toggle end ============== */}
              {/* ============ pagination start =========== */}
              <div
                className={`flex justify-center btn-group ${
                  toggleCard ? "mt-[47px]" : "mt-[60px]"
                }`}
              >
                <Pagination pageCount={pageCount} setPage={setPage} />
              </div>
              {/* ============ pagination end =========== */}
            </div>
          </div>
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

export default Shop;

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

export const getStaticProps: GetStaticProps = async () => {
  const products = productsData;
  return {
    props: {
      products,
    },
  };
};
