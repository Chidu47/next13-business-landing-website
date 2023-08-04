import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>data.title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            praesentium eos, eius modi quas inventore sunt eum, dolores fugiat
            quis mollitia sed similique a magni, sit ipsam voluptatibus
            provident culpa! Dolorum nostrum eligendi molestiae nam magnam
            excepturi, ad neque voluptas?
          </p>
          <div className={styles.author}>
            <Image
              src={
                "https://images.pexels.com/photos/3359003/pexels-photo-3359003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3359003/pexels-photo-3359003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          sint debitis cupiditate tenetur laboriosam laborum commodi. Officiis
          non corporis quos hic voluptatibus! Ducimus earum obcaecati ipsum
          atque hic, saepe harum eius velit voluptatem numquam iure voluptate
          deleniti, voluptatibus, laborum expedita repellat dolorum
          necessitatibus unde perferendis voluptates laudantium quasi id
          repellendus consequatur. Minus alias hic ducimus sunt nulla in
          repellat adipisci iure numquam, asperiores saepe maxime? Odit, ab
          corporis harum quidem asperiores nam obcaecati fugiat, voluptate
          praesentium voluptatem cumque sunt, dolore tempore ex labore
          voluptatum rerum ratione esse cum error. Libero at laborum placeat
          ullam voluptatibus ducimus sunt ipsum nihil vel!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
