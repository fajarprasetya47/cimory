import { Close, Menu } from "@mui/icons-material";
import { Box, Button, Container, Drawer, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

export default function Video() {
    return (
        <>
            <section class="mt-0">
                <div class="relative w-full lg:h-[700px] h-[320px]  bg-[#404484] lg:rounded-bl-[20px] lg:rounded-br-[20px] rounded-bl-[5px] rounded-br-[5px] text-center lg:mt-20 mt-10  mb-4 ">

                    <div class="absolute lg:-bottom-10 -bottom-4 right-0 lg:w-fit w-max">
                        <img class="lg:w-full lg:h-auto w-[400px] h-[150px]" src=" image/bg-rabbit2.png" alt="cimory-bgrabit2" />
                    </div>

                    <h2 class="text-center text-white lg:text-[40px] text-lg font-semibold lg:pt-16 pt-4">Jelajahi Dairyland</h2>
                    <div class="container flex items-center justify-center mx-auto  lg:py-8  py-2">
                        <p class="lg:w-[400px] w-[300px]  text-center text-white lg:text-[16px] text-[12px] font-normal">Tonton video keseruan di Dairyland dan temukan ide untuk liburan keluarga Anda!</p>
                    </div>
                    <div class="relative lg:py-1 py-2 container mx-auto lg:px-36 px-1 justify-center lg:max-w-auto max-w-auto w-full ">
                        <div class="relative lg:w-[750px] w-max-auto mx-auto max-w-screen-xl">
                            <iframe class="lg:w-[100%]  lg:h-[450px] h-[200px] w-[85%]  shadow-md shadow-gray-600 rounded-lg container mx-auto " src="https://www.youtube.com/embed/_g0EAQafWEE?si=97OOHPYAahe_x4SC&amp;amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
