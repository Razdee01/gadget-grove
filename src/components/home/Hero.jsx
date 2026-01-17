import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero min-h-[80vh] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000"
          className="max-w-sm md:max-w-md rounded-3xl shadow-2xl border-4 border-primary/20 rotate-3 hover:rotate-0 transition-transform duration-500"
          alt="Tech Gadgets"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none">
            Upgrade Your <br />
            <span className="text-primary">Digital Life</span>
          </h1>
          <p className="py-6 text-lg text-base-content/70 max-w-lg font-medium">
            Explore the latest in high-end tech, from noise-canceling audio to
            next-gen wearables. Built for performance, designed for you.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link
              href="/items"
              className="btn btn-primary btn-lg rounded-2xl italic uppercase font-black"
            >
              Shop Now
            </Link>
            <Link
              href="/blog"
              className="btn btn-outline btn-lg rounded-2xl italic uppercase font-black"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
