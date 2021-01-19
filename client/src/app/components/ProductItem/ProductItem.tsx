import React, { FC } from 'react';
import { history } from 'app/router';
import './ProductItem.scss';
import { Item } from 'app/types';

interface ProductItemProps {
  data: Item
}

export const ProductItem: FC<ProductItemProps> = ({ data }) => (
  <li className="d-flex item" onClick={() => history.push(`/items/${data.id}`)}>
    <img src={data.picture} alt="product image" />
    <div className="flex-grow-1">
      <div className="d-flex justify-content-between align-items-center">
        <span className="d-flex align-items-center price">
          $
          {' '}
          {new Intl.NumberFormat('es-AR').format(data.price.amount)}
          {data.free_shipping
          && (
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/shipping-min.png`}
            alt="free shipping icon"
            className="ml-2"
          />
          )}
        </span>
        <span className=" location">{ data.address }</span>
      </div>
      <p>{data.title}</p>
    </div>
  </li>
);

export default React.memo(ProductItem);
