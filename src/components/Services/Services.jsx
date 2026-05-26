import {
  Globe,
  FileText,
  RefreshCw,
  Scale,
  Layers,
  Shield,
  PenTool,
  Code
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const App = () => {

  const features = [
    {
      icon: <Globe size={18} color="#4f39f6" />,
      title: "IPR Consultation",
      path: "mailto:LegalShades26@gmail.com",
      description:
        "We provide expert guidance on protecting and managing your intellectual property, tailored to your business goals and legal needs.",
      hasAccent: false,
    },
    {
      icon: <FileText size={18} color="#4f39f6" />,
      title: "Trademark Filing",
      path: "/trademark",
      description:
        "Seamless trademark registration services to secure your brand identity and ensure legal protection from the start.",
      hasAccent: true,
    },
    {
      icon: <RefreshCw size={18} color="#4f39f6" />,
      title: "Trademark Renewal",
      path: "/trademark-renewal",
      description:
        "Timely renewal of your trademarks to maintain continuous protection and avoid lapse of rights.",
      hasAccent: false,
    },
    {
      icon: <Scale size={18} color="#4f39f6" />,
      title: "Trademark Oppositions",
      path: "/trademark-opposition",
      description:
        "Professional assistance in handling trademark disputes, including filing and defending opposition proceedings.",
      hasAccent: false,
    },
    {
      icon: <Layers size={18} color="#4f39f6" />,
      title: "Post Registration Changes",
      path: "/post-registration-services",
      description:
        "Efficient management of post-registration updates such as name, address, or ownership changes in your trademark records.",
      hasAccent: false,
    },
    {
      icon: <Shield size={18} color="#4f39f6" />,
      title: "Copyright Services",
      path: "/copyright",
      description:
        "Comprehensive copyright registration and advisory services to safeguard your creative works from unauthorized use.",
      hasAccent: false,
    },
    {
      icon: <PenTool size={18} color="#4f39f6" />,
      title: "Design Registration Services",
      path: "/design",
      description:
        "Protect the unique visual appearance of your products with expert design registration solutions.",
      hasAccent: false,
    },
    {
      icon: <Code size={18} color="#4f39f6" />,
      title: "Miscellaneous",
      path: "/misc",
      description:
        "We provide a wide range of legal and business support services to cater to the diverse needs of individuals, startups, and established businesses.",
      hasAccent: false,
    },
  ];

  return (
    <div className="bg-white px-8 lg:px-20 xl:px-[120px] py-20 flex flex-col items-center">

      {/* Header */}
      <div className="max-w-6xl w-full mb-9">
        <h1 className="text-2xl md:text-3xl font-medium text-zinc-800 mb-4 tracking-tight">
          Services
        </h1>
        <p className="text-md text-zinc-600 max-w-xl">
          We create thoughtfully crafted experiences that serve real users while driving meaningful business outcomes.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl w-full border-t border-l border-zinc-200">

        {features.map((feature, index) => (
          
          <Link
            key={index}
            to={feature.path}
            className={`relative p-6 md:p-8 flex flex-col gap-4 border-r border-b border-zinc-200 transition-all duration-300 cursor-pointer ${
              index === 0
                ? "bg-gradient-to-b from-white to-[#EEF0FF]"
                : "bg-white hover:bg-gradient-to-b hover:from-white hover:to-[#EEF0FF]"
            }`}
          >

            {/* Accent bar */}
            {feature.hasAccent && (
              <div className="absolute left-0 top-12 bottom-12 w-1.5 bg-indigo-500 rounded-r" />
            )}

            {/* Icon + Title */}
            <div className="flex items-center gap-2.5 mb-1">
              <div>{feature.icon}</div>
              <h3 className="text-md font-medium text-zinc-800 leading-snug">
                {feature.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-md text-zinc-600 leading-relaxed">
              {feature.description}
            </p>

          </Link>
        ))}

      </div>
    </div>
  );
};

export default App;