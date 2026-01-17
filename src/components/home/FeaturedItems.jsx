import { getFeaturedProducts } from "@/actions/server/items";
import Link from "next/link";

const FeaturedItems = async () => {
  // Fetch real data from the Server Action
  const items = await getFeaturedProducts();

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-black uppercase italic">
          Featured <span className="text-primary">Gear</span>
        </h2>
        <Link
          href="/items"
          className="btn btn-ghost btn-sm text-primary italic font-bold"
        >
          View All ↗
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item._id}
            className="card bg-base-200 shadow-xl border border-white/5 overflow-hidden group hover:border-primary/30 transition-all"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </figure>
            <div className="card-body">
              <div className="badge badge-primary font-bold italic">New</div>
              <h2 className="card-title uppercase italic font-black text-lg">
                {item.name}
              </h2>
              <p className="text-sm opacity-60 line-clamp-2">
                {item.description}
              </p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="font-bold text-primary">${item.price}</span>
                <Link
                  href={`/items/${item._id}`}
                  className="btn btn-primary btn-sm rounded-lg italic uppercase font-black"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
