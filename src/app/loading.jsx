export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center space-y-4">
      {/* High-tech Loading Spinner */}
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-secondary/20 border-b-secondary animate-spin-slow"></div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-black uppercase italic tracking-widest text-white animate-pulse">
          Syncing <span className="text-primary">Grove</span> Data...
        </h2>
        <p className="text-[10px] text-white/30 uppercase font-bold tracking-[0.4em] mt-2">
          Establishing Secure Uplink
        </p>
      </div>
    </div>
  );
}
