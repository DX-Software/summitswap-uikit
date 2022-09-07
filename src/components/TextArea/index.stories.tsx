import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import TextArea from "./TextArea";

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > textarea + textarea {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/TextArea",
  component: TextArea,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div>
      <Row>
        <TextArea style={{ flex: 1 }} value="Value" />
        <TextArea style={{ flex: 1 }} placeholder="Placeholder..." />
        <TextArea style={{ flex: 1 }} value="Disabled" disabled />
        <TextArea style={{ flex: 1 }} value="Success" isSuccess />
        <TextArea style={{ flex: 1 }} value="Warning" isWarning />
      </Row>
    </div>
  );
};
