"use client";

import { useState, useContext, useEffect } from "react";
import { Table, Input } from "antd";

import { AppContext } from "@ac";
import { get, addNotif } from "@utils";
import { Loading } from "@comps";
import ApplicationDetailsModal from "./ApplicationDetailsModal";
import styles from "../page.module.css";

export default function ApplicationsTable() {
    const [search, setSearch] = useState("");
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [data, setData] = useState(null) ;
    const { adminToken } = useContext(AppContext);

    useEffect(() => {
        const fn = async() => {
            const resp = await get('applicants', adminToken) ;

            if(resp?.error) {
                console.error(resp) ;
                addNotif('Error loading app data') ;
            } else {
                if(resp?.status) {
                    setData(resp.data) ;
                }
                else
                    console.error(resp) ;
            }
        }

        if(adminToken)
            fn() ;
    }, [adminToken])

    if(data===null)
        return <Loading /> ;
    else {
        const filteredData = data.filter(
            (item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase())
        );
    
        const columns = [
            { title: "Name", dataIndex: "name", sorter: (a, b) => a.name.localeCompare(b.name) },
            { title: "Email", dataIndex: "email" },
            { title: "Phone", dataIndex: "mobile" },
            { title: "Category", dataIndex: "category" },
            { title: "Program", dataIndex: "program", ellipsis: true },
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
                    <h1 className={styles.heading}>Applicants List</h1>
                    <Input
                        placeholder="Search by name or email..."
                        className={styles.search}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
    
                <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 25 }}
                    scroll={{ x: "max-content" }} className={styles.fixing} />
    
                <ApplicationDetailsModal record={selectedRecord} onClose={() => setSelectedRecord(null)} />
            </>
        );
    }
}
