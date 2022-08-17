import React, { useState } from "react";
import Text from "../Text/Text";
import TabPresale from "./TabPresale";

export default {
  title: "Components/TabPresale",
  component: TabPresale,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <Text p="32px">
      <TabPresale mb="32px" activeIndex={index} onItemClick={handleClick}>
        <Text>Label 1</Text>
        <Text>Label 2</Text>
        <Text>Label 3</Text>
      </TabPresale>
    </Text>
  );
};
