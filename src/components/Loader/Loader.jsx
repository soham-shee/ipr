import React, { useEffect, useState } from "react";

const steps = [
  "Loading assets...",
  "Almost ready...",
  "Welcome to Legal Shades!"
];

export default function Loader({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < steps.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      const done = setTimeout(() => {
        onFinish?.();
      }, 1000);

      return () => clearTimeout(done);
    }
  }, [index, onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <div className="text-center space-y-4">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto" />

        {/* Step Text */}
        <h1 className="text-lg font-medium transition-all duration-300">
          {steps[index]}
        </h1>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${((index + 1) / steps.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}