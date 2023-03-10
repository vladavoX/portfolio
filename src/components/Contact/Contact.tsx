import { motion } from 'framer-motion'
import Links from '../Links'
import Form from './Form'

const Contact = () => {
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
      <div className='flex gap-10 bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-xl border-2 border-gray-700 w-full'>
        <div className='flex flex-col gap-5 w-full'>
          <div>
            <span className='text-green-800 ml-4'>&lt;section&gt;</span>
            <br />
            <span className='text-green-800 ml-8'>&lt;p&gt;</span>
            <p className='uppercase not-italic ml-12'>contact</p>
            <span className='text-green-800 ml-8'>&lt;/p&gt;</span>
          </div>
          <div>
            <span className='text-green-800 ml-8'>&lt;div&gt;</span>
            {/* code */}
            <span className='text-green-800 ml-8'>&lt;/div&gt;</span>
          </div>
          <Links />
        </div>
        <div className='flex w-full justify-center items-center'>
          <p>text</p>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
