const Categories = () => {
  const cats = [
    { name: "Audio", icon: "🎧", count: "120+ Items" },
    { name: "Wearables", icon: "⌚", count: "80+ Items" },
    { name: "Gaming", icon: "🎮", count: "200+ Items" },
    { name: "Computing", icon: "💻", count: "150+ Items" },
  ];

  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-black uppercase italic mb-10 text-center lg:text-left">
        Browse <span className="text-primary">Collections</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cats.map((cat) => (
          <div
            key={cat.name}
            className="group p-8 bg-base-200 rounded-3xl border border-white/5 hover:border-primary/50 transition-all cursor-pointer"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold uppercase italic">{cat.name}</h3>
            <p className="text-sm text-base-content/50 font-bold">
              {cat.count}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
