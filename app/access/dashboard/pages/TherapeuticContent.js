"use client";
import { Table, Button, Card, Space } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import styles from "../page.module.css";

const data = [
  { key: '1', name: 'Leaders in Robotic-Assisted Surgery Research' },
  { key: '2', name: 'Oncology Clinical Research and Precision Oncology Capabilities' },
  { key: '3', name: 'Real-World Evidence (RWE) Scientific Expertise' },
  { key: '4', name: 'Endocrinology Therapeutic Expertise' },
  { key: '5', name: 'Cardiology Therapeutic Expertise' },
  { key: '6', name: 'Vaccines and Immunization Research Expertise' },
  { key: '7', name: 'Multi-Therapeutic Clinical Research Expertise' },
];

export default function TherapeuticTable() {
  const columns = [
    { title: 'Area of Expertise', dataIndex: 'name', key: 'name' },
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
      <h2 className={styles.tableHeader}>Therapeutic Expertise</h2>
      <Card>
        <Table dataSource={data} columns={columns} pagination={false} bordered />
      </Card>
    </div>
  );
}