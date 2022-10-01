import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar_right = () => {
  const router = useRouter();
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 mr-[80px] flex flex-col gap-y-16">
      <Link href="/#home" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.pathname == "/#home" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
      <Link href="/#about" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.pathname == "/#about" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
      <Link href="/#experience" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.pathname == "/#home" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
      <Link href="/#work" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.pathname == "/#home" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
      <Link href="/#guides" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.pathname == "/#home" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
      <Link href="/#contact" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.pathname == "/#home" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
    </div>
  )
}

export default Sidebar_right;