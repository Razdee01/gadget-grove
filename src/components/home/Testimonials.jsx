const Testimonials = () => {
  return (
    <section className="py-20 bg-base-200/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black uppercase italic mb-12 text-primary">
          User Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-base-300 rounded-2xl italic text-lg">
            The Quantum Pro headphones changed my workflow. Best tech purchase
            of the year!
            <p className="mt-4 not-italic font-black text-sm uppercase tracking-tighter">
              — Alex Rivers, Producer
            </p>
          </div>
          <div className="p-8 bg-base-300 rounded-2xl italic text-lg">
            Super fast shipping and the build quality of the Nebula watch is
            insane.
            <p className="mt-4 not-italic font-black text-sm uppercase tracking-tighter">
              — Jordan Smith, Athlete
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
