import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import NavBar from "../../components/NavBar";
import JobDetails from "../../components/JobDetails";
import JobCards from "../../components/JobCards";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import Backdrop from "../../components/Backdrop";

import useMedia from "../../hooks/useMedia";

import { Job } from "../../interfaces/job";
import { PageInfo } from "../../interfaces/pageInfo";

import { Container, PageIndicator } from "./styles";
import { GET_JOBS, GET_JOB } from "./queries";

function Home() {
  const [jobs, setJobs] = useState<Job[]>();
  const [jobCode, setJobCode] = useState();
  const [page, setPage] = useState(0);
  const [pageInfo, setPaginationInfo] = useState<PageInfo>();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const { loading, error, data } = useQuery(GET_JOBS, { variables: { page } });
  const jobDetails = useQuery(GET_JOB, {
    variables: { code: jobCode },
    skip: !jobCode
  });

  useEffect(() => {
    if (data && !error) {
      setPaginationInfo(data.jobs.pageInfo);
      setJobs(data.jobs.nodes);
      if (!data.jobs.nodes.len) {
        setJobCode(data.jobs.nodes[0].code);
      }
    }
  }, [data, error]);

  const Loading = loading || !jobDetails.data;

  const isWide = useMedia("(min-width: 769px)");

  const showJobDetailsAsModal = showDetails && !isWide;

  return (
    <div
      style={{
        marginBottom: 50,
        position: showJobDetailsAsModal ? "fixed" : undefined
      }}
    >
      <NavBar onClick={() => setDrawerOpen(true)} />
      <Sidebar visible={drawerOpen} />
      <Backdrop visible={drawerOpen} onClick={() => setDrawerOpen(false)} />
      {!Loading && !error && (
        <PageIndicator>
          Página {page + 1} de {pageInfo?.total} vagas{" "}
        </PageIndicator>
      )}
      {error ? (
        <p>Oops algo deu errado :(</p>
      ) : (
        <Container>
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
        </Container>
      )}
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

export default Home;
