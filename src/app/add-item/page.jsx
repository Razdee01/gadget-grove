"use client";
import { useSession } from "next-auth/react";
import { addProduct } from "@/actions/server/items";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AddItemPage() {
  const { data: session, status: authStatus } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (authStatus === "unauthenticated") {
    router.push("/login");
    return null;
  }

  async function handleSubmit(formData) {
    setLoading(true);

    // We process the features string into an array before sending to server
    const result = await addProduct(formData);
    setLoading(false);

    if (result.success) {
      Swal.fire({
        title: "DEPLOYMENT SUCCESSFUL",
        text: "THE GEAR HAS BEEN REGISTERED TO THE GROVE NETWORK.",
        icon: "success",
        background: "#0a0a0c",
        color: "#fff",
        confirmButtonColor: "#4f46e5",
        confirmButtonText: "VIEW INVENTORY",
        customClass: {
          popup: "border border-primary/20 rounded-[2.5rem]",
          title: "font-black italic uppercase tracking-tighter",
        },
      }).then(() => {
        router.push("/items");
      });
    } else {
      Swal.fire({
        title: "UPLINK FAILURE",
        text: "SYSTEM ERROR: DATABASE OFFLINE OR INVALID DATA.",
        icon: "error",
        background: "#0a0a0c",
        color: "#fff",
        confirmButtonColor: "#ef4444",
      });
    }
  }

  return (
    <div className="min-h-screen bg-[#020203] flex items-center justify-center p-6 sm:p-12">
      <div className="w-full max-w-4xl bg-[#0a0a0c] border border-white/5 rounded-[3rem] shadow-[0_0_100px_-20px_rgba(79,70,229,0.15)] overflow-hidden">
        <div className="bg-[#111114] border-b border-white/5 p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
            Inventory{" "}
            <span className="text-primary drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              Portal
            </span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mt-4">
            OPERATOR: {session?.user?.name || "AUTHENTICATING..."}
          </p>
        </div>

        <form action={handleSubmit} className="p-10 md:p-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/80 ml-2">
                Product Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Pro Sound Hub"
                className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-6 py-5 text-white outline-none focus:border-primary/50 transition-all"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/80 ml-2">
                Price (USD)
              </label>
              <input
                name="price"
                type="number"
                step="0.01"
                className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-6 py-5 text-white outline-none focus:border-primary/50 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-primary/80 ml-2">
              Image URL
            </label>
            <input
              name="image"
              type="url"
              className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-6 py-5 text-white outline-none focus:border-primary/50 transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/80 ml-2">
                Category
              </label>
              <select
                name="category"
                className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-6 py-5 text-white font-bold outline-none focus:border-primary/50 appearance-none"
              >
                <option value="Audio">Audio</option>
                <option value="Wearables">Wearables</option>
                <option value="Computing">Computing</option>
                <option value="Cameras">Cameras</option>
              </select>
            </div>
            {/* NEW FEATURES FIELD */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/80 ml-2">
                Key Features (Comma Separated)
              </label>
              <input
                name="features"
                type="text"
                placeholder="Waterproof, 48h Battery..."
                className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-6 py-5 text-white outline-none focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-primary/80 ml-2">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              className="w-full bg-[#16161a] border border-white/5 rounded-2xl px-6 py-5 text-white outline-none focus:border-primary/50 transition-all resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-indigo-500 text-white font-black uppercase italic py-6 rounded-2xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-4 text-xl border-b-4 border-indigo-900"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Deploy To Inventory →"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
