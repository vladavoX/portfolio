import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

import logo from "../public/assets/VA_logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="hidden justify-between items-center pt-[26px] text-white1 font-semibold text-base w-full xl:flex px-52">
        <a href="#home"><Image className="cursor-pointer" src={logo} alt="vladimir aleksic logo" width={70} height={70} /></a>
        <div className="flex gap-x-[58px] items-center">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#guides">Guides</a>
          <a href="#contact">Contact</a>
          <button className="bg-light-purple w-[110px] h-[40px] rounded-md">Resume</button>
        </div>
      </nav>
      <nav
        className="bg-purple fixed top-0 flex pt-[18px] text-white1 font-semibold text-base w-full xl:hidden z-10">
        <div className="z-20 flex justify-between items-center w-full border-b-light-purple border-b-2 px-8">
          <a onClick={() => setIsOpen(false)} href="#home"><Image className="cursor-pointer" src={logo} alt="vladimir aleksic logo" width={70} height={70} /></a>
          <div>
            <button
              className="text-3xl"
              onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
        {isOpen &&
          <div
            className="bg-purple absolute flex flex-col top-0 left-0 h-screen justify-center px-8 w-full items-center text-3xl">
            <a onClick={() => setIsOpen(false)} className="py-8" href="#about">About</a>
            <a onClick={() => setIsOpen(false)} className="py-8" href="#experience">Experience</a>
            <a onClick={() => setIsOpen(false)} className="py-8" href="#work">Work</a>
            <a onClick={() => setIsOpen(false)} className="py-8" href="#guides">Guides</a>
            <a onClick={() => setIsOpen(false)} className="py-8" href="#contact">Contact</a>
            <div className="py-8">
              <button className="bg-light-purple p-4 rounded-md">Resume</button>
            </div>
          </div>
        }
      </nav>

    </>
  )
}

export default Navbar;