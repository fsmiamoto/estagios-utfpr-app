import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "./react-tabs.css";

import {
    Base,
    Company,
    Description,
    ContactCol,
    JobType,
    FlexDiv,
    I
} from "./styles";
import {Job} from "../../interfaces/job";

interface JobDetailsProps {
    job?: Job;
    loading: boolean;
    visible?: boolean;
}

function JobDetails(props: JobDetailsProps) {
    const {job, loading, visible} = props;

    if (!job || !visible) {
        return null;
    }

    if (loading) {
        return (
            <Base>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <PropagateLoader loading={loading} size={5} color={"#ccc"} />
                </div>
            </Base>
        );
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
            <FlexDiv>
                <ContactCol>
                    <I className="far fa-calendar" />{" "} {job.date}
                </ContactCol>
                <JobType type={job.jobType}>{job.jobType}</JobType>
            </FlexDiv>
            <FlexDiv>
                <ContactCol>
                    <I className="fas fa-dollar-sign" />{" "} {job.salary}
                </ContactCol>
                <ContactCol>
                    <I className="far fa-clock" />{" "} {job.workHours}
                </ContactCol>
                <ContactCol>
                    <I className="far fa-id-badge" /> {job.positions} vaga(s)
                </ContactCol>
                <ContactCol>
                    <I className="fas fa-hashtag" /> {job.code}
                </ContactCol>
            </FlexDiv>
            <Tabs style={{marginTop: 20, fontSize: '.9rem'}}>
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
                    <FlexDiv>
                        {job.contact && (
                            <span>
                                <I className="far fa-address-card" /> {job.contact}
                            </span>
                        )}
                        {job.phone && (
                            <span>
                                <I className="fas fa-phone-alt" /> {job.phone}
                            </span>
                        )}
                        {job.email && (
                            <span>
                                <I className="far fa-envelope" /> {job.email}
                            </span>
                        )}
                    </FlexDiv>
                </TabPanel>
                <TabPanel>
                    <ul>
                        {job.majors.map((m, i) => (
                            <li key={i} style={{listStyle: "none"}}>
                                <I className="fas fa-angle-right" /> {m}
                            </li>
                        ))}
                    </ul>
                </TabPanel>
            </Tabs>
        </Base >
    );
}

export default JobDetails;
