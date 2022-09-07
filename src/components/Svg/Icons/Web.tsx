import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M9.90536 8.33325C9.9587 7.89325 9.9987 7.45325 9.9987 6.99992C9.9987 6.54659 9.9587 6.10659 9.90536 5.66659H12.1587C12.2654 6.09325 12.332 6.53992 12.332 6.99992C12.332 7.45992 12.2654 7.90659 12.1587 8.33325M8.72536 12.0399C9.12537 11.2999 9.43203 10.4999 9.64536 9.66659H11.612C10.9661 10.7788 9.94144 11.6213 8.72536 12.0399ZM8.5587 8.33325H5.4387C5.37203 7.89325 5.33203 7.45325 5.33203 6.99992C5.33203 6.54659 5.37203 6.09992 5.4387 5.66659H8.5587C8.6187 6.09992 8.66537 6.54659 8.66537 6.99992C8.66537 7.45325 8.6187 7.89325 8.5587 8.33325ZM6.9987 12.3066C6.44536 11.5066 5.9987 10.6199 5.72536 9.66659H8.27203C7.9987 10.6199 7.55203 11.5066 6.9987 12.3066ZM4.33203 4.33325H2.38536C3.0246 3.21806 4.04856 2.37424 5.26536 1.95992C4.86536 2.69992 4.56536 3.49992 4.33203 4.33325ZM2.38536 9.66659H4.33203C4.56536 10.4999 4.86536 11.2999 5.26536 12.0399C4.05111 11.621 3.0286 10.7784 2.38536 9.66659ZM1.8387 8.33325C1.73203 7.90659 1.66536 7.45992 1.66536 6.99992C1.66536 6.53992 1.73203 6.09325 1.8387 5.66659H4.09203C4.0387 6.10659 3.9987 6.54659 3.9987 6.99992C3.9987 7.45325 4.0387 7.89325 4.09203 8.33325M6.9987 1.68659C7.55203 2.48659 7.9987 3.37992 8.27203 4.33325H5.72536C5.9987 3.37992 6.44536 2.48659 6.9987 1.68659ZM11.612 4.33325H9.64536C9.43671 3.50756 9.12775 2.71052 8.72536 1.95992C9.95203 2.37992 10.972 3.22659 11.612 4.33325ZM6.9987 0.333252C3.31203 0.333252 0.332031 3.33325 0.332031 6.99992C0.332031 8.76803 1.03441 10.4637 2.28465 11.714C2.90371 12.333 3.63864 12.8241 4.44747 13.1591C5.25631 13.4941 6.12322 13.6666 6.9987 13.6666C8.76681 13.6666 10.4625 12.9642 11.7127 11.714C12.963 10.4637 13.6654 8.76803 13.6654 6.99992C13.6654 6.12444 13.4929 5.25753 13.1579 4.4487C12.8229 3.63986 12.3318 2.90493 11.7127 2.28587C11.0937 1.66682 10.3588 1.17575 9.54992 0.840722C8.74108 0.50569 7.87418 0.333252 6.9987 0.333252Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
