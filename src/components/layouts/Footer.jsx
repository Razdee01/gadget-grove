import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-white/5 pt-16 pb-8 mt-20 rounded-t-[3rem]">
      {/* 1. Main Content Container */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-black italic tracking-tighter uppercase">
                GADGET<span className="text-primary">GROVE</span>
              </span>
            </Link>
            <p className="text-base-content/60 text-sm leading-relaxed max-w-xs">
              Next-generation tech marketplace providing the best gadgets for
              creators, gamers, and professionals.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h6 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">
              Quick Links
            </h6>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li>
                <Link
                  href="/items"
                  className="hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Tech Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">
              Support
            </h6>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h6 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">
              Newsletter
            </h6>
            <p className="text-xs text-base-content/60 mb-4">
              Get the latest deals in your inbox.
            </p>
            <div className="join w-full">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered join-item w-full bg-base-300 focus:outline-none focus:border-primary"
              />
              <button className="btn btn-primary join-item">Go</button>
            </div>
          </div>
        </div>

        {/* 2. Bottom Copyright Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-50">
          <p>© 2026 GADGET GROVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="hover:text-primary cursor-pointer">Twitter</span>
            <span className="hover:text-primary cursor-pointer">Github</span>
            <span className="hover:text-primary cursor-pointer">Discord</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
