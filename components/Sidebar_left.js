import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Sidebar_left = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 ml-[80px] text-4xl text-neon-cyan flex-col gap-8 hidden xl:flex">
      <AiFillGithub />
      <AiFillLinkedin />
      <MdEmail />
    </div>
  )
}

export default Sidebar_left;