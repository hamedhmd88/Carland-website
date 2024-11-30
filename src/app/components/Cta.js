"use client";

// next image
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

import phone from "/public/assets/images/cta/phone.svg";
import google from "/public/assets/icons/buttons/google-play.svg";
import apple from "/public/assets/icons/buttons/app-store.svg";

export default function Cta() {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 overflow-hidden bg-[#0A0A0A] border-b border-t border-[#242424] "
      id="contact"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col md:flex-row xl:items-center">
          {/* text  */}

          <div className=" flex-1 xl:ml-24 text-center md:text-right mb-12 md:mb-0">
            <div className=" max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="h2 leading-[88px]"
              >
                اکنون برنامه{" "}
                <span className="text-accent xl:font-extrabold xl:text-6xl xl:leading-[82px] xl:border-dashed xl:border-b-2 xl:border-[#c9080e]">
                  {" "}
                  خودرولند{" "}
                </span>{" "}
                <br/>
                را به راحتی دانلود کنید
              </motion.h2>
              <motion.p
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="text-justify mb-10 tracking-[2px] leading-6"
              >
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </motion.p>
              {/* btns */}
              <motion.div
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start"
              >
                <button className="btn-cta">
                  <Image src={google} width={132} height={36} alt="" />
                </button>
                <button className="btn-cta">
                  <Image src={apple} width={132} height={36} alt="" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className=" flex-1 flex justify-center order-1 md:order-none"
          >
            <Image src={phone} width={320} height={640} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
