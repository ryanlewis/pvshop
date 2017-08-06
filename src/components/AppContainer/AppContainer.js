import React from 'react';
import { Container } from 'rebass';

const AppContainer = props =>
  <Container my={0} mx={[2, 3, 3, 'auto']} px={0}>
    {props.children}
  </Container>;

export default AppContainer;
