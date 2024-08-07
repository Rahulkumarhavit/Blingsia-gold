export default function ProductCard() {
    return (
        <div className="text-white  items-center mt-24 gap-10 w-full max-container font-poppins">
            <div className="text-center ">
                <div className="text-2xl lg:text-4xl inline-block relative font-bold mb-2">GET PRODUCT FOR <span className="relative">FREE</span>
                    <img src="/offertag.png" className="absolute w-[50px] sm:w-[64px] right-0 top-0 lg:top-2 transform translate-x-10 sm:translate-x-[52px] z-[-1] " alt="" />
                </div>
                <div className="text-xl lg:text-[32px] text-slate-400 font-semibold font-kalam mt-3">NO RISK HUGE OPPORTUNITY.</div>
            </div>
            <div className="lg:flex sm:justify-between mt-20 md:gap-3 lg:gap-8 ">
                <div className="sm:flex sm:justify-between  lg:flex-wrap lg:justify-normal bg-gray-950 mt-5 md:mt-auto p-10 rounded-xl">
                    <div className="sm:w-3/5 lg:w-auto sm:flex ">
                        <div className="">
                            <div className="text-3xl xl:text-[32px] font-bold ">Get coin</div>
                            <div className="mt-5 text-xl xl:text-xl text-[#F2F2F2] ">Earn coins each time you save. You can get up to <span className="font-bold">10x</span> coin on you investment.</div>
                            <hr class="h-px sm:hidden lg:block my-5 bg-gray-900 border-0 dark:bg-gray-800"></hr>
                        </div>
                        <div class="w-px lg:hidden h-full bg-gray-900 ml-9 "></div>
                        {/* <hr class="h-px xl:hidden my-5 bg-gray-900 border-0 dark:bg-gray-800"></hr> */}
                    </div>
                    <div className="flex justify-center lg:w-full">
                        <img src="/rewards.png" className="mt-5"></img>
                    </div>
                </div>
                <div className="sm:flex sm:justify-between  lg:flex-wrap lg:justify-normal bg-gray-950 mt-5 md:mt-auto p-10 rounded-xl">
                    <div className="sm:w-3/5 lg:w-auto sm:flex">
                        <div>
                            <div className="text-3xl xl:text-[32px] font-bold ">Play</div>
                            <div className="mt-5 text-xl xl:text-xl text-[#F2F2F2] ">Bid on your favourite product using earned coin. Compete with other for the winning rank.</div>
                            <hr class="h-px sm:hidden lg:block my-5 bg-gray-900 border-0 dark:bg-gray-800"></hr>
                        </div>
                        <div class="w-px lg:hidden h-full bg-gray-900 ml-9 "></div>
                        {/* <hr class="h-px lg:hidden my-5 bg-gray-100 border-0 dark:bg-gray-800"></hr> */}
                    </div>
                    <div className="flex justify-center lg:w-full">
                        <img src="/remote.png " className="mt-5 "></img>
                    </div>
                </div>
                <div className="sm:flex sm:justify-between  lg:flex-wrap lg:justify-normal bg-gray-950 mt-5 md:mt-auto p-10 rounded-xl">
                    <div className="sm:w-3/5 lg:w-auto sm:flex">
                        <div>
                            <div className="text-3xl xl:text-[32px] font-bold ">Win</div>
                            <div className="mt-5 text-xl xl:text-xl text-[#F2F2F2]  ">Highest coin bidder will win the product, plus you get to keep the every rupee you invested.</div>
                            <hr class="h-px sm:hidden lg:block my-5 bg-gray-900 border-0 dark:bg-gray-800"></hr>
                        </div>
                        <div class="w-px lg:hidden h-full bg-gray-900 ml-9 "></div>
                        {/* <hr class="h-px xl:hidden my-5 bg-gray-900 border-0 dark:bg-gray-800"></hr> */}
                    </div>
                    <div className="flex justify-center lg:w-full">
                        <img src="/trophy.png" className="mt-5 ml-10"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}