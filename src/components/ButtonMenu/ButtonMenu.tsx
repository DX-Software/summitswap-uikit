import React, { cloneElement, Children, ReactElement } from "react";
import StyledButtonMenu from "./StyledButtonMenu";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";
import ButtonMenuWrapper from "./ButtonMenuWrapper";

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.AWESOME,
  onItemClick,
  children,
}) => {
  return (
    <ButtonMenuWrapper>
      <StyledButtonMenu variant={variant}>
        {Children.map(children, (child: ReactElement, index) => {
          return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? () => onItemClick(index) : undefined,
            scale,
            variant,
          });
        })}
      </StyledButtonMenu>
    </ButtonMenuWrapper>
  );
};

export default ButtonMenu;
