import { IoDocumentTextOutline } from "react-icons/io5";
import { LuCirclePlay } from "react-icons/lu";

const CallDetails = () => {
  return (
    <div>
      <div className="bg-[#0F172B80] rounded-xl py-5 h-auto border border-[#2B7FFF33]">
        <div className="border-b border-[#2B7FFF33] px-5 pb-3">
          <p className="text-white text-xl">Call Details</p>
        </div>
        <div className="px-5">
          <div className="mt-3">
            <div className="flex items-start space-x-10">
              <div className=" py-3 flex-1">
                <p className="text-[#90A1B9]">Phone Number</p>
                <p className=" text-white">+1 (555) 123-4567</p>
              </div>
              <div className=" py-3 flex-1">
                <p className="text-[#90A1B9]">Duration</p>
                <p className=" text-white">4:32</p>
              </div>
            </div>
            <div className="flex items-start space-x-10">
              <div className=" py-3 flex-1">
                <p className="text-[#90A1B9]">Date & Time</p>
                <p className=" text-white">2025-12-16 10:45 AM</p>
              </div>
              <div className=" py-3 flex-1">
                <p className="text-[#90A1B9]">Issue Type</p>
                <p className=" text-white">Screen</p>
              </div>
            </div>
          </div>

          <div className="py-3">
            <p className="text-[#90A1B9] mb-3">Call Type</p>
            <span className="rounded-xl border border-[#00C9504D] p-2 bg-linear-to-l from-[#00BC7D33] w-auto to-[#00C95033] text-sm text-[#05DF72]">AI Resolved</span>
          </div>
          <div className="py-3">
            <p className="text-[#90A1B9]">Outcome</p>
            <p className=" text-white">Quote provided</p>
          </div>

          <div className="mt-5">
            <div className="flex justify-center items-center space-x-2 bg-linear-to-r rounded-xl from-[#AD46FF33] to-[#F6339A33] py-4">
              <LuCirclePlay color="white" size={20} />
              <p className="text-center text-white">Play Audio Recording</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-white flex items-center space-x-2 ">
              <IoDocumentTextOutline color="#51A2FF" size={20} />
              <p>Conversation Transcript</p>
            </div>
            <div className="mt-5">
              <div className="bg-[#1D293D80] text-white p-5 rounded-xl space-y-3">
                <div>
                  <p className="text-base text-[#05DF72]">AI Assistant:</p>
                  <p className="text-sm">
                    Thank you for calling UBreakiFix! How can I help you today?
                  </p>
                </div>
                <div>
                  <p className="text-base text-[#51A2FF]">Customer:</p>
                  <p className="text-sm">
                    Hi, my iPhone 13 screen is cracked. How much would it cost
                    to repair?
                  </p>
                </div>
                <div>
                  <p className="text-base text-[#05DF72]">AI Assistant:</p>
                  <p className="text-sm">
                    I can help you with that! For an iPhone 13 screen repair,
                    our price is $199. This includes parts, labor, and comes
                    with a 90-day warranty. Would you like to book an
                    appointment?
                  </p>
                </div>
                <div>
                  <p className="text-base text-[#51A2FF]">Customer:</p>
                  <p className="text-sm">
                    Yes, please! When are you available?
                  </p>
                </div>
                <div>
                  <p className="text-base text-[#05DF72]">AI Assistant:</p>
                  <p className="text-sm">
                    Great! I have availability today at 2:00 PM or tomorrow at
                    10:00 AM. Which works better for you?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallDetails;
