import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  background-color: var(--color-primary-500);
  align-items: center;
  justify-content: space-between;
  height: 45px;
  padding: 15px 30px;
  font-size: 1.2rem;
  padding-bottom: 20px;
  width: 100%;
  margin-bottom: 15px;
  flex-shrink: 0;
  box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.35);

  @media (max-width: 700px) {
    justify-content: start;
    padding: 15px 15px;
  }
`;

export const Title = styled.a`
  font-size: 1.3rem;
  font-weight: bold;
    color: var(--color-gray-200);
  padding: 2px 5px;
  display: block;
  padding: 5px;
  text-decoration: none;

  &:hover {
    color: var(--color-gray-500);
    transition: ease-in-out color 0.3s;
  }
`;

export const UList = styled.ul`
  display: flex;
  margin-left: 30px;
  list-style: none;
  flex: 1;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const LItem = styled.li`
  padding: 0 10px;
`;

export const Link = styled.a`
  color: var(--color-gray-100);
  text-decoration: none;
  margin-bottom: 2px;
    font-size: 1.1rem;
 
  &:hover {
    color: var(--color-gray-500);
    transition: ease-in-out color 0.15s;
  }
`;

export const Hamburguer = styled.i``;

export const Button = styled.button`
  color: white;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  text-align: center;
  display: none;

  @media (max-width: 700px) {
    display: block;
    margin-right: 10px;
  }
`;
