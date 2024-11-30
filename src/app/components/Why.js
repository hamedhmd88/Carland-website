"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "../../../variants";

import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

import carWhy from "/public/assets/images/why/car.svg";

function Why() {
  return (
    <>
      <section className="section flex items-center" id="why">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="h2 tracking-[4px] text-center"
          >
            برتری بی نظیر و رضایت مشتری
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="max-w-[680px] text-center mx-auto mb-2  description  tracking-[2px] leading-8"
          >
            تعهد ما به ارائه خدمات استثنایی ما را متمایز می کند رقابت از لحظه ای
            که با ما درگیر هستید، ما در تلاش هستیم در هر تعاملی از انتظارات خود
            فراتر بروید
          </motion.p>
          {/* car image */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="hidden md:flex justify-center mb-6 xl:mb-2"
          >
            <Image src={carWhy} width={1060} height={420} alt="" />
          </motion.div>
          {/* grid item */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className=" flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-3 xl:gap-y-0 xl:gap-x-[30px]"
          >
            {/* item 1 */}
            <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
              <MdKey className="text-[38px] text-accent mb-4" />
              <h3 className="h3">   اجاره ساده و سریع خودرو  </h3>
              <p className="hidden tracking-[2px] xl:flex">
              ما نیاز شما را اولویت بندی می کنیم و برای اطمینان از آن فراتر می رویم
              تجربه شما با ما چیزی کم از برجسته نیست
              </p>
            </div>
            {/* item 2 */}
            <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
              <MdTrendingUp className="text-[38px] text-accent mb-4" />
              <h3 className="h3">وسایل نقلیه مدرن و خوب نگهداری شده</h3>
              <p className="hidden tracking-[2px] xl:flex">
              ما نیاز شما را اولویت بندی می کنیم و برای اطمینان از آن فراتر می رویم
              تجربه شما با ما چیزی کم از برجسته نیست
              </p>
            </div>
            {/* item 3 */}
            <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
              <MdHandshake className="text-[38px] text-accent mb-4" />
              <h3 className="h3">خدمات سریع و انعطاف پذیر</h3>
              <p className="hidden tracking-[2px] xl:flex">
              ما نیاز شما را اولویت بندی می کنیم و برای اطمینان از آن فراتر می رویم
              تجربه شما با ما چیزی کم از برجسته نیست
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Why;
