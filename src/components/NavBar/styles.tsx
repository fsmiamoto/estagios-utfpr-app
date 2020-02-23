import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  background-color: #007d9c;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 15px 30px;
  font-size: 1.2rem;
  padding-bottom: 20px;
  width: 100%;
  margin-bottom: 15px;
  flex-shrink: 0;
`;

export const Title = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #eee;
  padding: 2px 5px;
  display: block;
  padding: 5px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

export const UList = styled.ul`
  display: flex;
  margin-left: 20px;
  list-style: none;
`;
export const LItem = styled.li`
  padding: 0 10px;
`;

export const Link = styled.a`
  color: #ddd;
  text-decoration: none;
  margin-bottom: 2px;

  &:hover {
    border-bottom: 2px solid #fff;
    color: #fff;
  }
`;
