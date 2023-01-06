import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
import { useAppSelector } from "../../redux/app/reduxHooks";
import { ProductModel } from "../../types/types";
import WishlistTableRow from "./WishlistTableRow";

interface Product {
  products: ProductModel[];
}

const WishlistTable = ({ products }: Product) => {
  const router = useRouter();
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
      {wishlist.length >= 1 && (
        <Table className="w-full">
          <Thead className=" sm:border-b-2 sm:border-b-primary bg-[#F0F0F0]">
            <Tr className="text-[#424242]">
              <Th className="md:w-12 w-10"></Th>
              <Th className="md:w-[60px] w-12"></Th>
              <Th className="font-[500] xl:w-[500px] lg:w-[300px] sm:w-[220px] col-span-2 text-start py-[23px] pl-[27px] leading-[26px] lg:text-[20px] text-[16px]">
                Product
              </Th>
              <Th className="font-[500] col-span-1 text-center py-[23px] leading-[28px] lg:text-[20px] text-[16px]">
                Price
              </Th>
              <Th className="font-[500] col-span-1 text-center py-[23px] leading-[28px] lg:text-[20px] text-[16px]">
                Date
              </Th>
              <Th className="font-[500] lg:w-[150px] sm:w-[120px] col-span-1 text-center py-[23px] leading-[28px] lg:text-[20px] text-[16px]">
                Stock Status
              </Th>
              <Th className="font-[500] max-w-[160px] col-span-1 text-center py-[23px] leading-[28px] lg:text-[20px] text-[16px]">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody id="wishlist-Table">
            {wishlist &&
              wishlist.map((product) => <WishlistTableRow key={product?._id} product={product} />)}
          </Tbody>
        </Table>
      )}
      {wishlist.length ? (
        <div className="flex items-center justify-end gap-6 mt-5">
          <button className="lg:text-[18px] md:text-[15px] text-sm text-[#000000] leading-[30px] bg-primary w-[180px] h-[40px] md:w-[220px] md:h-[42px] xl:w-[243px] xl:h-[50px] rounded-[8px]">
            Add Selected to cart
          </button>
          <button className="lg:text-[18px] md:text-[15px] text-sm text-[#000000] leading-[30px] bg-primary w-[130px] h-[40px] md:w-[160px] md:h-[42px] xl:w-[178px] xl:h-[50px] rounded-[8px]">
            Add all to cart
          </button>
        </div>
      ) : (
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

export default WishlistTable;
