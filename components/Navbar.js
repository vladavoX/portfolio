import Image from "next/image";
import Link from "next/link";

import logo from "../public/assets/VA_logo.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-[26px] text-white1 font-semibold text-base">
      <Image src={logo} alt="vladimir aleksic logo" width={70} height={70} />
      <div className="flex gap-x-[58px] items-center">
        <Link href="#about"><a>About</a></Link>
        <Link href="#experience"><a>Experience</a></Link>
        <Link href="#work"><a>Work</a></Link>
        <Link href="#guides"><a>Guides</a></Link>
        <Link href="#contact"><a>Contact</a></Link>
        <button className="bg-light-purple w-[110px] h-[40px] rounded-md">Resume</button>
      </div>
    </nav>
  )
}

export default Navbar;