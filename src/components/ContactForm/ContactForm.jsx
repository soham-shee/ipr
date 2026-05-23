import React from "react";

const ContactForm = () => {
  return (
    <div className="absolute right-10 bottom-10 flex items-center justify-center">
      <div className="w-[240px] h-[254px] px-[15px] text-center flex flex-col items-center justify-center gap-3 bg-white rounded-[20px]">
        
        <span className="text-[23px] font-black text-gray-800">
          Contact Us
        </span>

        <p className="text-[13px] leading-[18px] text-gray-800">
          Get fresh web design resources delivered straight to your inbox every
          week.
        </p>

        <div className="flex flex-col gap-2.5 w-full">
          <input
            type="text"
            placeholder="Your Email"
            className="mt-2 outline-none bg-white shadow-[0_0_0_1px_inset_transparent] p-2.5 rounded-[14px] border border-gray-800 text-black"
          />

          <button className="bg-black text-white py-2.5 rounded-[14px] font-bold hover:opacity-80 transition">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
