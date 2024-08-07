"use client"
import { createProduct } from "@/pages/api/users";
import { useState } from "react";
import Modal from 'react-modal';
import axios from "axios";

export default function Hero() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [submitDialog, setSubmitDialog] = useState(false);
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState('');



    const handlesubmit = async (e) => {
        e.preventDefault();
        if (mobile.length === 10) {
            try {
                await axios.post('/api/users', { name, mobile, email });
                setIsDialogOpen(false);
                setSubmitDialog(true);
            } catch (error) {
                setIsDialogOpen(false);
                setSubmitDialog(true);
            }
        }
    }


    const handleMobileChange = (e) => {
        setMobile(e.target.value);
    };
    const handleMobileBlur = () => {
        if (mobile.length !== 10 || isNaN(mobile)) {
            setError('Mobile number must be 10 digits');
        } else {
            setError('');
        }
    };

    const submitCloseDialog = () => {
        setSubmitDialog(false)
        window.location.reload();
    }

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <section className="w-full flex  flex-col justify-center min-h-screen gap-10 max-container pt-20 lg:pt-40 md:pt-32 ">
            <div className="relative flex flex-col items-center justify-center  w-full  max-xl:padding-x">
                <div className="mb-5">
                    <img src="victoryhand.png" className=" hidden sm:block absolute z-[-1] w-[50px] sm:w-[100px] lg:w-[150px] lg:bottom-72 lg:transform lg:-translate-x-7 md:-translate-x-6 md:bottom-64  " ></img>

                    <div className='hidden sm:block mt-10 sm:text-4xl lg:text-8xl xl:whitespace-nowrap font-bold font-poppins'>
                        <span className='text-[#F8F8F8] block text-center '>
                            Saving made exciting
                        </span>
                        <div className="relative">
                            <span className='text-[#F8F8F8] block text-center'> and rewa<span className="text-[#FEB334] sm:text-[36px] lg:text-[75px] font-roboto">₹</span>ding</span>
                            <img src="/bendvector.svg" className="hidden sm:block absolute z-[-1] w-[50px] sm:w-[100px] lg:w-[130px] top-[1px] sm:right-8 md:translate-x-8 lg:translate-x-0" ></img>
                        </div>
                    </div>
                    <div className='sm:hidden mt-10 text-[48px] sm:text-4xl lg:text-8xl xl:whitespace-nowrap font-bold'>
                        <span className='text-[#F8F8F8] block text-center font-poppins'>
                            Saving made exciting
                            and rewa<span className="text-orange-300 text-[38px] font-roboto ">₹</span>ding
                        </span>
                    </div>
                </div>
                <div className="flex justify-center lg:w-2/3 mt-3 font-poppins">
                    <p className="text-[#DADADA] text-center text-xl lg:text-2xl" style={{ lineHeight: 1.5 }} >
                        Experience the thrill of gold investment and snag epic rewards. Where every save is a step towards luxury with <span className="text-[#FF9736] font-oswald font-medium">#BLINGSIA</span>
                    </p>
                </div>

                <div className="text-black text-center mt-8 md:flex md:justify-center md:gap-12 font-poppins">

                    <div>
                        <button onClick={openDialog} className="w-full px-8 py-5 mb-3 text-base md:text-lg font-semibold bg-white rounded-full flex justify-center gap-2">
                            <div><img src="/iphone.svg" alt="" /></div>
                            {/* <Link href="//www.google.com/" className="pt-[2px]" >Download for ios</Link> */}
                            Download for ios
                        </button>
                    </div>
                    <div>
                        <button onClick={openDialog} className="px-8 py-5 mb-3 text-base md:text-lg font-semibold bg-white rounded-full flex justify-center gap-2">
                            <div><img src="/playstorevector.svg" className="w-5" alt="" /></div>
                            {/* <Link href="//www.google.com/"  >Download for Android</Link> */}
                            Download for Android
                        </button>
                    </div>
                </div>

            </div>
            {/*----------------- form dialog model----------------- */}
            <div className="">
                <Modal
                    isOpen={isDialogOpen}
                    onRequestClose={closeDialog}
                    contentLabel="Example Dialog"

                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Change the background color here
                        },
                        content: {
                            overflow: 'hidden',
                            maxWidth: '800px',
                            maxHeight: '700px',
                            margin: 'auto', // Center the modal horizontally
                            borderRadius: '22px', // Set the border radius to 0
                            top: '55%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                        }
                    }}
                >

                    {/* ------------------mobile dialog------------ */}
                    <div className="sm:hidden bg-white rounded-3xl">
                        <div className="">
                            <div className="font-kalam font-bold text-2xl border-b-2 drop-shadow-2xl px-5">
                                <div className="flex justify-between">
                                    <div>Comming soon !</div>
                                    <div><button onClick={closeDialog}><img src="/closebutton.svg" alt="" /></button></div>
                                </div>
                                <p className="text-xs font-poppins font-medium pb-2">stay in the Loop and get exciting product</p>
                            </div>
                            <div className="px-6 mt-6">
                                <div className="flex items-end justify-center">
                                    <div><img src="/bag.svg" /></div>
                                    <div><img src="/watch.svg" /></div>
                                    <div><img src="/headphone.svg" /></div>
                                </div>
                                <div className="text-xs text-center font-poppins font-medium">
                                    Join our waitlist and stand a chance to win exiting rewards and get upto 500 coin as early bird joining bonus.
                                </div>
                                <div className="flex justify-center">
                                    <hr class="h-px my-5 w-2/5  bg-gray-200 border-0"></hr>
                                </div>
                                <div className="">
                                    <form onSubmit={handlesubmit}>
                                        <input type="text" className="border-gray-300 border p-3 mb-3 rounded-lg w-full" onChange={e => setName(e.target.value)} placeholder="Full Name" />

                                        <div className="mb-3">
                                            <input
                                                type="number"
                                                className="border-gray-300 border p-3  w-full rounded-lg"
                                                placeholder="Mobile Number"
                                                value={mobile}
                                                onChange={handleMobileChange}
                                                onBlur={handleMobileBlur}
                                            />
                                            {error && <p className="text-red-500">{error}</p>}
                                        </div>

                                        <input type="email" className="border-gray-300 border p-3 rounded-lg w-full" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                                        <div className="text-center mt-3 ">
                                            <button type="submit" className="bg-orange-600 px-12 py-4 rounded-full text-lg text-white font-semibold ">Notify me</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* -------------------desktop dialog------------- */}
                    <div className="hidden  sm:block  bg-white py-8" >
                        <div className="px-8">
                            <div>
                                <div className="flex justify-end">
                                    <button onClick={closeDialog}><img src="/closebutton.svg" className="w-4" alt="" /></button>
                                </div>
                                <div className="text-3xl font-kalam font-semibold text-center">
                                    Comming soon !
                                    <p className="text-lg font-poppins font-normal">Stay in the loop and get exciting product</p>
                                </div>
                            </div>
                            <form onSubmit={handlesubmit}>
                                <div className="flex justify-between gap-5 mt-20">
                                    <div className="w-2/4 flex gap-6">
                                        <div>
                                            <div className="flex items-end justify-center">
                                                <div><img src="/bag.svg" /></div>
                                                <div><img src="/watch.svg" /></div>
                                                <div><img src="/headphone.svg" /></div>
                                            </div>
                                            <div className="text-xs text-center font-poppins font-medium">
                                                Join our waitlist and stand a chance to win exiting rewards and get upto 500 coin as early bird joining bonus.
                                            </div>
                                        </div>
                                        <div class="w-px h-full bg-gray-400 mr-9"></div>
                                    </div>
                                    <div className="w-2/4 text-end">

                                        <input
                                            type="text"
                                            required className="border-gray-300 border p-3 mb-5 rounded-lg w-full"
                                            onChange={e => setName(e.target.value)}
                                            placeholder="Full Name"
                                        />

                                        <div className="mb-5">
                                            <input
                                                type="number"
                                                className="border-gray-300 border p-3  w-full rounded-lg focus:border-red-500"
                                                placeholder="Mobile Number"
                                                value={mobile}
                                                onChange={handleMobileChange}
                                                onBlur={handleMobileBlur}
                                            />
                                            {error && <p className="text-[#F04400]">{error}</p>}
                                        </div>

                                        <input type="email" required className="border-gray-300 border p-3 rounded-lg w-full" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className=" text-center mt-20">
                                    <button type="submit" className="bg-[#F04400] px-12 py-4 rounded-full text-lg text-white font-semibold ">Notify me</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </Modal>

            </div>
            {/*  /-----------------------submit dialog model------------------*/}
            <div className="">
                <Modal
                    isOpen={submitDialog}
                    onRequestClose={submitCloseDialog}
                    contentLabel="Example Dialog"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Change the background color here
                        },
                        content: {
                            overflow: 'hidden',
                            maxWidth: '900px',
                            maxHeight: '800px',
                            margin: 'auto', // Center the modal horizontally
                            borderRadius: '22px', // Set the border radius to 0
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'transparent',
                            border: 'none'
                        }
                    }}
                >
                    {/* -------submitted small device modal --------- */}
                    <div className="sm:hidden bg-gradient-to-t from-orange-500 via-white to-white rounded-3xl py-8">
                        <div className="px-12">
                            <div className="flex justify-end">
                                <button onClick={submitCloseDialog}><img src="/closebutton.svg" alt="" /></button>
                            </div>
                            <div className="font-kalam font-bold text-2xl text-center mt-2">
                                <div className="">
                                    <div>Thank you !</div>
                                </div>
                                <p className="text-xs font-poppins font-medium mt-2">We will notify you on the app launch. Get ready to win amazing rewards and improve your financial health.</p>
                            </div>
                            <div className="px-6 mt-6 ">
                                <div className="flex justify-center">
                                    <img src="/stagemobile.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="font-kalam text-white text-center text-lg mt-4 ">3 random early birds will win the prize</div>
                    </div>

                    {/* -------------------large device modal ------------- */}
                    <div className=" hidden sm:block bg-gradient-to-t from-orange-500 via-white to-white rounded-3xl py-8">
                        <div className="px-12">
                            <div className="flex justify-end">
                                <button onClick={submitCloseDialog}><img src="/closebutton.svg" alt="" /></button>
                            </div>
                            <div className="font-kalam font-bold text-4xl text-center mt-2">
                                <div className="">
                                    <div>Thank you !</div>
                                </div>
                                <p className="text-lg font-poppins font-medium mt-2">We will notify you on the app launch. Get ready to win amazing rewards and improve your financial health.</p>
                            </div>
                            <div className="px-6 mt-16 ">
                                <div className="flex justify-center">
                                    <img src="/stagedesk.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="font-kalam text-white text-center text-lg mt-4 ">3 random early birds will win the prize</div>
                    </div>

                </Modal>

            </div>
            <div className="flex mt-8 items-end lg:mt-20">
                <img src="/homeimage.svg"></img>
            </div>
        </section >
    )
}