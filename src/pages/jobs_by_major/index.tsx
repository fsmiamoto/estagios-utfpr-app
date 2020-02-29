import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import NavBar from "../../components/NavBar";
import JobDetails from "../../components/JobDetails";
import JobCards from "../../components/JobCards";
import Pagination from "../../components/Pagination";
import MajorSelect from "../../components/MajorSelect";
import Sidebar from "../../components/Sidebar";
import Backdrop from "../../components/Backdrop";

import { Job } from "../../interfaces/job";
import { PageInfo } from "../../interfaces/pageInfo";

import { Container, Flex } from "./styles";
import { GET_JOBS_BY_MAJOR, GET_JOB } from "./queries";
import { PageIndicator } from "../home/styles";
import useMedia from "../../hooks/useMedia";

function JobsByMajor() {
  const [jobs, setJobs] = useState<Job[]>();
  const [jobCode, setJobCode] = useState();
  const [page, setPage] = useState(0);
  const [major, setMajor] = useState();
  const [pageInfo, setPaginationInfo] = useState<PageInfo>();
  const [drawerOpen, setDrawerOpen] = useState(false);
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

  const Loading = major && (loading || !jobDetails.data);

  const isWide = useMedia("(min-width: 769px)");

  return (
    <div style={{ marginBottom: 50 }}>
      <NavBar onClick={() => setDrawerOpen(true)} />
      <Sidebar visible={drawerOpen} />
      <Backdrop visible={drawerOpen} onClick={() => setDrawerOpen(false)} />
      <Flex>
        <MajorSelect onSelect={setMajor} />
        {major && !Loading && !error && (
          <PageIndicator>
            Página {page + 1} de {pageInfo?.total} vagas{" "}
          </PageIndicator>
        )}
      </Flex>
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
              visible={showDetails || isWide}
            />
            <Backdrop
              visible={showDetails && !isWide}
              onClick={() => setShowDetails(false)}
            />
          </>
        )}
      </Container>
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
