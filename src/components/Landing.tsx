import { motion } from 'framer-motion'

const Landing = () => {
  return (
    <motion.div
      initial={{ x: '10vw', opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, bounce: 0.5 }}
      className='flex flex-col gap-10'
    >
      <p className='text-gray-200 font-semibold text-2xl italic'>
        <span className='text-green-500'>&lt;p&gt; </span>
        <br />
        <span className='uppercase not-italic'>
          &nbsp;&nbsp;vladimir aleksic / novi sad, serbia
        </span>
        <br />
        <span className='text-green-500'>&lt;/p&gt;</span>
      </p>
      <h1 className='font-bold text-2xl italic'>
        <span className='text-green-500'>&lt;h1&gt;</span>
        <br />
        <span className='text-8xl not-italic'>
          <span className='text-2xl'>&nbsp;&nbsp;</span>Welcome,
          <br />
          <span className='text-2xl'>&nbsp;&nbsp;</span>I'm Vladimir,
          <br />
          <span className='text-2xl'>&nbsp;&nbsp;</span>Frontend Web Developer
        </span>
        <br />
        <span className='text-green-500'>&lt;/h1&gt;</span>
      </h1>
      <p className='text-gray-200 font-semibold text-2xl'>
        <span className='text-green-500 italic'>&lt;p&gt;</span>
        <br />
        &nbsp;&nbsp;
        <span className='uppercase not-italic'>
          <a
            className='hover:text-green-600 duration-150'
            href='#about'
          >
            about me
          </a>{' '}
          /{' '}
          <a
            className='hover:text-green-600 duration-150'
            href='#projects'
          >
            projects
          </a>{' '}
          /{' '}
          <a
            className='hover:text-green-600 duration-150'
            href='#contact'
          >
            contact
          </a>
        </span>
        <br />
        <span className='text-green-500 italic'>&lt;/p&gt;</span>
      </p>
    </motion.div>
  )
}

export default Landing
