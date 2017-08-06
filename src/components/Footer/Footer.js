import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import AppContainer from '../AppContainer';

const FooterContainer = styled.div`
  ${space} color: white;
  background-color: black;
  width: 100%;
`;

const Footer = props => {
  return (
    <FooterContainer m={0} mt={4} py={4}>
      <AppContainer>The footer</AppContainer>
    </FooterContainer>
  );
};

export default Footer;
