"use client";
import { Table, Button, Card, Space } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import styles from "../page.module.css";

const data = [
  { key: '1', name: 'Robotic Assisted Surgery' },
  { key: '2', name: 'Oncology' },
  { key: '3', name: 'Other Therapeutic Areas' },
];

export default function ResearchTable() {
  const columns = [
    { title: 'Publication Topic', dataIndex: 'name', key: 'name' },
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
      <h2 className={styles.tableHeader}>Research Publications</h2>
      <Card>
        <Table dataSource={data} columns={columns} pagination={false} bordered />
      </Card>
    </div>
  );
}