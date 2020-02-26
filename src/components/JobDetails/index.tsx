import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";

import {
  Base,
  Company,
  Description,
  ContactRow,
  ContactCol,
  JobType,
  I
} from "./styles";
import { Job } from "../../interfaces/job";

interface JobDetailsProps {
  job?: Job;
  loading: boolean;
}

function JobDetails(props: JobDetailsProps) {
  const { job, loading } = props;

  if (!job) {
    return <></>;
  }

  if (loading) {
    return (
      <Base>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader loading={loading} size={5} color={"#ccc"} />
        </div>
      </Base>
    );
  }

  let jobTypeColor: string;
  if (job.jobType === "Estágio") {
    jobTypeColor = "#5e8d9f";
  } else {
    jobTypeColor = "#9f5e8d";
  }

  return (
    <Base>
      <Company>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://google.com/search?q=${job.company}`}
        >
          {job.company}
        </a>
      </Company>
      <JobType style={{ color: jobTypeColor }}>{job.jobType}</JobType>
      <ContactRow>
        <ContactCol>
          <I className="fas fa-dollar-sign" style={{ color: "#00d3bb" }} />{" "}
          {job.salary}
        </ContactCol>
        <ContactCol>
          <I className="far fa-calendar" style={{ color: "#FA8072" }} />{" "}
          {job.date}
        </ContactCol>
      </ContactRow>
      <ContactRow>
        <ContactCol>
          <I className="far fa-clock" style={{ color: "#41c4ff" }} />{" "}
          {job.workHours}
        </ContactCol>
        <ContactCol>
          <I className="far fa-id-badge" /> {job.positions} vaga(s)
        </ContactCol>
      </ContactRow>
      <Tabs style={{ marginTop: 20 }}>
        <TabList>
          <Tab>Descrição</Tab>
          <Tab>Requisitos</Tab>
          <Tab>Benefícios</Tab>
          <Tab>Contato</Tab>
          <Tab>Cursos</Tab>
        </TabList>
        <TabPanel>
          <Description>{job.description}</Description>
        </TabPanel>
        <TabPanel>
          <Description>{job.requisites}</Description>
        </TabPanel>
        <TabPanel>
          <Description>{job.benefits}</Description>
        </TabPanel>
        <TabPanel>
          <ContactRow>
            {job.contact && (
              <span>
                <I className="far fa-address-card" /> {job.contact}
              </span>
            )}
          </ContactRow>
          <ContactRow>
            {job.phone && (
              <span>
                <I className="fas fa-phone-alt" /> {job.phone}
              </span>
            )}
          </ContactRow>
          <ContactRow>
            {job.email && (
              <span>
                <I className="far fa-envelope" /> {job.email}
              </span>
            )}
          </ContactRow>
        </TabPanel>
        <TabPanel>
          <ul>
            {job.majors.map((m, i) => (
              <li key={i} style={{ listStyle: "none" }}>
                <I className="fas fa-angle-right" /> {m}
              </li>
            ))}
          </ul>
        </TabPanel>
      </Tabs>
    </Base>
  );
}

export default JobDetails;
