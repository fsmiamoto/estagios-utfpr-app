import React from "react";

import {Ul, Li, Nav, A, I} from "./styles";

interface SidebarProps {
    visible: boolean;
    onLinkClick?: () => void;
}

function Sidebar(props: SidebarProps) {
    const {visible, onLinkClick} = props;

    return (
        <Nav visible={visible}>
            <Ul>
                <Li>
                    <I className="fas fa-angle-right" />
                    <A href="#/" onClick={onLinkClick}>
                        Home
          </A>
                </Li>
                <Li>
                    <I className="fas fa-angle-right" />
                    <A href="#/curso" onClick={onLinkClick}>
                        Vagas por curso
          </A>
                </Li>
                <Li>
                    <I className="fas fa-angle-right" />
                    <A href="#/about" onClick={onLinkClick}>Sobre</A>
                </Li>
            </Ul>
        </Nav>
    );
}

export default Sidebar;
