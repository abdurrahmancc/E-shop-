import React from "react";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import Footer1 from "../../components/shared/footer/Footer1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import Newsletter4 from "../../components/shared/newsletter/Newsletter4";
import { GetStaticPaths, GetStaticProps } from "next";
import { blogsData } from "../../database/data";
import { BlogsModel } from "../../types/types";
import BlogDetails from "../../components/blogs/blogsDetails/BlogDetails";
import SEO from "../../components/SEO/SEO";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "Blog", value: "/blogs/blogs2" },
  { label: "Blog details", value: "/blogs" },
];

type BlogType = {
  blog: BlogsModel;
};

const BlogsPage2 = ({ blog }: BlogType) => {
  return (
    <>
      <SEO pageTitle="blog details" />
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
          <BlogDetails blog={blog} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = blogsData;
  const paths = blogs.map((blog: any) => ({
    params: {
      id: blog._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const blogs = blogsData;
  const blog = blogs.find((prod) => prod?._id === id);
  return {
    props: {
      blog,
    },
  };
};
