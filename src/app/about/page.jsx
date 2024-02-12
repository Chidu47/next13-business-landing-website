import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
export const metadata = {
  title: "About",
  description: "Business landing page",
};
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/3359003/pexels-photo-3359003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="da"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experience</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            molestias nam minima cupiditate dignissimos perferendis non quos
            quisquam vero provident, laborum voluptas, nihil velit. Accusantium
            voluptatem omnis eius nisi saepe officiis quos. Officia dolores
            magnam vitae recusandae dolorum, aperiam exercitationem ipsum sed
            nesciunt natus facilis repudiandae accusamus, modi deserunt
            <br />
            <br />
            deleniti. Quae error fugit ab iste, beatae, in natus rerum non
            corporis sed sit doloremque ad similique deleniti dolor laborum,
            quaerat odio rem quisquam sequi obcaecati deserunt aliquid. Totam
            voluptatibus consequatur distinctio, corporis eos quod magnam
            placeat architecto vel. Repellat quis aliquam id natus earum ut
            ipsum itaque totam doloremque. Odit!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            molestias nam minima cupiditate dignissimos perferendis non quos
            quisquam vero provident, laborum voluptas, nihil velit. Accusantium
            voluptatem omnis eius nisi saepe officiis quos. Officia dolores
            magnam vitae recusandae dolorum, aperiam exercitationem ipsum sed
            nesciunt natus facilis repudiandae accusamus, modi deserunt
            <br />
            <br />- Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy Mobile Apps
          </p>
          <Button text={"contact"} url={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
