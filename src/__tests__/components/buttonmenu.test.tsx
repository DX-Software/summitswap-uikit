import React from "react";
import { renderWithTheme } from "../../testHelpers";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import ButtonMenuItem from "../../components/ButtonMenu/ButtonMenuItem";

const handleClick = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <ButtonMenu activeIndex={0} onItemClick={handleClick}>
      <ButtonMenuItem>Item 1</ButtonMenuItem>
      <ButtonMenuItem>Item 2</ButtonMenuItem>
    </ButtonMenu>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsTCUz sc-hKgILt jLyPtw cpSCkZ"
      >
        <div
          class="sc-bdfBwQ hEUMFZ"
        >
          <button
            class="sc-eCssSg gDJcyD"
            scale="md"
          >
            Item 1
          </button>
          <button
            class="sc-eCssSg hEqxGh sc-jSgupP kHCOgv"
            scale="md"
          >
            Item 2
          </button>
        </div>
      </div>
    </DocumentFragment>
  `);
});
