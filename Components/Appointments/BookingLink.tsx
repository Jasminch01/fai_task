"use client";

import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { PiCopyLight } from "react-icons/pi";

const BookingLink = () => {
  const [copied, setCopied] = useState(false);
  const bookingLink = "https://techstore.com/book?id=store123";

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-5">
      <div className="bg-linear-to-b from-[#1A1A2E] to-[#16213E] xl:py-10 xl:px-6 p-5 rounded-xl">
        <p className="text-white text-lg mb-4 text-center md:text-left">
          {" "}
          Booking Link
        </p>
        <div className="flex md:flex-row flex-col items-center md:gap-x-3 gap-y-5">
          <div className="md:flex-1 bg-[#0F172B] border border-[#00FF8833] rounded-xl px-4 py-3">
            <p className="text-gray-300 text-sm truncate">{bookingLink}</p>
          </div>
          <button
            onClick={handleCopy}
            className="bg-white/5 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(43,127,255,0.2)] border border-[#2B7FFF33] text-white xl:px-6 px-4 py-2 rounded-xl flex items-center gap-2 transition-colors"
          >
            {copied ? (
              <>
                <BsCheck color="white" size={20} />
                Copied!
              </>
            ) : (
              <>
                <PiCopyLight size={20} color="white" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingLink;
