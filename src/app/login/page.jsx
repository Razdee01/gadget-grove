"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callback") || "/";

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setLoading(false);
      Swal.fire({
        title: "ACCESS DENIED",
        text: "INVALID CREDENTIALS DETECTED. PLEASE VERIFY YOUR UPLINK DATA.",
        icon: "error",
        background: "#0a0a0c", // Dark background to match your theme
        color: "#fff",
        confirmButtonColor: "#ef4444", // Red for error
        confirmButtonText: "RETRY LOGIN",
        customClass: {
          popup: "border border-red-500/20 rounded-[2rem]",
          title: "font-black italic uppercase tracking-tighter",
        },
      });
    } else {
      // Success Alert before redirecting
      Swal.fire({
        title: "ACCESS GRANTED",
        text: "AUTHENTICATION SUCCESSFUL. WELCOME TO THE GROVE.",
        icon: "success",
        timer: 1500, // Closes automatically after 1.5s
        showConfirmButton: false,
        background: "#0a0a0c",
        color: "#fff",
        iconColor: "#4f46e5", // Your primary purple/indigo
        customClass: {
          popup: "border border-primary/20 rounded-[2rem]",
          title: "font-black italic uppercase tracking-tighter",
        },
      }).then(() => {
        router.push(callbackUrl);
        router.refresh();
      });
    }
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#020203] px-6">
      <div className="w-full max-w-4xl bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] p-10 md:p-14 shadow-2xl">
        <div className="mx-auto max-w-md">
          {/* 1. Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Access <span className="text-primary">Portal</span>
            </h1>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/30 mt-3">
              Secure Synchronization Required
            </p>
          </div>

          {/* 2. Google Sign In Button */}
          <div className="space-y-6 mb-8">
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full h-16 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all active:scale-95 shadow-lg"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-6 h-6"
              />
              <span className="text-sm uppercase tracking-tight text-black">
                Sign in with Google
              </span>
            </button>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-bold text-white/20 uppercase">
                OR
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>

          {/* 3. Credentials Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="ml-2 text-[11px] font-black uppercase tracking-widest text-primary/80">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="admin@gadget.com"
                required
                className="w-full h-16 bg-[#16161a] border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-primary/50 transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="ml-2 text-[11px] font-black uppercase tracking-widest text-primary/80">
                Secure Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full h-16 bg-[#16161a] border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-primary/50 transition-all shadow-inner"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-16 bg-primary hover:bg-indigo-500 text-white font-black uppercase italic rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 border-b-4 border-indigo-900 mt-4"
            >
              {loading ? "AUTHENTICATING..." : "Establish Connection →"}
            </button>
          </form>

          {/* 4. Footer & Register Link */}
          <div className="mt-10 text-center space-y-6">
            {error && (
              <p className="text-red-500 text-[10px] font-black uppercase tracking-widest animate-shake">
                {error}
              </p>
            )}

            <p className="text-white/40 text-xs font-medium">
              New to the inventory network?{" "}
              <Link
                href="/register"
                className="text-primary font-black uppercase hover:underline ml-1"
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
