import { Close, Menu } from "@mui/icons-material";
import { Box, Button, Container, Drawer, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Heads() {
    const menu = [
        {
            name: "Destinasi",
        },
        {
            name: "Aktifitas",
        },
        {
            name: "Artikel",
        },
        {
            name: "Paket",
        },
        {
            name: "Promo",
        },
        {
            name: "Kemitraan",
        },
        {
            name: "Tentang",
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <>
            <Box
                className="h-[400px]"
                sx={{
                    background: 'url(image/banner.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <Container>
                    <Box className="flex justify-between items-center py-2">
                        <img src="image/cimory-dairyland.svg" alt="cimory-logdairy" class="lg:w-[150px] w-[80px]" />
                        <Box className="md:visible invisible flex justify-end gap-9">
                            {menu?.map((item) => (
                                <Box sx={{
                                    '@media only screen and (max-width: 768px)': {
                                        display: 'none'
                                    }
                                }}>{item?.name}</Box>
                            ))}
                        </Box>
                        <Box
                            onClick={() => {
                                setOpen(true);
                            }}
                            sx={{
                                display: 'none',
                                '@media only screen and (max-width: 768px)': {
                                    display: 'unset'
                                }
                            }}
                        >
                            <Menu />
                        </Box>
                    </Box>
                    <Box className="flex flex-col gap-8 mt-12">
                        <p className="md:text-[36px] text-[24px] font-extrabold">
                            Destinasi Utama Liburan Seru dan <br />
                            Wisata Edukasi Keluarga Indonesia
                        </p>
                        <Box>
                            <button className="bg-[#E02424] px-[24px] md:py-[12px] py-[8px] rounded-lg text-[14px]">Beli Tiket</button>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Drawer
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                anchor="left"
            >
                <Box
                    sx={{
                        padding: "16px",
                        width: "250px",
                    }}
                >
                    <Box
                        sx={{
                            padding: "10px 8px",
                            marginBlockEnd: "16px",
                        }}
                    >
                        <Stack
                            direction={"row"}
                            justifyContent={"flex-end"}
                            alignItems={"center"}
                        >
                            <IconButton
                                onClick={()=>{
                                    setOpen(false);
                                }}
                                sx={{ p: "0" }}
                                aria-label="delete"
                            >
                                <Close sx={{ fontSize: "24px", color: "#000" }} />
                            </IconButton>
                        </Stack>
                    </Box>
                    {menu &&
                        menu.map((menu) => {
                            return (
                                <>
                                    <Box
                                        sx={{
                                            mb: 0.5,
                                            alignItems: "center",
                                            position: "relative",
                                            flexDirection: "row",
                                            color: 'black',
                                            '&:hover': {
                                                color: 'red',
                                            }
                                        }}
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <div noWrap={true}>{menu.name}</div>
                                    </Box>
                                </>
                            );
                        })
                    }
                </Box>
            </Drawer>
        </>
    );
}
