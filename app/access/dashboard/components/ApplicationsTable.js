"use client";

import { useState, useContext, useEffect, useRef } from "react";
import { Table, Input, Button, Tooltip } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";

import { AppContext } from "@ac";
import { get, addNotif } from "@utils";
import { Loading } from "@comps";
import ApplicationDetailsModal from "./ApplicationDetailsModal";
import styles from "../page.module.css";

export default function ApplicationsTable() {
  const [search, setSearch] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [data, setData] = useState(null);
  const { adminToken } = useContext(AppContext);

  // Screenshot States
  const [printData, setPrintData] = useState(null);
  const printRef = useRef(null);

  useEffect(() => {
    const fn = async () => {
      try {
        const resp = await get("applicants", adminToken);

        setData(resp.data);
      } catch (err) {
        console.error("Fetch exception:", err);
        addNotif("Exception occurred while fetching data");
      }
    };

    if (adminToken) {
      fn();
    }
  }, [adminToken]);

  // --- SCREENSHOT LOGIC ---
  const handleDownloadScreenshot = async (record) => {
    setPrintData(record);
    setTimeout(async () => {
      if (printRef.current) {
        try {
          const canvas = await html2canvas(printRef.current, {
            backgroundColor: "#ffffff",
            scale: 2, 
            useCORS: true, 
          });

          const image = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = image;
          // Sanitize filename
          const filename = (record.name || "Applicant").replace(
            /[^a-z0-9]/gi,
            "_",
          );
          link.download = `${filename}_Details.png`;
          link.click();
        } catch (error) {
          console.error("Screenshot failed:", error);
          addNotif("Failed to generate screenshot");
        } finally {
          setPrintData(null);
        }
      }
    }, 100);
  };

  if (data === null) return <Loading />;
  else {
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()),
    );

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      { title: "Email", dataIndex: "email" },
      { title: "Phone", dataIndex: "mobile" },
      { title: "Category", dataIndex: "category" },
      { title: "Program", dataIndex: "program", ellipsis: true },
      {
        title: "Action",
        render: (_, record) => (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <a
              className={styles.view}
              onClick={() => setSelectedRecord(record)}
            >
              View
            </a>

            {/* Download Button */}
            <Tooltip title="Download Snapshot">
              <Button
                type="primary"
                shape="circle"
                icon={<DownloadOutlined />}
                size="small"
                onClick={() => handleDownloadScreenshot(record)}
              />
            </Tooltip>
          </div>
        ),
      },
    ];

    return (
      <>
        <div className={styles.tableHeader}>
          <h1 className={styles.heading}>Applicants List</h1>
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
          pagination={{ pageSize: 25 }}
          scroll={{ x: "max-content" }}
          className={styles.fixing}
          rowKey={(record) => record._id || record.id || Math.random()} // Ensure unique keys
        />

        <ApplicationDetailsModal
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />

        {/* 
                   HIDDEN TEMPLATE FOR SCREENSHOT 
                   This generates the visual layout that html2canvas captures.
                */}
        {printData && (
          <div
            ref={printRef}
            style={{
              position: "fixed",
              top: "-10000px",
              left: "-10000px",
              width: "700px",
              padding: "40px",
              background: "white",
              border: "1px solid #ccc",
              fontFamily: "Arial, sans-serif",
              color: "#000",
              zIndex: -1,
            }}
          >
            <div
              style={{
                borderBottom: "2px solid #1890ff",
                paddingBottom: "15px",
                marginBottom: "25px",
              }}
            >
              <h1 style={{ margin: 0, color: "#1890ff", fontSize: "24px" }}>
                Applicant Details
              </h1>
              <p
                style={{ margin: "5px 0 0 0", color: "#666", fontSize: "14px" }}
              >
                Generated on: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "25px",
                fontSize: "16px",
              }}
            >
              {/* We iterate over fields manually to ensure nice formatting */}
              <div>
                <strong style={{ color: "#555" }}>Name</strong>
                <p style={{ margin: "5px 0 0 0", fontWeight: "bold" }}>
                  {printData.name || "N/A"}
                </p>
              </div>
              <div>
                <strong style={{ color: "#555" }}>Status</strong>
                {/* Assuming status exists in API data, otherwise remove */}
                <p style={{ margin: "5px 0 0 0", fontWeight: "bold" }}>
                  {printData.status || "Active"}
                </p>
              </div>
              <div>
                <strong style={{ color: "#555" }}>Email</strong>
                <p style={{ margin: "5px 0 0 0" }}>
                  {printData.email || "N/A"}
                </p>
              </div>
              <div>
                <strong style={{ color: "#555" }}>Phone</strong>
                <p style={{ margin: "5px 0 0 0" }}>
                  {printData.mobile || "N/A"}
                </p>
              </div>
              <div>
                <strong style={{ color: "#555" }}>Category</strong>
                <p style={{ margin: "5px 0 0 0" }}>
                  {printData.category || "N/A"}
                </p>
              </div>
              <div>
                <strong style={{ color: "#555" }}>Date of Birth</strong>
                <p style={{ margin: "5px 0 0 0" }}>{printData.dob || "N/A"}</p>
              </div>
              <div>
                <strong style={{ color: "#555" }}>Gender</strong>
                <p style={{ margin: "5px 0 0 0" }}>
                  {printData.gender || "N/A"}
                </p>
              </div>

              {/* Full width items */}
              <div style={{ gridColumn: "span 2" }}>
                <strong style={{ color: "#555" }}>Program Applied</strong>
                <p style={{ margin: "5px 0 0 0", fontSize: "18px" }}>
                  {printData.program || "N/A"}
                </p>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <strong style={{ color: "#555" }}>Address</strong>
                <p style={{ margin: "5px 0 0 0" }}>
                  {printData.address || "N/A"}
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "50px",
                borderTop: "1px solid #eee",
                paddingTop: "15px",
                textAlign: "center",
                fontSize: "12px",
                color: "#999",
              }}
            >
              <p>Catalyst Clinical Services - Confidential Data</p>
            </div>
          </div>
        )}
      </>
    );
  }
}
