"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-red-500/10 border border-red-500/20 p-12 rounded-[3rem] max-w-lg">
        <h1 className="text-6xl font-black uppercase italic text-red-500 mb-4 tracking-tighter">
          System <br /> Failure
        </h1>
        <p className="text-white/60 font-bold mb-8 uppercase text-sm tracking-widest leading-relaxed">
          The encrypted data stream was interrupted. Check your terminal
          connection and retry.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary px-8 h-14 rounded-2xl font-black uppercase italic"
          >
            Re-Initialize System
          </button>
          <Link
            href="/"
            className="btn btn-ghost text-white/40 font-black uppercase italic"
          >
            Abort to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
