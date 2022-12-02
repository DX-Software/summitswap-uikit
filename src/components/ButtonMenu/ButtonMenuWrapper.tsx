import styled from "styled-components";
import { Box } from "../Box";

const ButtonMenuWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  > div {
    @media (max-width: 600px) {
      margin: 4px, 4px;
      padding: 4px;
      overflow: auto;
      white-space: nowrap;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export default ButtonMenuWrapper;
