"use client";
import { useState } from "react";
import Link from "next/link";
import { postUser } from "@/actions/server/auth"; 
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleRegister(formData) {
    setLoading(true);
    setError("");

    const result = await postUser(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    } else {
      alert("please login")
      router.push("/login?message=Account Created. Please Login.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020203] px-4 py-12">
      <div className="w-full max-w-md bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-white">
            Create <span className="text-primary">Account</span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mt-3">
            Join the inventory network
          </p>
        </div>

        {/* Registration Form */}
        <form action={handleRegister} className="space-y-5">
          {/* Full Name Field */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-primary/80 ml-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full h-16 bg-[#16161a] border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-primary/50 transition-all"
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-primary/80 ml-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full h-16 bg-[#16161a] border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-primary/50 transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-primary/80 ml-2">
              Create Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full h-16 bg-[#16161a] border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-primary/50 transition-all"
              required
            />
          </div>

          {/* Error Message Display */}
          {error && (
            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center mt-2">
              {error === "null" ? "User already exists or missing data" : error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-16 bg-primary hover:bg-indigo-500 text-white font-black uppercase italic rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 border-b-4 border-indigo-900 mt-4"
          >
            {loading ? "INITIALIZING..." : "Initialize Account →"}
          </button>
        </form>

        {/* Link back to Login */}
        <div className="mt-10 text-center">
          <p className="text-white/40 text-xs">
            Already a member?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Access Portal
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
