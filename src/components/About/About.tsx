import { motion } from 'framer-motion'
import { AiFillHtml5 } from 'react-icons/ai'
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiSass,
  DiNodejsSmall,
  DiGit,
} from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { CgFigma, CgGym } from 'react-icons/cg'
import { FaAws } from 'react-icons/fa'
import {
  GiGamepad,
  GiBasketballBall,
  GiCommercialAirplane,
} from 'react-icons/gi'
import { BsMusicNote, BsCodeSlash } from 'react-icons/bs'

import Links from '../Links'
import AboutHobbies from './AboutHobbies'
import AboutTech from './AboutTech'

const technologies = [
  {
    name: 'HTML',
    icon: <AiFillHtml5 className='text-[#f06529]' />,
  },
  {
    name: 'CSS',
    icon: <DiCss3 className='text-[#264de4]' />,
  },
  {
    name: 'JavaScript',
    icon: <DiJavascript1 className='text-[#f7df1e]' />,
  },
  {
    name: 'React',
    icon: <DiReact className='text-[#61dafb]' />,
  },
  {
    name: 'Next.js',
    icon: <TbBrandNextjs className='text-[#fff]' />,
  },
  {
    name: 'Sass',
    icon: <DiSass className='text-[#cc6699]' />,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className='text-[#06b6d4]' />,
  },
  {
    name: 'Figma',
    icon: <CgFigma className='text-[#f24e1e]' />,
  },
  {
    name: 'Node.js',
    icon: <DiNodejsSmall className='text-[#339933]' />,
  },
  {
    name: 'AWS',
    icon: <FaAws className='text-[#FF9900]' />,
  },
  {
    name: 'Git',
    icon: <DiGit className='text-[#f14e32]' />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript className='text-[#3178c6]' />,
  },
]

const hobbies = [
  {
    name: 'Gaming',
    icon: <GiGamepad className='text-[#dddddd]' />,
  },
  {
    name: 'Basketball',
    icon: <GiBasketballBall className='text-[#ee6730]' />,
  },
  {
    name: 'Music',
    icon: <BsMusicNote className='text-[#ff0000]' />,
  },
  {
    name: 'Traveling',
    icon: <GiCommercialAirplane className='text-sky-400' />,
  },
  {
    name: 'Coding',
    icon: <BsCodeSlash className='text-green-500' />,
  },
  {
    name: 'Gym',
    icon: <CgGym className='text-zinc-100' />,
  },
]

const About = () => {
  return (
    <motion.section
      id='about'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      className='h-screen flex items-center justify-center text-gray-300 font-semibold text-xl italic'
    >
      <div className='flex gap-10 bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-xl border-2 border-gray-700'>
        <div className='flex flex-col gap-5 w-1/2'>
          <div>
            <span className='text-green-800 ml-4'>&lt;section&gt;</span>
            <br />
            <span className='text-green-800 ml-8'>&lt;p&gt;</span>
            <p className='uppercase not-italic ml-12'>about me</p>
            <span className='text-green-800 ml-8'>&lt;/p&gt;</span>
          </div>
          <div>
            <span className='text-green-800 ml-8'>&lt;div&gt;</span>
            <div className='ml-8 flex gap-10'>
              <div className='ml-4 flex flex-col justify-center'>
                <span className='text-green-800'>&lt;p&gt;</span>
                <p className='ml-4 not-italic text-gray-50 text-justify whitespace-pre-line'>
                  Dedicated and driven Frontend Web Developer with a passion for
                  creating beautiful, innovative, user-friendly and functional
                  web applications. Currently finishing my studies as a Software
                  Engineer and eager to embark on my first full-time role as a
                  Frontend Web Developer. I am a fast learner and a team player
                  with excellent communication skills and a positive attitude.
                </p>
                <span className='text-green-800'>&lt;/p&gt;</span>
              </div>
            </div>
            <span className='text-green-800 ml-8'>&lt;/div&gt;</span>
          </div>
          <Links />
        </div>
        <div className='flex flex-col gap-5 w-1/2 justify-center'>
          <div className='flex flex-col gap-5 border-l-2 border-gray-700 bg-gray-900 p-10 rounded-xl'>
            <p className='not-italic text-center'>Technologies</p>
            <AboutTech technologies={technologies} />
          </div>
          <div className='flex flex-col gap-5 border-l-2 border-gray-700 bg-gray-900 p-10 rounded-xl'>
            <p className='not-italic text-center'>Hobbies & Interest</p>
            <AboutHobbies hobbies={hobbies} />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
