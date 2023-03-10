import { motion } from 'framer-motion'
import Links from '../Links'
import Form from './Form'

const Contact = () => {
  return (
    <motion.section
      id='contact'
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
      <div className='flex gap-10 bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-xl border-2 border-gray-700 w-full items-center'>
        <div className='flex flex-col gap-5 w-full'>
          <div>
            <span className='text-green-800 ml-4'>&lt;section&gt;</span>
            <br />
            <span className='text-green-800 ml-8'>&lt;p&gt;</span>
            <p className='uppercase not-italic ml-12'>contact</p>
            <span className='text-green-800 ml-8'>&lt;/p&gt;</span>
          </div>
          <div className='ml-8 not-italic w-full'>
            <span className='text-green-800 italic'>&lt;p&gt;</span>
            <p className='ml-4 flex w-1/2 justify-between'>
              Email:{' '}
              <span className='hover:text-green-500 duration-150'>
                valeksic1337@gmail.com
              </span>
            </p>
            <p className='ml-4 flex w-1/2 justify-between'>
              Phone:{' '}
              <span className='hover:text-green-500 duration-150'>
                +381 61 229 67 41
              </span>
            </p>
            <p className='ml-4 flex w-1/2 justify-between'>
              Address:{' '}
              <span className='hover:text-green-500 duration-150'>
                Novi Sad, Serbia
              </span>
            </p>
            <p className='ml-4 flex w-1/2 justify-between'>
              LinkedIn:{' '}
              <a
                href='https://www.linkedin.com/in/va99/'
                target='_blank'
                className='hover:text-green-500 duration-150'
              >
                linkedin.com/in/va99
              </a>
            </p>
            <p className='ml-4 flex w-1/2 justify-between'>
              GitHub:{' '}
              <a
                href='https://github.com/vladavoX'
                target='_blank'
                className='hover:text-green-500 duration-150'
              >
                github.com/vladavoX
              </a>
            </p>
            <span className='text-green-800 italic'>&lt;/p&gt;</span>
          </div>
          <Links />
          <span className='text-green-800'>&lt;/body&gt;</span>
        </div>
        <Form />
      </div>
    </motion.section>
  )
}

export default Contact
