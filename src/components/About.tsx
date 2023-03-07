import { motion } from 'framer-motion'
import Links from './Links'

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
          <div className='ml-4 w-1/2'>
            <span className='text-green-800'>&lt;p&gt;</span>
            <p className='ml-4 not-italic text-gray-50'>
              Dedicated and driven Frontend Web Developer with a passion for
              creating beautiful, innovative, user-friendly and functional web
              applications.
            </p>
            <span className='text-green-800'>&lt;/p&gt;</span>
          </div>
          <div className='w-1/2'>text</div>
        </div>
        <span className='text-green-800 ml-8'>&lt;/div&gt;</span>
      </div>
      <Links />
    </motion.section>
  )
}

export default About
