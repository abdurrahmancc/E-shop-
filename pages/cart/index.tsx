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
import CartTable from "../../components/shoppingCart/CartTable";
import CartTotal from "../../components/shoppingCart/CartTotal";
import { useAppSelector } from "../../redux/app/reduxHooks";
import SEO from "../../components/SEO/SEO";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "cart", value: "/cart" },
];

interface Products {
  products: ProductModel[];
}

const CartPage = ({ products }: Products) => {
  const [carts, setsCart] = useState<ProductModel[]>([]);
  const { cart } = useAppSelector((state) => state);
  const [prices, setPrices] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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
    setsCart(result);
  }, [products, cart.carts, cart.shoppingCartQuantity]);

  useEffect(() => {
    try {
      let storageCart: any = localStorage.getItem("e-shop-shopping-cart");
      storageCart = JSON.parse(storageCart);
      const cartPrices: number[] =
        carts &&
        carts.map((product) => {
          const quantity = storageCart[product._id];
          return product?.price * quantity;
        });
      setPrices(cartPrices);

      const initialValue: number = 0;
      if (cartPrices?.length >= 1) {
        const sumReduce = cartPrices.reduce(
          (previous: number, current: number) => previous + current,
          initialValue
        );
        setTotalPrice(sumReduce);
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  }, [carts]);

  return (
    <>
      <SEO pageTitle="cart" />
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
          <div className="flex w-full lg:flex-row flex-col gap-[30px]">
            <CartTable products={products} />
            <CartTotal totalPrice={totalPrice} prices={prices} />
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

export default CartPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = productsData;
  return {
    props: {
      products,
    },
  };
};
