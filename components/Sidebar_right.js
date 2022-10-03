import { motion } from "framer-motion";

const Sidebar_right = () => {
  return (
    <motion.div
      initial={{ opacity: 0, top: 150 }}
      whileInView={{ opacity: 1, top: '50%' }}
      transition={{ delay: 0.7, duration: 1 }}
      viewport={{ once: true }}
      className="fixed right-0 top-1/2 -translate-y-1/2 mr-[80px] flex-col gap-y-16 hidden xl:flex"
    >
      <a href="#home">
        <div className="w-3 h-3 rounded-full border-2 border-neon-cyan hover:bg-neon-cyan active:bg-neon-cyan"></div>
      </a>
      <a href="#about">
        <div className="w-3 h-3 rounded-full border-2 border-neon-cyan hover:bg-neon-cyan active:bg-neon-cyan"></div>
      </a>
      <a href="#experience">
        <div className="w-3 h-3 rounded-full border-2 border-neon-cyan hover:bg-neon-cyan active:bg-neon-cyan"></div>
      </a>
      <a href="#work">
        <div className="w-3 h-3 rounded-full border-2 border-neon-cyan hover:bg-neon-cyan active:bg-neon-cyan"></div>
      </a>
      <a href="#guides">
        <div className="w-3 h-3 rounded-full border-2 border-neon-cyan hover:bg-neon-cyan active:bg-neon-cyan"></div>
      </a>
      <a href="#contact">
        <div className="w-3 h-3 rounded-full border-2 border-neon-cyan hover:bg-neon-cyan active:bg-neon-cyan"></div>
      </a>
    </motion.div>
  )
}

export default Sidebar_right;