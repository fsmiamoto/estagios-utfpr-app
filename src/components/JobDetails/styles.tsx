import styled from "styled-components";

export const Base = styled.div`
  background: #fff;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px;
  color: #777;
  height: 100%;
  max-height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  top: 25px;
  flex: 0 0 600px;
  overflow-y: auto;
`;

export const Company = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;

  & > a {
    text-decoration: none;
    color: #46505a;
    &:hover {
      color: #677685;
      transition: ease-in-out color 0.1s;
    }
  }
`;

export const JobType = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  color: #777;
  text-align: justify;
  font-size: 16px;
`;

export const Header = styled.h2`
  font-size: 1.2rem;
  color: #46505a;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 5px;
`;

export const ContactCol = styled.div`
  margin-right: 15px;
`;

export const I = styled.i`
  margin-right: 5px;
`;
