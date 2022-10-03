const Sidebar_right = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 mr-[80px] flex-col gap-y-16 hidden xl:flex">
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
    </div>
  )
}

export default Sidebar_right;