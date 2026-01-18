"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react"; 
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Uplink Established",
      text: "Your message has been transmitted to the Grove.",
      icon: "success",
      background: "#0a0a0c",
      color: "#fff",
      confirmButtonColor: "#4f46e5",
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#020203] border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
                Contact <span className="text-primary">Support</span>
              </h2>
              <p className="text-white/40 mt-4 max-w-md">
                Encountering a glitch in your hardware? Reach out to our
                technicians via the encrypted channels below.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="text-primary" />,
                  title: "Secure Email",
                  detail: "rahmanrajdee@gmail.com",
                },
                {
                  icon: <Phone className="text-primary" />,
                  title: "Direct Line",
                  detail: "01867075117",
                },
                {
                  icon: <MapPin className="text-primary" />,
                  title: "HQ Location",
                  detail: "Dhaka,Bangladesh",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-white/30 tracking-widest">
                      {item.title}
                    </p>
                    <p className="text-white font-bold">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#0a0a0c] border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Send size={100} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="OPERATOR NAME"
                  className="w-full h-14 bg-black border border-white/10 rounded-xl px-4 text-white outline-none focus:border-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full h-14 bg-black border border-white/10 rounded-xl px-4 text-white outline-none focus:border-primary"
                  required
                />
              </div>
              <textarea
                placeholder="MESSAGE ENCRYPTION..."
                rows="4"
                className="w-full bg-black border border-white/10 rounded-xl p-4 text-white outline-none focus:border-primary"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full h-14 bg-primary text-white font-black uppercase italic rounded-xl hover:bg-indigo-500 transition-all active:scale-95"
              >
                Transmit Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
