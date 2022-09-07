import styled, { DefaultTheme } from "styled-components";
import { TextAreaProps } from "./types";

interface StyledTextAreaProps extends TextAreaProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({
  isSuccess = false,
  isWarning = false,
  theme,
}: StyledTextAreaProps) => {
  if (isWarning) {
    return theme.shadows.warning;
  }

  if (isSuccess) {
    return theme.shadows.success;
  }

  return theme.shadows.inset;
};

const TextArea = styled.textarea<TextAreaProps>`
  background-color: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 16px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 16px;
  height: 95px;
  outline: 0;
  padding: 6px 16px;
  width: 100%;
  
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

TextArea.defaultProps = {
  isSuccess: false,
  isWarning: false,
};

export default TextArea;
