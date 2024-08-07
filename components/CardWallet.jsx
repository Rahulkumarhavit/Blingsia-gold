

export default function CardWallet() {
    return (
        <div id="features" className=" max-container  md:flex md:flex-row lg:px-32  sm:gap- md:gap-32 font-poppins  pt-20 lg:pt-40 md:pt-32 ">
            <div className="">
                <img src="/handholding.png" className="w-[600px] h-[400px]"></img>
            </div>
            <div className="text-white">
                <div className="text-3xl lg:text-4xl block font-semibold text-center md:text-start"> Get instant <span className="text-[#FF9736] font-kalam">10%
                    <span className="font-kalam text-[#ff973680] bg-opacity-0">*</span></span> return
                    <div>
                        on your savings
                    </div>
                </div>

                <p className="text-xl mt-8 text-[#DADADA]  text-center md:text-start" style={{ lineHeight: 1.5 }} >
                    Earn assured <span className="font-bold">10%</span> extra over 11% market returns! Take charge of your investment earnings. Stay invested, reap greater rewards.
                </p>

                <div className="mt-8 md:mt-10">
                    <div className="text-lg text-gray-400">
                        <span>maturity</span>
                        <hr class="h-px w-14 bg-gray-400 border-0 dark:bg-gray-800"></hr>
                    </div>
                    <div className="flex lg:gap-20 gap-6 mt-6">
                        <div className="">
                            <div className="text-base lg:text-2xl text-[#848C8C] mb-1">3 months</div>
                            <div className="text-lg">instant <span className="text-[#FF9736]">2%</span> return</div>
                        </div>
                        <div>
                            <div className="text-base lg:text-2xl text-[#848C8C] mb-1">6 months</div>
                            <div className="text-lg">
                                instant <span className="text-[#FF9736]">5%</span> return
                            </div>
                        </div>
                        <div>
                            <div className="text-base lg:text-2xl text-[#848C8C] mb-1">12 months</div>
                            <div className="text-lg">instant <span className="text-[#FF9736]">10%</span> return</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}