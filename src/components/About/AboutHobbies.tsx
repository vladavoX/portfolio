import { motion } from 'framer-motion'

interface Props {
  hobbies: {
    name: string
    icon: JSX.Element
  }[]
}

const AboutHobbies = ({ hobbies }: Props) => {
  return (
    <div className='grid grid-cols-3 gap-5 justify-items-center'>
      {hobbies.map((hobby, index) => (
        <motion.div
          key={index}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 'all' }}
          transition={{
            delay: 0.1 + index * 0.1,
            duration: 0.5,
            type: 'spring',
            bounce: 0.5,
          }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className='text-5xl'
        >
          {hobby.icon}
        </motion.div>
      ))}
    </div>
  )
}

export default AboutHobbies
