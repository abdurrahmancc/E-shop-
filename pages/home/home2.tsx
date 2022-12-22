import Head from "next/head";
import React from "react";
import TopBannerSlider1 from "../../components/Banner/TopBannerSlider1";
import TopBannerSlider2 from "../../components/Banner/TopBannerSlider2";
import TopCardBanner from "../../components/Banner/TopCardBanner";
import BottomHeader2 from "../../components/headers/BottomHeader2";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopCategories from "../../components/headers/TopCategories";
import TopHeader2 from "../../components/headers/TopHeader2";
import SingleProductCategoryCard from "../../components/shared/productCard/SingleProductCategoryCard";

const Home2 = () => {
  return (
    <>
      <Head>
        <title>e-shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {/* ============= top header start ============== */}
        <TopHeader2 />
        <MiddleHeader1 />
        <BottomHeader2 />
        {/* ============= top header end ============== */}

        <div className="max-w-[1443px] container lg:mt-[30px] mt-5 w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <div className="flex gap-[30px] w-full">
            <TopCategories />
            <TopBannerSlider2 />
            <TopCardBanner />
          </div>
        </div>
      </header>
      <main>
        {/*======== single product banner section start ============*/}
        <section className="max-w-[1443px] container mt-[63px] w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <SingleProductCategoryCard />
        </section>
        {/*======== single product banner section end ==============*/}
      </main>
    </>
  );
};

export default Home2;