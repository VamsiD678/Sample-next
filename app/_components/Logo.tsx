import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className="z-2 relative aspect-video w-20 lg:w-24 xl:w-28">
      <Image src='/next.svg' className="object-contain" fill quality={90} alt="The SEO logo" />
    </Link>
  )
}

export default Logo;