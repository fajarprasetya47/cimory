import { Close, Menu } from "@mui/icons-material";
import { Box, Button, Container, Drawer, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Product() {
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
                <Box className="flex md:flex-row flex-col justify-between gap-8">
                    <Box
                        className="md:h-[500px] h-[250px] w-[340px] rounded-lg"
                        sx={{
                            background: `url(${selected.img})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                    </Box>
                    <Box className="md:w-3/5 w-full flex flex-col md:gap-14 gap-7">
                        <Box>
                            <p className="sm:text-[24px] text-[20px] font-semibold text-black">Bawa Pulang</p>
                            <p className="text-[#404484] sm:text-[36px] text-[28px] font-bold">Kenangan Mengesankan</p>
                            <p className="font-semibold text-black sm:text-[16px] text-[14px]">Berwisata, Berkuliner, dan Berbelanja untuk Momen Terbaikmu disini</p>
                        </Box>
                        <Box className="flex flex-col md:gap-8 gap-4">
                            {menu.map((item) => {
                                let cls = "";
                                if (item.name == selected.name) cls = "active";
                                return (
                                    <Box onClick={() => {
                                        setSelected(item)
                                    }}
                                        className={"text-[36px] font-bold text-black opacity-20 hover:opacity-90 " + cls} sx={{ '&.active': { opacity: 1 } }}
                                    >
                                        {item.name}
                                    </Box>
                                )
                            })}
                        </Box>
                        <p className="text-black font-semibold">{selected.desc}</p>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
