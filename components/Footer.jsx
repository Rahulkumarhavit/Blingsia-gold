"use client"
import Link from "next/link";

export default function Footer() {

    const handleHelpClick = () => {
        window.location.href = 'mailto:hello@hypecard.in';
    };

    return (
        <>
            <div className="text-white max-container font-poppins">
                <div className="mb-36 mt-28">
                    <div className="text-center text-lg text-gray-400 mb-20">Powered by</div>
                    <div className="md:flex md:justify-between  lg:mx-48">
                        <div className="mb-5 flex justify-center">
                            <div><img src="/safegold.png" className="h-5" alt="" /></div>
                        </div>
                        <div className="mb-5 flex justify-center">
                            <div><img src="/brinks.png" className="h-5" alt="" /></div>
                        </div>
                        <div className="mb-5 flex justify-center ">
                            <div><img src="/startupindia.png" className="h-10" alt="" /></div>
                        </div>
                    </div>
                </div>

                <div className="mb-48 ">
                    <div className=" lg:hidden text-3xl sm:text-4xl font-semibold mb-8 mt-5 flex items-center justify-center">
                        <div className="w-1/2 text-center">
                            Join our Community
                        </div>
                    </div>
                    <div className="lg:flex lg:justify-between lg:px-36">
                        <div className="flex items-center justify-center">
                            <img src="/investmentPlant.png" className="lg:mr-20 lg:w-[550px]"></img>
                        </div>
                        <div className="lg:ml-28">
                            <div>

                                <div className="hidden lg:block lg:text-6xl xl:text-6xl  font-semibold mb-8 mt-5">Join our Community</div>

                                <div className="text-[#f2f2f2]  mb-8 mt-5 lg:mt-10 lg:mb-12 text-center text-lg lg:text-start lg:text-xl xl:text-2xl">Connect and enhance your financial health and luxury lifestyle. Receive exclusive updates on free products, gold investment tips. Join now and transform your approach to luxury and finance.</div>
                            </div>
                            <div className="sm:flex sm:justify-center lg:justify-start sm:gap-x-10 ">
                                <Link href="https://www.instagram.com/blingsia.club?igsh=c3B1cjh4cTRqeGx2">
                                    <div className=" px-10 py-4 rounded-full flex justify-center gap-x-3  font-semibold border border-gray-500 mb-5">
                                        <img src="/instagram.png" ></img>
                                        Join our Instagram
                                    </div>
                                </Link>
                                <div className=" px-10 py-4 rounded-full flex justify-center gap-x-3 font-semibold border border-neutral-700 mb-5">
                                    <img src="/twitter.png" className="" ></img>
                                    <Link href="">Join our Twitter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="">
                    <div className="sm:flex sm:justify-between ">
                        <div className="mr-5">
                            <img src="/Blingsia.svg" className="h-24 sm:mt-2"></img>
                            <p className="text-base font-poppins mt-1 text-[#616161]">Made with ❤️ in India </p>
                        </div>
                        <div className="mt-4 ">
                            <div className="flex gap-4 md:gap-7">
                                <div><img src="/appstorebutton.svg" className="w-24 md:w-28 lg:w-32 " ></img></div>
                                <div><img src="/playstorebutton.svg" className="w-24 md:w-28 lg:w-32"></img></div>
                            </div>
                            <div className="flex sm:justify-end mt-6 gap-3 md:gap-4">
                                <Link href="https://www.facebook.com/profile.php?id=61554933682103">
                                    <div className="border border-neutral-400 p-1 rounded-full bg-white">
                                        <img src="/facebook.svg" className="w-4 h-4  m-1 "></img>
                                    </div>
                                </Link>
                                <Link href="https://www.instagram.com/blingsia.club?igsh=c3B1cjh4cTRqeGx2">
                                    <div className="border border-neutral-400 p-1 rounded-full bg-white">
                                        <img src="/instagram.svg" className="w-4 h-4 rounded-sm m-1 "></img>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div className="border border-neutral-400 p-1 rounded-full bg-white">
                                        <img src="/twitter.svg" className="w-4 h-4 rounded-sm m-1 "></img>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div className="border border-neutral-400 p-1 rounded-full bg-white">
                                        <img src="/linkedin.svg" className="w-4 h-4 rounded-sm m-1 "></img>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <hr class="h-px my-5 bg-gray-900 border-0"></hr>

                    <div className="sm:flex sm:flex-row-reverse sm:justify-between  ">
                        <div className="font-poppins text-[#CFCFCF] sm:items-end sm:text-xs md:text-base sm:flex sm:gap-4 md:gap-6 lg:gap-10">
                            <div className="mb-2 md:mb-6"><Link href="/">Term of Use</Link></div>
                            <div className="mb-2 md:mb-6"><Link href="/">Privacy Policy</Link></div>
                            <div className="mb-2 md:mb-6"><Link href="/">Shipping & Refund</Link></div>
                            <div className="mb-2 md:mb-6 cursor-pointer" onClick={handleHelpClick} > Help</div>
                        </div>
                        <div className="text-base sm:text-xs md:text-base text-[#616161] font-poppins mt-8 sm:w-2/5">
                            <p className="font-semibold mb-4">Address</p>
                            <p>M. I. Road, Jaipur, Rajasthan - 302001</p>
                        </div>
                    </div>
                </div>

                <hr class="h-px my-10 bg-gray-900 border-0"></hr>
                <div className="text-center">
                    <div className="font-poppins text-xs md:text-base text-[#616161]">
                        ©  2021 abcdefgh Pvt. Ltd. All right reserved
                        <p className="font-poppins text-[8px] md:text-[12px] mt-8">
                            <span className="font-semibold"> Disclaimer:</span> Bidding's are part of Blingsia in-app rewards and are not offered to users for actual money, and hence it does not qualify as “gambling” under the Indian Law.
                        </p>
                    </div>
                </div>

            </div >
        </>
    )
}