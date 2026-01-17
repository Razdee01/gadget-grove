import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        {/* Simple, Bold Brand Icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
        </div>

        {/* Clean Typography */}
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
          Page <span className="text-primary">Not Found</span>
        </h1>

        <p className="text-xl text-base-content/60 font-medium max-w-lg mx-auto mb-10 leading-relaxed">
          We couldn't find the page you're looking for. It might have been
          moved, deleted, or the URL might be incorrect.
        </p>

        {/* Structured Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="btn btn-primary btn-lg rounded-2xl px-12 italic uppercase font-black"
          >
            Go to Homepage
          </Link>
          <Link
            href="/items"
            className="btn btn-ghost btn-lg rounded-2xl px-12 italic uppercase font-black opacity-60 hover:opacity-100"
          >
            Explore Gear
          </Link>
        </div>

        {/* Minimal Footer for 404 */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest opacity-30">
            Error Code: 404_PAGE_MISSING
          </p>
        </div>
      </div>
    </div>
  );
}
