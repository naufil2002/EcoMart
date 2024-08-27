import React from 'react';
import './Popular.css';
import data_product from '../Assests/data';
import { Item } from '../Item/Item';
import { Container, Row } from 'react-bootstrap';

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <Container>
          <Row>
            {data_product.map((item, i) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
          </Row>
        </Container>
    </div>
  );
};
