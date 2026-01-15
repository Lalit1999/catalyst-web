"use client";

import { useState } from "react";
import { Table, Input } from "antd";
import ApplicationDetailsModal from "./ApplicationDetailsModal";
import styles from "../page.module.css";

// Mock Data
const DATA =[
  {
    name: "saksham",
    addressLine1: "skjfbkjsdbnfjksdnjfklnsdjf",
    addressLine2: "skjfbkjsdbnfjksdnjfklnsdjf",
    category: "Indian Participant",
    city: "Adawad",
    country: "IN",
    division: "Distinction",
    dob: "2026-01-14",
    email: "vinodarya344@gmail.com",
    gender: "Male",
    institution: "saksham",
    phone: "+918738853746",
    pincode: "226000",
    program: "Professional Diploma in Clinical Research (PDCR)",
    qualification: "Bachelor's Degree",
    state: "MH",
    whatsapp: "+918738853746",
    workingProfessional: "Yes",
    yearOfPassing: 2026
  },
  {
    name: "Riya Sharma",
    addressLine1: "Flat 102, Green Valley Apts",
    addressLine2: "MG Road, Near Central Park",
    category: "Indian Participant",
    city: "Pune",
    country: "IN",
    division: "First Class",
    dob: "1998-05-22",
    email: "riya.sharma@example.com",
    gender: "Female",
    institution: "Pune University",
    phone: "+919876543210",
    pincode: "411001",
    program: "Advanced Certificate in Medical Writing (ACMW)",
    qualification: "Master's Degree",
    state: "MH",
    whatsapp: "+919876543210",
    workingProfessional: "No",
    yearOfPassing: 2024
  },
  {
    name: "Amit Patel",
    addressLine1: "Plot No 45, Sector 12",
    addressLine2: "Indira Nagar",
    category: "Indian Participant",
    city: "Ahmedabad",
    country: "IN",
    division: "Distinction",
    dob: "1995-11-10",
    email: "amit.patel95@example.com",
    gender: "Male",
    institution: "Gujarat Technological University",
    phone: "+917778889990",
    pincode: "380001",
    program: "Professional Diploma in Clinical Research (PDCR)",
    qualification: "Ph.D.",
    state: "GJ",
    whatsapp: "+917778889990",
    workingProfessional: "Yes",
    yearOfPassing: 2023
  },
  {
    name: "Sneha Gupta",
    addressLine1: "H.No 88, Civil Lines",
    addressLine2: "Opposite City Hospital",
    category: "Indian Participant",
    city: "Lucknow",
    country: "IN",
    division: "Second Class",
    dob: "2000-03-15",
    email: "sneha.g@example.com",
    gender: "Female",
    institution: "Amity University",
    phone: "+918882223334",
    pincode: "226010",
    program: "Post Graduate Diploma in Pharmacovigilance",
    qualification: "Bachelor's Degree",
    state: "UP",
    whatsapp: "+918882223334",
    workingProfessional: "No",
    yearOfPassing: 2025
  },
  {
    name: "John Doe",
    addressLine1: "456 Oak Street",
    addressLine2: "Downtown Area",
    category: "International Participant",
    city: "New York",
    country: "US",
    division: "Distinction",
    dob: "1992-07-04",
    email: "john.doe@testmail.com",
    gender: "Male",
    institution: "NYU",
    phone: "+15551234567",
    pincode: "10001",
    program: "Professional Diploma in Clinical Research (PDCR)",
    qualification: "Master's Degree",
    state: "NY",
    whatsapp: "+15551234567",
    workingProfessional: "Yes",
    yearOfPassing: 2022
  }
]

export default function ApplicationsTable() {
  const [search, setSearch] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);

  const filteredData = DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { title: "Name", dataIndex: "name", sorter: (a, b) => a.name.localeCompare(b.name) },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Category", dataIndex: "category" },
    { title: "Program", dataIndex: "program", ellipsis: true },
    { title: "Year", dataIndex: "yearOfPassing" },
    {
      title: "Action",
      render: (_, record) => (
        <a className={styles.view} onClick={() => setSelectedRecord(record)}>View</a>
      ),
    },
  ];

  return (
    <>
      <div className={styles.tableHeader}>
        <h1 className={styles.heading} >Admin Panel</h1>
        <Input
          placeholder="Search by name or email..."
          className={styles.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
        className={styles.fixing}
      />

      <ApplicationDetailsModal
        record={selectedRecord}
        onClose={() => setSelectedRecord(null)}
      />
    </>
  );
}
