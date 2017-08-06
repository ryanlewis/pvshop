import React from 'react';
import { Media, Image } from 'rebass';
import UnstyledAnchor from '../UnstyledAnchor';
import ProductDetails from './ProductDetails';

const ProductListItem = ({ product, ...props }) => {
  return (
    <Media {...props}>
      <UnstyledAnchor href="#">
        <Image
          ratio={1}
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1024&q=20"
        />

        <ProductDetails product={product} />
      </UnstyledAnchor>
    </Media>
  );
};

export default ProductListItem;
