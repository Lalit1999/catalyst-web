"use client";
import { Table, Button, Card, Space } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./ServiceContent.module.css";
import { useRouter } from "next/navigation";

const data = [
  { key: '1', name: 'Clinical Development Services',path: 'clinical-development-services', },
  { key: '2', name: 'Expert Medical Writing and Scientific Publication Services',path: 'medical-writing', },
  { key: '3', name: 'Regulatory Consulting',path: 'regulatory-consulting', },
  { key: '4', name: 'Tailored Clinical Operations FSP Models',path: 'fsp', },
  { key: '5', name: 'Data Management and Biostatistics',path: 'data-management-biostatistics', },
];

export default function ServicesTable() {
  const router = useRouter();
 const handleView = (record) => {
    const slug = record.path;
    const path = `/what-we-do/${slug}`; 
    
    // console.log(`Navigating to: ${path}`);
    router.push(path);
  };
  const columns = [
    { title: 'Service Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: (_, record) => (
        <Space>
          <Button icon={<EyeOutlined />}  className={styles.noHover}  onClick={() => handleView(record)} >View</Button>
          <Button type="primary" icon={<EditOutlined />} className={styles.noHover}>Edit</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableHeader}>What we Do Pages</h2>
      <Card>
        <Table dataSource={data} columns={columns} pagination={false} bordered />
      </Card>
    </div>
  );
}