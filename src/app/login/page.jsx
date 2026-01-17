"use client";


import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData) {
    setLoading(true);
    setError("");

    const result = await loginAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#020203] px-6">
      {/* OUTER CARD */}
      <div className="w-full max-w-4xl bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] p-10 md:p-14 shadow-2xl">
        {/* INNER CONTENT CONTAINER (THIS FIXES EVERYTHING) */}
        <div className="mx-auto max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight text-white">
              Access <span className="text-primary">Portal</span>
            </h1>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mt-3">
              Secure Synchronization Required
            </p>
          </div>

          {/* Google Sign In */}
          <div className="space-y-5 mb-8">
            <button
              type="button"
              className="w-full h-14 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all active:scale-95"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm">Sign in with Google</span>
            </button>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-bold text-white/30 uppercase">
                OR
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>

          {/* Form */}
          <form action={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="ml-2 text-[11px] font-black uppercase tracking-wider text-primary/80">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="admin@gadget.com"
                required
                className="w-full h-14 bg-[#16161a] border border-white/10 rounded-2xl px-5 text-base text-white outline-none focus:border-primary/50 transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="ml-2 text-[11px] font-black uppercase tracking-wider text-primary/80">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full h-14 bg-[#16161a] border border-white/10 rounded-2xl px-5 text-base text-white outline-none focus:border-primary/50 transition-all shadow-inner"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-primary hover:bg-indigo-500 text-white font-black uppercase italic rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 border-b-4 border-indigo-900 mt-4"
            >
              {loading ? "AUTHENTICATING..." : "Sign In →"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center space-y-4">
            {error && (
              <p className="text-red-500 text-[10px] font-black uppercase tracking-wider">
                {error}
              </p>
            )}

            <p className="text-white/40 text-sm">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-bold hover:underline"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
