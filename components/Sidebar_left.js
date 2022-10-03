import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Sidebar_left = () => {
  return (
    <motion.div
      initial={{ opacity: 0, top: 150 }}
      whileInView={{ opacity: 1, top: '50%' }}
      transition={{ delay: 0.7, duration: 1 }}
      viewport={{ once: true }}
      className="fixed left-0 top-1/2 -translate-y-1/2 ml-[80px] text-4xl text-neon-cyan flex-col gap-8 hidden xl:flex"
    >
      <AiFillGithub />
      <AiFillLinkedin />
      <MdEmail />
    </motion.div>
  )
}

export default Sidebar_left;