import styled from "styled-components";

export const Base = styled.div`
  background: #fff;
  border: 1px solid #ddd;
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
  color: #46505a;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 5px 2px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const JobType = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 3px;
`;

export const Details = styled.h2`
  font-size: 1rem;
  color: #aaa;
  margin: 0px 2px;
  font-weight: normal;
`;

export const Description = styled.p`
  margin-top: 10px;
  line-height: 1.4;
  color: #777;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
`;
