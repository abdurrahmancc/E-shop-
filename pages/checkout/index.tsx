import React, { useState, useEffect } from "react";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import Footer1 from "../../components/shared/footer/Footer1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import Newsletter4 from "../../components/shared/newsletter/Newsletter4";
import { useForm } from "react-hook-form";
import BillingDetailsForm from "../../components/checkout/BillingDetailsForm";
import CheckoutTable from "../../components/checkout/CheckoutTable";
import { useAppSelector } from "../../redux/app/reduxHooks";
import { GetStaticProps } from "next";
import { productsData } from "../../database/data";
import { ProductModel } from "../../types/types";
import SEO from "../../components/SEO/SEO";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "cart", value: "/cart" },
  { label: "checkout", value: "/checkout" },
];

type FromData = {
  searchItems: string;
};

interface Products {
  products: ProductModel[];
}

const CheckoutPage = ({ products }: Products) => {
  const { cart } = useAppSelector((state) => state);
  const [items, setItems] = useState<ProductModel[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>();

  useEffect(() => {
    let result: ProductModel[] = [];
    products &&
      products.forEach((product: ProductModel) => {
        cart.carts.filter((key: string) => {
          let quantity: any = cart.shoppingCartQuantity;
          if (product._id == key) {
            product.quantity = quantity[key];
            result.push(product);
          }
        });
      });
    setItems(result);
  }, [products, cart.carts, cart.shoppingCartQuantity]);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <SEO pageTitle="checkout" />
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
          <form onSubmit={onSubmit}>
            <div className="flex md:flex-row flex-col gap-y-10 gap-[30px]">
              <div className="max-w-[950px] w-full">
                <h3 className="bg-[#F0F0F0] text-[20px] text-center leading-[30px] font-[500] pl-5 py-[18px] text-[#262626]">
                  Billing Address
                </h3>
                <div className="mt-[30px]">
                  <BillingDetailsForm register={register} errors={errors} />
                </div>
              </div>
              <div className="md:max-w-[460px] w-full">
                <h3 className="bg-[#F0F0F0] text-[20px] text-center leading-[30px] font-[500] pl-5 py-[18px] text-[#262626]">
                  Your Order
                </h3>
                <div className="mt-[30px]">
                  <CheckoutTable cartProducts={items} onSubmit={onSubmit} />
                </div>
              </div>
            </div>
          </form>
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

export default CheckoutPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = productsData;
  return {
    props: {
      products,
    },
  };
};
