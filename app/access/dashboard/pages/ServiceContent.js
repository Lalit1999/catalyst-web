"use client";
import { Table, Button, Card, Space } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import styles from "../page.module.css";

const data = [
  { key: '1', name: 'Clinical Development Services' },
  { key: '2', name: 'Expert Medical Writing and Scientific Publication Services' },
  { key: '3', name: 'Regulatory Consulting' },
  { key: '4', name: 'Tailored Clinical Operations FSP Models' },
  { key: '5', name: 'Data Management and Biostatistics' },
];

export default function ServicesTable() {
  const columns = [
    { title: 'Service Name', dataIndex: 'name', key: 'name' },
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
      <h2 className={styles.tableHeader}>Our Services</h2>
      <Card>
        <Table dataSource={data} columns={columns} pagination={false} bordered />
      </Card>
    </div>
  );
}