import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 16 13" fill="none" {...props}>
      <path
        d="M7 12.5C7 12.5 6 12.5 6 11.5C6 10.5 7 7.5 11 7.5C15 7.5 16 10.5 16 11.5C16 12.5 15 12.5 15 12.5H7ZM11 6.5C11.7956 6.5 12.5587 6.18393 13.1213 5.62132C13.6839 5.05871 14 4.29565 14 3.5C14 2.70435 13.6839 1.94129 13.1213 1.37868C12.5587 0.816071 11.7956 0.5 11 0.5C10.2044 0.5 9.44129 0.816071 8.87868 1.37868C8.31607 1.94129 8 2.70435 8 3.5C8 4.29565 8.31607 5.05871 8.87868 5.62132C9.44129 6.18393 10.2044 6.5 11 6.5Z"
        fill={theme.colors[color] as string}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.216 12.4999C5.06776 12.1878 4.99382 11.8455 5 11.4999C5 10.1449 5.68 8.74994 6.936 7.77994C6.30909 7.58677 5.65595 7.49231 5 7.49994C1 7.49994 0 10.4999 0 11.4999C0 12.4999 1 12.4999 1 12.4999H5.216Z"
        fill={theme.colors[color] as string}
      />
      <path
        d="M4.5 6.5C5.16304 6.5 5.79893 6.23661 6.26777 5.76777C6.73661 5.29893 7 4.66304 7 4C7 3.33696 6.73661 2.70107 6.26777 2.23223C5.79893 1.76339 5.16304 1.5 4.5 1.5C3.83696 1.5 3.20107 1.76339 2.73223 2.23223C2.26339 2.70107 2 3.33696 2 4C2 4.66304 2.26339 5.29893 2.73223 5.76777C3.20107 6.23661 3.83696 6.5 4.5 6.5Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
