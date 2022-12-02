import styled, { DefaultTheme } from "styled-components";
import getColor from "../../util/getColor";
import { styleVariants } from "./theme";
import { TagProps } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getThemeTextColor = ({
  outline,
  variant = "primary",
  theme,
}: ThemedProps) => {
  if (variant === "default" && !outline) {
    return theme.colors.dropdownBackground;
  }
  return outline ? getColor(styleVariants[variant], theme) : "#ffffff";
};

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  background-color: ${({ outline, theme, variant = "primary" }) =>
    outline ? "transparent" : getColor(styleVariants[variant], theme)};
  border: 2px solid
    ${({ variant = "primary", theme }) =>
      getColor(styleVariants[variant], theme)};
  border-radius: 16px;
  color: ${getThemeTextColor};
  display: inline-flex;
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  height: 28px;
  line-height: 1.5;
  padding: 0 8px;
  white-space: nowrap;

  svg {
    fill: ${getThemeTextColor};
  }
`;

export default null;
