import Image from "next/image";
import React, { useState, useEffect } from "react";
import { VscGitCompare, VscThreeBars } from "react-icons/vsc";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { searchCategorySelected } from "../../styles/selectComponents";
import Link from "next/link";
import whiteLogo from "../../assets/icons/logo-white.png";
import logo from "../../assets/icons/logo.png";
import { useRouter } from "next/router";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../redux/app/reduxHooks";
import { fetchWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { fetchCarts } from "../../redux/features/shoppingCart/shoppingCartSlice";
import { fetchCompare } from "../../redux/features/compare/compareSlice";
import Loading from "../loading/Loading";
import { useCartDetails } from "../../hooks/useCartDetails";
import MobileSidebar from "../shared/MobileSidebar";

interface Option {
  value: string;
  label: string;
}

type FromData = {
  searchItems: string;
};

const options: Option[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const MiddleHeader3 = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const { wishlist, cart, compare } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { totalPrice } = useCartDetails();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>();

  useEffect(() => {
    dispatch(fetchWishlist());
    dispatch(fetchCarts());
    dispatch(fetchCompare());
  }, [dispatch]);

  if (wishlist.isLoading || cart.isLoading || compare.isLoading) {
    return <Loading />;
  }

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className="bg-[#041E42]">
      <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
        <div className="py-5 flex w-full justify-between">
          <Link href={"/"}>
            {router.pathname.includes("/home/home2") ? (
              <Image
                src={logo}
                width={163}
                height={51}
                className={"w-[120px] h-auto lg:w-[163px] lg:min-w-[163px] lg:h-[51px]"}
                alt="logo"
              />
            ) : (
              <Image
                src={whiteLogo}
                width={163}
                height={51}
                className={"w-[120px] h-auto lg:w-[163px] lg:min-w-[163px] lg:h-[51px]"}
                alt="logo"
              />
            )}
          </Link>
          {/*========= category search from start =========-*/}
          <div className="h-full max-w-[550px] xl:max-w-[750px] w-full hidden lg:block">
            <form onSubmit={onSubmit} className="flex justify-center w-full h-full relative">
              <div className="pl-[17px] border border-primary w-full h-[58px] flex items-center bg-white rounded-[35px]">
                <Select
                  id="category-select-component"
                  instanceId="category-select-component"
                  styles={searchCategorySelected}
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  placeholder={"Categories"}
                  isSearchable={false}
                  options={options}
                />
                <div className="h-[26px] w-[1.5px] z-50 bg-[#AEAEAE]"></div>
                <input
                  placeholder="Enter your search key....."
                  type="text"
                  className="input pl-[22px] leading-[26px] text-black text-sm placeholder:text-[#616161] bg-inherit focus:outline-none h-full w-full"
                />
                <button className="max-w-[109px] w-full bg-primary flex justify-center items-center rounded-r-[35px] h-full">
                  <BiSearch className="w-[30px] h-[30px]" />
                </button>
              </div>
            </form>
          </div>
          {/*========= category search from end =========-*/}

          {/* ========= for mobile toggle start ========= */}
          <div
            className="lg:hidden flex items-center cursor-pointer"
            id="navToggle2"
            onClick={() => setToggle(!toggle)}
          >
            <VscThreeBars className="text-3xl text-white" />
          </div>
          {/* ========= for mobile toggle end ========= */}

          {/*================ need help call us start ================*/}
          <div className="w-full hidden xl:block max-w-[172px]">
            <div className="flex items-center gap-[10px]">
              <BsFillTelephoneFill className="w-[28px] h-[28px] text-primary " />
              <div className="flex flex-col">
                <span className="text-xs leading-[22px] text-neutral">Need Help? Call us:</span>
                <span className="text-[16px] text-primary leading-[22px] font-[600]">
                  +84 2500 888 33
                </span>
              </div>
            </div>
          </div>
          {/*================ need help call us end ================*/}
          {/* ========= compare wishlist cart start ========= */}
          <div className="lg:block  hidden ">
            <ul className="flex items-center gap-5">
              <li>
                <div className="flex items-center gap-2">
                  <div className="indicator">
                    <Link href={"/compare"} className="  rounded-full" aria-label="shopping cart">
                      <VscGitCompare
                        className={` ${
                          router?.pathname == "/home/home2" ? "text-[#424242]" : "text-[#FFFFFF]"
                        }  rotate-90 w-[34px] h-[34px]`}
                      />
                    </Link>
                    <div className="flex justify-center items-center p-1 h-[22px] w-[21px] rounded-full bg-primary  text-[#031424] cursor-pointer indicator-item top-1 right-1 text-[0.6875rem]">
                      <span className="text-xs">{4}</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="indicator">
                    <Link href={"/wishlist"} className="  rounded-full" aria-label="shopping cart">
                      <AiOutlineHeart
                        className={` ${
                          router?.pathname == "/home/home2" ? "text-[#424242]" : "text-[#FFFFFF]"
                        }  w-[34px] h-[34px]`}
                      />
                    </Link>
                    <div className="flex justify-center items-center p-1 h-[22px] w-[21px] rounded-full bg-primary  text-[#031424] cursor-pointer indicator-item top-1 right-1 text-[0.6875rem]">
                      <span className="text-xs">{4}</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-[18px]">
                  <div className="indicator">
                    <Link href={"/cart"} className="  rounded-full" aria-label="shopping cart">
                      <HiOutlineShoppingBag
                        className={` ${
                          router?.pathname == "/home/home2" ? "text-[#424242]" : "text-[#FFFFFF]"
                        }  w-[34px] h-[34px]`}
                      />
                    </Link>
                    <div className="flex justify-center items-center p-1 h-[22px] w-[21px] rounded-full bg-primary  text-[#031424] cursor-pointer indicator-item top-1 right-1 text-[0.6875rem]">
                      <span className="text-xs">{4}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-neutral leading-[22px] text-xs">Total</span>
                    <span className="text-neutral font-[500] text-[16px] leading-[22px]">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* ========= compare wishlist cart end ========= */}
          <MobileSidebar toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader3;
