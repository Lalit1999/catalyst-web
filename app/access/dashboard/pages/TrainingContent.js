"use client";
import { Table, Button, Card, Space } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import styles from "../page.module.css";

const data = [
  { key: '1', name: 'Professional Diploma in Clinical Research (PDCR)' },
  { key: '2', name: 'Professional Certificate in Pharmacovigilance (PCPV)' },
  { key: '3', name: 'Advanced Certificate Program in Scientific Writing (SW)' },
  { key: '4', name: 'Advanced Certificate Program in Project Management (PM)' },
  { key: '5', name: 'Advanced Certificate Program in Clinical Trial Monitoring (CTM)' },
  { key: '6', name: 'Oncology Clinical Trials Training (OCTT)' },
];

export default function TrainingTable() {
  const columns = [
    { title: 'Program Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: (_, record) => (
        <Space>
          <Button icon={<EyeOutlined />}>View</Button>
          <Button type="primary" icon={<EditOutlined />}>Edit</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableHeader}>Training Programs</h2>
      <Card>
        <Table dataSource={data} columns={columns} pagination={false} bordered />
      </Card>
    </div>
  );
}