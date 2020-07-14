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

  @media (max-width: 800px) {
    position: fixed;
    height: 80%;
    width: 95%;
    top: 10vh;
    z-index: 300;
    margin: 0 auto;
  }
`;

export const Company = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 20px;

  & > a {
    text-decoration: none;
    color: #46505a;
    &:hover {
      color: #677685;
      transition: ease-in-out color 0.1s;
    }
  }
`;

export const JobType = styled.h2<{type: string}>`
  font-size: 1rem;
  margin-bottom: 15px;
  color: #fff;
  border-radius: 7px;
  padding: 3px 5px;
  background-color: ${props => props.type === "Estágio" ? "var(--color-internship)" : "var(--color-full-time)"}
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
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
  margin-bottom: 5px;
`;

export const ContactCol = styled.div`
  margin-right: 15px;
`;

export const I = styled.i`
  margin-right: 5px;
    color: var(--color-primary-500);
`;

export const FlexDiv = styled.div`
  display: flex;
    flex-flow: row wrap;
  justify-content: space-between;
  flex: 2;
`;
