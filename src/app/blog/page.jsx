"use client";
import React from "react";
import Link from "next/link";

const Blog = () => {
  const posts = [
    {
      title: "The Rise of Neural Interfaces",
      date: "JAN 12, 2026",
      category: "CYBERNETICS",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Top 5 Handheld Gaming Rigs",
      date: "JAN 15, 2026",
      category: "HARDWARE",
      image:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Battery Optimization Hacks",
      date: "JAN 18, 2026",
      category: "SYSTEMS",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#020203]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
              Field <span className="text-primary">Reports</span>
            </h2>
            <p className="text-white/40 mt-2 uppercase text-[10px] font-bold tracking-[0.3em]">
              Latest Intelligence
            </p>
          </div>
          <Link
            href="#"
            className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline"
          >
            View All Intel
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Image Container */}
              <div className="aspect-video bg-[#0a0a0c] border border-white/10 rounded-2xl mb-6 overflow-hidden relative shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                {/* Cyberpunk Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all" />
              </div>

              {/* Text Content */}
              <p className="text-primary text-[10px] font-black tracking-widest mb-2 uppercase">
                {post.category}
              </p>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-tighter">
                  DATA_STRATUM: {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
