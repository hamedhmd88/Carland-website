"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// framer motion
import { motion } from "framer-motion";

import Image from "next/image";

import { fadeIn } from "../../../variants";

import avatar from "/public/assets/images/testimonial/avatar.png";

// Data
const testimonialData = [
  {
    message:
      "آنها واقعاً از انتظارات من فراتر رفتند و تجربه کرایه اتومبیل من را لذت بخش کردند",
    avatar: avatar,
    name: "علی رمضانی",
    job: "عکاس و فیلمبردار",
  },
  {
    message:
      "آنها واقعاً از انتظارات من فراتر رفتند و تجربه کرایه اتومبیل من را لذت بخش کردند",
    avatar: avatar,
    name: "علی رمضانی",
    job: "عکاس و فیلمبردار",
  },
  {
    message:
      "آنها واقعاً از انتظارات من فراتر رفتند و تجربه کرایه اتومبیل من را لذت بخش کردند",
    avatar: avatar,
    name: "علی رمضانی",
    job: "عکاس و فیلمبردار",
  },
  
];

function TestimonialSlider() {
  return (
    <>
      <motion.div  variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }} className=" container mx-auto">
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className=" h-[450px] xl:h-[400px]"
        >
          {testimonialData.map((person, index) => {
            const { message, avatar, name, job } = person;
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center text-center cursor-pointer">
                  <FaQuoteRight className="text-7xl text-accent mb-6" />
                  <div className="text-xl xl:text-2xl max-w-[874px] mb-12 font-medium tracking-[4px]">
                    {message}
                  </div>
                  <Image
                    src={avatar}
                    width={64}
                    height={64}
                    alt=""
                    className="mb-4"
                  />
                  <div className="text-lg tracking-[4px] font-medium">{name}</div>
                  <div className="text-primary tracking-[4px]">{job}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </>
  );
}

export default TestimonialSlider;
