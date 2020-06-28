import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(270px,1fr));
  height: 100%;
  z-index: 100;

  @media (max-width: 576px) {
    grid-template-columns: minmax(270px,1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(270px,1fr));
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, minmax(270px,1fr));
  }
`;
