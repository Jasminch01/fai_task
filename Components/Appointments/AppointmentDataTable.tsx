/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DataTable from "react-data-table-component";

const AppointmentDataTable = () => {
  const appointmentData = [
    {
      id: 1,
      clientName: "John Smith",
      clientPhone: "+1 (555) 123-4567",
      clientEmail: "john.smith@email.com",
      device: "iPhone 13 Pro",
      repairType: "Screen Repair",
      date: "2024-01-29",
      slot: "2",
      start: "10:00 AM",
    },
    {
      id: 2,
      clientName: "Sarah Johnson",
      clientPhone: "+1 (555) 234-5678",
      clientEmail: "sarah.j@email.com",
      device: 'MacBook Pro 16"',
      repairType: "Battery Replacement",
      date: "2024-01-29",
      slot: "7",
      start: "10:00 AM",
    },
    {
      id: 3,
      clientName: "Mike Davis",
      clientPhone: "+1 (555) 345-6789",
      clientEmail: "mike.davis@email.com",
      device: "Samsung Galaxy S23",
      repairType: "Water Damage",
      date: "2024-01-30",
      slot: "3",
      start: "10:00 AM",
    },
    {
      id: 4,
      clientName: "Emily Wilson",
      clientPhone: "+1 (555) 456-7890",
      clientEmail: "emily.w@email.com",
      device: 'iPad Pro 12.9"',
      repairType: "Display Repair",
      date: "2024-01-30",
      slot: "3",
      start: "10:00 AM",
    },
    {
      id: 5,
      clientName: "David Brown",
      clientPhone: "+1 (555) 567-8901",
      clientEmail: "david.brown@email.com",
      device: "iPhone 14",
      repairType: "Charging Port",
      date: "2024-01-31",
      slot: "1",
      start: "10:00 AM",
    },
  ];

  const columns = [
    {
      name: "Client Name",
      selector: (row: any) => row.clientName,
      width: "full",
    },
    {
      name: "Phone",
      selector: (row: any) => row.clientPhone,
      width: "full",
    },
    {
      name: "Email",
      selector: (row: any) => row.clientEmail,
      width: "200px",
    },
    {
      name: "Device",
      selector: (row: any) => row.device,
      width: "full",
    },
    {
      name: "Repair Type",
      selector: (row: any) => row.repairType,
      width: "full",
    },
    {
      name: "Date",
      selector: (row: any) => row.date,
      width: "full",
    },
    {
      name: "Slot",
      selector: (row: any) => row.slot,
      width: "full",
    },
    {
      name: "Start Time",
      selector: (row: any) => row.start,
      width: "full",
    },
  ];

  const customStyles = {
    table: {
      style: {
        backgroundColor: "#111B3B",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#111B3B",
        minHeight: "52px",
      },
    },
    headCells: {
      style: {
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: "600",
        paddingLeft: "16px",
        paddingRight: "16px",
        justifyContent: "center",
      },
    },
    rows: {
      style: {
        backgroundColor: "#111B3B",
        borderTop: "1px solid #162F61",
        minHeight: "60px",
        "&:hover": {
          backgroundColor: "#1D293D80",
          cursor: "pointer",
        },
      },
    },
    cells: {
      style: {
        color: "#E5E7EB",
        fontSize: "14px",
        paddingLeft: "16px",
        paddingRight: "16px",
        justifyContent: "center",
      },
    },
  };

  return (
    <div className="mt-5 max-w-full">
      <div className="bg-[#0F172B80] border border-[#2B7FFF33] rounded-xl w-full">
        <DataTable
          columns={columns}
          data={appointmentData}
          customStyles={customStyles}
          pointerOnHover
          responsive
        />
      </div>
    </div>
  );
};

export default AppointmentDataTable;
