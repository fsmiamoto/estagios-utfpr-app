import React from "react";

import { Nav, Title, UList, Link, LItem } from "./styles";

function NavBar() {
  return (
    <Nav>
      <Title href="/">Estágios e Empregos</Title>
      <UList>
        <LItem>
          <Link href="#/curso">Vagas por curso</Link>
        </LItem>
      </UList>
    </Nav>
  );
}

export default NavBar;
