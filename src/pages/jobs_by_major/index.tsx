import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import NavBar from "../../components/NavBar";
import JobDetails from "../../components/JobDetails";
import JobCards from "../../components/JobCards";
import Pagination from "../../components/Pagination";
import MajorSelect from "../../components/MajorSelect";

import { Job } from "../../interfaces/job";
import { PageInfo } from "../../interfaces/pageInfo";

import { Container } from "./styles";
import { GET_JOBS_BY_MAJOR, GET_JOB } from "./queries";

function JobsByMajor() {
  const [jobs, setJobs] = useState<Job[]>();
  const [jobCode, setJobCode] = useState();
  const [page, setPage] = useState(0);
  const [major, setMajor] = useState();
  const [pageInfo, setPaginationInfo] = useState<PageInfo>();

  const { loading, error, data } = useQuery(GET_JOBS_BY_MAJOR, {
    variables: { page, major }
  });
  const jobDetails = useQuery(GET_JOB, { variables: { code: jobCode } });

  useEffect(() => {
    if (data && !error) {
      setPaginationInfo(data.jobsByMajor.pageInfo);
      setJobs(data.jobsByMajor.nodes);
      if (!data.jobsByMajor.nodes.len) {
        setJobCode(data.jobsByMajor?.nodes[0]?.code);
      }
    }
  }, [data, error]);

  return (
    <div style={{ marginBottom: 50 }}>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px"
        }}
      >
        <MajorSelect onSelect={setMajor} />
        {!loading && !error && (
          <h3
            style={{
              marginRight: 20,
              color: "#777",
              fontWeight: "normal",
              fontSize: "0.95rem",
              textAlign: "end"
            }}
          >
            Página {page + 1} de {pageInfo?.total} vagas{" "}
          </h3>
        )}
      </div>
      <Container>
        {error ? (
          major ? (
            <p>Oops algo deu errado :(</p>
          ) : (
            <></>
          )
        ) : (
          <>
            <JobCards
              jobs={jobs}
              loading={loading && jobDetails.loading}
              onJobClick={setJobCode}
              selectedJobCode={jobCode}
            />
            <JobDetails
              job={jobDetails?.data?.job}
              loading={loading && jobDetails.loading}
            />
          </>
        )}
      </Container>
      {pageInfo && (
        <Pagination
          hasPreviousPage={pageInfo.hasPreviousPage}
          hasNextPage={pageInfo.hasNextPage}
          currentPage={pageInfo.currentPage}
          onPageChange={(page: number) => {
            setPage(page);
            window.scrollTo(0, 0);
          }}
        />
      )}
    </div>
  );
}

export default JobsByMajor;
