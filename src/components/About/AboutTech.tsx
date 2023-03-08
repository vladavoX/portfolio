import { motion } from 'framer-motion'

interface Props {
  technologies: {
    name: string
    icon: JSX.Element
  }[]
}

const AboutTech = ({ technologies }: Props) => {
  return (
    <div className='grid grid-cols-4 gap-5 justify-items-center'>
      {technologies.map((tech, index) => (
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
          {tech.icon}
        </motion.div>
      ))}
    </div>
  )
}

export default AboutTech
