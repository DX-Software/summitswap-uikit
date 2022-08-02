import React, { ReactNode, isValidElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { Box, BoxProps } from "../Box";
import { ChevronDownIcon } from "../Svg";
import { SelectProps, scales, Option, Scales } from "./types";

interface StyledSelectProps extends SelectProps {
  theme: DefaultTheme;
}

interface Props extends BoxProps, SelectProps {
  options: Option[];
  startIcon?: ReactNode;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({
  isSuccess = false,
  isWarning = false,
  theme,
}: StyledSelectProps) => {
  if (isWarning) {
    return theme.shadows.warning;
  }

  if (isSuccess) {
    return theme.shadows.success;
  }

  return theme.shadows.inset;
};

const getHeight = ({ scale = scales.MD }: StyledSelectProps) => {
  switch (scale) {
    case scales.SM:
      return "32px";
    case scales.LG:
      return "48px";
    case scales.MD:
    default:
      return "40px";
  }
};

const getIconSize = ({ scale = scales.MD }: StyledSelectProps) => {
  switch (scale) {
    case scales.SM:
      return "24px";
    case scales.LG:
      return "36px";
    case scales.MD:
    default:
      return "30px";
  }
};

const SelectWrapper = styled(Box)`
  position: relative;
`;

const Select = styled.select<{
  scale?: Scales;
  isSuccess?: boolean;
  isWarning?: boolean;
  startIcon?: ReactNode;
}>`
  background-color: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 16px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 16px;
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  padding-right: 40px;
  padding-left: ${({ startIcon }) => (startIcon && "44px")};

  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledChevronDownIcon = styled(ChevronDownIcon)<{ scale: Scales }>`
  width: ${getIconSize};
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const StartIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const getStartIcon = (startIcon: ReactNode) => {
  const isValid = isValidElement(startIcon);

  if (isValid) {
    return (
      <StartIconWrapper>
        {startIcon}  
      </StartIconWrapper>
    )
  }
  return null
}

function SelectComponent({
  scale,
  isSuccess,
  isWarning,
  options,
  onChange,
  startIcon,
  ...props
}: Props) {
  return (
    <SelectWrapper {...props}>
      {startIcon && getStartIcon(startIcon)}
      <Select scale={scale} isSuccess={isSuccess} isWarning={isWarning} startIcon={startIcon}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
      <StyledChevronDownIcon scale={scale || scales.MD} />
    </SelectWrapper>
  );
}

export default SelectComponent;

SelectComponent.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
  startIcon: null,
};
