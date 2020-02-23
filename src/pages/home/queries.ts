import gql from "graphql-tag";

export const GET_JOBS = gql`
  query Jobs($page: Int!) {
    jobs(page: $page) {
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

