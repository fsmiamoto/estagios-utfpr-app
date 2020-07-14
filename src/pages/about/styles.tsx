import styled from "styled-components";

export const Container = styled.div`
 margin: auto;
 max-width: 50%;

 @media (max-width: 700px) {
   max-width:100%;
 }
`
export const P = styled.p`
    font-size: 1.1rem;
    color: var(--color-gray-800);
    margin: 20px;
    & > a {
      text-decoration: underline;
      color: var(--color-gray-800);
      &:hover {
        color: var(--color-gray-600);
        transition: ease-in-out color 0.1s;
      }
    }
`
