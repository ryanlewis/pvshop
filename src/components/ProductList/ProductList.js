import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import ProductListItem from './ProductListItem';

const ConstrainedBox = styled(Box)`
  max-width: 480px;
`;

const ProductList = props => {
  const productData = [
    { name: 'Product 1', price: '4.95' },
    { name: 'Product 2', price: '4.95' },
    { name: 'Product 3', price: '4.95' },
    { name: 'Product 4', price: '4.95' },
    { name: 'Product 5', price: '4.95' },
    { name: 'Product 6', price: '4.95' },
    { name: 'Product 7', price: '4.95' },
    { name: 'Product 8', price: '4.95' }
  ];

  const products = productData.map(product =>
    <ConstrainedBox width={[1, 1 / 2, 1 / 3, 1 / 3]}>
      <ProductListItem m={[1, 2, 3]} mb={[4]} product={product} />
    </ConstrainedBox>
  );
  return (
    <div>
      <Flex wrap mx={[-1, -2, -3]} justify="space-around">
        {products}
      </Flex>
    </div>
  );
};

export default ProductList;
