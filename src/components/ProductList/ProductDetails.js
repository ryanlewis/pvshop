import React from 'react';
import { Subhead, Text } from 'rebass';
import styled from 'styled-components';

const DetailsContainer = styled.div`min-height: 6em;`;

const Price = styled(Text)`
  display: block;
`;

const ProductDetails = ({ product }) =>
  <DetailsContainer>
    <Subhead my={2}>
      {product.name}
    </Subhead>

    <Price my={2}>
      £ {product.price}
    </Price>
  </DetailsContainer>;

export default ProductDetails;
