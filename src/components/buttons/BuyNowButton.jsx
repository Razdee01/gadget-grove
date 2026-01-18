"use client";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BuyNowButton({ itemName }) {
  const { status } = useSession();
  const router = useRouter();

  const handleBuy = () => {
    // Check if user is logged in
    if (status !== "authenticated") {
      Swal.fire({
        title: "AUTH REQUIRED",
        text: "You must be logged into Gadget Grove to acquire this gear.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        background: "#0a0a0c",
        color: "#fff",
        confirmButtonColor: "#4f46e5",
      }).then((result) => {
        if (result.isConfirmed) router.push("/login");
      });
      return;
    }

    // If logged in, show success
    Swal.fire({
      title: "PURCHASE SUCCESS",
      text: `${itemName} has been added to your inventory!`,
      icon: "success",
      background: "#0a0a0c",
      color: "#fff",
      confirmButtonColor: "#4f46e5",
    });
  };

  return (
    <button
      onClick={handleBuy}
      className="w-full h-16 bg-primary hover:bg-indigo-500 text-white font-black uppercase italic rounded-2xl shadow-xl transition-all active:scale-95 border-b-4 border-indigo-900 flex items-center justify-center gap-2"
    >
      Initialize Acquisition — Buy Now
    </button>
  );
}
