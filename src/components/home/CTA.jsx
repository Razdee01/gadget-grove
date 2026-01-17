import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-primary p-12 rounded-[3rem] text-center text-primary-content relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6">
              Ready to Join the <br /> Future?
            </h2>
            <p className="mb-8 text-lg font-medium opacity-90">
              Create an account today and get 20% off your first gadget.
            </p>
            <Link
              href="/login"
              className="btn btn-neutral btn-lg rounded-2xl px-12 italic uppercase font-black"
            >
              Get Started Now
            </Link>
          </div>
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
