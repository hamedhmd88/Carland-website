"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "../../../variants";

import car01 from "/public/assets/images/carSlider/car01.svg";
import car02 from "/public/assets/images/carSlider/car02.svg";
import car03 from "/public/assets/images/carSlider/car03.svg";

import icon01 from "/public/assets/icons/carSlider/gearshift.svg";
import icon02 from "/public/assets/icons/carSlider/seat.svg";
import icon03 from "/public/assets/icons/carSlider/gas.svg";
import icon04 from "/public/assets/icons/carSlider/engine.svg";
import icon05 from "/public/assets/icons/carSlider/wheel.svg";

const cars = [
  {
    type: " هاچ بک ",
    name: "Ford Focused",
    price: 29,
    start: 3.5,
    image: car01,
    info: [
      {
        icon: icon01,
        text: "Manual",
      },
      {
        icon: icon02,
        text: "5 Seats",
      },
      {
        icon: icon03,
        text: "Gas",
      },
      {
        icon: icon04,
        text: "1600 HP",
      },
      {
        icon: icon05,
        text: "Front",
      },
    ],
  },
  {
    type: "سدان",
    name: "Toyota Corolla",
    price: 25,
    start: 5,
    image: car02,
    info: [
      {
        icon: icon01,
        text: "Manual",
      },
      {
        icon: icon02,
        text: "5 Seats",
      },
      {
        icon: icon03,
        text: "Gas",
      },
      {
        icon: icon04,
        text: "1600 HP",
      },
      {
        icon: icon05,
        text: "Front",
      },
    ],
  },
  {
    type: "اس یو وی ",
    name: "Honda CR-V",
    price: 35,
    start: 4.5,
    image: car03,
    info: [
      {
        icon: icon01,
        text: "Automatic",
      },
      {
        icon: icon02,
        text: "5 Seats",
      },
      {
        icon: icon03,
        text: "Gas",
      },
      {
        icon: icon04,
        text: "1600 HP",
      },
      {
        icon: icon05,
        text: "Front",
      },
    ],
  },
  {
    type: " شاسی بلند ",
    name: "Mazda Mx-5",
    price: 32,
    start: 4.9,
    image: car02,
    info: [
      {
        icon: icon01,
        text: "Automatic",
      },
      {
        icon: icon02,
        text: "5 Seats",
      },
      {
        icon: icon03,
        text: "Gas",
      },
      {
        icon: icon04,
        text: "1600 HP",
      },
      {
        icon: icon05,
        text: "Front",
      },
    ],
  },
];

function CarSlider() {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 32 },
            1260: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {cars.map((car, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[385px] bg-[#0A0A0A] rounded-lg mx-auto p-5 mt-5 sm:mx-0 ">
                  <Image src={car.image} width={380} height={284} alt="" />
                  <div className=" flex flex-col justify-between">
                    <div>
                      <div className=" text-lg text-primary ">{car.type}</div>
                      <h3 className=" text-left font-bold">{car.name}</h3>
                      <div className=" mb-10 text-accent font-semibold">
                        {" "}
                        {car.price} / روز
                      </div>
                    </div>
                    <div className=" flex justify-center items-center gap-x-2 text-accent h-max mb-4">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className=" flex items-center gap-x-3 xl:gap-x-4 mx-auto w-max mb-10">
                    {car.info.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className=" flex flex-col items-center justify-center"
                        >
                          <div className=" bg-[#000000] w-12 h-12 mb-2 rounded-full flex justify-center items-center">
                            <Image src={item.icon} width={24} height={24} />
                          </div>
                          <div className=" text-[12px] ">{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                  <button className=" btn btn-accent btn-lg">
                    دیدن جزییات
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </>
  );
}

export default CarSlider;
