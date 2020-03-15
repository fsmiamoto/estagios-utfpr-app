import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import JobDetails from "../../components/JobDetails";
import JobCards from "../../components/JobCards";
import Pagination from "../../components/Pagination";
import MajorSelect from "../../components/MajorSelect";
import Backdrop from "../../components/Backdrop";
import PageIndicator from "../../components/PageIndicator";
import Flex from "../../components/Flex";

import useMedia from "../../hooks/useMedia";

import { Job } from "../../interfaces/job";
import { PageInfo } from "../../interfaces/pageInfo";

import { GET_JOBS_BY_MAJOR, GET_JOB } from "./queries";

function JobsByMajor() {
  const [jobs, setJobs] = useState<Job[]>();
  const [jobCode, setJobCode] = useState();
  const [page, setPage] = useState(0);
  const [major, setMajor] = useState();
  const [pageInfo, setPaginationInfo] = useState<PageInfo>();
  const [showDetails, setShowDetails] = useState(false);

  const { loading, error, data } = useQuery(GET_JOBS_BY_MAJOR, {
    variables: { page, major },
    skip: !major
  });
  const jobDetails = useQuery(GET_JOB, {
    variables: { code: jobCode },
    skip: !jobCode
  });

  useEffect(() => {
    if (data && !error) {
      setPaginationInfo(data.jobsByMajor.pageInfo);
      setJobs(data.jobsByMajor.nodes);
      if (!data.jobsByMajor.nodes.len) {
        setJobCode(data.jobsByMajor?.nodes[0]?.code);
      }
    }
  }, [data, error]);

  useEffect(() => {
    setPage(0);
  }, [major]);

  const Loading = major && (loading || !jobDetails.data);

  const isWide = useMedia("(min-width: 800px)");

  return (
    <div style={{ marginBottom: 50 }}>
      <Flex justifyContent={"space-between"}>
        <MajorSelect onSelect={setMajor} />
        {major && !Loading && !error && (
          <PageIndicator>
            Página {page + 1} de {pageInfo?.total} vagas{" "}
          </PageIndicator>
        )}
      </Flex>
      <Flex justifyContent={"space-around"}>
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
              loading={Loading}
              onJobClick={(code: string) => {
                setShowDetails(true);
                setJobCode(code);
              }}
              selectedJobCode={jobCode}
            />
            <JobDetails
              job={!loading && jobDetails?.data?.job}
              loading={!Loading && jobDetails.loading}
              visible={showDetails || (isWide && !loading)}
            />
            <Backdrop
              visible={showDetails && !isWide}
              onClick={() => setShowDetails(false)}
            />
          </>
        )}
      </Flex>
      {!Loading && !error && pageInfo && (
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
