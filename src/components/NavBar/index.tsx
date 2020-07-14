import React from "react";

import {Button, Hamburguer, Nav, Title, UList, Link, LItem} from "./styles";

interface NavBarProps {
    onClick?: () => void;
}
function NavBar(props: NavBarProps) {
    const {onClick} = props;
    return (
        <Nav>
            <Button onClick={onClick}>
                <Hamburguer className="fas fa-bars" />
            </Button>
            <Title href="/">Estágios e Empregos</Title>
            <UList>
                <LItem>
                    <Link href="#/curso">Vagas por curso</Link>
                </LItem>
                <LItem>
                    <Link href="#/about">Sobre</Link>
                </LItem>
            </UList>
        </Nav>
    );
}

export default NavBar;
