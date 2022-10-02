import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar_right = () => {
  const router = useRouter();
  console.log(router.asPath)

  const handleClick = (e) => {
    console.log(router.pathname)
  }
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 mr-[80px] flex flex-col gap-y-16">
      <a href="#home" className="w-3 h-3 rounded-full border-2 border-neon-cyan"></a>
      <a href="#about" className="w-3 h-3 rounded-full border-2 border-neon-cyan"></a>
      <Link href="/#experience" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.asPath == "/#work" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
      <Link href="/#work" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.asPath == "/#experience" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
      <Link href="/#guides" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.asPath == "/#guides" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
      <Link href="/#contact" passHref>
        <a className={`w-3 h-3 rounded-full border-2 border-neon-cyan ${router.asPath == "/#contact" ? "bg-neon-cyan" : "bg-transparent"}`}></a>
      </Link>
    </div>
  )
}

export default Sidebar_right;