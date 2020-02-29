import styled, { css } from "styled-components";

interface NavProps {
  visible: boolean;
}

export const Nav = styled.nav`
  height: 100%;
  width: 60%;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.25s ease-out;

  ${(props: NavProps) =>
    props.visible &&
    css`
      transform: translateX(0);
    `}
`;

export const A = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  color: #465421;
`;

export const Ul = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Li = styled.li`
  margin: 10px 20px;
  color: #465421;
`;

export const I = styled.i`
  margin-right: 10px;
`;
