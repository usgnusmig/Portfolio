import Link from "next/link";
import { useRouter } from "next/router";
import { TerminalIcon } from "@heroicons/react/outline";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-row justify-between  border-b-2">
      <TerminalIcon className="h-20 p-2"></TerminalIcon>

      <ul className="flex justify-center items-center pr-4 gap-8 text-xl">
        <Link href="/">
          <a className={`${router.pathname === "/" ? "border-b-2" : null}`}>
            Home
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`${
              router.pathname === "/contact" ? "border-b-2" : null
            }`}
          >
            Contact
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
