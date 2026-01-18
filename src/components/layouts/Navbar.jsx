"use client";
import Link from "next/link";
import NavLink from "../buttons/NavLink";
import AuthButton from "../buttons/AuthButton";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();

  const navLinks = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/items">Items</NavLink>
      </li>

     
      {status === "authenticated" && (
        <li>
          <NavLink href="/add-item">Add Item</NavLink>
        </li>
      )}

      <li>
        <NavLink href="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink href="/blog">Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full px-2 md:px-4 pt-4">
      <div className="navbar bg-base-200/90 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl px-4 md:px-6">
        {/* Mobile Menu & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 font-bold uppercase border border-white/10"
            >
              {navLinks}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 md:p-2 rounded-lg rotate-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-black italic tracking-tighter uppercase">
              GADGET<span className="text-primary">GROVE</span>
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold uppercase text-xs tracking-widest gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Auth Button */}
        <div className="navbar-end">
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
