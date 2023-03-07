import { motion } from 'framer-motion'
import Links from './Links'

const Landing = () => {
  return (
    <motion.section
      id='home'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      className='flex flex-col gap-10 h-screen justify-center text-gray-200 font-semibold text-2xl italic'
    >
      <div>
        <span className='text-green-800'>&lt;body&gt;</span>
        <br />
        <span className='text-green-800 ml-4'>&lt;section&gt;</span>
        <br />
        <span className='text-green-800 ml-8'>&lt;p&gt;</span>
        <p className='uppercase not-italic ml-12'>
          vladimir aleksic / novi sad, serbia
        </p>
        <span className='text-green-800 ml-8'>&lt;/p&gt;</span>
      </div>
      <div>
        <span className='text-green-800 ml-8'>&lt;h1&gt;</span>
        <h1 className='font-bold text-8xl ml-12 not-italic text-gray-50'>
          Welcome,
          <br />
          I'm Vladimir,
          <br />
          Frontend Web Developer
        </h1>
        <span className='text-green-800 ml-8'>&lt;/h1&gt;</span>
      </div>

      <Links />
    </motion.section>
  )
}

export default Landing
