import { motion } from 'framer-motion';

import Navbar from "./Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: '-10%' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-screen xl:mt-[-102px] flex flex-col items-center justify-center" id="home">
        <main className="flex justify-center flex-col xl:px-[200px] md:px-14 text-center lg:text-left px-8">
          <p className="text-neon-cyan text-lg">Hi there, my name is</p>
          <h1 className="text-white1 md:text-7xl text-5xl font-bold mt-8">Vladimir Aleksic</h1>
          <h2 className="text-gray md:text-7xl text-5xl font-semibold lg:ml-12">I bring ideas to the web.</h2>
          <p className="text-gray text-xl xl:w-[640px] mt-8">I&apos;m a software engineer. <span className="text-neon-cyan">Frontend</span> focused
            <span className="text-neon-cyan"> Web Developer</span> building the Frontend of
            <span className="text-neon-cyan"> Websites</span> and <span className="text-neon-cyan">Web Applications</span>
          </p>
        </main>
      </motion.div>
    </>

  )
}

export default Landing;