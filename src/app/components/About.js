

"use client";

import Image from "next/image";
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import car01 from "/public/assets/images/about/car01.png";
import useIntersection from "./useIntersection "; // فانکشن برای انجام کار یوزاینویو که اعداد افزایش یابد

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      className="section flex items-center mt-16 xl:mt-0"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center xl:flex-row xl:justify-between">
          {/* text & stats */}
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="h2"
              >
                {" "}
                خدمات خودرو با{" "}
                <span className="text-accent xl:font-extrabold xl:text-6xl xl:leading-[82px] xl:border-dashed xl:border-b-2 xl:border-[#c9080e]">
                  {" "}
                  خودرولند{" "}
                </span>{" "}
                آسان شد{" "}
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="mb-[42px] max-w-md description mx-auto xl:mx-0  xl:mb-true0 tracking-[2px] leading-8"
              >
                اجاره خودرو، تعمیر آسان خودرو، خرید خودروهای متنوع و همچنین فروش
                فابل اعتماد و یکپارچه خودرو با خودرولند
              </motion.p>
              {/* stats */}
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center justify-center xl:justify-start gap-x-8 mb-true2"
              >
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className=" text-[15px] font-semibold text-primary">
                    انواع خودرو
                  </div>
                </div>

                {/* rental types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={143} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className=" text-[15px] font-semibold text-primary">
                    موقعیت اجاره
                  </div>
                </div>

                {/* repair types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[15px] font-semibold text-primary">
                    نقاط تعمیر
                  </div>
                </div>
              </motion.div>
              {/* btn */}
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: 1, amount: 0.6 }}
                className="hidden xl:block mx-auto bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16  font-bold text-white tracking-[2px] text-[19px] max-w-[380px]"
              >
                تماشا تمام خودروها
              </motion.button>
            </div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: 1, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={car01}
              width={600}
              height={448}
              alt="Car Image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
