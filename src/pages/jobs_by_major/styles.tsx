import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const PageIndicator = styled.h3`
  margin-right: 20px;
  color: #777;
  font-weight: normal;
  font-size: 0.95rem;
  text-align: end;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
