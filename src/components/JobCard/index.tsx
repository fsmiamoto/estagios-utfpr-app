import React, {memo} from "react";

import {Job} from "../../interfaces/job";
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
    const {onClick, selected, job} = props;
    const {company, description, salary, date, jobType, code} = job;

    return (
        <Base
            selected={selected}
            onClick={onClick}
        >
            <Company>{company}</Company>
            <FlexDiv>
                <Details>
                    <i className="far fa-calendar" />{" "} {date}
                </Details>
                <JobType type={jobType}>{jobType}</JobType>
            </FlexDiv>
            <FlexDiv>
                <Details>
                    <i className="fas fa-dollar-sign" />{" "} {salary}
                </Details>
                <Details>
                    <i className="fas fa-hashtag" />{" "} {code}
                </Details>
            </FlexDiv>
            <Description>{description}</Description>
        </Base>
    );
}

export default memo(JobCard);
