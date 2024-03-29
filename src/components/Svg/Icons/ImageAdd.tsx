import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 74 74" {...props}>
      <path d="M27.75 40.0833L37 27.75L46.25 41.625V37H58.5833V15.4167C58.5833 12.0157 55.8175 9.25 52.4166 9.25H12.3333C8.93238 9.25 6.16663 12.0157 6.16663 15.4167V52.4167C6.16663 55.8176 8.93238 58.5833 12.3333 58.5833H37V46.25H15.4166L24.6666 33.9167L27.75 40.0833Z" />
      <path d="M58.5834 43.1667H52.4167V52.4167H43.1667V58.5834H52.4167V67.8334H58.5834V58.5834H67.8334V52.4167H58.5834V43.1667Z" />
    </Svg>
  );
};


export default Icon;
