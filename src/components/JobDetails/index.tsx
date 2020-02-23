import React from "react";
import { Job } from "../../interfaces/job";

import {
  Base,
  Company,
  Description,
  Header,
  ContactRow,
  ContactCol
} from "./styles";

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
        <h4>Carregando dados!</h4>
      </Base>
    );
  }

  return (
    <Base>
      <Company>{job.company}</Company>
      <ContactRow>
        <ContactCol>
          <i
            className="fas fa-dollar-sign"
            style={{ marginRight: 3, color: "#00d3bb" }}
          />{" "}
          {job.salary}
        </ContactCol>
        <ContactCol>
          <i
            className="far fa-calendar"
            style={{ marginRight: 3, color: "#FA8072" }}
          />{" "}
          {job.date}
        </ContactCol>
      </ContactRow>
      <ContactRow>
        <ContactCol>
          <i
            className="far fa-clock"
            style={{ marginRight: 3, color: "#41c4ff" }}
          />{" "}
          {job.workHours}
        </ContactCol>
        <ContactCol>
          <i className="far fa-id-badge" style={{ marginRight: 3 }} />{" "}
          {job.positions} vaga(s)
        </ContactCol>
      </ContactRow>
      <Header>Descrição da vaga: </Header>
      <Description>{job.description}</Description>
      <Header>Requisitos: </Header>
      <Description>{job.requisites}</Description>
      <Header>Benefícios: </Header>
      <Description>{job.benefits}</Description>
      <Header>Contato: </Header>
      <ContactRow>
        {job.contact && (
          <ContactCol>
            <i className="far fa-address-card" style={{ marginRight: 3 }} />{" "}
            {job.contact}
          </ContactCol>
        )}
        {job.phone && (
          <ContactCol>
            <i className="fas fa-phone-alt" style={{ marginRight: 3 }} />{" "}
            {job.phone}
          </ContactCol>
        )}
      </ContactRow>
      <ContactRow>
        {job.email && (
          <ContactCol>
            <i className="far fa-envelope" style={{ marginRight: 3 }} />{" "}
            {job.email}
          </ContactCol>
        )}
      </ContactRow>
      <Header>Cursos: </Header>
      <ul>
        {job.majors.map((m, i) => (
          <li key={i} style={{ listStyle: "none" }}>
            <i className="fas fa-angle-right" style={{ marginRight: 3 }} /> {m}
          </li>
        ))}
      </ul>
    </Base>
  );
}

export default JobDetails;
