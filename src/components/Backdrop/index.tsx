import React from "react";

import { Base } from "./styles";

interface BackdropProps {
  onClick: () => void;
  visible: boolean;
}

function Backdrop(props: BackdropProps) {
  const { visible } = props;

  if (!visible) {
    return null;
  }

  return <Base onClick={props.onClick} />;
}

export default Backdrop;
