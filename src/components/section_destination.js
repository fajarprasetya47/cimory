import { Close, KeyboardArrowLeft, KeyboardArrowRight, Menu } from "@mui/icons-material";
import { Box, Button, Container, Drawer, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import { CardSmall } from "./section_article";

export default function Destination() {
    const destination = [
        {
            title: "Mountain View",
            subtitle: "Bogor, Jawa Barat",
            img: "image/mountainview.jpeg",
        },
        {
            title: "Riverside",
            subtitle: "Bogor, Jawa Barat",
            img: "image/cimory-riverside.jpeg",
        },
        {
            title: "Mountain View",
            subtitle: "Bogor, Jawa Barat",
            img: "image/mountainview.jpeg",
        },
        {
            title: "Riverside",
            subtitle: "Bogor, Jawa Barat",
            img: "image/cimory-riverside.jpeg",
        },
        {
            title: "Mountain View",
            subtitle: "Bogor, Jawa Barat",
            img: "image/mountainview.jpeg",
        },
        {
            title: "Riverside",
            subtitle: "Bogor, Jawa Barat",
            img: "image/cimory-riverside.jpeg",
        },
    ];
    return (
        <>
            <Container className="mt-[64px]">
                <Box className="flex justify-between items-center gap-8 flex-wrap">
                    <Box>
                        <p className="text-[#404484] md:text-[40px] text-[36px] font-bold">Destinasi Tujuan</p>
                        <p className="font-semibold text-black md:text-[20px] text-[16px] ">Dairyland tersebar lebih dari 7 titik di seluruh Indonesia</p>
                    </Box>
                    <Box>
                        <button className="text-[#404484] border border-[#404484] px-[24px] md:py-[12px] py-[8px] rounded-lg text-[13px]">Lihat Semua Destinasi</button>
                    </Box>
                </Box>
                <Box className="mt-[32px]">
                    <Swiper
                        breakpoints={{
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        speed={800}
                        modules={[Navigation, Scrollbar]}
                        spaceBetween={32}
                        slidesPerView={2}
                        navigation={{
                            nextEl: ".next-destination",
                            prevEl: ".prev-destination",
                        }}
                    >
                        {destination?.map((item) => (
                            <>
                                <SwiperSlide>
                                    <CardSmall
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        image={item.img}
                                    />
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                    <Box className="flex gap-8 justify-end mt-8">
                        <Box className="prev-destination">
                            <IconButton>
                                <KeyboardArrowLeft sx={{ color: '#404484', fontSize: '35px' }} />
                            </IconButton>
                        </Box>
                        <Box className="next-destination">
                            <IconButton >
                                <KeyboardArrowRight sx={{ color: '#404484', fontSize: '35px' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
