"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { BiX, BiMenuAltRight } from "react-icons/bi";
import logo from "../../../public/assets/icons/logo.svg";
import SearchMobile from "./SearchMobile";
import { SearchContext } from "../context/SearchContext";

function Header() {
  const {setSearchActive} = useContext(SearchContext)
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // search 
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };
    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <header
        className={`${
          header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
        } fixed w-full max-w-[1920px] mx-auto font-vazir z-20 transition-all duration-300`}
      >
        <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
          {/* NavBar  */}
          <nav
            className={`${
              nav
                ? "max-h-max py-8 px-4 xl:py-0 xl:px-0"
                : "max-h-0 xl:max-h-max"
            } hidden xl:flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold  xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-xl xl:normal-case`}
          >
            <Link
              className="cursor-pointer"
              to="home"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              صفحه اصلی
            </Link>
            <Link
              className="cursor-pointer"
              to="cars"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              خودرو ها
            </Link>
            <Link
              className="cursor-pointer"
              to="about"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              درباره ما
            </Link>
            <Link
              className="cursor-pointer"
              to="why"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              چرا ما
            </Link>
            <Link
              className="cursor-pointer"
              to="testimonials"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              نظرها
            </Link>
            <Link
              className="cursor-pointer"
              to="contact"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              تماس با ما
            </Link>
            <Link
              className=" xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
              to="Seeallcars"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              دیدن تمام خودرو ها
            </Link>
            <SearchMobile />
          </nav>
          <div className=" flex justify-between items-center px-4">
            {/*  nav open menu */}
            <div
              onClick={() => setNav(!nav)}
              className=" cursor-pointer xl:hidden"
            >
              {nav ? (
                <BiX className=" text-4xl" />
              ) : (
                <BiMenuAltRight className=" text-4xl" />
              )}
            </div>
            {/* logo */}
            <Link
              to="home"
              smooth={desktopMode}
              spy={true}
              className="cursor-pointer "
            >
              <Image src={logo} width={194} height={64} alt="" />
            </Link>
          </div>
          {/* NavBar Mobile  */}
          <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'} flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold  xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase  text-lg xl:normal-case xl:hidden`}>
            <Link
              className="cursor-pointer"
              to="home"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              صفحه اصلی
            </Link>
            <Link
              className="cursor-pointer"
              to="cars"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              خودرو ها
            </Link>
            <Link
              className="cursor-pointer"
              to="about"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              درباره ما
            </Link>
            <Link
              className="cursor-pointer"
              to="why"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              چرا ما
            </Link>
            <Link
              className="cursor-pointer"
              to="testimonials"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              نظرها
            </Link>
            <Link
              className="cursor-pointer"
              to="contact"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              تماس با ما
            </Link>
            <Link
              className=" xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
              to="Seeallcars"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              دیدن تمام خودرو ها
            </Link>
            <SearchMobile/>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
