"use client";

import { Modal, Descriptions, Tag, Divider } from "antd";

import { formatDate } from "@utils";
import styles from "../page.module.css";

export default function ApplicationDetailsModal({ record, onClose }) {
    return (
        <Modal
            open={!!record}
            onCancel={onClose}
            footer={null}
            title="Application Details"
            width={720}
        >
            {record && (
                <>
                    {/* BASIC DETAILS */}
                    <Descriptions bordered column={1} size="middle">
                        <Descriptions.Item label="Name">{record.name}</Descriptions.Item>
                        <Descriptions.Item label="Email">{record.email}</Descriptions.Item>
                        <Descriptions.Item label="Mobile">{record.mobile}</Descriptions.Item>
                        <Descriptions.Item label="WhatsApp">{record.whatsapp}</Descriptions.Item>
                    </Descriptions>

                    <Divider />

                    {/* ACADEMIC DETAILS */}
                    <Descriptions bordered column={1} size="middle">
                        <Descriptions.Item label="Category">
                            <Tag color="orange">{record.category}</Tag>
                        </Descriptions.Item>

                        <Descriptions.Item label="Program">
                            <span
                                dangerouslySetInnerHTML={{ __html: record.program }}
                            />
                        </Descriptions.Item>

                        <Descriptions.Item label="Division">
                            <span className={styles.success}>{record.division}</span>
                        </Descriptions.Item>

                        <Descriptions.Item label="Qualification">
                            {record.qualification}
                        </Descriptions.Item>

                        <Descriptions.Item label="Year of Passing">
                            {record.yearOfPassing}
                        </Descriptions.Item>

                        <Descriptions.Item label="Working Professional">
                            {   record.working ? 
                                <Tag color="green">Yes</Tag> : 
                                <Tag color="red">No</Tag> 
                            }
                        </Descriptions.Item>
                    </Descriptions>

                    <Divider />

                    {/* ADDRESS DETAILS */}
                    <Descriptions bordered column={1} size="middle">
                        <Descriptions.Item label="Full Address">
                            {record.address}
                        </Descriptions.Item>

                        <Descriptions.Item label="City">{record.city}</Descriptions.Item>
                        <Descriptions.Item label="State">{record.state}</Descriptions.Item>
                        <Descriptions.Item label="Country">{record.country}</Descriptions.Item>
                        <Descriptions.Item label="Pincode">{record.pinCode}</Descriptions.Item>
                    </Descriptions>

                    <Divider />

                    {/* PERSONAL DETAILS */}
                    <Descriptions bordered column={1} size="middle">
                        <Descriptions.Item label="Gender">{record.gender}</Descriptions.Item>
                        <Descriptions.Item label="Date of Birth">{formatDate(record.dob)}</Descriptions.Item>
                    </Descriptions>
                </>
            )}
        </Modal>
    );
}
