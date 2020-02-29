import React from "react";

import { Ul, Li, Nav, A, I } from "./styles";

interface SidebarProps {
  visible: boolean;
}

function Sidebar(props: SidebarProps) {
  const { visible } = props;

  return (
    <Nav visible={visible}>
      <Ul>
        <Li>
          <I className="fas fa-angle-right" />
          <A href="#/curso">Vagas por curso</A>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Sidebar;
