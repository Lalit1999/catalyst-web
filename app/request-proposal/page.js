"use client";
import { ContactForm, Title } from "@comps";
import styles from "./page.module.css";
import { useContext } from "react";

import { AppContext } from "@ac";
import { BasicForm } from "@comps";
import { post, addNotif, remNotif } from "@utils";

export default function RequestProposal() {
  const { setPopOpen } = useContext(AppContext);
  const formData = [
    {
      type: "row",
      children: [
        {
          type: "text",
          name: "Name",
          label: "Name",
          ph: "Enter Name",
          valid: { required: true, pattern: /^[a-zA-Z ]*$/i },
        },
        {
          type: "text",
          name: "Company's name",
          label: "Company's name",
          ph: "Write your Company name....",
          valid: { required: true, max: 50 },
        },
      ],
    },
    {
      type: "row",
      children: [
        {
          type: "email",
          name: "email",
          label: "E-mail",
          ph: "Enter Email Id",
          valid: {
            required: true,
            pattern: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
          },
        },
        {
          name: "user_mobile",
          type: "phone",
          label: "Phone Number",
          valid: { required: "Mobile number is mandatory" },
        },
      ],
    },

    {
      type: "textArea",
      name: "message",
      label: "Message",
      ph: "How may we help you?",
      valid: { required: true, max: 250 },
    },

    { type: "submit", text: "Send Message", style: styles.blackBtn },
  ];

  const onFormSubmit = async (data) => {
    let resp = await post("message", data);
    console.log(data);

    if (resp?.error) {
      console.error(resp);
      remNotif();
    } else {
      if (resp.status) {
        remNotif();
        addNotif("Message Sent Successfully", "success");
        setPopOpen(false);
      } else {
        console.error(resp);
        remNotif();
      }
    }
  };

  return (
    <main className={styles.main}>
      <Title
  heading="Request a Service Proposal"
  desc="Fill out the form below and let us understand your business needs."
/>

      <div className={styles.center} >
        <div className={styles.rightSection}>
        <div className={styles.contactForm}>
          <BasicForm data={formData} onFormSubmit={onFormSubmit} reset />
        </div>
      </div>
      </div>
    </main>
  );
}
