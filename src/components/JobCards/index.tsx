import React from "react";

import JobCard from "../JobCard";
import { Container } from "./styles";
import { Job } from "../../interfaces/job";
import SyncLoader from "react-spinners/SyncLoader";

interface JobCardsProps {
  jobs?: Job[];
  onJobClick: (code: string) => void;
  selectedJobCode?: string;
  loading: boolean;
}

function JobCards(props: JobCardsProps) {
  const { jobs, loading, onJobClick, selectedJobCode } = props;

  if (loading) {
    return <SyncLoader size={5} loading={loading} color={"#ccc"} />;
  }

  return (
    <Container>
      {jobs?.map((j, i) => (
        <JobCard
          key={i}
          job={j}
          selected={selectedJobCode === j.code}
          onClick={() => onJobClick(j.code)}
        />
      ))}
    </Container>
  );
}

export default JobCards;
