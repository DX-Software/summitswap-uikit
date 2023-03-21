import React from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { DiscordIcon, FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "../icons";
import { PanelProps, PushedProps } from "../types";
import CashState from "./CashState";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps { }

const Container = styled.div`
  position: absolute;
  bottom: 40px;
  z-index: 3;
  flex: 1.3;
  padding: 35px 10px 0 30px;
  background-color: transparent;
`;

const SettingsEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  margin-bottom: calc(${MENU_ENTRY_HEIGHT}px + 5px);
`;

const SocialEntry = styled.div`
  margin-top: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  > a {
    cursor: pointer;
    width: 20px; height: 20px;
    fill: ${({ theme }) => theme.colors.sidebarColor}
  }
  > a + a {
    margin-left: 5px;
  }
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  kodaPriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  // if (!isPushed) {
  //   return (
  //     <Container>
  //       <IconButton variant="text" onClick={() => pushNav(true)}>
  //         <CogIcon />
  //       </IconButton>
  //     </Container>
  //   );
  // }

  return (
    <Container>
      {/* <SocialEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
        <SocialLinks />
      </SocialEntry> */}
      <SettingsEntry>
        <CashState coinPriceUsd={kodaPriceUsd} token={"KODA"}/>
        {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
        {(currentLang && langs?.length && setLang) ? 
              (<LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />) : null}  
      </SettingsEntry>
      <SocialEntry>
        <a href="https://discord.com/invite/FBgEmJmHuc"><DiscordIcon /></a>
        <a href="https://t.me/kodakingofdogaltschat"><TelegramIcon /></a>
        <a href="https://www.facebook.com/KodaCryptocurrency"><FacebookIcon /></a>
        <a href="https://twitter.com/CoinKoda"><TwitterIcon /></a>
        <a href="https://www.instagram.com/kodacryptocurrency"><InstagramIcon /></a>
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
