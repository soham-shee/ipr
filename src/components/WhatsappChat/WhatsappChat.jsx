import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(true);

  const phoneNumber = "8448833757";
  const message = "Hello, I need help with IPR services.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // auto popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // fake typing indicator
  useEffect(() => {
    const timer = setTimeout(() => {
      setTyping(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      {/* Chat Window */}
      {open && (
        <div className="mb-4 w-80 rounded-2xl overflow-hidden
        backdrop-blur-xl bg-slate-800/50 border border-white/20
        shadow-[0_0_40px_rgba(0,0,0,0.3)] text-white">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#25D366]">

            <div className="flex items-center gap-3">
              <FaWhatsapp size={20} />

              <div>
                <div className="text-sm font-semibold">
                  Support
                </div>

                <div className="flex items-center text-xs gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Online
                </div>
              </div>
            </div>

            <button onClick={() => setOpen(false)}>
              <IoClose size={22} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 text-sm">

            {typing ? (
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce delay-300"></span>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  Hi there 👋 <br />
                  Need help with trademarks, patents or copyright?
                </div>

                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#25D366] text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative bg-[#25D366] p-4 rounded-full shadow-lg text-white
        hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={26} />

        {/* ping animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>
      </button>
    </div>
  );
}

export default WhatsAppChat;