"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0]?.value;
    const password = e.target[1]?.value;

    await signIn("credentials", { email, password });
    // try {
    //   const res = await fetch("/api/auth/register", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify({ name, email, password }),
    //   });

    //   res.status === 201 &&
    //     router.push("/dashboard/login?success=Account has been created");
    // } catch (error) {
    //   setError(true);
    // }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Sign In</button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
