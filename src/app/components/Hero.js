"use client";

import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { motion, easeInOut } from "framer-motion";
import Search from "./Search";
import Image from "next/image";

import googleIcon from "../../../public/assets/icons/buttons/google-play.svg";
import appleIcon from "../../../public/assets/icons/buttons/app-store.svg";
import car from "../../../public/assets/images/hero/car.svg";

import { fadeIn } from "../../../variants";

function Hero() {
  const { searchActive } = useContext(SearchContext);

  return (
    <>
      <section className="h-screen xl:h-[90vh] bg-[#b2b7c22]/10" id="home">
        <div className="container mx-auto h-full pt-16">
          {/* متن و تصویر */}
          <div className="flex  flex-col-reverse xl:flex-row justify-center items-center h-full">
            {/* تصویر خودرو */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.6 }}
              className="relative w-full h-full  max-h-[50vh] md:max-w-[70vw] xl:max-w-[800px] xl:max-h-[542px] xl:absolute xl:-left-[30px] min-[1680px]:left-[120px] xl:top-48"
            >
              <Image
                src={car}
                fill
                alt="Car"
                priority
                className="object-contain"
              />
            </motion.div>

            {/* متن */}
            <div className="relative text-center xl:text-right xl:max-w-xl mt-16 xl:mt-0 xl:ml-auto">
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="h1 xl:tracking-[3px] "
              >
                بهترین خودروهای <span className="text-accent xl:font-extrabold xl:text-6xl xl:leading-[82px] xl:border-dashed xl:border-b-4 xl:border-[#c9080e]">جهانی</span> را
                 را از ما بخواهید
              </motion.h1>
              <motion.p
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: 1, amount: 0.6 }}
                className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 xl:tracking-[2px]"
              >
                سواری ایده آل خود را برای هر ماجراجویی با طیف متنوع ما پیدا کنید
                اجاره خودرو مقرون به صرفه و قابل اعتماد
              </motion.p>

              {/* دکمه‌ها */}
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                className="flex gap-x-5 justify-center xl:justify-end mt-6"
              >
                <button className="btn-cta">
                  <Image
                    src={googleIcon}
                    alt="Google Play"
                    width={132}
                    height={36}
                  />
                </button>
                <button className="btn-cta">
                  <Image
                    src={appleIcon}
                    alt="App Store"
                    width={132}
                    height={36}
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {searchActive ? (
          <div className="fixed top-[80px] left-1/2 transform -translate-x-1/2 z-10 w-[80%] max-w-[1300px] p-4 rounded-lg transition-all duration-300">
            <Search />
          </div>
        ) : (
          <div className=" -mt-12 w-full max-w-[1300px] mx-auto">
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="-mt-12 w-full max-w-[1300px] mx-auto"
            >
              <Search />
            </motion.div>
          </div>
        )}
      </section>
    </>
  );
}

export default Hero;
