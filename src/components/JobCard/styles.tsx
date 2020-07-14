import styled from "styled-components";

export const Base = styled.div<{selected: boolean}>`
  background: #fff;
  border: 1px solid ${props => props.selected ? "var(--color-gray-800)" : "var(--color-gray-400)"};
  border-radius: 10px;
  padding: 15px 20px;
  flex: 1 0 350px;
  margin: 10px;
  height: 280px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.15);
    transition: ease-in-out box-shadow 0.1s;
  }
`;

export const Company = styled.h1`
  color: var(--color-gray-800);
  font-size: 1.2rem;
  font-weight: bolder;
  margin: 5px 2px;
  padding-top: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const JobType = styled.h2<{type: string}>`
  font-size: 0.9rem;
  margin-bottom: 3px;
  color: #fff;
  border-radius: 7px;
  padding: 3px 5px;
  background-color: ${props => props.type === "Estágio" ? "var(--color-internship)" : "var(--color-full-time)"}
`;

export const Details = styled.h2`
  font-size: 0.9rem;
  color: var(--color-gray-600);
  margin: 0px 2px;
  font-weight: normal;

  & > i {
      margin-right: 3px;
      color: var(--color-primary-300);
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  line-height: 1.4;
  color: var(--color-gray-600);
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
`;
