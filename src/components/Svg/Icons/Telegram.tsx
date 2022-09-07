import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 14 12" fill="none" {...props}>
      <path
        d="M12.779 0.47788L0.959009 5.03588C0.152342 5.35988 0.157009 5.80988 0.811009 6.01055L3.84568 6.95721L10.867 2.52721C11.199 2.32521 11.5023 2.43388 11.253 2.65521L5.56434 7.78921H5.56301L5.56434 7.78988L5.35501 10.9179C5.66168 10.9179 5.79701 10.7772 5.96901 10.6112L7.44301 9.17788L10.509 11.4425C11.0743 11.7539 11.4803 11.5939 11.621 10.9192L13.6337 1.43388C13.8397 0.60788 13.3183 0.23388 12.779 0.47788V0.47788Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
