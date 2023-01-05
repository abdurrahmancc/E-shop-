import React, { useEffect, useState } from "react";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
import { useAppSelector } from "../../redux/app/reduxHooks";
import { ProductModel } from "../../types/types";
import WishlistTableRow from "./WishlistTableRow";

interface Product {
  products: ProductModel[];
}

const WishlistTable = ({ products }: Product) => {
  const [wishlist, setWishlist] = useState<ProductModel[]>([]);
  const { wishlist: keys } = useAppSelector((state) => state);

  useEffect(() => {
    let result: ProductModel[] = [];
    products &&
      products.forEach((product: ProductModel) => {
        keys.wishlist.filter((key: any) => {
          if (product._id == key) {
            result.push(product);
          }
        });
      });
    setWishlist(result);
  }, [products, keys]);

  return (
    <div>
      {wishlist.length && (
        <Table className="w-full">
          <Thead className=" sm:border-b-2 sm:border-b-primary bg-[#F0F0F0]">
            <Tr className="sm:text-black">
              <Th className="font-[500] col-span-2 text-start py-[22px] pl-[50px] leading-[28px] text-[20px]">
                Product
              </Th>
              <Th className="font-[500] col-span-1 text-start py-[22px] leading-[28px] text-[20px]">
                Price
              </Th>
              <Th className="font-[500] col-span-1 text-start py-[22px] leading-[28px] text-[20px]">
                Date
              </Th>
              <Th className="font-[500]  col-span-1 text-center py-[22px] leading-[28px] text-[20px]">
                Stock Status
              </Th>
              <Th className="font-[500] col-span-1 text-center py-[22px] leading-[28px] text-[20px]">
                Action
              </Th>
              <Th className="font-[500] sm:hidden col-span-1 text-start py-[22px] leading-[28px] text-[20px]">
                Remove
              </Th>
            </Tr>
          </Thead>
          <Tbody id="wishlist-Table">
            {wishlist &&
              wishlist.map((product) => <WishlistTableRow key={product?._id} product={product} />)}
          </Tbody>
        </Table>
      )}
    </div>
  );
};

export default WishlistTable;
