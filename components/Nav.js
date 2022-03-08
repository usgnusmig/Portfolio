import Link from "next/link";
import { useRouter } from "next/router";
import { TerminalIcon } from "@heroicons/react/outline";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="flex flex-row justify-between  border-2">
      <TerminalIcon className="h-20 p-2"></TerminalIcon>

      <ul className="flex justify-center items-center pr-4 gap-8">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
