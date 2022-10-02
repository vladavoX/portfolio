import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="h-screen" id="home">
      <Navbar />
      <main className="flex flex-col absolute top-1/2 -translate-y-1/2 px-[400px]">
        <p className="text-neon-cyan text-lg">Hi there, my name is</p>
        <h1 className="text-white1 text-7xl font-bold mt-8">Vladimir Aleksic</h1>
        <h2 className="text-gray text-7xl font-semibold ml-12">I bring ideas to the web.</h2>
        <p className="text-gray text-xl w-[640px] mt-8">I&apos;m a software engineer. <span className="text-neon-cyan">Frontend</span> focused
          <span className="text-neon-cyan"> Web Developer</span> building the Frontend of
          <span className="text-neon-cyan"> Websites</span> and <span className="text-neon-cyan">Web Applications</span>
        </p>
      </main>
    </div>
  )
}

export default Landing;