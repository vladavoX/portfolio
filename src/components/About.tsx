import { motion } from 'framer-motion'
import { AiFillHtml5 } from 'react-icons/ai'
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiSass,
  DiNodejs,
} from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { CgFigma } from 'react-icons/cg'

import Links from './Links'

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
    icon: <TbBrandNextjs className='text-[#000]' />,
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
    icon: <DiNodejs className='text-[#339933]' />,
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
      className='flex flex-col gap-10 h-screen justify-center text-gray-300 font-semibold text-2xl italic'
    >
      <div>
        <span className='text-green-800 ml-4'>&lt;section&gt;</span>
        <br />
        <span className='text-green-800 ml-8'>&lt;p&gt;</span>
        <p className='uppercase not-italic ml-12'>about me</p>
        <span className='text-green-800 ml-8'>&lt;/p&gt;</span>
      </div>
      <div>
        <span className='text-green-800 ml-8'>&lt;div&gt;</span>
        <div className='ml-8 flex'>
          <div className='ml-4 w-1/2 flex flex-col justify-center'>
            <span className='text-green-800'>&lt;p&gt;</span>
            <p className='ml-4 not-italic text-gray-50 text-justify whitespace-pre-line'>
              Dedicated and driven Frontend Web Developer with a passion for
              creating beautiful, innovative, user-friendly and functional web
              applications. Currently finishing my studies as a Software
              Engineer and eager to embark on my first full-time role as a
              Frontend Web Developer. I am a fast learner and a team player with
              excellent communication skills and a positive attitude.
            </p>
            <span className='text-green-800'>&lt;/p&gt;</span>
          </div>
          <div className='w-1/2 flex flex-col items-center gap-5'>
            <p className='not-italic'>
              <span className='text-green-800 italic'>&lt;p&gt;</span>
              TECHNOLOGIES
              <span className='text-green-800 italic'>&lt;/p&gt;</span>
            </p>
            <div className='grid grid-cols-3 gap-10 mt-4'>
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className='text-6xl'
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <span className='text-green-800 ml-8'>&lt;/div&gt;</span>
      </div>
      <Links />
    </motion.section>
  )
}

export default About
