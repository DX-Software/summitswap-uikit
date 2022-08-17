/* eslint-disable react/no-array-index-key */
import React, { Children, isValidElement } from "react";
import styled from "styled-components";
import { space } from "styled-system";
import Box from "../Box/Box";
import { TabPresaleProps } from "./types";

const StyledTabPresale = styled(Box)`
  align-items: center;
  display: flex;
  list-style-type: none;
  ${space};
`;

const ChildTab = styled.li<{ isActive: boolean }>`
  min-width: max-content;
  cursor: pointer;
  margin-left: 12px;
  margin-right: 12px;
  padding-bottom: 5px;
  border-bottom: 5px solid
    ${({ theme, isActive }) =>
      isActive ? ` ${theme.colors.primary}` : "transparent"};
  > div {
    color: ${({ theme, isActive }) => isActive && theme.colors.primary};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const TabPresale: React.FC<TabPresaleProps> = ({
  activeIndex = 0,
  onItemClick,
  children,
}) => {
  const validItems = Children.toArray(children).filter((child) =>
    isValidElement(child)
  );
  console.log(activeIndex, "index");

  return (
    <StyledTabPresale>
      {validItems.map((item, index) => (
        <ChildTab
          onClick={onItemClick ? () => onItemClick(index) : undefined}
          isActive={activeIndex === index ? true : false}
          key={`child-${index}`}
        >
          {item}
        </ChildTab>
      ))}
    </StyledTabPresale>
  );
};

export default TabPresale;
