import styled, { css } from "styled-components";

interface FlexProps {
  justifyContent: string;
}

export default styled.div`
  display: flex;
  z-index: 100;
  ${(props: FlexProps) => css`
    justify-content: ${props.justifyContent};
  `}
`;
