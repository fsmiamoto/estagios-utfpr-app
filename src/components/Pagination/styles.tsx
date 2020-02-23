import styled from "styled-components";

export const Li = styled.li`
  list-style: none;
  padding: 2px;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 10px;
  flex: 0 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #777;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const I = styled.i`
  margin: 10px;
  padding-top: 2px;
`;
