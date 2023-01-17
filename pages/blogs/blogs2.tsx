import React from "react";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import Footer1 from "../../components/shared/footer/Footer1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import Newsletter4 from "../../components/shared/newsletter/Newsletter4";
import Blogs2 from "../../components/blogs/blogs2/Blogs2";
import { BlogsModel } from "../../types/types";
import { GetStaticProps } from "next";
import { blogsData } from "../../database/data";
import SEO from "../../components/SEO/SEO";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "Blogs2", value: "/blogs" },
];

type BlogsType = {
  blogs: BlogsModel[];
};

const BlogsPage2 = ({ blogs }: BlogsType) => {
  return (
    <>
      <SEO pageTitle="blogs" />
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
          <Blogs2 blogs={blogs} />
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

export default BlogsPage2;

export const getStaticProps: GetStaticProps = async () => {
  const blogs = blogsData;
  return {
    props: {
      blogs,
    },
  };
};
