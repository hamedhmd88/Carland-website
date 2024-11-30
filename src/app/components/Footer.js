"use client";

import Image from "next/image";

import { FaPhone, FaEnvelope } from "react-icons/fa";

import CopyRight from "./CopyRight";

import { motion } from "framer-motion";

import { fadeIn } from "../../../variants";

import { Link } from "react-scroll";

import logo from "/public/assets/icons/logo.svg";

function Footer() {
  return (
    <>
      <footer className=" pt-20 bg-[#0A0A0A] z-20" id="contact">
        <div className=" container mx-auto mb-24">
          {/* grid */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className=" flex flex-col lg:flex-row lg:justify-around gap-x-5 gap-y-14"
          >
            <div className=" flex flex-col flex-1 gap-y-8">
              {/* logo */}
              <Link
                to={"home"}
                smooth={true}
                spy={true}
                className=" cursor-pointer active-logo"
              >
                <Image src={logo} width={200} height={200} />
              </Link>
              {/* text */}
              <div className=" text-primary tracking-[1px] text-justify">
                {" "}
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </div>
              {/* phone & email */}
              <div className=" flex flex-col gap-y-4 font-semibold">
                {/* phone */}
                <div className=" flex items-center gap-x-[10px]">
                  <FaPhone />
                  <div className=" font-medium">124002010-(+98)</div>
                </div>
                {/* email */}
                <div className="flex items-center gap-x-[10px]">
                  <FaEnvelope />
                  <div className=" font-medium">office@carland.com</div>
                </div>
              </div>
            </div>

            {/* links */}
            <div className=" flex-1 flex flex-col xl:items-center">
              <div>
                <h3 className=" h3 font-bold mb-8">خودرولند </h3>
                <ul className=" flex flex-col gap-y-4 font-semibold">
                  <li>
                    <a>تهران</a>
                  </li>
                  <li>
                    <a>خودروها</a>
                  </li>
                  <li>
                    <a>موبایل</a>
                  </li>
                  <li>
                    <a>کارهای ما</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* program */}

            <div className=" flex-2">
              <h3 className=" h3 font-bold mb-8"> ساعات کاری</h3>
              <div className=" flex flex-col gap-y-4">
                <div className=" flex gap-x-2">
                  <div className=" text-primary">شنبه تا چهارشنبه : </div>
                  <div className=" font-semibold">
                    {" "}
                    09:00 صبح _ 09:00 بعدازظهر
                  </div>
                </div>
                <div className=" flex gap-x-2">
                  <div className=" text-primary"> پنج شنبه : </div>
                  <div className=" font-semibold">
                    {" "}
                    09:00 صبح _ 07:00 بعدازظهر
                  </div>
                </div>
                <div className=" flex gap-x-2">
                  <div className=" text-primary"> جمعه : </div>
                  <div className=" font-semibold">تعطیل</div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex-1">
              <h3 className="h3 font-bold mb-8">اطلاعیه</h3>
              <div className=" mb-9 text-primary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </div>
              {/* Form */}
              <form className="flex gap-x-2 h-14">
                <input
                  type="text"
                  placeholder=" ایمیل را وارد کنید"
                  className="outline-none  bg-[#242424]  h-full border rounded-lg pr-4 focus:border-accent"
                />
                <button
                  type="submit"
                  className="btn btn-sm btn-accent w-24 leading-[2px]"
                >
                  ارسال
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        <CopyRight />
      </footer>
    </>
  );
}

export default Footer;
