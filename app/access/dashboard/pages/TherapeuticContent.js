"use client";
import { Table, Button, Card, Space } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./TherapeuticContent.module.css";
import { useRouter } from "next/navigation";

const data = [
  { key: '1', name: 'Leaders in Robotic-Assisted Surgery Research' ,path :"robotic-assisted-surgery",  },
  { key: '2', name: 'Oncology Clinical Research and Precision Oncology Capabilities' ,path :"oncology",  },
  { key: '3', name: 'Real-World Evidence (RWE) Scientific Expertise' ,path :"rwe",  },
  { key: '4', name: 'Endocrinology Therapeutic Expertise' ,path :"endocrinology",  },
  { key: '5', name: 'Cardiology Therapeutic Expertise' ,path :"cardiology",  },
  { key: '6', name: 'Vaccines and Immunization Research Expertise' ,path :"vaccines",  },
  { key: '7', name: 'Multi-Therapeutic Clinical Research Expertise' ,path :"others",  },
];

export default function TherapeuticTable() {
   const router = useRouter();
   const handleView = (record) => {
      const slug = record.path;
      const path = `/therapeutic-expertise/${slug}`; 
      
      // console.log(`Navigating to: ${path}`);
      router.push(path);
    };
  const columns = [
    { title: 'Area of Expertise', dataIndex: 'name', key: 'name' },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: (_, record) => (
        <Space>
          <Button icon={<EyeOutlined />} onClick={() =>handleView(record)}>View</Button>
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