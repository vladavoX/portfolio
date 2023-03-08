import { motion } from 'framer-motion'
import Links from './Links'

const Projects = () => {
  return (
    <motion.section
      id='projects'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      className='h-screen flex flex-col justify-center text-gray-200 font-semibold text-xl italic'
    >
      <div className='flex flex-col gap-10 bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-xl border-2 border-gray-700'>
        <div>
          <span className='text-green-800 ml-4'>&lt;section&gt;</span>
          <br />
          <span className='text-green-800 ml-8'>&lt;p&gt;</span>
          <p className='uppercase not-italic ml-12'>PROJECTS</p>
          <span className='text-green-800 ml-8'>&lt;/p&gt;</span>
        </div>
        <Links />
      </div>
    </motion.section>
  )
}

export default Projects
