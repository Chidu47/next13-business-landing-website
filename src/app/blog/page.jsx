import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link
        href={`/blog/itemid`}
        className={styles.container}
        // key={item.id}
      >
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3359003/pexels-photo-3359003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>item.title</h1>
          <p className={styles.desc}>item.desc</p>
        </div>
      </Link>
      <Link
        href={`/blog/itemid`}
        className={styles.container}
        // key={item.id}
      >
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3359003/pexels-photo-3359003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>item.title</h1>
          <p className={styles.desc}>item.desc</p>
        </div>
      </Link>
      <Link
        href={`/blog/itemid`}
        className={styles.container}
        // key={item.id}
      >
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3359003/pexels-photo-3359003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>item.title</h1>
          <p className={styles.desc}>item.desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
