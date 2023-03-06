import { motion } from 'framer-motion'

const Landing = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <motion.div
        initial={{ x: '10vw', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, bounce: 0.5 }}
        className='flex flex-col gap-10'
      >
        <p className='uppercase text-gray-200 font-semibold text-2xl'>
          vladimir aleksic / novi sad, serbia
        </p>
        <h1 className='text-8xl font-bold'>
          Welcome,
          <br />
          I'm Vladimir,
          <br />
          Frontend web developer
        </h1>
        <p className='uppercase text-gray-200 font-semibold text-2xl'>
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
        </p>
      </motion.div>
    </div>
  )
}

export default Landing
