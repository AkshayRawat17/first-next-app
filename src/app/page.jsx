"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  let router = useRouter()

  return (
    <>
      <h2>This is Home Page</h2>
      <button onClick={() => router.push("/login")}>Login Page</button>
    </>
  );

}
