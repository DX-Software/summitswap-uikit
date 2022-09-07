import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 52 52" fill="none" {...props}>
      <path
        d="M9.65055 5.99725C19.7979 -2.3185 34.7941 -1.73984 44.2672 7.73325C54.3551 17.8212 54.3551 34.1788 44.2672 44.2667C34.1793 54.3547 17.8216 54.3547 7.73371 44.2667C4.63793 41.1752 2.37866 37.3475 1.16807 33.1432C-0.0425227 28.9389 -0.164716 24.4959 0.812963 20.2314L1.01188 19.4228L6.00805 20.7403C4.76945 25.4478 5.23226 30.4415 7.3149 34.8412C9.39754 39.2409 12.9663 42.7642 17.3924 44.7903C21.8184 46.8164 26.8175 47.2152 31.5088 45.9164C36.2 44.6176 40.2823 41.7045 43.0361 37.6907C45.7899 33.6768 47.0385 28.8197 46.5618 23.9753C46.0852 19.131 43.9139 14.6104 40.4306 11.2102C36.9473 7.80995 32.3756 5.74838 27.5212 5.38878C22.6668 5.02918 17.8412 6.39464 13.895 9.2445L13.324 9.67333L15.9513 12.3006L4.0783 15.0389L6.81663 3.16591L9.64796 5.99725H9.65055ZM28.5838 10.5V15.6667H35.0421V20.8333H20.8338C20.511 20.8327 20.1997 20.953 19.9612 21.1705C19.7227 21.3879 19.5742 21.6868 19.545 22.0083C19.5159 22.3297 19.6081 22.6505 19.8036 22.9073C19.9991 23.1642 20.2837 23.3385 20.6013 23.396L20.8338 23.4167H31.1671C32.88 23.4167 34.5227 24.0971 35.7339 25.3083C36.945 26.5194 37.6255 28.1621 37.6255 29.875C37.6255 31.5879 36.945 33.2306 35.7339 34.4417C34.5227 35.6529 32.88 36.3333 31.1671 36.3333H28.5838V41.5H23.4171V36.3333H16.9588V31.1667H31.1671C31.4899 31.1673 31.8012 31.047 32.0397 30.8295C32.2783 30.6121 32.4267 30.3132 32.4559 29.9917C32.4851 29.6702 32.3928 29.3495 32.1973 29.0927C32.0018 28.8358 31.7172 28.6615 31.3996 28.604L31.1671 28.5833H20.8338C19.1209 28.5833 17.4782 27.9029 16.2671 26.6917C15.0559 25.4806 14.3755 23.8379 14.3755 22.125C14.3755 20.4121 15.0559 18.7694 16.2671 17.5583C17.4782 16.3471 19.1209 15.6667 20.8338 15.6667H23.4171V10.5H28.5838Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
