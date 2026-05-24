import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Navbar.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const generatePath = (text) =>
    "/" +
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");

  // ✅ helper to support route + mailto + tel
  const getLink = (opt) => {
    if (typeof opt === "string") {
      return {
        type: "route",
        label: opt,
        value: generatePath(opt),
      };
    }
    return opt;
  };

  const menuItems = [
    {
      name: "Trademark",
      options: [
        "Trademark Application",
        "Reply to trademark examination",
        "Show cause hearing",
        "Trademark Opposition",
        "Trademark Cancellation",
        "Counter statement",
        "Trademark Renewal",
        "Post registration services",
        "Trademark Assignment",
      ],
    },
    {
      name: "Design",
      options: [
        "Design Registration",
        "Design Examination Reply",
        "Design Renewal",
        "Design Hearing",
        {
          label: "Cancellation of Design",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "Any Legal actions for protection of Designs",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
      ],
    },
    {
      name: "Copyright",
      options: [
        "Copyright Registration",
        "Copyright Assignment",
        {
          label: "Any Legal actions for protection of Copyright",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
      ],
    },
    {
      name: "Litigation",
      options: [
        {
          label: "Civil Matters",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "Criminal Matters",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
      ],
    },
    {
      name: "Registrations",
      options: ["Trademark", "Copyright", "Design", "Misc."],
    },
    {
      name: "MISC",
      options: [
        {
          label: "FSSAI Registration",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "MSME Registration",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "Company Registration",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "Agreements and contracts",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "Marriage Certificates",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "Legal Notices",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "Assignments",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "GST Registration",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
        {
          label: "GST Return Filing",
          type: "mailto",
          value: "mailto:Legalshades26@gmail.com?subject=Legal%20Consultation%20Request"
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.05)] z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <div className="absolute pt-16 w-full py-4 text-gray-50 font-extrabold z-50">
        <nav
          className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] rounded-full max-w-7xl px-8 lg:px-16 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
              : "bg-black/2 backdrop-blur-md border-b border-white/10"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://ik.imagekit.io/sohamshee/Legal%20Shades/logo_S1yKpT4vL.png"
              className="h-10"
              alt=""
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-gray-200 font-medium">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="relative group text-gray-300 hover:text-white transition duration-300">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>

                <AnimatePresence>
                  {openMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 top-full mt-5 w-72 bg-slate-100/95 backdrop-blur-xl rounded-2xl shadow-2xl p-5 text-sm space-y-5 border border-white/10"
                    >
                      {item.options.map((opt) => {
                        const link = getLink(opt);

                        const isActive =
                          link.type === "route" &&
                          location.pathname === link.value;

                        const baseClass = `block transition ${
                          isActive
                            ? "text-slate-800"
                            : "text-gray-500 hover:text-slate-800"
                        }`;

                        // ✅ MAILTO / TEL / EXTERNAL
                        if (
                          link.type === "mailto" ||
                          link.type === "tel" ||
                          link.type === "external"
                        ) {
                          return (
                            <motion.div key={link.label} whileHover={{ x: 5 }}>
                              <a href={link.value} className={baseClass}>
                                {link.label}
                              </a>
                            </motion.div>
                          );
                        }

                        // ROUTE
                        return (
                          <motion.div key={link.label} whileHover={{ x: 5 }}>
                            <Link to={link.value} className={baseClass}>
                              {link.label}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:Legalshades26@gmail.com"
              className="hidden lg:block px-4 py-1.5 rounded-full border border-gray-100 text-gray-100 font-medium hover:bg-gray-800 transition"
            >
              Contact Us
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <motion.span
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 6 : 0,
                }}
                className="w-6 h-0.5 bg-white mb-1 block"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-white mb-1 block"
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -6 : 0,
                }}
                className="w-6 h-0.5 bg-white block"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full mt-4 z-50 bg-black/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col gap-4 lg:hidden border border-white/10 max-h-[80vh] overflow-y-auto"
              >
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setMobileSubOpen(
                          mobileSubOpen === item.name ? null : item.name
                        )
                      }
                      className="w-full flex justify-between items-center text-white font-semibold py-2"
                    >
                      {item.name}
                      <motion.span
                        animate={{
                          rotate: mobileSubOpen === item.name ? 45 : 0,
                        }}
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {mobileSubOpen === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pl-4 overflow-hidden"
                        >
                          {item.options.map((opt) => {
                            const link = getLink(opt);

                            if (
                              link.type === "mailto" ||
                              link.type === "tel" ||
                              link.type === "external"
                            ) {
                              return (
                                <a
                                  key={link.label}
                                  href={link.value}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-gray-400 text-sm py-1 hover:text-white"
                                >
                                  {link.label}
                                </a>
                              );
                            }

                            return (
                              <Link
                                key={link.label}
                                to={link.value}
                                onClick={() => setMobileOpen(false)}
                                className="block text-gray-400 text-sm py-1 hover:text-white"
                              >
                                {link.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Contact button */}
                <a
                  href="mailto:Legalshades26@gmail.com"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 px-4 py-2 rounded-full border border-gray-400 text-white font-medium text-center"
                >
                  Contact Us
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
}