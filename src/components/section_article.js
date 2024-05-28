import { Close, Menu } from "@mui/icons-material";
import { Box, Button, Container, Drawer, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

export function CardSmall({
    title = "Dairyland",
    subtitle = "Dairyland",
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
                <p className="text-[#404484] font-bold text-[18px]">{title}</p>
                <p className="text-[#E02424] text-[12px]">{subtitle}</p>
            </Box>
            <Box className="px-6 my-2 text-black text-[12px] flex justify-end">
                <a>Lebih Lanjut {'>'}</a>
            </Box>
        </Box>
    )
}

export default function Article() {
    const menu = [
        {
            name: "Destinasi",
            desc: "Jelajahi berbagai wahana seru, pertunjukan menarik, dan nikmati aktivitas menyenangkan dan ciptakan momen indah tak terlupakan bersama keluarga tercinta.",
            img: "image/cimory-wisata.jpeg",
        },
        {
            name: "Restaurant",
            desc: "Cicipi berbagai menu makanan dan minuman khas Dairyland. Temukan pengalaman bersantap yang menyenangkan dan memuaskan di Dairyland Restaurant.",
            img: "image/cimory-resto.jpeg",
        },
        {
            name: "Cimory Shop",
            desc: "Temukan berbagai produk Cimory, Chocomory, merchandise unik, dan souvenir menarik lainnya. Lengkapi pengalaman Dairyland Anda di Dairyland Shop.",
            img: "image/cimory-shop.jpeg",
        },
    ];
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(menu[0]);
    return (
        <>
            <Container className="mt-[64px]">
                <Box>
                    <p className="text-[#404484] text-[40px] font-bold">Artikel Baru Dairyland & Minimania</p>
                </Box>
                <Box className="mt-[32px]">
                    <Swiper
                        breakpoints={{
                            575: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                        }}
                        speed={1000}
                        modules={[Navigation, Scrollbar]}
                        spaceBetween={32}
                        slidesPerView={2}
                    // navigation={{
                    //     nextEl: ".next-btn-icon",
                    //     prevEl: ".prev-btn-icon",
                    // }}
                    >
                        {/* {listApp?.map((item) => ( */}
                        <SwiperSlide>
                            <CardSmall />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSmall />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSmall />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSmall />
                        </SwiperSlide>
                        {/* ))} */}
                    </Swiper>
                </Box>
            </Container>
        </>
    );
}
