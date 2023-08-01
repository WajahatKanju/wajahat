import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a seasoned coding enthusiast and professional developer, my profound
        passion for all things related to computers fuels my unwavering
        dedication to excellence in the world of technology. My remarkable
        journey began at a tender age of 13 when I first delved into the
        captivating realm of coding. Over the years, I have skillfully honed my
        expertise through an array of diverse experiences, including the
        successful completion of intricate projects on esteemed platforms like
        freecodecamp, and earning prestigious certificates from the esteemed
        Coursera. My ability to handle real-world projects with finesse has not
        only sharpened my technical prowess but also instilled in me a deep
        understanding of the pragmatic challenges faced by businesses. From
        designing elegant user interfaces to developing robust back-end systems,
        I take pride in my holistic approach to problem-solving, always striving
        to deliver efficient, scalable, and user-centric solutions. My extensive
        knowledge of programming languages and frameworks enables me to adapt
        swiftly to evolving technologies, empowering me to stay ahead of the
        curve and embrace innovation in the ever-evolving tech landscape. I
        thrive in collaborative environments, where my strong communication
        skills allow me to seamlessly interact with diverse teams, bridging the
        gap between technical complexities and business objectives. Whether it's
        designing software architectures or optimizing algorithms for peak
        performance, my passion for excellence and unyielding dedication have
        been the driving forces behind my continuous growth as a professional
        developer. With each project I undertake, I aim not only to meet but
        exceed expectations, leaving a lasting impact on the digital world and
        contributing to the progress of society through technology.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
