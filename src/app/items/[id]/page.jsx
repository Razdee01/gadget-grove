import { getSingleProduct } from "@/actions/server/items";
import CartButton from "@/components/buttons/CartButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;

  
  const item = await getSingleProduct(id);

  if (!item) return notFound();

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <div className="mb-8">
        <Link
          href="/items"
          className="btn btn-ghost gap-2 pl-0 text-primary italic font-bold"
        >
          ← Back to All Gear
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-base-200 p-8 md:p-12 rounded-[3rem] border border-white/5">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2rem] blur opacity-25"></div>
          <img
            src={item.image}
            alt={item.name}
            className="relative rounded-[2rem] w-full h-[450px] object-cover shadow-2xl"
          />
        </div>

        <div>
          <div className="badge badge-secondary font-black italic mb-4 uppercase">
            {item.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase italic mb-6">
            {item.name}
          </h1>
          <p className="text-3xl font-black text-primary mb-8">${item.price}</p>

          <div className="space-y-6">
            <p className="text-base-content/80 font-medium">
              {item.description}
            </p>
            {item.features && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm font-bold"
                  >
                    <span className="text-primary text-xl">✓</span> {f}
                  </li>
                ))}
              </ul>
            )}
            <div className="pt-8 border-t border-white/5">
             <CartButton item={item}></CartButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
