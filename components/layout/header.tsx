import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-zinc-900 py-3">
        <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Ekino logo"
              width={149}
              height={53}
              priority
            />
          </Link>
          <Menu />
        </div>
      </header>
      <div className="h-[77px]"></div>
    </>
  );
}
