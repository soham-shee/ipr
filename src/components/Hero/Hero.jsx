import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import WhatsAppChat from "../WhatsappChat/WhatsappChat";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const [offset, setOffset] = useState(0);
  const bubblesRef = useRef([]);
  const tweens = useRef([]);
  const paragraphRef = useRef(null);

  const services = [
    { name: "Trademark", desc: "Protect your brand identity." },
    { name: "Patent", desc: "Secure rights for inventions." },
    { name: "Copyright", desc: "Protect creative works." },
    { name: "Design", desc: "Register product designs." },
    { name: "Registration", desc: "Complete IP registrations." },
  ];

  const messages = [
    "Protect your intellectual property with our expert services.",
    "Secure your brand with trademark registration.",
    "Turn your inventions into protected patents.",
    "Register designs and copyrights effortlessly.",
  ];

  const basePositions = [
    { top: 15, left: 20 },
    { top: 20, left: 75 },
    { top: 50, left: 10 },
    { top: 70, left: 75 },
    { top: 80, left: 30 },
  ];

  const positions = useRef(
    basePositions.map((pos) => ({
      top: pos.top + (Math.random() * 6 - 3),
      left: pos.left + (Math.random() * 6 - 3),
    }))
  );

const animateBubble = (bubble, index) => {
  const tween = gsap.to(bubble, {
    x: gsap.utils.random(-60, 60),   // ⬅️ updated
    y: gsap.utils.random(-60, 60),   // ⬅️ updated
    rotation: gsap.utils.random(-12, 12),
    scale: gsap.utils.random(0.9, 1.1),

    duration: gsap.utils.random(1.5, 2.5), // ⬅️ updated (faster)
    ease: "sine.inOut",

    yoyo: true,
    repeat: -1,
  });

  tweens.current[index] = tween;
};

  const handleMouseEnter = (index) => {
    tweens.current[index]?.pause();
  };

  const handleMouseLeave = (index) => {
    tweens.current[index]?.resume();
  };

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.75);
    window.addEventListener("scroll", handleScroll);

    bubblesRef.current.forEach((bubble, i) => {
      gsap.delayedCall(Math.random() * 2, () => animateBubble(bubble, i));
    });

    // Typing animation timeline
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

messages.forEach((msg) => {

  // Type forward
  tl.to(paragraphRef.current, {
    duration: msg.length * 0.05,
    text: msg,
    ease: "none",
  })

  // Pause after typing
  .to({}, { duration: 3 });

  // Delete backwards
  for (let i = msg.length; i >= 0; i--) {
    tl.to(paragraphRef.current, {
      duration: 0.05,
      text: msg.substring(0, i),
      ease: "none",
    });
  }
});

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tweens.current.forEach((t) => t?.kill());
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* Grid Background */}
      <div
        className="bg-img absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
        
      />
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Floating Bubbles */}
      {services.map((service, i) => (
        <div
          key={i}
          ref={(el) => (bubblesRef.current[i] = el)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave(i)}
          className="group absolute px-4 py-2 text-white rounded-full cursor-pointer
          bg-white/10 backdrop-blur-xl border border-white/20
          shadow-[0_0_20px_rgba(255,255,255,0.2)]
          hover:shadow-[0_0_40px_rgba(255,255,255,0.7)]
          transition-all duration-300 will-change-transform"
          style={{
            top: `${positions.current[i].top}%`,
            left: `${positions.current[i].left}%`,
          }}
        >
          {service.name}

          <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-40 text-sm text-center bg-black/80 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
            {service.desc}
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center text-white">
        <h1 className="text-5xl md:text-5xl font-semibold tracking-tight">
          Welcome to <span className="playfair font-semibold text-amber-500">Legal Shades</span>
        </h1>

        {/* <p
          ref={paragraphRef}
          className="mt-6 text-lg md:text-xl font-light text-gray-300 min-h-[32px]"
        ></p> */}
        
        
        <div className="mt-8 max-w-3xl mx-auto px-6 py-6 rounded-2xl bg-white/5 backdrop-blur-md  text-center">
          <p className="text-base md:text-lg leading-relaxed text-gray-300">We provide comprehensive <span className="text-white font-medium">Intellectual Property (IPR)</span> and business registration services designed to protect and strengthen your brand.</p>
          <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-400">
            From trademarks to compliance, we deliver 
            <span className="text-white"> simple, reliable, and cost-effective solutions</span>.
          </p>

        </div>

        {/* <button className="mt-8 bg-amber-50 px-6 py-3 rounded-md font-medium text-slate-800 hover:bg-slate-200 transition">
          
        </button> */}
      </div>

      <div className="absolute bottom-8 z-10">
        <ScrollIndicator />
      </div>

      <WhatsAppChat />
    </section>
  );
}

export default Hero;