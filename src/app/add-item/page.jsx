"use client";
import { addProduct } from "@/actions/server/items";
import { useState } from "react";

export default function AddItemPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  async function handleSubmit(formData) {
    setLoading(true);
    setStatus({ type: "", msg: "" });

    const result = await addProduct(formData);

    setLoading(false);

    if (result.success) {
      setStatus({
        type: "success",
        msg: "DEPLOYMENT SUCCESSFUL: GEAR IS LIVE",
      });
      const form = document.getElementById("item-form");
      if (form) form.reset();
    } else {
      setStatus({ type: "error", msg: "SYSTEM ERROR: DATABASE OFFLINE" });
    }
  }

  return (
    <div className="min-h-screen bg-[#020203] flex items-center justify-center p-6 sm:p-12">
      <div className="w-full max-w-4xl bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] shadow-[0_0_100px_-20px_rgba(79,70,229,0.15)] overflow-hidden">
        {/* Modern Glass Header */}
        <div className="bg-[#111114] border-b border-white/5 p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
            Inventory{" "}
            <span className="text-primary drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              Portal
            </span>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-primary/30"></span>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
              Authorized Personnel Only
            </p>
            <span className="h-[1px] w-8 bg-primary/30"></span>
          </div>
        </div>

        <form
          id="item-form"
          action={handleSubmit}
          className="p-10 md:p-16 space-y-10"
        >
          {/* Row 1: Taller, Boxier Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2">
                Product Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="e.g. Pro Sound Hub"
                className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-8 py-6 text-white text-lg outline-none focus:border-primary/50 focus:bg-[#1c1c21] transition-all placeholder:opacity-10"
                required
              />
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2">
                Price (USD)
              </label>
              <input
                name="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-8 py-6 text-white text-lg outline-none focus:border-primary/50 focus:bg-[#1c1c21] transition-all placeholder:opacity-10"
                required
              />
            </div>
          </div>

          {/* Row 2: Full Width URL */}
          <div className="space-y-4">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2">
              Image Source URL
            </label>
            <input
              name="image"
              type="url"
              placeholder="https://images.unsplash.com/..."
              className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-8 py-6 text-white outline-none focus:border-primary/50 focus:bg-[#1c1c21] transition-all placeholder:opacity-10"
              required
            />
          </div>

          {/* Row 3: Category with FIXED DARK OPTIONS */}
          <div className="space-y-4">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2">
              Storage Category
            </label>
            <div className="relative">
              <select
                name="category"
                className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-8 py-6 text-white font-bold outline-none focus:border-primary/50 appearance-none cursor-pointer"
              >
                <option value="Audio" className="bg-[#16161a] text-white py-4">
                  Audio
                </option>
                <option
                  value="Wearables"
                  className="bg-[#16161a] text-white py-4"
                >
                  Wearables
                </option>
                <option
                  value="Computing"
                  className="bg-[#16161a] text-white py-4"
                >
                  Computing
                </option>
                <option
                  value="Cameras"
                  className="bg-[#16161a] text-white py-4"
                >
                  Cameras
                </option>
              </select>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-primary text-xl">
                ▼
              </div>
            </div>
          </div>

          {/* Row 4: Description */}
          <div className="space-y-4">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/80 ml-2">
              Technical Description
            </label>
            <textarea
              name="description"
              rows="5"
              placeholder="Enter hardware specifications..."
              className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-8 py-6 text-white outline-none focus:border-primary/50 focus:bg-[#1c1c21] transition-all resize-none"
              required
            ></textarea>
          </div>

          {/* Glowing Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-indigo-500 text-white font-black uppercase italic py-8 rounded-2xl shadow-[0_0_30px_-5px_rgba(79,70,229,0.6)] transition-all active:scale-[0.98] flex items-center justify-center gap-4 text-xl tracking-tighter border-b-4 border-indigo-900"
            >
              {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                "Deploy To Inventory →"
              )}
            </button>
          </div>

          {/* Status Message */}
          {status.msg && (
            <div
              className={`mt-8 p-6 rounded-2xl text-center font-black italic tracking-widest border animate-pulse ${
                status.type === "success"
                  ? "bg-green-500/10 border-green-500/20 text-green-400"
                  : "bg-red-500/10 border-red-500/20 text-red-400"
              }`}
            >
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
