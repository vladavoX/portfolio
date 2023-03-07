import { motion } from 'framer-motion'

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
      className='flex flex-col gap-10 h-screen justify-center'
    >
      <p className='text-gray-200 font-semibold text-2xl italic'>
        <span className='text-green-800'>&lt;body&gt;</span>
        <br />
        &nbsp;&nbsp;<span className='text-green-800'>&lt;section&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='text-green-800'>&lt;p&gt;</span>
        <br />
        <span className='uppercase not-italic'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vladimir aleksic / novi sad,
          serbia
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='text-green-800'>&lt;/p&gt;</span>
      </p>
      <h1 className='font-bold text-2xl italic'>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='text-green-800'>&lt;h1&gt;</span>
        <br />
        <span className='text-8xl not-italic'>
          <span className='text-2xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Welcome,
          <br />
          <span className='text-2xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          I'm Vladimir,
          <br />
          <span className='text-2xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Frontend Web Developer
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='text-green-800'>&lt;/h1&gt;</span>
      </h1>
      <p className='text-gray-200 font-semibold text-2xl'>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='text-green-800 italic'>&lt;p&gt;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='text-green-800 italic'>&lt;/p&gt;</span>
        <br />
        &nbsp;&nbsp;
        <span className='text-green-800 italic'>&lt;/section&gt;</span>
      </p>
    </motion.section>
  )
}

export default Landing
