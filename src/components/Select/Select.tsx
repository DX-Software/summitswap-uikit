import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { Box, BoxProps } from "../Box";
import { ChevronDownIcon } from "../Svg";
import { SelectProps, scales, Option } from "./types";

interface StyledSelectProps
  extends SelectProps {
  theme: DefaultTheme;
}

interface Props extends BoxProps, SelectProps {
  options: Option[];
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

const Select = styled.select`
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

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  width: ${getIconSize};
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

function SelectComponent({
  scale,
  isSuccess,
  isWarning,
  options,
  onChange,
  ...props
}: Props) {
  return (
    <SelectWrapper {...props}>
      <Select
        scale={scale}
        isSuccess={isSuccess}
        isWarning={isWarning}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
      <StyledChevronDownIcon scale={scale} />
    </SelectWrapper>
  );
}

export default SelectComponent;

SelectComponent.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
};
