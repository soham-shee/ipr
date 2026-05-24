import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import FlowChart from "./components/FlowChart/FlowChart";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const MIN_TIME = 1000; // ✅ 1 second minimum

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = MIN_TIME - elapsed;

      setTimeout(
        () => {
          setLoading(false);

          // fade-out duration buffer
          setTimeout(() => {
            setShowLoader(false);
          }, 600);
        },
        remaining > 0 ? remaining : 0
      );
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {showLoader && <Loader fading={!loading} />}

      {!showLoader && (
        <>
          <Navbar />
          <Hero />
          <Services />
          <FlowChart />
          <Faqs />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;