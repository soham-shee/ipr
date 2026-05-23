import { useRef, useState } from "react";
import faqsList from "./faqsList";

// Plus Icon
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-full w-full"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

// Minus Icon
const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-full w-full"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

// Single FAQ Card
const FaqsCard = ({ faq }) => {
  const answerElRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [answerHeight, setAnswerHeight] = useState("0px");

  const toggleAnswer = () => {
    if (!isOpen) {
      // Set height to scrollHeight so it expands smoothly
      const scrollHeight = answerElRef.current.scrollHeight;
      setAnswerHeight(`${scrollHeight}px`);
    } else {
      setAnswerHeight("0px");
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full overflow-hidden border-b cursor-pointer" onClick={toggleAnswer}>
      {/* Question */}
      <h4 className="flex justify-between items-center text-lg text-gray-700 font-medium py-4">
        <span className="flex-1">{faq.q}</span>
        <span className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </h4>

      {/* Answer */}
      <div
        ref={answerElRef}
        style={{ height: answerHeight }}
        className="transition-all duration-300 ease-in-out overflow-hidden whitespace-pre-line"
      >
        <p className="text-gray-500 py-2">{faq.a}</p>
      </div>
    </div>
  );
};

// FAQ Section
export default function FaqsSection() {
  return (
    <section className="flex flex-col pt-24 pb-24 items-center justify-center w-screen min-h-screen px-5 sm:px-10">
      {/* Header */}
      <div className="space-y-3 text-center max-w-lg mx-auto">
        <h1 className="text-3xl text-gray-800 font-semibold">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-lg">
          Answered all frequently asked questions. Still confused? Feel free to contact us.
        </p>
      </div>

      {/* FAQ List */}
      <div className="mt-14 max-w-4xl w-full mx-auto space-y-3">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} faq={item} />
        ))}
      </div>
    </section>
  );
}