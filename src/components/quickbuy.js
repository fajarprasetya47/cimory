import { FlashOn, SupportAgent } from "@mui/icons-material";

export default function QuickBuy() {
    return (
        <div class="fixed right-0 lg:bottom-5 bottom-0 z-10 lg:px-5 px-1 lg:py-4 sm:py-3 py-6 bg-transparent flex-col space-y-4 items-center mx-2 inline-flex">
            <a href="https://cimorydairyland.com/tiket" class="lg:inline-flex hidden text-white bg-red-600 lg:rounded-[50px] rounded-full text-[16px] lg:px-4 px-1 py-1 lg:py-2.5 text-center items-center me-2 font-semibold poppins">
                 {/* <img class="lg:w-5 lg:h-5" src="/storage/logo/lightning-bolt.png" alt="cimory-lighting" /> */}
                <FlashOn/>
                <span class="font-semibold pl-2"> Quick Buy</span>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=6281388938607&amp;text=Halo, aku tertarik untuk tahu lebih lanjut mengenai Dairyland / Minimania.&amp;type=phone_number&amp;app_absent=0" target="_blank" class="inline-flex text-white bg-[#04db5c] lg:rounded-[50px] rounded-full lg:text-[16px] text-[10px] lg:px-4 px-1 lg:py-2.5 py-1 text-center items-center me-2 font-semibold poppins">
                {/* <img class="lg:h-4 sm:h-3 sm:w-3 h-3 w-3 lg:w-4" src=" /storage/logo/headset.png" alt="" /> */}
                <SupportAgent/>
                <span class="font-semibold lg:pl-2 pl-1"> Contact Us</span>
            </a>

        </div>
    )
}