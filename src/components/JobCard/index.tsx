import React, { memo } from "react";

import { Job } from "../../interfaces/job";
import {
  Base,
  Company,
  Details,
  Description,
  JobType,
  FlexDiv
} from "./styles";

interface JobCardProps {
  job: Job;
  selected: boolean;
  onClick: () => void;
}

function JobCard(props: JobCardProps) {
  const { onClick, selected, job } = props;
  const { company, description, salary, date, jobType, code } = job;

  let jobTypeColor: string;
  if (jobType === "Estágio") {
    jobTypeColor = "#5e8d9f";
  } else {
    jobTypeColor = "#9f5e8d";
  }

  return (
    <Base
      style={{
        border: selected ? "1px solid #00b7eb" : "1px solid #ddd"
      }}
      onClick={onClick}
    >
      <Company>{company}</Company>
      <FlexDiv>
        <JobType style={{ color: jobTypeColor }}>{jobType}</JobType>
        <Details>
          <i
            className="fas fa-hashtag"
            style={{ marginRight: 3, color: "#ddd" }}
          />{" "}
          {code}
        </Details>
      </FlexDiv>
      <FlexDiv>
        <Details>
          <i
            className="fas fa-dollar-sign"
            style={{ marginRight: 3, color: "#00d3bb" }}
          />{" "}
          {salary}
        </Details>
        <Details>
          <i
            className="far fa-calendar"
            style={{ marginRight: 3, color: "#FA8072" }}
          />{" "}
          {date}
        </Details>
      </FlexDiv>
      <Description>{description}</Description>
    </Base>
  );
}

export default memo(JobCard);
