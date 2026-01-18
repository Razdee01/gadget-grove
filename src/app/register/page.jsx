"use client";
import { useState } from "react";
import Link from "next/link";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2"; 

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleRegister(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = await postUser(data);

    if (result?.error) {
      setError(result.error);
      setLoading(false);

      // Error SweetAlert
      Swal.fire({
        title: "Registration Failed",
        text: result.error,
        icon: "error",
        background: "#0a0a0c",
        color: "#fff",
        confirmButtonColor: "#4f46e5",
      });
    } else {
      // Success SweetAlert
      Swal.fire({
        title: "Account Initialized",
        text: "Synchronizing your session...",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        background: "#0a0a0c",
        color: "#fff",
      });

      
      const loginResult = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false, 
      });

      if (loginResult?.ok) {
        router.push("/");
        router.refresh();
      } else {
        router.push("/login");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020203] px-4 py-12">
      <div className="w-full max-w-md bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-white">
            Create <span className="text-primary">Account</span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mt-3">
            Join the inventory network
          </p>
        </div>

        {/* Google Button */}
        <div className="space-y-5 mb-8">
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
            <span className="text-sm uppercase tracking-tight font-black">
              Join with Google
            </span>
          </button>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] font-bold text-white/20 uppercase">
              OR EMAIL
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-primary/80 ml-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full h-16 bg-[#16161a] border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-primary/50 transition-all shadow-inner"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-primary/80 ml-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full h-16 bg-[#16161a] border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-primary/50 transition-all shadow-inner"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-primary/80 ml-2">
              Create Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full h-16 bg-[#16161a] border border-white/10 rounded-2xl px-6 text-white outline-none focus:border-primary/50 transition-all shadow-inner"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-16 bg-primary hover:bg-indigo-500 text-white font-black uppercase italic rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 border-b-4 border-indigo-900 mt-4"
          >
            {loading ? "INITIALIZING..." : "Initialize Account →"}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-white/40 text-xs font-medium uppercase tracking-tight">
            Already a member?{" "}
            <Link
              href="/login"
              className="text-primary font-black hover:underline ml-1"
            >
              Access Portal
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
