import React from "react";
import OurClients from "../../components/about/OurClients";
import OurTeam from "../../components/about/OurTeam";
import WhoWeAre from "../../components/about/WhoWeAre";
import SmartBanner2 from "../../components/Banner/SmartBanner2";
import Features3 from "../../components/features/Features3";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import SEO from "../../components/SEO/SEO";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import Footer1 from "../../components/shared/footer/Footer1";
import Newsletter4 from "../../components/shared/newsletter/Newsletter4";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "About", value: "/about" },
];

const AboutPage = () => {
  return (
    <>
      <SEO pageTitle="about" />
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
        {/* ============= Who We Are start =========== */}
        <section className="lg:pt-20 pt-10">
          <WhoWeAre />
        </section>
        {/* ============= Who We Are end =========== */}
        <section className="max-w-[1443px] mt-20 relative container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <div
            style={{ boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.06)" }}
            className="w-full mb-[-230px]"
          >
            <Features3 />
          </div>
        </section>
        {/* ============= Our Clients start =========== */}
        <section className="mt-20 bg-[#F2F4F8] lg:mt-[148px]">
          <OurClients />
        </section>
        {/* ============= Our Clients end =========== */}
        {/* ============= smart banner start =========== */}
        <section className="w-full">
          <SmartBanner2 />
        </section>
        {/* ============= smart banner end =========== */}
        {/* ============= our team start =========== */}
        <section className="max-w-[1443px] mt-20 lg:mt-[120px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <OurTeam />
        </section>
        {/* ============= our team end =========== */}

        {/* ============= newsletter start =========== */}
        <section className="mt-20 lg:mt-[120px]">
          <Newsletter4 />
        </section>
        {/* ============= newsletter end =========== */}

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

export default AboutPage;
