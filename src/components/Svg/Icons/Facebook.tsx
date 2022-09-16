import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path d="M15.36 0H0.64C0.286 0 0 0.286 0 0.64V15.36C0 15.714 0.286 16 0.64 16H15.36C15.714 16 16 15.714 16 15.36V0.64C16 0.286 15.714 0 15.36 0ZM13.512 4.67H12.234C11.232 4.67 11.038 5.146 11.038 5.846V7.388H13.43L13.118 9.802H11.038V16H8.544V9.804H6.458V7.388H8.544V5.608C8.544 3.542 9.806 2.416 11.65 2.416C12.534 2.416 13.292 2.482 13.514 2.512V4.67H13.512Z" />
    </Svg>
  );
};

export default Icon;
