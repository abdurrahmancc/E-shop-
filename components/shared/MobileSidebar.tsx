import React, { Dispatch, SetStateAction } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/icons/logo.png";

type FormData = {
  search: string;
};

interface Props {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MobileSidebar = ({ toggle, setToggle }: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div
      id="navSidebar"
      className={`fixed top-0 w-[260px] h-screen bg-white shadow-xl
           transition-[2s] z-[100] ${
             router.pathname.includes("/home2")
               ? toggle
                 ? "active left-0"
                 : "left-[-300px]"
               : toggle
               ? "active right-0"
               : "right-[-300px]"
           } `}
    >
      <div id="mobile-top" className="px-6 py-[15px] border-b flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <Image src={logo} width={100} height={36} className="w-[100px] h-auto" alt="logo" />
          </Link>
        </div>
        <div>
          <button
            className="bg-primary text-white rounded-full p-1"
            title="close"
            onClick={() => setToggle(!toggle)}
          >
            {" "}
            <IoMdClose />
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="p-6 pt-8">
        <div className="">
          <form className="" onSubmit={onSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  id="mobile-Search"
                  placeholder="Search..."
                  type="text"
                  {...register("search")}
                  className="placeholder:italic w-full placeholder:text-gray-500 block pl-5  pr-9 shadow-xs 
                    bg-inherit focus:bg-inherit
                    focus:outline-none h-[45px] focus:border-[#515251] rounded-sm border border-gray-200 focus:ring-0 sm:text-sm"
                />
                <button
                  type="submit"
                  className=" absolute right-[2px] p-2 rounded top-[5px]"
                  aria-label="search"
                >
                  <BiSearchAlt id="search-product" className="text-xl text-gray-400" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <ul className="relative mt-5">
          {/*--------------- home -------------- */}
          <li className="inline-block py-[6px] border-b text-black list-none w-full">
            <div>
              <Collapsible
                id="sidebarSubMenu-home"
                className="w-full"
                trigger={
                  <span
                    id="mobile-collapsible-home"
                    className="flex font-semibold text-[15px] py-[6px] text-[#444] items-center justify-between w-full"
                  >
                    {[
                      `Home`,
                      <BsChevronDown key="categories-trigger" id="sidebarSubMenu-homeItems" />,
                    ]}
                  </span>
                }
              >
                <ul className="pt-[9px] pb-[5px]">
                  <li>
                    <Link
                      href={"/"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Home 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/home/home2"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Home 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/home/home3"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Home 3
                    </Link>
                  </li>
                </ul>
              </Collapsible>
            </div>
          </li>
          {/*-------------- shop -------------- */}
          <li className="inline-block border-b py-[6px] text-black list-none w-full">
            <div>
              <Collapsible
                id="sidebarSubMenu-shop"
                className="w-full"
                trigger={
                  <span
                    id="mobile-collapsible-shop"
                    className="flex text-[#444] text-[15px] py-[6px] items-center justify-between font-semibold w-full"
                  >
                    {[`Shop`, <BsChevronDown key="brands-trigger" id="sidebarSubMenu-shopItems" />]}
                  </span>
                }
              >
                <ul className="pt-[9px] pb-[5px]">
                  <li>
                    <Link
                      href={"/shop/1"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Shop Default
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/shop/2"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Right Filter Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/shop/shop3"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Shop Wide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/shop/4"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Shop List
                    </Link>
                  </li>
                </ul>
              </Collapsible>
            </div>
          </li>
          {/*-------------- contact -------------- */}
          <li id="menu-item" className="inline-block border-b py-[6px] text-black list-none w-full">
            <Link href={"/contact"} className="leading-9 font-semibold text-[15px] text-[#444]">
              Contact
            </Link>
          </li>
          {/*-------------- about -------------- */}
          <li id="menu-item" className="inline-block border-b py-[6px] text-black list-none w-full">
            <Link href={"/about"} className="leading-9 font-semibold text-[15px] text-[#444]">
              About
            </Link>
          </li>
          {/*-------------- blogs -------------- */}
          <li className="inline-block border-b py-[6px] text-black list-none w-full">
            <div>
              <Collapsible
                id="sidebarSubMenu-shop"
                className="w-full"
                trigger={
                  <span
                    id="mobile-collapsible-shop"
                    className="flex text-[#444] text-[15px] py-[6px] items-center justify-between font-semibold w-full"
                  >
                    {[
                      `Blogs`,
                      <BsChevronDown key="brands-trigger" id="sidebarSubMenu-shopItems" />,
                    ]}
                  </span>
                }
              >
                <ul className="pt-[9px] pb-[5px]">
                  <li>
                    <Link
                      href={"/blogs/blogs1"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Blog 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/blogs/blogs2"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Blog 2
                    </Link>
                  </li>
                </ul>
              </Collapsible>
            </div>
          </li>
          {/*-------------- pages -------------- */}
          <li className="inline-block py-[6px] border-b text-black list-none w-full">
            <div>
              <Collapsible
                id="sidebarSubMenu-pages"
                className="w-full"
                trigger={
                  <span
                    id="mobile-collapsible-pates"
                    className="flex font-semibold text-[15px] py-[6px] text-[#444] items-center justify-between w-full"
                  >
                    {[
                      `Pages`,
                      <BsChevronDown key="newProd-trigger" id="sidebarSubMenu-pageItems" />,
                    ]}
                  </span>
                }
              >
                <ul className="pt-[9px] pb-[5px]">
                  <li>
                    <Link
                      href={"/faq"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/orderTrack"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Order Track
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/dashboard/userDashboard"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/404"}
                      className={
                        "pl-[10px] inline-block py-2 text-[#444] text-[14px] font-semibold"
                      }
                    >
                      404
                    </Link>
                  </li>
                </ul>
              </Collapsible>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
