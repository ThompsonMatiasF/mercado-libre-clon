import React, {FC} from 'react';
import { Button } from 'react-bootstrap';
import './ProductDetail.scss';
import { DetailItem } from 'app/types';

interface ProductDetailProps {
  data: DetailItem
}

export const ProductDetail: FC<ProductDetailProps> = ({ data }) => (
  <div className="detail bg-white">

    <div>
      <div className="d-flex justify-content-between flex-wrap-reverse">
        <div className="product">
          <img src={data.picture} alt="product image" className="" />

          <div>
            <span className="h3">Descripcion del producto</span>
            <p style={{ width: '100%' }}>{ data.description }</p>
          </div>
        </div>
        <div className="buy mb-5">
          <span className="d-block">{`${data.condition} - ${data.sold_quantity} vendidos`}</span>
          <span className="d-block font-weight-bold">{ data.title }</span>
          <span className="d-block">
            $
            {' '}
            {new Intl.NumberFormat('es-AR').format(data.price.amount)}
          </span>
          <Button variant="primary" block>Comprar</Button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetail;
