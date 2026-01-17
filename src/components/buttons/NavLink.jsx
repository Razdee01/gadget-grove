"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

const NavLink = ({ href, children }) => {
  const path = usePathname(); // 


  const isActive = href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-primary font-bold" : "text-base-content/70 font-medium"
      } transition-colors hover:text-primary`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
