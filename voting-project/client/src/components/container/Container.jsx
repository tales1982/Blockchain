import React from "react";
import {
  AsideStyles,
  MainStyles,
  FooterStyles,
  ContainerStyles as ContainerStyle,
  HeaderStyles,
  ContentWrapper,
} from "./containerStyles"; // Importe o Container corretamente

const Container = () => {
  return (
    <ContainerStyle>
      <ContentWrapper>
        <AsideStyles>
          <h1>Aside</h1>
        </AsideStyles>
        <MainStyles>
          <HeaderStyles>
            <h1>Header</h1>
          </HeaderStyles>
          <h1>Section</h1>
        </MainStyles>
      </ContentWrapper>
      <FooterStyles>
        <h1>Footer</h1>
      </FooterStyles>
    </ContainerStyle>
  );
};

export default Container;
