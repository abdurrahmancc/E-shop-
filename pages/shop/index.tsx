import Head from "next/head";
import React from "react";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-secondary">
        <div className="xl:max-w-[1428px] w-full sm:mx-auto container">
          {/* ============= top header start ============== */}
          <TopHeader1 />
          <MiddleHeader1 />
          <BottomHeader1 />
          {/* ============= top header end ============== */}
        </div>
      </header>
      <main>
        <div>
          <h2>hello</h2>
          <button className="btn">hi</button>
        </div>
      </main>
    </>
  );
};

export default Shop;
