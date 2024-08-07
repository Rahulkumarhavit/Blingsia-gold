"use client"
import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '../constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="padding-x pb-8 pt-4 fixed  z-10 w-full    backdrop-blur">
      <nav className="flex justify-between items-center max-container flex-wrap">
        <Link href='/'>
          <img src='/Blingsia.svg' className="m-0 " />
        </Link>
        {/* if required to center the nav links add flex-1 */}
        <ul className=" flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="font-poppins leading-normal text-lg text-slate-300">
                {item.label}
              </Link>
            </li>
          ))}

        </ul>
        <div className='hidden max-lg:block'>
          <button onClick={toggleNavbar}>
            {isOpen ? <img src="/whiteclosebutton.svg" alt="" /> : <img src="/hamburger.svg" alt='hamburger icon' width={25} height={25} />}
          </button>
        </div>
        {isOpen && (
          <div className='flex  backdrop-blur-sm w-full flex-col '>
            <ul className="mt-4 pb-4 pl-2">
              {navLinks.map((item) => (
                <li key={item.label} className='mt-3'>
                  <Link href={item.href} className="font-poppins leading-normal text-xl text-slate-100">
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar;