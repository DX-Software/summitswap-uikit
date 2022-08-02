import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Heading from "../Heading/Heading";
import Select from "./Select";
import { scales } from "./types";
import { SortIcon } from "../Svg";

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > select + select {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const options = [
    {
      label: "Option 1",
      value: "option-1",
    },
    {
      label: "Option 2",
      value: "option-2",
    },
    {
      label: "Option 2",
      value: "option-2",
    },
  ];
  return (
    <div>
      {Object.keys(scales).map((key) => (
        <>
          <Heading mb="16px">{key}</Heading>
          <Row style={{ columnGap: "8px" }}>
            <Select scale={scales[key]} options={options} style={{ flex: 1 }} />
            <Select
              scale={scales[key]}
              options={options}
              style={{ flex: 1 }}
              isSuccess
            />
            <Select
              scale={scales[key]}
              options={options}
              style={{ flex: 1 }}
              isWarning
            />
            <Select
              startIcon={<SortIcon />}
              scale={scales[key]}
              options={options}
              style={{ flex: 1 }}
            />
          </Row>
        </>
      ))}
    </div>
  );
};
