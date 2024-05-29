'use client';

import Footer from "@/components/footer";
import Heads from "@/components/head";
import QuickBuy from "@/components/quickbuy";
import Article from "@/components/section_article";
import Destination from "@/components/section_destination";
import Product from "@/components/section_product";
import Promo from "@/components/section_promo";
import Video from "@/components/section_video";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Heads />
      <Product />
      <Promo />
      <Destination />
      <Article />
      <Video />
      <Footer />
      {/* <QuickBuy /> */}
    </>
  );
}
