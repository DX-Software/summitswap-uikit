import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 25" {...props}>
      <path d="M19.0266 8.66659H4.97331C4.7965 8.66659 4.62693 8.59635 4.5019 8.47132C4.37688 8.3463 4.30664 8.17673 4.30664 7.99992C4.30664 7.82311 4.37688 7.65354 4.5019 7.52851C4.62693 7.40349 4.7965 7.33325 4.97331 7.33325H19.0266C19.2035 7.33325 19.373 7.40349 19.498 7.52851C19.6231 7.65354 19.6933 7.82311 19.6933 7.99992C19.6933 8.17673 19.6231 8.3463 19.498 8.47132C19.373 8.59635 19.2035 8.66659 19.0266 8.66659Z" />
      <path d="M14.1133 12.6666H4.97331C4.7965 12.6666 4.62693 12.5963 4.5019 12.4713C4.37688 12.3463 4.30664 12.1767 4.30664 11.9999C4.30664 11.8231 4.37688 11.6535 4.5019 11.5285C4.62693 11.4035 4.7965 11.3333 4.97331 11.3333H14.1133C14.2901 11.3333 14.4597 11.4035 14.5847 11.5285C14.7097 11.6535 14.78 11.8231 14.78 11.9999C14.78 12.1767 14.7097 12.3463 14.5847 12.4713C14.4597 12.5963 14.2901 12.6666 14.1133 12.6666Z" />
      <path d="M9.15997 16.6666H4.97331C4.7965 16.6666 4.62693 16.5963 4.5019 16.4713C4.37688 16.3463 4.30664 16.1767 4.30664 15.9999C4.30664 15.8231 4.37688 15.6535 4.5019 15.5285C4.62693 15.4035 4.7965 15.3333 4.97331 15.3333H9.15997C9.33678 15.3333 9.50635 15.4035 9.63138 15.5285C9.7564 15.6535 9.82664 15.8231 9.82664 15.9999C9.82664 16.1767 9.7564 16.3463 9.63138 16.4713C9.50635 16.5963 9.33678 16.6666 9.15997 16.6666Z" />
    </Svg>
  );
};

export default Icon;
