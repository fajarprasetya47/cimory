import { Close, KeyboardArrowLeft, KeyboardArrowRight, Menu } from "@mui/icons-material";
import { Box, Button, Container, Drawer, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

export function CardSmall({
    title = "Dairyland",
    subtitle,
    image = 'image/sakura.jpeg',
    withButton = false,
}) {
    return (
        <Box className="rounded-[16px] max-w-[310px] border border-[#eee]">
            <Box
                sx={{
                    background: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className="h-[175px] rounded-t-[16px]"
            ></Box>
            <Box className="px-6 mt-2">
                <Box sx={{ maxHeight: '60px', display: '-webkit-box', overflow: "hidden", textOverflow: 'ellipsis', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', }}>
                    <p className="text-[#404484] font-bold text-[18px]">{title}</p>
                </Box>
                <p className="text-[#E02424] text-[12px]">{subtitle}</p>
            </Box>
            <Box className="px-6 my-2 text-black text-[12px] flex justify-end">
                <a>Lebih Lanjut {'>'}</a>
            </Box>
        </Box>
    )
}

export default function Article() {
    const article = [
        {
            title: "Berikut adalah 5 hewan yang dapat berinteraksi denganmu di Dairyland!",
            img: "image/cimory-wisata.jpeg",
        },
        {
            title: "Nikmati liburan berkesan di Taman Sakura",
            img: "image/sakura.jpeg",
        },
        {
            title: "7 alasan Dairyland adalah wisata terbaik untuk Anda dan keluarga!",
            img: "image/cimory-riverside.jpeg",
        },
        {
            title: "Berikut adalah 5 hewan yang dapat berinteraksi denganmu di Dairyland!",
            img: "image/cimory-wisata.jpeg",
        },
        {
            title: "Nikmati liburan berkesan di Taman Sakura",
            img: "image/sakura.jpeg",
        },
        {
            title: "7 alasan Dairyland adalah wisata terbaik untuk Anda dan keluarga!",
            img: "image/cimory-riverside.jpeg",
        },
    ];
    return (
        <>
            <Container className="mt-[64px]">
                <Box className="flex justify-between items-center gap-8 flex-wrap">
                    <p className="text-[#404484] md:text-[40px] text-[36px] font-bold">Artikel Baru Dairyland & Minimania</p>
                    <Box>
                        <button className="text-[#404484] border border-[#404484] px-[24px] md:py-[12px] py-[8px] rounded-lg text-[13px]">Lihat Semua Artikel</button>
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
                            nextEl: ".next-article",
                            prevEl: ".prev-article",
                        }}
                    >
                        {article?.map((item) => (
                            <SwiperSlide>
                                <CardSmall
                                    title={item.title}
                                    image={item.img}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Box className="flex gap-8 justify-end mt-8">
                        <Box>
                            <IconButton className="prev-article">
                                <KeyboardArrowLeft sx={{ color: '#404484', fontSize: '35px' }} />
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton className="next-article">
                                <KeyboardArrowRight sx={{ color: '#404484', fontSize: '35px' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
