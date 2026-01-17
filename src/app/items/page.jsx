import { dbConnect } from "@/lib/dbConnect"; // Adjust this path to where your dbConnect is
import Image from "next/image";
import Link from "next/link";

export default async function ItemsPage() {
  // 1. Fetch data directly in the Server Component
  const collection = dbConnect("items");
  const items = await collection.find({}).toArray();

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <header className="mb-12 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-black italic uppercase">
          Explore <span className="text-primary">All Gear</span>
        </h1>
        <p className="text-base-content/60 font-medium mt-2">
          High-performance tech curated for your lifestyle.
        </p>
      </header>

      {/* 2. The Grid (Requirement #3: Show name, description, price, image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item._id.toString()}
            className="group bg-base-200 rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-xl"
          >
            {/* Image Section */}
            <figure className="h-64 overflow-hidden relative">
              <Image
                src={item.image}
                alt={item.name}
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 badge badge-primary font-bold italic p-3">
                ${item.price}
              </div>
            </figure>

            {/* Content Section */}
            <div className="p-8">
              <h2 className="text-2xl font-black uppercase italic mb-3 group-hover:text-primary transition-colors">
                {item.name}
              </h2>
              <p className="text-sm text-base-content/60 leading-relaxed line-clamp-2 mb-6 font-medium">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold uppercase tracking-widest opacity-40">
                  {item.category}
                </span>
                <Link
                  href={`/items/${item._id}`}
                  className="btn btn-primary btn-sm rounded-xl italic font-black uppercase"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
