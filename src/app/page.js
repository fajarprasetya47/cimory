'use client';

import Footer from "@/components/footer";
import Heads from "@/components/head";
import Header from "@/components/header";
import QuickBuy from "@/components/quickbuy";
import Article from "@/components/section_article";
import SectionBottom from "@/components/section_bottom";
import Destination from "@/components/section_destination";
import Product from "@/components/section_product";
import Video from "@/components/section_video";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Heads />
      <Product/>
      <Destination/>
      <Article/>
      {/* <Header /> */}
      {/* <SectionBottom/> */}
      <Video/>
      <Footer/>
      <QuickBuy/>
    </>
  );
}
