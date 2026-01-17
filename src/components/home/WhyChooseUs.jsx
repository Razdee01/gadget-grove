const WhyChooseUs = () => {
  const features = [
    { title: "Fast Shipping", desc: "Get your gadgets delivered within 24 hours.", icon: "🚀" },
    { title: "Secure Payment", desc: "Military grade encryption for all transactions.", icon: "🛡️" },
    { title: "24/7 Support", desc: "Our tech experts are always here to help.", icon: "💬" }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map(f => (
          <div key={f.title} className="text-center">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-black uppercase italic mb-2">{f.title}</h3>
            <p className="text-base-content/60 font-medium">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;