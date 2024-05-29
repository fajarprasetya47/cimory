import { Close, KeyboardArrowLeft, KeyboardArrowRight, Menu } from "@mui/icons-material";
import { Box, Button, Container, Drawer, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";


export default function Promo() {
    const promo = [
        {
            name: "Promo 1",
            img: "image/promo1.jpeg",
        },
        {
            name: "Promo 2",
            img: "image/promo2.jpeg",
        },
    ];
    return (
        <>
            <Container className="mt-[64px]">
                <Box>
                    <p className="text-[#404484] md:text-[40px] text-[36px] font-bold">Promo</p>
                </Box>
                <Box className="mt-[32px] flex md:gap-8 gap-4 justify-center items-center">
                    <Box>
                        <IconButton className="prev-btn-icon">
                            <KeyboardArrowLeft sx={{ color: '#404484', fontSize: '35px', }} />
                        </IconButton>
                    </Box>
                    <Swiper
                        speed={1000}
                        modules={[Navigation, Scrollbar]}
                        // spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".next-btn-icon",
                            prevEl: ".prev-btn-icon",
                        }}
                    >
                        {promo?.map((item) => (
                            <SwiperSlide>
                                <Box
                                    className="md:h-[350px] md:w-[1000px] sm:w-[500px] h-[175px] rounded-lg"
                                    sx={{
                                        background: `url(${item.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                ></Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Box>
                        <IconButton className="next-btn-icon">
                            <KeyboardArrowRight sx={{ color: '#404484', fontSize: '35px', }} />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
