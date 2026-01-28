import AppointmentCards from "@/Components/Appointments/AppointmentCards";
import AppointmentDataTable from "@/Components/Appointments/AppointmentDataTable";
import BookingLink from "@/Components/Appointments/BookingLink";

const AppointmentsPage = () => {
  return (
    <div>
      <div className="px-5">
        <AppointmentCards />
        <BookingLink/>
        <AppointmentDataTable />
      </div>
    </div>
  );
};

export default AppointmentsPage;
