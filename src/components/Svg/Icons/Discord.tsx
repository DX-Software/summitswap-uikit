import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 16 12" fill="none" {...props}>
      <path
        d="M13.545 0.9953C12.525 0.5353 11.4317 0.1953 10.2883 0.00196678C10.2781 1.20546e-05 10.2676 0.00127175 10.2582 0.00557167C10.2487 0.00987158 10.2409 0.016999 10.2357 0.0259668C10.0957 0.271967 9.93965 0.592633 9.83032 0.845967C8.61772 0.664791 7.38492 0.664791 6.17232 0.845967C6.05054 0.565207 5.91322 0.29145 5.76099 0.0259668C5.75583 0.0168886 5.74802 0.00959995 5.73861 0.00507353C5.7292 0.00054711 5.71863 -0.00100188 5.70832 0.000633382C4.56565 0.193967 3.47232 0.533967 2.45165 0.994633C2.44287 0.998316 2.43543 1.0046 2.43032 1.01263C0.355654 4.06263 -0.213013 7.0373 0.0663204 9.97463C0.0670977 9.98183 0.0693308 9.98879 0.0728837 9.99509C0.0764366 10.0014 0.0812351 10.0069 0.0869871 10.0113C1.29792 10.8929 2.64854 11.5645 4.08232 11.998C4.09232 12.001 4.10301 12.001 4.113 11.9979C4.12299 11.9948 4.13181 11.9888 4.13832 11.9806C4.44685 11.568 4.72025 11.1303 4.95565 10.672C4.95892 10.6657 4.9608 10.6588 4.96117 10.6517C4.96155 10.6447 4.9604 10.6376 4.95781 10.6311C4.95521 10.6245 4.95124 10.6185 4.94615 10.6136C4.94107 10.6087 4.93498 10.605 4.92832 10.6026C4.49766 10.4405 4.08038 10.2447 3.68032 10.0173C3.67313 10.0132 3.66707 10.0074 3.66269 10.0004C3.65831 9.99333 3.65574 9.98533 3.65521 9.97707C3.65468 9.96881 3.65621 9.96055 3.65966 9.95302C3.66311 9.9455 3.66838 9.93895 3.67499 9.93397C3.75899 9.87197 3.84299 9.8073 3.92299 9.74263C3.93019 9.73682 3.93886 9.73312 3.94804 9.73194C3.95722 9.73076 3.96655 9.73216 3.97499 9.73597C6.59299 10.912 9.42832 10.912 12.0157 9.73597C12.0241 9.73193 12.0335 9.73035 12.0428 9.73141C12.0522 9.73247 12.061 9.73613 12.0683 9.74197C12.1483 9.8073 12.2317 9.87197 12.3163 9.93397C12.323 9.93885 12.3283 9.94531 12.3319 9.95277C12.3355 9.96023 12.3371 9.96845 12.3367 9.97671C12.3363 9.98496 12.3339 9.99299 12.3296 10.0001C12.3254 10.0072 12.3194 10.0131 12.3123 10.0173C11.9137 10.2466 11.499 10.4406 11.0637 10.602C11.057 10.6044 11.0509 10.6082 11.0458 10.6132C11.0407 10.6182 11.0367 10.6242 11.0341 10.6308C11.0316 10.6374 11.0304 10.6445 11.0308 10.6516C11.0312 10.6587 11.033 10.6657 11.0363 10.672C11.2763 11.13 11.551 11.566 11.853 11.98C11.8593 11.9885 11.868 11.9948 11.878 11.9982C11.8881 12.0015 11.8989 12.0017 11.909 11.9986C13.3452 11.5664 14.6981 10.8945 15.9103 10.0113C15.9162 10.0072 15.9212 10.0018 15.9249 9.9956C15.9286 9.9894 15.9309 9.98247 15.9317 9.9753C16.265 6.5793 15.373 3.62863 13.5657 1.01397C13.5612 1.00547 13.5539 0.998846 13.545 0.9953ZM5.34699 8.18597C4.55899 8.18597 3.90899 7.4733 3.90899 6.5993C3.90899 5.72463 4.54632 5.01263 5.34699 5.01263C6.15365 5.01263 6.79765 5.73063 6.78499 6.5993C6.78499 7.47397 6.14765 8.18597 5.34699 8.18597V8.18597ZM10.6637 8.18597C9.87499 8.18597 9.22565 7.4733 9.22565 6.5993C9.22565 5.72463 9.86232 5.01263 10.6637 5.01263C11.4703 5.01263 12.1143 5.73063 12.1017 6.5993C12.1017 7.47397 11.471 8.18597 10.6637 8.18597V8.18597Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
