"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "../../../variants";

import brand1 from "/public/assets/icons/brands/ford.svg";
import brand2 from "/public/assets/icons/brands/audi.svg";
import brand3 from "/public/assets/icons/brands/bmw.svg";
import brand4 from "/public/assets/icons/brands/mazda.svg";
import brand5 from "/public/assets/icons/brands/mercedes.svg";
import brand6 from "/public/assets/icons/brands/vw.svg";
import brand7 from "/public/assets/icons/brands/skoda.svg";

function Brands() {
  return (
    <>
      <section className=" xl:pt-16 xl:h-[200px]  flex flex-col justify-center">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className=" container mx-auto "
        >
          <div className=" grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
            <div>
              <Image src={brand1} width={85} height={32} />
            </div>
            <div>
              <Image src={brand5} width={60} height={60} />
            </div>
            <div>
              <Image src={brand2} width={85} height={50} />
            </div>
            <div>
              <Image src={brand3} width={60} height={60} />
            </div>
            <div>
              <Image src={brand6} width={60} height={60} />
            </div>
            <div>
              <Image src={brand7} width={60} height={60} />
            </div>
            <div>
              <Image src={brand4} width={62} height={62} />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Brands;
