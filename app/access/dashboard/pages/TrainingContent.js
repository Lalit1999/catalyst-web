"use client";
import { Table, Button, Card, Space } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./TrainingContent.module.css";
import { useRouter } from "next/navigation";

const data = [
  { key: '1', name: 'Professional Diploma in Clinical Research (PDCR)',path : "professional-diploma-in-clinical-research-pdcr" },
  { key: '2', name: 'Professional Certificate in Pharmacovigilance (PCPV)',path : "professional-certificate-in-pharmacovigilance-pcpv" },
  { key: '3', name: 'Advanced Certificate Program in Scientific Writing (SW)',path : "advanced-certificate-program-in-scientific-writing-sw" },
  { key: '4', name: 'Advanced Certificate Program in Project Management (PM)',path : "advanced-certificate-program-in-project-management-pm" },
  { key: '5', name: 'Advanced Certificate Program in Clinical Trial Monitoring (CTM)',path : "advanced-certificate-program-in-clinical-trial-monitoring-ctm" },
  { key: '6', name: 'Oncology Clinical Trials Training (OCTT)',path : "oncology-clinical-trials-training-octt" },
  {key : '7',name : 'Workshops',path:"workshops"}
];

export default function TrainingTable() {
  const router = useRouter();
     const handleView = (record) => {
        const slug = record.path;
        const path = `/training-programs/${slug}`; 
        
        // console.log(`Navigating to: ${path}`);
        router.push(path);
      };
  const columns = [
    { title: 'Program Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: (_, record) => (
        <Space>
          <Button icon={<EyeOutlined />} onClick={()=> handleView(record)} >View</Button>
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