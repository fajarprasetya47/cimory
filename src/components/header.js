import Image from "next/image";

export default function Header() {
    return (
        <div class="fixed z-20 w-full top-0">
            <nav class="bg-gradient-to-r from-[#404484] via-[#404484] to-[#404484] lg:py-0 py-2.5 lg:mt-0 mt-10 items-center">
                <div class="flex lg:flex-wrap flex-nowrap justify-center items-center mx-auto container lg:px-0 px-4 max-w-screen-xl">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="image/cimory-dairyland.svg" alt="cimory-logdairy" class="lg:w-[150px] w-[75px] lg:mr-[120px] lg:-ml-10"/>
                    </a>
                    <h1 class="text-center text-white lg:text-[23px] text-[9px] font-semibold lg:-ml-8 ml-0">Destinasi Utama Liburan Seru dan Wisata Edukasi Keluarga Indonesia</h1>
                    <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="sm:inline-flex items-center p-1.5 mt-0 ms-3 text-sm text-white rounded-lg lg:hidden">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6 transform -scale-x-100" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" class=""></path>
                        </svg>
                    </button>
                </div>
            </nav>
            <nav class="lg:visible invisible bg-white shadow-gray-600 shadow-lg">
                <div class="max-w-screen-xl px-4 py-3 container mx-auto">
                    <div class="items-center justify-center hidden w-full md:flex md:w-auto md:order-1 lg:px-3 px-8" id="navbar-sticky ">
                        <ul class="justify-center w-full md:flex md:w-auto md:order-1 lg:px-4 max-lg:block max-lg:w-full lg:ml-0 lg:space-x-10 max-lg:space-y-3 items-center">
                            <li class="group max-lg:border-b max-lg:py-2 relative -mx-2">
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdestinasi" class="flex items-center justify-between w-full py-2 px-0 hover:text-red-600 hover:fill-red-600 text-black lg:text-[16px] text-sm font-semibold">Destinasi <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" class=""></path>
                                </svg></button>
                                <div id="dropdestinasi" class="z-10 lg:h-auto h-[150px] overflow-auto no-scrollbar font-semibold bg-white lg:opacity-90 rounded-bl-lg rounded-br-lg shadow-lg shadow-gray-800 overflow-y-auto hidden" style={{position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: 'translate3d(228.333px, 133.333px, 0px)'}} data-popper-placement="bottom">
                                    <ul class="bg-white px-8 pb-4 pt-5 lg:top-8 max-lg:top-8 -left-6 z-50 lg:w-[310px] w-max" aria-labelledby="dropdownLargeButton">
                                        <li class="max-lg:border-b py-2 rounded"><a href="https://cimorydairyland.com/restaurant/mountain-view" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Mountain View, Puncak</a></li>
                                        <li class="max-lg:border-b py-1.5 rounded"><a href="https://cimorydairyland.com/wisata/riverside" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Riverside, Puncak</a>
                                        </li>
                                        <li class="max-lg:border-b py-1.5 rounded"><a href="https://cimorydairyland.com/wisata/onthevalley" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland On The Valley, Bawen</a>
                                        </li>
                                        <li class="max-lg:border-b py-1.5 rounded"><a href="https://cimorydairyland.com/wisata/farmthemepark-prigen" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Farm Theme Park, Prigen</a>
                                        </li>
                                        <li class="max-lg:border-b py-1.5 rounded"><a href="https://cimorydairyland.com/wisata/farmthemepark-puncak" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Farm Theme Park, Puncak</a>
                                        </li>
                                        <li class="max-lg:border-b py-1.5 rounded"><a href="https://cimorydairyland.com/wisata/cheesepark" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Cepogo Cheesepark, Boyolali</a>
                                        </li>
                                        <li class="max-lg:border-b py-1.5 rounded"><a href="https://cimorydairyland.com/wisata/minimania-lembang" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Minimania, Lembang</a>
                                        </li>
                                        <li class="max-lg:border-b py-1.5 rounded"><a href="https://cimorydairyland.com/wisata/minimania-puncak" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Minimania, Puncak</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="group max-lg:border-b max-lg:py-2 relative">
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropaktivitas" class="flex items-center justify-between w-full py-2 px-0 hover:text-red-600 hover:fill-red-600 text-black lg:text-[16px] text-sm font-semibold overflow-y-auto">Aktivitas <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" class=""></path>
                                </svg></button>
                                <div id="dropaktivitas" class="z-10 hidden lg:h-auto h-[150px] overflow-auto no-scrollbar font-semibold bg-white lg:opacity-90 rounded-bl-lg rounded-br-lg shadow-lg shadow-gray-800" style={{position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: 'translate3d(361.667px, 133.333px, 0px)'}} data-popper-placement="bottom">
                                    <ul class="bg-white px-8 pb-8 pt-5 lg:top-8 max-lg:top-8 -left-6 z-50 lg:w-[402px] w-max" aria-labelledby="dropdownLargeButton">
                                        <li class="max-lg:border-b py-1 rounded">
                                            <span class="text-black lg:text-[24px] font-semibold">Dairyland</span>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Sky Ride</a></li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Milk Museum</a>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">ATV</a>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Forest Walk</a>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Animal Feeding</a>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">COW Milking</a>
                                        </li>
                                        <li class="">
                                            <div class="border-b-2 border-[#404484] px-auto mt-2"></div>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded">
                                            <span class="text-black lg:text-[24px] font-semibold">Minimania</span>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded">
                                            <a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Taman Sakura</a>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded">
                                            <a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Miniloco</a>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded">
                                            <a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Sakura River Cruise</a>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded mt-4">
                                            <a href="https://cimorydairyland.com/comingsoon" class="w-[373.88px] text-[#404484] hover:text-red-600 text-lg font-bold font-['Lato']">Lihat Semua Aktivitas</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="max-lg:border-b max-lg:py-2"><a href="https://cimorydairyland.com/artikel" class="hover:text-red-600 text-black lg:text-[16px] text-sm font-semibold mx-0">Artikel</a>
                            </li>
                            <li class="group max-lg:border-b max-lg:py-2 relative">
                                <button id="dropdownNavbarLink" data-dropdown-toggle="droppaket" class="flex items-center justify-between w-full py-2 px-0 hover:text-red-600 hover:fill-red-600 text-black lg:text-[16px] text-sm font-semibold">Paket<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" class=""></path>
                                </svg></button>
                                <div id="droppaket" class="z-10 lg:h-auto h-[150px] overflow-auto no-scrollbar font-semibold bg-white lg:opacity-90 rounded-bl-lg rounded-br-lg shadow-lg shadow-gray-800 hidden" style={{position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: 'translate3d(589.444px, 133.333px, 0px)'}} data-popper-placement="bottom">
                                    <ul class="bg-white px-8 pb-8 pt-5 lg:top-8 max-lg:top-8 -left-6 z-50 lg:w-[402px] w-max" aria-labelledby="dropdownLargeButton">
                                        <li class="max-lg:border-b py-1 rounded">
                                            <span class="text-black lg:text-[24px] font-semibold font-['Poppins']">Dairy Tour</span>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Riverside, Puncak</a></li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland On The Valley, Bawen</a>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Farm Theme Park, Prigen</a>
                                        </li>
                                        <li class="">
                                            <div class="border-b-2 border-[#404484] px-auto mt-2"></div>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded">
                                            <span class="text-black lg:text-[24px] font-semibold font-['Poppins']">Group Rombongan</span>
                                        </li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Mountain View, Puncak</a></li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Riverside, Puncak</a></li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland On The Valley, Bawen</a></li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Farm Theme Park, Prigen</a></li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Dairyland Farm Theme Park, Puncak</a></li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Cepogo Cheese Park, Boyolali</a></li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Minimania, Lembang</a></li>
                                        <li class="max-lg:border-b py-1 rounded"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[15px] font-['Lato']">Minimania, Puncak</a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li class="max-lg:border-b max-lg:py-2"><a href="#" class="hover:text-red-600 text-black lg:text-[16px] text-sm font-semibold mx-0">Promo</a>
                            </li>
                            <li class="max-lg:border-b max-lg:py-2"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[16px] text-sm font-semibold mx-0">Kemitraan</a>
                            </li>
                            <li class="max-lg:border-b max-lg:py-2"><a href="https://cimorydairyland.com/comingsoon" class="hover:text-red-600 text-black lg:text-[16px] text-sm font-semibold mx-0">Tentang</a>
                            </li>
                            <li class="max-lg:border-b max-lg:py-2">
                                <a href="https://cimorydairyland.com/tiket" class="text-[14px] text-white bg-red-600 hover:bg-[#404484] rounded-[8px] text-[16px] px-[50px] py-2 text-center inline-flex items-center me-2 font-semibold tracking-wide">
                                    <svg class="w-[22px] h-[22px] mr-2 tracking-widest" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ðŸ¦† icon &quot;ticket&quot;" class="">
                                            <path id="Vector" d="M24.699 8.61527L22.4004 6.31662C22.2149 6.13367 21.9677 6.02683 21.7073 6.01719C21.447 6.00755 21.1925 6.0958 20.994 6.26453C20.6876 6.52536 20.2943 6.66155 19.8922 6.64611C19.4901 6.63067 19.1085 6.46474 18.823 6.18119C18.5396 5.89569 18.3737 5.51416 18.3583 5.11218C18.3429 4.7102 18.479 4.31708 18.7396 4.01068C18.9084 3.8122 18.9966 3.5577 18.987 3.29737C18.9773 3.03703 18.8705 2.78976 18.6875 2.6043L16.3868 0.30305C16.1924 0.10899 15.9289 0 15.6542 0C15.3795 0 15.116 0.10899 14.9216 0.30305L11.2572 3.96693C11.0309 4.19398 10.8603 4.47031 10.7587 4.77429C10.7389 4.83274 10.7059 4.88584 10.6623 4.92947C10.6187 4.9731 10.5656 5.00609 10.5071 5.02588C10.203 5.12751 9.92663 5.29832 9.69974 5.52488L0.30305 14.9216C0.10899 15.116 0 15.3795 0 15.6542C0 15.9289 0.10899 16.1924 0.30305 16.3868L2.6043 18.6855C2.78976 18.8684 3.03703 18.9753 3.29737 18.9849C3.5577 18.9945 3.8122 18.9063 4.01068 18.7376C4.31638 18.4746 4.71015 18.3369 5.11308 18.352C5.51602 18.3672 5.89835 18.534 6.18347 18.8191C6.46859 19.1043 6.63543 19.4866 6.65056 19.8895C6.66569 20.2925 6.52799 20.6862 6.26505 20.9919C6.09632 21.1904 6.00807 21.4449 6.01771 21.7052C6.02735 21.9656 6.13419 22.2128 6.31714 22.3983L8.61579 24.697C8.81022 24.891 9.0737 25 9.34841 25C9.62311 25 9.8866 24.891 10.081 24.697L19.4777 15.3003C19.7042 15.0735 19.875 14.7973 19.9767 14.4934C19.9964 14.4348 20.0294 14.3815 20.0732 14.3378C20.1169 14.294 20.1702 14.261 20.2288 14.2413C20.5327 14.1397 20.8088 13.969 21.0357 13.7428L24.6996 10.0784C24.8929 9.88401 25.0014 9.62093 25.0013 9.34674C25.0012 9.07254 24.8925 8.80955 24.699 8.61527ZM12.8037 7.07086C12.7263 7.14827 12.6344 7.20967 12.5333 7.25157C12.4321 7.29346 12.3238 7.31502 12.2143 7.31502C12.1048 7.31502 11.9964 7.29346 11.8953 7.25157C11.7942 7.20967 11.7023 7.14827 11.6249 7.07086L11.0254 6.47132C10.8729 6.31424 10.7883 6.10346 10.79 5.88455C10.7916 5.66563 10.8794 5.45615 11.0342 5.30138C11.189 5.14661 11.3985 5.05898 11.6175 5.05743C11.8364 5.05588 12.0471 5.14053 12.2041 5.29309L12.8037 5.8921C12.8811 5.96949 12.9425 6.06138 12.9844 6.1625C13.0263 6.26363 13.0478 6.37202 13.0478 6.48148C13.0478 6.59094 13.0263 6.69933 12.9844 6.80046C12.9425 6.90158 12.8811 6.99346 12.8037 7.07086ZM15.0955 9.36273C14.9393 9.51891 14.7274 9.60664 14.5064 9.60664C14.2855 9.60664 14.0736 9.51891 13.9173 9.36273L13.3443 8.78976C13.267 8.71237 13.2056 8.62048 13.1637 8.51936C13.1218 8.41823 13.1002 8.30984 13.1002 8.20039C13.1002 8.09093 13.1218 7.98254 13.1637 7.88142C13.2056 7.78029 13.267 7.68841 13.3443 7.61101C13.5007 7.4547 13.7127 7.36688 13.9337 7.36688C14.0432 7.36688 14.1516 7.38844 14.2527 7.43033C14.3538 7.47222 14.4457 7.53361 14.5231 7.61101L15.0961 8.18398C15.1737 8.26137 15.2354 8.35332 15.2775 8.45457C15.3195 8.55582 15.3412 8.66438 15.3413 8.77403C15.3413 8.88368 15.3197 8.99226 15.2778 9.09354C15.2358 9.19483 15.1742 9.28684 15.0966 9.3643L15.0955 9.36273ZM17.3874 11.6546C17.31 11.732 17.2182 11.7934 17.117 11.8353C17.0159 11.8772 16.9075 11.8988 16.798 11.8988C16.6886 11.8988 16.5802 11.8772 16.4791 11.8353C16.3779 11.7934 16.2861 11.732 16.2087 11.6546L15.6357 11.0816C15.4832 10.9246 15.3987 10.7138 15.4003 10.4949C15.402 10.2759 15.4897 10.0665 15.6445 9.9117C15.7993 9.75693 16.0089 9.6693 16.2278 9.66775C16.4467 9.6662 16.6574 9.75085 16.8145 9.90341L17.3874 10.4764C17.4653 10.5536 17.5272 10.6455 17.5695 10.7467C17.6118 10.848 17.6337 10.9565 17.6339 11.0663C17.6342 11.176 17.6128 11.2846 17.5709 11.3861C17.529 11.4875 17.4676 11.5796 17.39 11.6572L17.3874 11.6546ZM19.7017 13.9746C19.6243 14.052 19.5324 14.1134 19.4313 14.1553C19.3302 14.1972 19.2218 14.2188 19.1123 14.2188C19.0029 14.2188 18.8945 14.1972 18.7933 14.1553C18.6922 14.1134 18.6003 14.052 18.5229 13.9746L17.9271 13.3756C17.848 13.2984 17.7851 13.2063 17.742 13.1046C17.6989 13.003 17.6764 12.8937 17.6759 12.7833C17.6753 12.6728 17.6968 12.5633 17.7389 12.4612C17.7811 12.3591 17.8431 12.2664 17.9214 12.1885C17.9997 12.1106 18.0927 12.049 18.195 12.0074C18.2973 11.9657 18.4068 11.9448 18.5173 11.9459C18.6277 11.947 18.7369 11.97 18.8384 12.0136C18.9398 12.0572 19.0316 12.1206 19.1084 12.2L19.7048 12.7985C19.7822 12.8759 19.8436 12.9678 19.8854 13.0689C19.9273 13.1701 19.9488 13.2785 19.9487 13.3879C19.9487 13.4974 19.9271 13.6058 19.8851 13.7069C19.8432 13.808 19.7817 13.8999 19.7043 13.9772L19.7017 13.9746Z" fill="#FFFFF0" class=""></path>
                                        </g>
                                    </svg>
                                    Beli Tiket
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
