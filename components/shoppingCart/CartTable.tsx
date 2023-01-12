import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CgTrash } from "react-icons/cg";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
import { useAppSelector } from "../../redux/app/reduxHooks";
import { ProductModel } from "../../types/types";
import CartTableRow from "./CartTableRow";

interface Product {
  products: ProductModel[];
}

const CartTable = ({ products }: Product) => {
  const router = useRouter();
  const [shoppingCart, setShoppingCart] = useState<ProductModel[]>([]);
  const { cart: keys } = useAppSelector((state) => state);

  useEffect(() => {
    let result: ProductModel[] = [];
    products &&
      products.forEach((product: ProductModel) => {
        keys.carts.filter((key: any) => {
          if (product._id == key) {
            result.push(product);
          }
        });
      });
    setShoppingCart(result);
  }, [products, keys]);

  return (
    <div className="w-full max-w-[950px] ">
      {shoppingCart.length >= 1 && (
        <Table className="w-full">
          <Thead className=" sm:border-b-2 sm:border-b-primary bg-[#F0F0F0]">
            <Tr className="text-[#424242]">
              <Th className="font-[500] 2xl:w-[540px] xl:w-[470px] lg:w-[300px] md:w-[400px] sm:w-[330px] col-span-2 text-start py-[20px] pl-[27px] leading-[26px] xl:text-[20px] lg:text-lg text-[16px]">
                Product
              </Th>
              <Th className="font-[500] col-span-1 text-center py-[20px] leading-[28px] xl:text-[20px] lg:text-lg text-[16px]">
                Quantity
              </Th>
              <Th className="font-[500] col-span-1 text-center py-[20px] leading-[28px] xl:text-[20px] lg:text-lg text-[16px]">
                <span className="text-[#424242]">Subtotal</span>
              </Th>
              <Th className="py-[20px]">
                <span className="sm:hidden text-[13px] font-[600]">Removed</span>
                <CgTrash className="text-[#031424] hidden sm:block cursor-pointer text-[24px]" />
              </Th>
            </Tr>
          </Thead>
          <Tbody id="shopping-Cart-Table">
            {shoppingCart &&
              shoppingCart.map((product) => <CartTableRow key={product?._id} product={product} />)}
          </Tbody>
        </Table>
      )}
      {shoppingCart.length >= 1 || (
        <div className="text-center mx-auto">
          <h6 className="text-3xl mb-5 font-semibold">Add to Various Favorite Products</h6>
          <button
            onClick={() => router.push("/shop/1")}
            className="bg-primary text-[#000000] text-lg rounded-[8px] w-[200px] h-[60px]"
          >
            Return To Shop
          </button>
        </div>
      )}
    </div>
  );
};

export default CartTable;
