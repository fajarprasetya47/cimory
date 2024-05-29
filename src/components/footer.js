import { Box } from "@mui/material"

export default function Footer() {
    return (
        <footer class="relative bottom-0 lg:mt-10 lg:w-full lg:h-auto">
            <Box
                sx={{
                    background: 'url(image/bg-footer.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                // className="container max-w-screen-xl"
            >
                <Box className="flex justify-center sm:gap-12 gap-4 pb-4">
                    <div class="">
                        <h2 class="lg:mb-10 mb-2 lg:text-[18px] text-[10px] font-bold text-[#404484] font-poppins">Perusahaan</h2>
                        <ul class="text-black font-normal lg:text-[14px] text-[9px]">
                            <li class="mb-2">
                                <a href="#" class="hover:underline">Tentang</a>
                            </li>
                            <li class="mb-2">
                                <a href="https://cimorydairyland.com/wisata" class="hover:underline">Taman Wisata</a>
                            </li>
                            <li class="mb-2">
                                <a href="#" class="hover:underline">Pesan Tiket</a>
                            </li>
                            <li class="mb-2">
                                <a href="#" class="hover:underline">Artikel</a>
                            </li>
                            <li class="mb-2">
                                <a href="#" class="hover:underline">Kontak</a>
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <h2 class="lg:mb-10 mb-2 lg:text-[18px] text-[10px] font-bold text-[#404484] font-poppins">Bantuan</h2>
                        <ul class="text-black font-normal lg:text-[14px] text-[9px]">
                            <li class="mb-2">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li class="mb-2">
                                <a href="#" class="hover:underline">Terms &amp; Condition</a>
                            </li>
                            <li class="mb-2">
                                <a href="#" class="hover:underline">Disclaimer</a>
                            </li>
                            <li class="mb-2">
                                <a href="#" class="hover:underline">Customer Care</a>
                            </li>
                            <li class="mb-2">
                                <a href="https://cimorydairyland.com/bantuan/faq" class="hover:underline">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <h2 class="lg:mb-10 mb-2 lg:text-[18px] text-[10px] font-bold text-[#404484] font-poppins">Newsletter</h2>
                        <ul class="text-black font-normal lg:text-[14px] text-[9px]">
                            <li class="mb-[18px] lg:w-[270px] w-[140px] leading-1">
                                <p class="">Subscribe newsletter kami untuk informasi terbaru &amp; terupdate dari Dairyland, dan dapatkan Yoghurt Stick GRATIS!!</p>
                            </li>
                            <li class="lg:pb-0 pb-3">
                                <div className="flex gap-1">
                                    <input type="text" class="block text-start lg:text-[13px] p-3 px-4 text-[9px] rounded-[6px] z-0 shadow focus:shadow focus:outline-none" placeholder="Alamat Email Anda" />
                                    <button class="px-3 text-white lg:rounded-md rounded-sm bg-red-600 hover:bg-[#404484] lg:text-[13px] text-[6px]">Subscribes</button>
                                </div>

                            </li>

                        </ul>
                    </div>
                </Box>
            </Box>
            <div class="relative bottom-0 lg:py-2 py-1 bg-gradient-to-r from-[#404484] via-[#404484] to-[#404484] text-center">
                <span class="text-center text-white lg:text-[14px] text-[10px] font-normal">
                    <a href="/" class="">Copyright Dairyland All Right Reserved © 2024</a>
                </span>
            </div>
        </footer>
    )
}