import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import JobDetails from "../../components/JobDetails";
import JobCards from "../../components/JobCards";
import Pagination from "../../components/Pagination";
import Backdrop from "../../components/Backdrop";
import PageIndicator from "../../components/PageIndicator";
import Flex from "../../components/Flex";

import useMedia from "../../hooks/useMedia";

import { Job } from "../../interfaces/job";
import { PageInfo } from "../../interfaces/pageInfo";

import { GET_JOBS, GET_JOB } from "./queries";

function Home() {
  const [jobs, setJobs] = useState<Job[]>();
  const [jobCode, setJobCode] = useState();
  const [page, setPage] = useState(0);
  const [pageInfo, setPaginationInfo] = useState<PageInfo>();
  const [showDetails, setShowDetails] = useState(false);

  const jobsQuery = useQuery(GET_JOBS, { variables: { page } });
  const jobDetailsQuery = useQuery(GET_JOB, {
    variables: { code: jobCode },
    skip: !jobCode
  });

  const isWide = useMedia("(min-width: 800px)");

  useEffect(() => {
    const { data, error } = jobsQuery;

    if (error || data === undefined) {
      return;
    }

    const { jobs } = data;
    setPaginationInfo(jobs.pageInfo);
    setJobs(jobs.nodes);

    // Select the first job for wide screens
    if (isWide && jobs.nodes.len !== 0) {
      setJobCode(jobs.nodes[0].code);
    } else {
      // Unset it
      setJobCode(undefined);
    }
  }, [jobsQuery, isWide]);

  // Show loading if we're fetching jobs or the jobDetails doesn't have any data
  // This is for the first render on wide screens where a jobDetails query is made upfront
  const loading = jobsQuery.loading || (isWide && !jobDetailsQuery?.data);
  const error = jobsQuery.error || jobDetailsQuery.error;

  let pageIndicator, pagination;

  if (!loading && !error) {
    pageIndicator = (
      <PageIndicator>
        Página {page + 1} de {pageInfo?.total} vagas{" "}
      </PageIndicator>
    );
    pagination = pageInfo && (
      <Pagination
        hasPreviousPage={pageInfo.hasPreviousPage}
        hasNextPage={pageInfo.hasNextPage}
        currentPage={pageInfo.currentPage}
        onPageChange={(page: number) => {
          setPage(page);
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  return (
    <div style={{ marginBottom: 50 }}>
      {pageIndicator}
      <Flex justifyContent={"space-around"}>
        {error ? (
          <p>Oops algo deu errado :(</p>
        ) : (
          <>
            <JobCards
              jobs={jobs}
              loading={loading}
              onJobClick={(code: string) => {
                setShowDetails(true);
                setJobCode(code);
              }}
              selectedJobCode={jobCode}
            />
            <JobDetails
              job={jobDetailsQuery?.data?.job}
              loading={jobDetailsQuery.loading}
              visible={showDetails || (isWide && !loading)}
            />
            <Backdrop
              visible={showDetails && !isWide}
              onClick={() => setShowDetails(false)}
            />
          </>
        )}
      </Flex>
      {pagination}
    </div>
  );
}

export default Home;
