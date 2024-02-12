import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Blog",
  description: "Business landing page",
};
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Error fetching Posts");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  // console.log(data);
  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => (
        <Link
          key={item._id}
          href={`/blog/${item._id}`}
          className={styles.container}
          // key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item?.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item?.title}</h1>
            <p className={styles.desc}>{item?.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
