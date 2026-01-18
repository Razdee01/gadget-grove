"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const { data: session, status } = useSession();

  // While checking if user is logged in, show nothing or a small loader
  if (status === "loading")
    return <div className="w-20 h-8 bg-white/5 animate-pulse rounded-full" />;

  return (
    <div className="flex items-center gap-4">
      {status === "authenticated" ? (
        <>
          {/* User Profile Info */}
          {/* <Link href="/add-item" className="text-primary font-bold">
            + Add New Gadget
          </Link> */}
          <div className="flex flex-col items-end mr-2">
            <span className="text-[10px] font-black text-white uppercase italic tracking-tighter">
              {session.user?.name}
            </span>
            <span className="text-[8px] font-bold text-primary uppercase tracking-[0.2em]">
              Online
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-5 py-2 bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white text-red-500 text-[10px] font-black uppercase italic rounded-lg transition-all active:scale-95"
          >
            Disconnect
          </button>
        </>
      ) : (
        <>
          {/* Login Button */}
          <Link
            href="/login"
            className="text-white/50 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all"
          >
            Portal Access
          </Link>

          {/* Register Button */}
          <Link
            href="/register"
            className="px-6 py-2.5 bg-primary hover:bg-indigo-500 text-white text-[10px] font-black uppercase italic rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 border-b-2 border-indigo-900"
          >
            Join Network
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;
