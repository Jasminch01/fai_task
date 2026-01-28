import { CiCalendar } from "react-icons/ci";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { SiTicktick } from "react-icons/si";

const AppointmentCards = () => {
  const appointmentData = [
    {
      id: 1,
      title: "Total Appointments",
      icon: CiCalendar,
      quantity: 342,
      total: "+12 since last week",
    },
    {
      id: 2,
      title: "AI Booked",
      icon: SiTicktick,
      quantity: 287,
      total: "80% of total",
    },
    {
      id: 3,
      title: "Pending",
      icon: HiOutlineExclamationCircle,
      quantity: 55,
      total: "awiting confirmation",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {appointmentData.map((appointment) => (
          <div key={appointment.id} className="bg-[#0F172B80] p-6 rounded-lg space-y-4">
            <div className="flex items-center space-x-3">
              <appointment.icon
                className={`text-2xl ${appointment.id === 1 ? "text-[#51A2FF]" : appointment.id === 2 ? "text-[#05DF72]" : "text-[#FDC700]"}`}
              />
              <h3 className="text-white">{appointment.title}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl text-white">{appointment.quantity}</p>
              <p className="text-sm text-[#90A1B9]">{appointment.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentCards;
