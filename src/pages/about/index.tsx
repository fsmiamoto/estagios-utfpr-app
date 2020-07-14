import React from "react";

import {P, Container} from "./styles"

function About() {
    return (
        <Container>
            <P>
                Vagas retiradas do <a target="_blank" rel="noopener noreferrer" href="http://estagio.utfpr.edu.br">Portal de Estágios da UTFPR (Câmpus Curitiba)</a>
            </P>
            <P> Desenvolvido apenas para fins não comerciais.  </P>
            <P> Em caso de qualquer problema, por favor contatar <a href="mailto:fsmiamoto@gmail.com">fsmiamoto@gmail.com</a> </P>
        </Container>
    );
}

export default About;
