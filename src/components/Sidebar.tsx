import { motion } from 'framer-motion'

import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillPicture,
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai'
import logo from '../assets/logo-no-background.svg'

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: '10vw', opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, bounce: 0.5 }}
      className='fixed top-0 left-0 w-24 h-full bg-gray-800 text-gray-200 flex flex-col justify-between items-center py-10'
    >
      <img
        className='w-14'
        src={logo}
        alt='Vladimir Aleksic logo'
      />
      <div className='flex flex-col gap-8'>
        <a href='#home'>
          <AiFillHome className='w-7 h-7 hover:text-green-500 duration-150' />
        </a>
        <a href='#about'>
          <AiFillInfoCircle className='w-7 h-7 hover:text-green-500 duration-150' />
        </a>
        <a href='#projects'>
          <AiFillPicture className='w-7 h-7 hover:text-green-500 duration-150' />
        </a>
        <a href='#contact'>
          <AiFillMail className='w-7 h-7 hover:text-green-500 duration-150' />
        </a>
      </div>
      <div className='flex flex-col gap-8'>
        <a
          href='https://github.com/vladavoX'
          target='_blank'
        >
          <AiFillGithub className='w-7 h-7 hover:text-green-500 duration-150' />
        </a>
        <a
          href='https://www.linkedin.com/in/va99/'
          target='_blank'
        >
          <AiFillLinkedin className='w-7 h-7 hover:text-green-500 duration-150' />
        </a>
      </div>
    </motion.div>
  )
}

export default Sidebar
