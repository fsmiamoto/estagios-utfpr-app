import gql from "graphql-tag";

export const GET_JOBS_BY_MAJOR = gql`
  query Jobs($page: Int!, $major: String!) {
    jobsByMajor(page: $page, major: $major) {
      pageInfo {
        perPage
        total
        currentPage
        lastPage
        hasNextPage
        hasPreviousPage
      }
      nodes {
        company
        date
        jobType
        salary
        description
        code
      }
    }
  }
`;

export const GET_JOB = gql`
  query Jobs($code: String!) {
    job(code: $code) {
      code
      description
      jobType
      date
      majors
      company
      requisites
      workHours
      salary
      benefits
      positions
      contact
      phone
      email
    }
  }
`;

