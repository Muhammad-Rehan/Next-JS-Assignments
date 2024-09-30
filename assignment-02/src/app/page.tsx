// import Image from "next/image";

import React from "react";
import Header from "./components/header";
import Image from "next/image";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
    <Header />
      <Image className="image" src={'/home.jpg'} width={400} height={100} alt="home page"></Image>
    <Footer />
    </>

  );
}