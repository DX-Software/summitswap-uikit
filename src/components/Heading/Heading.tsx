import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSizeWeb: "20px",
    fontSizeMobile: "18px",
  },
  [sizes.LG]: {
    fontSizeWeb: "24px",
    fontSizeMobile: "20px",
  },
  [sizes.XL]: {
    fontSizeWeb: "40px",
    fontSizeMobile: "32px",
  },
  [sizes.XXL]: {
    fontSizeWeb: "64px",
    fontSizeMobile: "48px",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ size }) => style[size || sizes.MD].fontSizeMobile};
  font-weight: 700;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ size }) => style[size || sizes.MD].fontSizeWeb};
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
