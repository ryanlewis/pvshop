import React from 'react';
import { Flex, Box } from 'rebass';
import Logo from '../Logo';
import Menu from '../Menu';

const Header = props =>
  <Flex mt={[3, 4]} justify="space-between" align="flex-end" mb={4} wrap>
    <Box w={[1, 360]} pr={[2, 0]}>
      <Logo />
    </Box>
    <Box w={['auto']} mx={['auto', 0]} mt={[3, 0]}>
      <Menu />
    </Box>
  </Flex>;

export default Header;
